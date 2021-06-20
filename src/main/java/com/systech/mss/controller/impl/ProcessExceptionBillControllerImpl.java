package com.systech.mss.controller.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.systech.mss.controller.ProcessExceptionBillController;
import com.systech.mss.controller.vm.ErrorVM;
import com.systech.mss.controller.vm.SaveBillVm;
import com.systech.mss.controller.vm.SuccessVM;
import com.systech.mss.domain.Config;
import com.systech.mss.domain.User;
import com.systech.mss.domain.common.Clients;
import com.systech.mss.repository.ConfigRepository;
import com.systech.mss.service.ActivityTrailService;
import com.systech.mss.service.FundMasterClient;
import com.systech.mss.service.UserService;
import com.systech.mss.service.dto.ContributionBillingBatchDto;
import com.systech.mss.service.dto.ContributionBillingDTO;
import com.systech.mss.service.dto.MessageModelDTO;
import org.apache.commons.io.IOUtils;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.jboss.resteasy.plugins.providers.multipart.InputPart;
import org.jboss.resteasy.plugins.providers.multipart.MultipartFormDataInput;
import org.json.JSONArray;
import org.json.JSONObject;
import org.json.simple.parser.ParseException;
import org.slf4j.Logger;

import javax.inject.Inject;
import javax.ws.rs.core.MultivaluedMap;
import javax.ws.rs.core.Response;
import java.io.*;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ProcessExceptionBillControllerImpl implements ProcessExceptionBillController {
    private final String UPLOADED_FILE_PATH = System.getProperty("user.dir") + File.separator + "uploads" + File.separator;
    @Inject
    Logger log;

    @Inject
    FundMasterClient fundMasterClient;

    @Inject
    ConfigRepository configRepository;

    @Inject
    ActivityTrailService activityTrailService;

    @Inject
    UserService userService;

    Map<String, Object> validBillImports = new HashMap<>();
    Map<String, Object> invalidBillImports = new HashMap<>();

    List<ContributionBillingDTO> validBills = new ArrayList<>();
    List<ContributionBillingDTO> billsException = new ArrayList<>();


    @Override
    public Response uploadFile(long mssuserid, MultipartFormDataInput input) throws ParseException {
        activityTrailService.logActivityTrail(mssuserid, "Uploaded a Bill Exception");
        String fileName = "";
        Map<String, Object> json = null;

        Map<String, List<InputPart>> uploadForm = input.getFormDataMap();
        List<InputPart> inputParts = uploadForm.get("formFile");


        for (InputPart inputPart : inputParts) {

            try {

                MultivaluedMap<String, String> header = inputPart.getHeaders();
                fileName = getFileName(header);

                //convert the uploaded file to inputstream
                InputStream contentStream = inputPart.getBody(InputStream.class, null);

                byte[] bytes = IOUtils.toByteArray(contentStream);

                //constructs upload file path
                fileName = UPLOADED_FILE_PATH + fileName;

                File file = writeFile(bytes, fileName);
                //Create an object of FileInputStream class to read excel file

                FileInputStream inputStream = new FileInputStream(file);

                Workbook memberWorkBook = null;

                //Find the file extension by splitting file name in substring  and getting only extension name

                String fileExtensionName = fileName.substring(fileName.indexOf("."));

                //Check condition if the file is xlsx file

                if (fileExtensionName.equals(".xlsx")) {

                    //If it is xlsx file then create object of XSSFWorkbook class

                    memberWorkBook = new XSSFWorkbook(inputStream);

                }

                //Check condition if the file is xls file

                else if (fileExtensionName.equals(".xls")) {

                    //If it is xls file then create object of HSSFWorkbook class
                    memberWorkBook = new HSSFWorkbook(inputStream);

                }
                if (memberWorkBook != null) {
                    json = convertToCSV(memberWorkBook.getSheetAt(0), mssuserid);
                }


                memberWorkBook.close();
                inputStream.close();
                file.delete();

            } catch (IOException e) {
                log.error("Error:{}", e.getLocalizedMessage());
                return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(ErrorVM.builder().success(false)
                        .msg(e.getLocalizedMessage()).build()
                ).build();
            }
        }

        return Response.status(200)
                .entity(SuccessVM.builder().success(true).data(json).build()).build();
    }


    private Map<String, Object> convertToCSV(Sheet sheet, long mssuserid) throws IOException, ParseException {
        Row row = null;
        List<List<String>> sheetValues = new ArrayList<>();
        for (int i = 0; i <= sheet.getLastRowNum(); i++) {
            List<String> rowValues = new ArrayList<>();
            row = sheet.getRow(i);
            for (int j = 0; j < row.getLastCellNum(); j++) {
                rowValues.add(String.valueOf(row.getCell(j)));
            }
            sheetValues.add(rowValues);
        }
        return parseLines(sheetValues, mssuserid);
    }


    //create DTOS
    Map<String, Integer> titles = new HashMap<>();

    BigDecimal convertStringToBd(String currency) {
        if(currency.equals("")||currency.equals(null)){
            return BigDecimal.ZERO;
        }
        currency = currency.replace(",", "");
        if (currency.startsWith("'")){
            currency.replace("'", "");
        }
        return new BigDecimal(currency);
    }
    BigDecimal convertStringToBd2(String currency) {
        if(currency.equals("")||currency.equals(null)){
            return null;
        }
        currency = currency.replace(",", "");
        String firstNumberAsString = String.format ("%.3f", currency);
        return BigDecimal.valueOf(Long.parseLong(firstNumberAsString));
    }




    long convertStringToLong(String number) {
        if(number.equals("")||number.equals(null)){
            return 0L;
        }
        Float stringFloat = new Float(number);
        return stringFloat.longValue();
    }

//    Integer convertStringToInt(String number){
////        Integer stringInt = new Integer(number);
//        double DoubleValue = Double.parseDouble(number);
//        int value = (int)DoubleValue;
//        return value;
//    }


    private Map<String, Object> parseLines(List<List<String>> lines, long userId) throws IOException, ParseException {
        ObjectMapper objectMapper = new ObjectMapper();
        String monthYear = String.valueOf(lines.get(0).get(1));
        String month = monthYear.substring(0, 3);
        String year = monthYear.substring(4);
        validBills.clear();


        User user = userService.getUserById(userId);

        BigDecimal eeValidated = BigDecimal.ZERO, erValidated = BigDecimal.ZERO, avcValidated = BigDecimal.ZERO, avcerValidated = BigDecimal.ZERO, lifecover = BigDecimal.ZERO, penaltyValidated = BigDecimal.ZERO, adminFeeValdiated = BigDecimal.ZERO, brokerageValidated = BigDecimal.ZERO, groupLifeValdiated = BigDecimal.ZERO, augmentaryValidated = BigDecimal.ZERO, salaryValidated = BigDecimal.ZERO, adminfeeWoTaxValidated = BigDecimal.ZERO, vatOnAdminFeeValidated = BigDecimal.ZERO;

        for (int i = 0; i < lines.size(); i++) {

            if (i == 1) {
                //add all titles to map
                for (int j = 0; j < lines.get(i).size(); j++) {
                    titles.put(String.valueOf(lines.get(i).get(j)), j);
                }
                continue;
            }
            ContributionBillingDTO contributionBillingDTO = new ContributionBillingDTO();

            List<String> rowValues = lines.get(i);

            log.error("Titles are Here:" +titles.toString());

            Config config = configRepository.getActiveConfig();
            if (config.getClient().equals(Clients.OTHERS)) {
                try {
                    contributionBillingDTO.setId(convertStringToLong(rowValues.get(titles.get("Counter")) == null ? "" : rowValues.get(titles.get("Counter"))));
                    contributionBillingDTO.setMemberNo(convertStringToLong(rowValues.get(titles.get("Member No.")) == null ? "" : rowValues.get(titles.get("Member No."))));
                    if (contributionBillingDTO.getMemberNo() == 0) {
                        contributionBillingDTO.setException("Member Number Missing");
                    }
//                MemberDTO memberDTO = fundMasterClient.checkMemberIfExists("MEMBER_NO", String.valueOf(contributionBillingDTO.getMemberNo()),"MEMBER");
//                if (!memberDTO.isSuccess()){
//                    contributionBillingDTO.setException("Member No does not exist.");
//                }
                    contributionBillingDTO.setTotalContribution(convertStringToBd(rowValues.get(titles.get("Total Contribution")) == null ? "" : rowValues.get(titles.get("Total Contribution"))));
                    log.info("THIS IS TOTAL CON:>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> :" + contributionBillingDTO.getTotalContribution());
                    contributionBillingDTO.setMemberName(rowValues.get(titles.get("Full Name")) == null ? "" : rowValues.get(titles.get("Full Name")));
                    if (contributionBillingDTO.getMemberName() == null || contributionBillingDTO.getMemberName() == "") {
                        contributionBillingDTO.setException("Member Name Missing");

                    }
                    contributionBillingDTO.setSalary(convertStringToBd(rowValues.get(titles.get("Salary")) == null ? "" : rowValues.get(titles.get("Salary"))));
                    if (contributionBillingDTO.getSalary().equals(BigDecimal.ZERO)) {
                        contributionBillingDTO.setException("Salary is required");

                    }
                    contributionBillingDTO.setEe(convertStringToBd(rowValues.get(titles.get("Employee")) == null ? "" : rowValues.get(titles.get("Employee"))));
                    contributionBillingDTO.setEr(convertStringToBd(rowValues.get(titles.get("Employer")) == null ? "" : rowValues.get(titles.get("Employer"))));
                    contributionBillingDTO.setAvc(convertStringToBd(rowValues.get(titles.get("Employee Voluntary (AVC)")) == null ? "" : rowValues.get(titles.get("Employee Voluntary (AVC)"))));
                    contributionBillingDTO.setAvcer(convertStringToBd(rowValues.get(titles.get("Employer Voluntary (AVCER)")) == null ? "" : rowValues.get(titles.get("Employer Voluntary (AVCER)"))));
                    contributionBillingDTO.setPenaltyPayment(convertStringToBd(rowValues.get(titles.get("Penalty Payment")) == null ? "" : rowValues.get(titles.get("Penalty Payment"))));
                    contributionBillingDTO.setAdminFees(convertStringToBd(rowValues.get(titles.get("Administration Fee")) == null ? "" : rowValues.get(titles.get("Administration Fee"))));
                    contributionBillingDTO.setBrokerageFee(convertStringToBd(rowValues.get(titles.get("Brokerage Fee")) == null ? "" : rowValues.get(titles.get("Brokerage Fee"))));
                    contributionBillingDTO.setGroupLife(convertStringToBd(rowValues.get(titles.get("Group Life Assurance")) == null ? "" : rowValues.get(titles.get("Group Life Assurance"))));
                    contributionBillingDTO.setAugmentary(convertStringToBd(rowValues.get(titles.get("Augmentary Contribution")) == null ? "" : rowValues.get(titles.get("Augmentary Contribution"))));
                    contributionBillingDTO.setAdminFeesWithoutTax(convertStringToBd(rowValues.get(titles.get("Admin Fees Without VAT")) == null ? "" : rowValues.get(titles.get("Admin Fees Without VAT"))));
                    contributionBillingDTO.setTaxOnAdminFees(convertStringToBd(rowValues.get(titles.get("VAT On Admin Fees")) == null ? "" : rowValues.get(titles.get("VAT On Admin Fees"))));
                    contributionBillingDTO.setEe(convertStringToBd(rowValues.get(titles.get("Employee")) == null ? "" : rowValues.get(titles.get("Employee"))));
                    contributionBillingDTO.setEr(convertStringToBd(rowValues.get(titles.get("Employer")) == null ? "" : rowValues.get(titles.get("Employer"))));
                    //  contributionBillingDTO.setCounter(convertStringToInt(rowValues.get(titles.get("Counter")) == null ? "" : rowValues.get(titles.get("Counter"))));


                    eeValidated = contributionBillingDTO.getEe();
                    erValidated = contributionBillingDTO.getEr();
                    avcValidated = contributionBillingDTO.getAvc();
                    avcerValidated = contributionBillingDTO.getAvcer();
                    brokerageValidated = contributionBillingDTO.getBrokerageFee();
                    adminFeeValdiated = contributionBillingDTO.getAdminFees();
                    augmentaryValidated = contributionBillingDTO.getAugmentary();
                    penaltyValidated = contributionBillingDTO.getPenaltyPayment();
                    groupLifeValdiated = contributionBillingDTO.getGroupLife();
                    salaryValidated = contributionBillingDTO.getSalary();
                    adminfeeWoTaxValidated = contributionBillingDTO.getAdminFeesWithoutTax();
                    vatOnAdminFeeValidated = contributionBillingDTO.getTaxOnAdminFees();


                    contributionBillingDTO.setEeValidated(eeValidated);
                    contributionBillingDTO.setErValidated(erValidated);
                    contributionBillingDTO.setAvcValidated(avcValidated);
                    contributionBillingDTO.setAvcerValidated(avcerValidated);
                    contributionBillingDTO.setBrokerageFeeValidated(brokerageValidated);
                    contributionBillingDTO.setAdminFeesValidated(adminFeeValdiated);
                    contributionBillingDTO.setAugmentaryValidated(augmentaryValidated);
                    contributionBillingDTO.setPenaltyPaymentValidated(penaltyValidated);
                    contributionBillingDTO.setGroupLifeValidated(groupLifeValdiated);
                    contributionBillingDTO.setSalaryValidated(salaryValidated);
                    contributionBillingDTO.setAdminFeesWithoutTaxValidated(adminfeeWoTaxValidated);
                    contributionBillingDTO.setTaxOnAdminFeesValidated(vatOnAdminFeeValidated);


                    if (contributionBillingDTO.getException() != null) {
                        billsException.add(contributionBillingDTO);

                    } else {
                        validBills.add(contributionBillingDTO);
                    }


                } catch (Exception e) {
                    e.printStackTrace();

                }
            }
            else{
                try {
                    contributionBillingDTO.setId(convertStringToLong(rowValues.get(titles.get("#")) == null ? "" : rowValues.get(titles.get("#"))));
                    contributionBillingDTO.setMemberIdEtl(rowValues.get(titles.get("MEMBER ID")) == null ? "" : rowValues.get(titles.get("MEMBER ID")));
                    if (contributionBillingDTO.getMemberIdEtl() == null) {
                        contributionBillingDTO.setException("Member Number Missing");
                    }
//                MemberDTO memberDTO = fundMasterClient.checkMemberIfExists("MEMBER_NO", String.valueOf(contributionBillingDTO.getMemberNo()),"MEMBER");
//                if (!memberDTO.isSuccess()){
//                    contributionBillingDTO.setException("Member No does not exist.");
//                }
                    contributionBillingDTO.setTotalContribution(convertStringToBd(rowValues.get(titles.get("TOTAL")) == null ? "" : rowValues.get(titles.get("TOTAL"))));
                    log.info("THIS IS TOTAL CON:>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> :" + contributionBillingDTO.getTotalContribution());
                    contributionBillingDTO.setMemberName(rowValues.get(titles.get("NAME OF CONTRIBUTOR")) == null ? "" : rowValues.get(titles.get("NAME OF CONTRIBUTOR")));
                    if (contributionBillingDTO.getMemberName() == null || contributionBillingDTO.getMemberName() == "") {
                        contributionBillingDTO.setException("Member Name Missing");

                    }
                    contributionBillingDTO.setSalary(convertStringToBd(rowValues.get(titles.get("MONTHLY BASIC")) == null ? "" : rowValues.get(titles.get("MONTHLY BASIC"))));
                    if (contributionBillingDTO.getSalary().equals(BigDecimal.ZERO)) {
                        contributionBillingDTO.setException("Salary is required");

                    }
                    contributionBillingDTO.setEe(convertStringToBd(rowValues.get(titles.get("EE")) == null ? "" : rowValues.get(titles.get("EE"))));
                    contributionBillingDTO.setEr(convertStringToBd(rowValues.get(titles.get("ER")) == null ? "" : rowValues.get(titles.get("ER"))));
                    contributionBillingDTO.setAvc(convertStringToBd(rowValues.get(titles.get("ACV")) == null ? "" : rowValues.get(titles.get("ACV"))));
                    contributionBillingDTO.setPenaltyPayment(convertStringToBd(rowValues.get(titles.get("OUTSTANDING PENALTY")) == null ? "" : rowValues.get(titles.get("OUTSTANDING PENALTY"))));

                    contributionBillingDTO.setDob(rowValues.get(titles.get("D.O.B")) == null ? "" : rowValues.get(titles.get("D.O.B")));

                    contributionBillingDTO.setSsnitNumber(rowValues.get(titles.get("SSNIT NUMBER")) == null ? "" : rowValues.get(titles.get("SSNIT NUMBER")));



                    eeValidated = contributionBillingDTO.getEe();
                    erValidated = contributionBillingDTO.getEr();
                    avcValidated = contributionBillingDTO.getAvc();
                    salaryValidated = contributionBillingDTO.getSalary();
//                    avcerValidated = contributionBillingDTO.getAvcer();
//                    brokerageValidated = contributionBillingDTO.getBrokerageFee();
//                    adminFeeValdiated = contributionBillingDTO.getAdminFees();
//                    augmentaryValidated = contributionBillingDTO.getAugmentary();
//                    penaltyValidated = contributionBillingDTO.getPenaltyPayment();
//                    groupLifeValdiated = contributionBillingDTO.getGroupLife();

//                    adminfeeWoTaxValidated = contributionBillingDTO.getAdminFeesWithoutTax();
//                    vatOnAdminFeeValidated = contributionBillingDTO.getTaxOnAdminFees();
//
//
                    contributionBillingDTO.setEeValidated(eeValidated);
                    contributionBillingDTO.setErValidated(erValidated);
                    contributionBillingDTO.setAvcValidated(avcValidated);
                    contributionBillingDTO.setSalaryValidated(salaryValidated);
//                    contributionBillingDTO.setAvcerValidated(avcerValidated);
//                    contributionBillingDTO.setBrokerageFeeValidated(brokerageValidated);
//                    contributionBillingDTO.setAdminFeesValidated(adminFeeValdiated);
//                    contributionBillingDTO.setAugmentaryValidated(augmentaryValidated);
//                    contributionBillingDTO.setPenaltyPaymentValidated(penaltyValidated);
//                    contributionBillingDTO.setGroupLifeValidated(groupLifeValdiated);
//
//                    contributionBillingDTO.setAdminFeesWithoutTaxValidated(adminfeeWoTaxValidated);
//                    contributionBillingDTO.setTaxOnAdminFeesValidated(vatOnAdminFeeValidated);

                    if (contributionBillingDTO.getException() != null) {
                        billsException.add(contributionBillingDTO);

                    } else {
                        validBills.add(contributionBillingDTO);
                    }


                } catch (Exception e) {
                    e.printStackTrace();
                }
            }

        }
        Map<String, Object> jsonMap = new HashMap<>();
        validBillImports.put("totalCount", validBills.size());
        validBillImports.put("rows", validBills);
        invalidBillImports.put("totalCount", billsException.size());
        invalidBillImports.put("rows", billsException);

        jsonMap.put("success", true);

        jsonMap.put("validImports", validBillImports);

        jsonMap.put("invalidImports", invalidBillImports);


        return jsonMap;

    }
    public String uploadDirectory() throws Exception{
        String uploadDir  = System.getProperty("user.home")+ File.separator + "XI_Fundmaster_scheme_docs";

        File file = new File(uploadDir);
        //Creating the directory
        boolean bool1 = file.mkdir();
        boolean bool = file.mkdirs();
        if(bool){
            file.setWritable(true);
            file.setReadable(true);
            log.info("Directory created successfully");
        }else{
            log.warn("Sorry could not create specified directory");
        }

        File directory = new File(uploadDir);
        if (! directory.exists()){
            directory.mkdir();
            directory.setWritable(true);
            directory.setReadable(true);
        }
        return uploadDir;


    }
    @Override
    public Response saveFile(long mssuserid, SaveBillVm saveBillVm, long schemeId, long sponsorId) {
        try {
            long batch = saveBillVm.getBatch(); //batch
            String json = saveBillVm.getJson(); //json

            ContributionBillingBatchDto billingBatchDto = new ContributionBillingBatchDto();
            billingBatchDto.setId(batch);

            JSONArray jsonArray = new JSONArray(json);
            List<ContributionBillingDTO> contributionBillingDTOS = new ArrayList<>();
            if (jsonArray != null) {
                for (int i = 0; i < jsonArray.length(); i++) {
                    JSONObject jsonObject = jsonArray.getJSONObject(i);
                    ContributionBillingDTO billingDTO =
                            new ObjectMapper().readValue(jsonObject.toString(), ContributionBillingDTO.class);
                    if (billingDTO != null) {
                        billingDTO.setBatch(billingBatchDto);
                        billingDTO.setSchemeId(schemeId);
                        billingDTO.setSponsorId(sponsorId);
                        String xi_scheme_doc_folder = uploadDirectory();
                        billingDTO.setFinalPath(xi_scheme_doc_folder);
                        contributionBillingDTOS.add(billingDTO);
                    }
                }
            }

            String finalJson = new ObjectMapper().writeValueAsString(contributionBillingDTOS);
            log.error("FINAL JSON TOETL:" +finalJson);

            MessageModelDTO success = fundMasterClient.saveBill(finalJson);

            if (success.isSuccess()) {
                return Response.status(Response.Status.OK)
                        .entity(SuccessVM.builder().success(true).msg(success.getMessage()).build())
                        .build();
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return Response.status(Response.Status.BAD_REQUEST)
                .entity(ErrorVM.builder().success(false).msg(
                        "Failed to validate bill"
                ).build())
                .build();
    }

    public Response saveFile_1(long mssuserid, String json) {
        MessageModelDTO success = fundMasterClient.saveBill(json);
        if (success.isSuccess()) {
            return Response.status(Response.Status.OK)
                    .entity(SuccessVM.builder().success(true).msg(success.getMessage()).build())
                    .build();
        }
        return Response.status(Response.Status.BAD_REQUEST)
                .entity(ErrorVM.builder().success(false).msg(
                        success.getMessage()
                ).build())
                .build();
    }

    private String getFileName(MultivaluedMap<String, String> header) {

        String[] contentDisposition = header.getFirst("Content-Disposition").split(";");

        for (String filename : contentDisposition) {
            if ((filename.trim().startsWith("filename"))) {

                String[] name = filename.split("=");

                String finalFileName = name[1].trim().replaceAll("\"", "");
                return finalFileName;
            }
        }
        return "unknown";
    }

    //save to somewhere
    private File writeFile(byte[] content, String filename) throws IOException {

        File file = new File(filename);

        if (!file.exists()) {
            file.createNewFile();
        }

        FileOutputStream fop = new FileOutputStream(file);

        fop.write(content);
        fop.flush();
        fop.close();
        return file;

    }

}
