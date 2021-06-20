package com.systech.mss.controller.impl;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.systech.mss.callback.ProcessCallBack;
import com.systech.mss.controller.BenefitRequestController;
import com.systech.mss.controller.vm.*;
import com.systech.mss.domain.*;
import com.systech.mss.fileupload.FileModel;
import com.systech.mss.repository.BenefitRequestRepository;
import com.systech.mss.repository.ClaimDocumentsRepository;
import com.systech.mss.service.*;
import com.systech.mss.service.dto.FmListDTO;
import com.systech.mss.service.dto.StringListDTO;
import com.systech.mss.util.StringUtil;
import com.systech.mss.vm.SMSVM;
import com.systech.mss.vm.benefitrequest.*;
import org.jboss.resteasy.plugins.providers.multipart.InputPart;
import org.jboss.resteasy.plugins.providers.multipart.MultipartFormDataInput;
import org.json.JSONException;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import javax.inject.Inject;
import javax.json.Json;
import javax.json.JsonObject;
import javax.validation.Valid;
import javax.ws.rs.core.Response;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class BenefitRequestControllerImpl extends BaseController implements BenefitRequestController {

    @Inject
    BenefitRequestRepository benefitRequestRepository;

    @Inject
    private BenefitRequestService benefitRequestService;

    @Inject
    private ActivityTrailService activityTrailService;

    @Inject
    private MailService mailService;

    @Inject
    private FMCRMClient fmcrmClient;

    @Inject
    private UserService userService;

    @Inject
    private ClaimDocumentsRepository claimDocumentsRepository;

    private long schemeId;
    private String subject;
    private String emailBody;


    @Override
    public Response uploadClaimDocuments(long mssUserId, MultipartFormDataInput input) throws ParseException {
        Map<String, List<InputPart>> uploadForm = input.getFormDataMap();
        if (uploadForm.isEmpty())
            return ErrorMsg("No files selected");
        if (!uploadForm.containsKey("reqId")) {  //benefit request ID
            return ErrorMsg("Error processing request");
        }

        try {
            String reqId = (uploadForm.get("reqId").get(0).getBodyAsString());
            long benefitRequestId = Long.parseLong(reqId);
            BenefitRequest benefitRequest = benefitRequestRepository.find(benefitRequestId);
            if (benefitRequest == null) {
                return ErrorMsg("Claim not found");
            }

            List<FileModel> fileModels = upload(input);
            if (fileModels == null) {
                return ErrorMsg("Failed to upload documents");
            }

            User user = userRepository.find(mssUserId);
            if (user != null) {
                List<Documents> documentsList = saveFiles(user, fileModels);
                for (Documents document : documentsList) {
                    ClaimDocuments claimDocuments = new ClaimDocuments();
                    claimDocuments.setBenefitRequestId(benefitRequestId);
                    claimDocuments.setDocumentId(document.getId());
                    try {
                        claimDocumentsRepository.create(claimDocuments);
                    } catch (Exception e) {
                        e.printStackTrace();
                    }
                }
                benefitRequestRepository.updateSetDocumentsUploaded(benefitRequestId);
                logActivityTrail(mssUserId, "Uploaded claim documents");
                return SuccessMsg("Documents uploaded", null);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return ErrorMsg("Error encountered");
    }

    @Override
    public Response getMemberBenefitRequests(long mssUserId, long memberId) {
        List<BenefitRequest> benefitRequest = benefitRequestRepository.getMemberBenefitRequests(memberId);
        if (benefitRequest != null) {
            logActivityTrail(mssUserId, "Get Benefit Request");
            return Response.status(Response.Status.OK)
                    .entity(SuccessVM.builder().success(true).data(benefitRequest).build())
                    .build();
        }
        return ErrorMsg("Failed, please try again");
    }

    @Override
    public Response savePersonalDetails(long mssUserId, long memberId, PersonalDetailsVM personalDetailsVM) {

        List<BenefitRequest> list = benefitRequestRepository.getMemberBenefitRequests(memberId);
        if (list != null) {
            for (BenefitRequest benefitRequest : list) {
                Status status = benefitRequest.getStatus();
                //KEEP THE ORDER
                switch (status) {
                    case UPLOADED:
                    case CERTIFIED:
                    case AUTHORIZED:
                    case APPROVED:
                    case PUSHED_TO_FUNDMASTER:
                    case PENDING:
                        return ErrorMsg("You have a pending claim, please wait until it is resolved");

                    case DECLINED:
                    case NOT_UPLOADED:
                    case DECLINED_BY_CRM:
                    case DECLINED_BY_SPONSOR:
                    default:
                }
            }
        }

        log.error(personalDetailsVM.toString());
        BenefitRequest benefitRequest = benefitRequestRepository.savePersonalDetails(memberId, mssUserId, personalDetailsVM);
        if (benefitRequest != null) {
            logActivityTrail(mssUserId, "Initiated Benefit Request");
            return Response.status(Response.Status.OK)
                    .entity(SuccessVM.builder().success(true).data(benefitRequest.getId()).build())
                    .build();
        }
        return ErrorMsg("Failed, please try again");
    }

    private StringListDTO getMemberSubmittedDocuments(long memberId) {
        return fmMemberClient.getSubmittedDocuments(memberId);
    }

    private List<String> getMissingRequiredDocuments(long memberId, List<DocumentVM> docs) {
        List<String> response = new ArrayList<>();
        try {
            StringListDTO stringListDTO = getMemberSubmittedDocuments(memberId);
            if (stringListDTO.getSuccess().equalsIgnoreCase("true")) {
                if (stringListDTO.getRows() != null) {
                    List<Object> objects = stringListDTO.getRows();
                    for (DocumentVM doc :
                            docs) {

                        boolean isAvailable = false;
                        for (Object o :
                                objects) {
                            String jsonString = StringUtil.toJsonString(o);
                            try {
                                org.json.JSONObject jsonObject = new org.json.JSONObject(jsonString);
                                String docName = jsonObject.getString("name");

                                if (docName.contains(doc.getShortName())) {
                                    isAvailable = true;
                                    break;
                                }

                            } catch (JSONException e) {
                                e.printStackTrace();
                            }
                        }
                        if (!isAvailable) {
                            response.add(doc.getDocumentName());
                        }
                    }
                    return response;
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        response.clear();//set to empty
        for (DocumentVM documentVM :
                docs) {
            response.add(documentVM.getDocumentName());
        }
        return response;  //should upload the documents
    }

    @Override
    public Response saveGroundOfBenefits(long mssUserId, long memberId, GroundOfBenefits groundOfBenefits) {
        try {
            Map<String, Object> reasonForExit = fmMemberClient.getReasonForExitById(groundOfBenefits.getReasonId());
            if (reasonForExit == null) {
                return ErrorMsg("Unknown reason for exit");
            }
            List<ReasonForExitDocument> reasonForExitDocuments = fmMemberClient.getDocumentsRequiredPerClaim(
                    groundOfBenefits.getReasonId()
            );

            log.error("Documents :" + StringUtil.toJsonString(reasonForExitDocuments));

            Map<String, Object> map = new HashMap<>();
            String reason = groundOfBenefits.getReason();
            String category = StringUtil.toString(reasonForExit.get("category"));
//            String mbshipStatus = StringUtil.toString(reasonForExit.get("mbshipStatus"));

            // Conflicting at NICO SOLUTION IS TO INITIATE PRE EXIT ON SEPARATE ACTION
//            if (category.equalsIgnoreCase("withdrawal") && mbshipStatus.equalsIgnoreCase("Partial Withdrawal Paid")) {
//                reason = "Pre-Exit";
//            }
            if (reason.equalsIgnoreCase("Normal Retirement")) {
                User user = userRepository.find(mssUserId);
                if (user != null) {
                    FmListDTO fmListDTO = fmMemberClient.getMemberDetails(memberId);
                    if (fmListDTO != null && fmListDTO.isSuccess()) {
                        if (fmListDTO.getRows() != null) {
                            Object ob = fmListDTO.getRows().get(0);
                            JSONParser jsonParser = new JSONParser();
                            JSONObject jsonObject = (JSONObject) jsonParser.parse(
                                    new ObjectMapper().writeValueAsString(ob)
                            );
                            if (jsonObject != null) {
                                //get user age
                                log.error(jsonObject.toString());
                                if (jsonObject.containsKey("age") && jsonObject.containsKey("retirementAge")) {
                                    try {
                                        int currentAge = Integer.parseInt(
                                                String.valueOf(jsonObject.get("age"))
                                        ),
                                                retirementAge = Integer.parseInt(
                                                        String.valueOf(jsonObject.get("retirementAge"))
                                                );
                                        if (currentAge < retirementAge) {
                                            return Response.status(Response.Status.BAD_REQUEST)
                                                    .entity(ErrorVM.builder().success(false)
                                                            .msg("You have not reached retirement age of " + retirementAge).build())
                                                    .build();
                                        }
                                    } catch (NumberFormatException e) {
                                        log.error(e.getMessage());
                                    }
                                }
                            }

                        }
                    }
                }
            }

            List<String> requiredDocs = new ArrayList<>();
            if (reasonForExitDocuments != null) {
                for (ReasonForExitDocument reasonForExitDocument : reasonForExitDocuments) {
                    requiredDocs.add(reasonForExitDocument.getChecklistName());
                }
            }

            groundOfBenefits.setRequiresDocuments(requiredDocs.size() > 0);
            StringBuilder docsString = new StringBuilder("<p>Kindly Note that you will be required to attached the following documents</p>");
            for (int i = 0; i < requiredDocs.size(); i++) {
                docsString.append("<p>").append(i + 1).append(" ").append(requiredDocs.get(i)).append("</p>");
            }
            map.put("docs", docsString.toString());
            map.put("reason", reason);
            map.put("isMedical", category.contains("Ill Health"));
            map.put("skipPaymentOptions", true);
            map.put("uploadFiles", requiredDocs.size() > 0);

//            log.error(StringUtil.toJsonString(map));
            BenefitRequest benefitRequest = benefitRequestRepository.saveGroundOfBenefits(groundOfBenefits);
            if (benefitRequest != null) {
                logActivityTrail(mssUserId, "Saved ground of benefits for claim process");
                return Response.status(Response.Status.OK)
                        .entity(SuccessVM.builder().success(true).data(map).build())
                        .build();
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
        return ErrorMsg("Failed, please try again");
    }

    public Response saveGroundOfBenefits_(long mssUserId, long memberId, GroundOfBenefits groundOfBenefits) {
        try {
            Map<String, Object> reasonForExit = fmMemberClient.getReasonForExitById(groundOfBenefits.getReasonId());
            if (reasonForExit == null) {
                return ErrorMsg("Unknown reason for exit");
            }

            String category = StringUtil.toString(reasonForExit.get("category"));
            String mbshipStatus = StringUtil.toString(reasonForExit.get("mbshipStatus"));


            List<DocumentVM> docs = new ArrayList<>();
            Map<String, Object> map = new HashMap<>();
            map.put("category", category);
            map.put("mbshipStatus", mbshipStatus);

            String reason = groundOfBenefits.getReason();

            boolean isMedical = false,
                    uploadDocuments = true,
                    skipPaymentOptions = true;

            List<ReasonForExitDocument> reasonForExitDocuments = fmMemberClient.getDocumentsRequiredPerClaim(
                    groundOfBenefits.getReasonId()
            );
            if (reasonForExitDocuments != null) {
                for (ReasonForExitDocument reasonForExitDocument : reasonForExitDocuments) {
                    docs.add(new DocumentVM(reasonForExitDocument.getChecklistName(), reasonForExitDocument.getChecklistName()));
                }
            } else {
                docs.add(new DocumentVM("Claim Form", "Claim Form"));
                docs.add(new DocumentVM("National ID", "Copy of National ID Card."));
            }

            try {
                if (reason.contains("Death") || reason.contains("Dismissal")) {
                    map.put("reason", "Death");
                    if (docs.isEmpty()) {
                        docs.add(new DocumentVM("Death Certificate", "Death Certificate"));
                        docs.add(new DocumentVM("Order of appointment of administrator", "Order of appointment of administrator"));
                        docs.add(new DocumentVM("ID of deceased", "ID of deceased"));
                        docs.add(new DocumentVM("ID of administrator", "ID of administrator"));
                        docs.add(new DocumentVM("Death claim form", "Death claim form"));
                    }
                    return Response.status(Response.Status.BAD_REQUEST)
                            .entity(ErrorVM.builder().success(false)
                                    .msg("You can not initiate claim for " + reason).build())
                            .build();
                } else if ((category.contains("Ill Health") || mbshipStatus.contains("ill"))) {
                    reason = "medical";
                    isMedical = true;
                    if (docs.isEmpty()) {
                        docs.add(new DocumentVM("Medical Discharge", "Letter of medical discharge"));
                        docs.add(new DocumentVM("Medical Certificate", "Medical Certificate"));
                    }
                }
                //THIS IS A PRE-EXIT WITHDRAWAL
                else if (category.contains("Withdrawal") && mbshipStatus.equalsIgnoreCase("Partial Withdrawal Paid")) {
                    uploadDocuments = false;
                    skipPaymentOptions = false;
                    reason = "Pre-Exit";
                }
                //Normal retirement check age
                //check ground Of Benefits reason against age for normal retirement
                else if (mbshipStatus.contains("Retired") && reason.equalsIgnoreCase("Normal Retirement")) {
                    reason = "Normal Retirement";

                    if (docs.isEmpty()) {
                        docs.add(new DocumentVM("Annuity Form", "Annuity Form."));
                    }
                    User user = userRepository.find(mssUserId);
                    if (user != null) {
                        FmListDTO fmListDTO = fmMemberClient.getMemberDetails(memberId);
                        if (fmListDTO != null && fmListDTO.isSuccess()) {
                            if (fmListDTO.getRows() != null) {
                                Object ob = fmListDTO.getRows().get(0);
                                JSONParser jsonParser = new JSONParser();
                                JSONObject jsonObject = (JSONObject) jsonParser.parse(
                                        new ObjectMapper().writeValueAsString(ob)
                                );
                                if (jsonObject != null) {
                                    //get user age
                                    if (jsonObject.containsKey("age") && jsonObject.containsKey("retirementAge")) {
                                        int currentAge = Integer.parseInt(
                                                String.valueOf(jsonObject.get("age"))
                                        ),
                                                retirementAge = Integer.parseInt(
                                                        String.valueOf(jsonObject.get("retirementAge"))
                                                );
                                        if (currentAge < retirementAge) {
                                            return Response.status(Response.Status.BAD_REQUEST)
                                                    .entity(ErrorVM.builder().success(false)
                                                            .msg("You have not reached retirement age of " + retirementAge).build())
                                                    .build();
                                        }
                                    }
                                }

                            }
                        }
                    }
                } else if (reason.contains("retirement")) {
                    reason = "Early Retirement";
                    docs.add(new DocumentVM("Letter", "Letter of Retirement."));
                    docs.add(new DocumentVM("Annuity form", "Annuity form"));
                } else if (mbshipStatus.contains("Withdraw") && category.contains("Withdraw")) {
                    if (docs.isEmpty()) {
                        if (reason.contains("resign"))
                            docs.add(new DocumentVM("Resignation Letter", "Letter of Resignation"));
                    }
                    reason = "Withdraw";
                } else if (mbshipStatus.contains("Transfer") && category.contains("Withdraw")) {
                    reason = "Transfer";
                    if (docs.isEmpty()) {
                        docs.add(new DocumentVM("Tax Pin", "Tax Pin"));
                    }
                }

            } catch (Exception e) {
                e.printStackTrace();
            }

            List<String> requiredDocs = new ArrayList<>();
            if (uploadDocuments) {
                requiredDocs = getMissingRequiredDocuments(memberId, docs);
                groundOfBenefits.setRequiresDocuments(requiredDocs.size() > 0);

                StringBuilder docsString = new StringBuilder("<p>Kindly Note that you will be required to attached the following documents</p>");
                for (int i = 0; i < requiredDocs.size(); i++) {
                    docsString.append("<p>").append(i + 1).append(" ").append(requiredDocs.get(i)).append("</p>");
                }
                map.put("docs", docsString.toString());
            }

            map.put("reason", reason);
            map.put("isMedical", isMedical);
            map.put("skipPaymentOptions", skipPaymentOptions);
            map.put("uploadFiles", uploadDocuments && requiredDocs.size() > 0);

            BenefitRequest benefitRequest = benefitRequestRepository.saveGroundOfBenefits(groundOfBenefits);
            if (benefitRequest != null) {
                logActivityTrail(mssUserId, "Saved ground of benefits for claim process");
                return Response.status(Response.Status.OK)
                        .entity(SuccessVM.builder().success(true).data(map).build())
                        .build();
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
        return ErrorMsg("Failed, please try again");
    }

    @Override
    public Response getDocumentsForReasonOfExit(long mssUserId, long reasonForExitId) {
        List<ReasonForExitDocument> reasonForExitDocuments = fmMemberClient.getDocumentsRequiredPerClaim(reasonForExitId);
        if (reasonForExitDocuments != null) {
            return SuccessMsg("Done", reasonForExitDocuments);
        }
        return ErrorMsg("Please try again");
    }

    @Override
    public Response updateSetDocumentsUploaded(long mssUserId, long recordId) {
        benefitRequestRepository.updateSetDocumentsUploaded(recordId);
        return Response.status(Response.Status.OK)
                .entity(SuccessVM.builder().success(true).build())
                .build();
    }

    @Override
    public Response saveMedicalReasons(long mssUserId, @Valid MedicalReasons medicalReasons) {
        try {
            BenefitRequest benefitRequest = benefitRequestRepository.saveMedicalReasons(medicalReasons);
            if (benefitRequest != null) {
                logActivityTrail(mssUserId, "Saved medical reasons");
                return Response.status(Response.Status.OK)
                        .entity(SuccessVM.builder().success(true).build())
                        .build();
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
        return ErrorMsg("Failed, please try again");
    }

    @Override
    public Response savePaymentOptions(long mssUserId, @Valid PaymentOptionsVM paymentOptionsVM) {

        PaymentOptionsVM optionsVM = PaymentOptionsVM.getInstance(paymentOptionsVM);
//        log.error(optionsVM.toString());
        BenefitRequest benefitRequest = benefitRequestRepository.savePaymentOptions(
                optionsVM
        );
        if (benefitRequest != null) {
            logActivityTrail(mssUserId, "Saved payment options for claim process");
            return Response.status(Response.Status.OK)
                    .entity(SuccessVM.builder().success(true).build())
                    .build();
        }
        return ErrorMsg("Failed, please try again");
    }

    @Override
    public Response checkVestingLiabilities(long mssUserId, long id) {
        BenefitRequest benefitRequest = benefitRequestRepository.find(id);
        if (benefitRequest != null) {
            logActivityTrail(mssUserId, "Check vesting scales");
            Object o = fmMemberClient.checkVestingLiabilities(benefitRequest.getMemberId(), benefitRequest.getBenefitReasonId());
            if (o != null) {
                return Response.status(Response.Status.OK)
                        .entity(SuccessVM.builder().success(true).data(o).build())
                        .build();
            }
        }
        return ErrorMsg("Failed, please try again");
    }

    @Override
    public Response saveBankDetails(long mssUserId, @Valid BankDetailsVM bankDetailsVM) {
        BenefitRequest benefitRequest = benefitRequestRepository.saveBankDetails(bankDetailsVM);
        if (benefitRequest != null) {
            logActivityTrail(mssUserId, "Saved bank details for claim process");
            return Response.status(Response.Status.OK)
                    .entity(SuccessVM.builder().success(true).data(bankDetailsVM).build())
                    .build();
        }
        return ErrorMsg("Failed, please try again");
    }

    @Override
    public Response finishSavingBenefitRequest(long mssUserId, long reqId) {
        BenefitRequest benefitRequest = benefitRequestRepository.finishSavingBenefitRequest(reqId);
        if (benefitRequest != null) {
            logActivityTrail(mssUserId, "Submitted claim");

            doInBackground(new ProcessCallBack() {
                @Override
                public void start(Object o) {
                    User user = userService.getUserByMemberId(benefitRequest.getMemberId());
                    String message = "Dear " + user.getFirstName()
                            + " Your benefit request has been successfully created." +
                            "In case of any challenges contact us on 0302634704 or email us at info.trustees@enterprisegroup.com.gh. Enterprise Trustees: " +
                            "Your Advantage!";
                    if (fundMasterClient.checkClientIsETlSendSMSHasEmail(new SMSVM(user.getUserDetails().getCellPhone(), message), user)) {
                        mailService.sendEmail(
                                user,
                                EmailTemplatesEnum.CLAIM_STATUS,
                                String.valueOf(benefitRequest.getId()),
                                "successfully created"
                        );
                    }

                    //send email to po
                    schemeId = user.getUserDetails().getSchemeId();
                    subject = "Benefit pending Certification and approval";
                    emailBody = "You have a new benefit request pending certification and approval";
                    userService.sendPoEMail(schemeId, subject, emailBody);
                }
            });

            return Response.status(Response.Status.OK)
                    .entity(SuccessVM.builder().success(true).msg("Done").build())
                    .build();
        }
        return ErrorMsg("Failed, please try again");
    }

    @Override
    public Response finishSavingBenefitRequestPo(long mssUserId, long reqId) {
        BenefitRequest benefitRequest = benefitRequestRepository.finishSavingBenefitRequest(reqId);
        if (benefitRequest != null) {
            logActivityTrail(mssUserId, "Submitted claim");


            //here we need to revamp get users email from fundmaster
            doInBackground(new ProcessCallBack() {
                @Override
                public void start(Object o) {
                    try {
                        //User can be null when not registered in MSS
                        User user = userService.getUserByMemberId(benefitRequest.getMemberId());
                        if(user !=null) {
                            String message = "Dear " + user.getFirstName()
                                    + " Your benefit request has been successfully created By your Principal Officer." +
                                    "In case of any challenges contact us on 0302634704 or email us at info.trustees@enterprisegroup.com.gh. Enterprise Trustees: " +
                                    "Your Advantage!";
                            if (fundMasterClient.checkClientIsETlSendSMSHasEmail(new SMSVM(user.getUserDetails().getCellPhone(), message), user)) {
                                mailService.sendEmail(
                                        user,
                                        EmailTemplatesEnum.CLAIM_STATUS,
                                        String.valueOf(benefitRequest.getId()),
                                        "Successfully created By your Principal Officer " + user.getUserDetails().getName()
                                );
                            }

                            //send email to crm
                            schemeId = user.getUserDetails().getSchemeId();
                            subject = "Benefit pending Authorization";
                            emailBody = "You have a new benefit request pending Authorization";
                            userService.sendCrmEMail(schemeId, subject, emailBody);

                        }
                        else{
                            log.info("else");
                            FmListDTO memberDetails = fmMemberClient.getMemberDetails(benefitRequest.getMemberId());
                            Object details=memberDetails.getRows().get(0);
                            JSONParser jsonParser = new JSONParser();
                            try {
                                JSONObject jsonObject = (JSONObject) jsonParser.parse(
                                        new ObjectMapper().writeValueAsString(details));
                                log.info(jsonObject.toString());
                                long scheme= Long.parseLong(String.valueOf(jsonObject.get("schemeId")));
                                log.info("else:"+scheme);
                                subject = "Benefit pending Authorization";
                                emailBody = "You have a new benefit request pending Authorization";
                                userService.sendCrmEMail(scheme, subject, emailBody);
                            } catch (ParseException | JsonProcessingException parseException) {
                                parseException.printStackTrace();
                            }
                        }

                    } catch (Exception e) {
                        log.error(e.getMessage());

                        log.info("catch");

                        FmListDTO memberDetails = fmMemberClient.getMemberDetails(benefitRequest.getMemberId());
                        Object details=memberDetails.getRows().get(0);
                        JSONParser jsonParser = new JSONParser();
                        try {
                            JSONObject jsonObject = (JSONObject) jsonParser.parse(
                                    new ObjectMapper().writeValueAsString(details));
                            long scheme= Long.parseLong(String.valueOf(jsonObject.get("schemeId")));
                            log.info("catch:"+scheme);
                            subject = "Benefit pending Authorization";
                            emailBody = "You have a new benefit request pending Authorization";
                            userService.sendCrmEMail(scheme, subject, emailBody);
                        } catch (ParseException | JsonProcessingException parseException) {
                            parseException.printStackTrace();
                        }
                    }

                }
            });

            benefitRequest.setCertify(true);
            benefitRequest.setDeclined(false);
            benefitRequest.setStatus(Status.CERTIFIED);
            benefitRequest.setCertifiedBy(mssUserId);
            benefitRequest.setDateCertified(LocalDateTime.now());
            benefitRequest.setApproved(true);
            benefitRequest.setStatus(Status.APPROVED);
            benefitRequest.setDateApproved(LocalDateTime.now());
            benefitRequest.setApprovedById(mssUserId);
            benefitRequestRepository.edit(benefitRequest);

            return SuccessMsg("Saved Successfully", null);

        }
        return ErrorMsg("Failed, please try again");
    }

    @Override
    public Response getBenefitsBySchemeIdAndSponsorId(long schemeId, long sponsorId) {
        List<BenefitRequest> benefitRequestList = benefitRequestService.getBenefitsBySchemeIdAndSponsorId(schemeId, sponsorId);
        if (benefitRequestList != null) {
            return Response.status(Response.Status.OK)
                    .entity(SuccessVM.builder().
                            success(true)
                            .data(benefitRequestService.setBenefitRequestExtraDetails(benefitRequestList))
                            .build())
                    .build();
        }
        return Response.status(Response.Status.NOT_FOUND)
                .entity(ErrorVM.builder().success(false).
                        msg("No benefits found").build())
                .build();
    }

    @Override
    public Response getBenefitsBySchemeId(long mssUserId, long schemeId) {
        activityTrailService.logActivityTrail(mssUserId, "Viewed Member Claims");
        List<BenefitRequest> benefitRequests = benefitRequestService
                .getBenefitsBySchemeId(schemeId)
                .stream().filter(benefitRequest -> !benefitRequest.isApproved() || !benefitRequest.isCertify() || !benefitRequest.isAuthorize()).collect(Collectors.toList());
        return benefitRequests.size() > 0 ?
                Response
                        .ok()
                        .entity(
                                SuccessVM.builder()
                                        .success(true)
                                        .data(benefitRequestService.setBenefitRequestExtraDetailsById(benefitRequests))
                                        .build())
                        .build()
                :
                Response.status(Response.Status.BAD_REQUEST)
                        .entity(ErrorVM.builder().success(false).msg("No benefits found").build())
                        .build();
    }

    @Override
    public Response getAllBenefits(long mssUserId) {
        activityTrailService.logActivityTrail(mssUserId, "Viewed all claims");

        List<BenefitRequest> benefitRequests = benefitRequestService.getAll();

        if (benefitRequests != null) {
            for (BenefitRequest b :
                    benefitRequests) {
                b.setShortCreatedDate(b.getDateCreated().format(DateTimeFormatter.ofPattern("MMM dd, uuuu")));
//                benefitRequests1.add(b);
            }
            return Response
                    .ok()
                    .entity(
                            SuccessVM.builder()
                                    .success(true)
                                    .data(benefitRequestService.setBenefitRequestExtraDetails(benefitRequests))
                                    .build())
                    .build();
        }
        return Response.status(Response.Status.BAD_REQUEST)
                .entity(ErrorVM.builder().success(false).msg("No benefits found").build())
                .build();
    }

    @Override
    public Response getAllUnAuthorizedBenefits(long mssUserId) {
        activityTrailService.logActivityTrail(mssUserId, "Viewed all unauthorized claims");

        List<BenefitRequest> benefitRequests = benefitRequestService
                .getAll()
                .stream().filter(benefitRequest -> benefitRequest.isApproved() && benefitRequest.isCertify() && !benefitRequest.isAuthorize()).collect(Collectors.toList());
        return benefitRequests.size() > 0 ?
                Response
                        .ok()
                        .entity(
                                SuccessVM.builder()
                                        .success(true)
                                        .data(benefitRequestService.setBenefitRequestExtraDetails(benefitRequests))
                                        .build())
                        .build()
                :
                Response.status(Response.Status.BAD_REQUEST)
                        .entity(ErrorVM.builder().success(false).msg("No benefits found").build())
                        .build();
    }

    @Override
    public Response saveBenefitsFM(@Valid PostFormByIdVM postFormByIdVM) {

        activityTrailService.logActivityTrail(postFormByIdVM.getUserId(), "Forwarded claims to fundmaster");

        //check if benefit is approved, certified and authorized
        BenefitRequest benefitRequest = benefitRequestRepository.find(postFormByIdVM.getId());
        //check if  benefit is available
        if (benefitRequest != null) {
            if (benefitRequest.isApproved() && benefitRequest.isCertify() && benefitRequest.isAuthorize()) {
                BenefitsToFMVM benefitsToFMVM = fmcrmClient.buildBenefitsObjectForFm(postFormByIdVM.getId());
                FmListDTO fmListDTO = fmcrmClient.saveBenefitsFM(benefitsToFMVM);

                if (fmListDTO.isSuccess()) {
                    //update db
                    benefitRequest.setSendToXi(true);
                    benefitRequest.setStatus(Status.PUSHED_TO_FUNDMASTER);
                    benefitRequestRepository.edit(benefitRequest);

                    User user = userService.getUserByMemberId(benefitRequest.getMemberId());
                    String message = "Dear " + user.getFirstName()
                            + " Your benefit request has been Forwarded for processing." +
                            "In case of any challenges contact us on 0302634704 or email us at info.trustees@enterprisegroup.com.gh. Enterprise Trustees: " +
                            "Your Advantage!";
                    if (fundMasterClient.checkClientIsETlSendSMSHasEmail(new SMSVM(user.getUserDetails().getCellPhone(), message), user)) {
                        mailService.sendEmail(
                                user,
                                EmailTemplatesEnum.CLAIM_STATUS,
                                String.valueOf(benefitRequest.getId()),
                                "Forwarded for processing"
                        );
                    }

                    return Response.
                            ok()
                            .entity(SuccessVM
                                    .builder()
                                    .success(true)
                                    .data(benefitsToFMVM)
                                    .msg("Benefit pushed to fundmaster for processing")
                                    .build())
                            .build();
                }
                assert fmListDTO != null;
                benefitRequest.setSendToXi(false);
                benefitRequest.setAuthorize(false);
                benefitRequest.setDeclined(true);
                benefitRequest.setStatus(Status.DECLINED_BY_CRM);
                benefitRequest.setCRMDeclineReason(fmListDTO.getMessage());
                benefitRequestRepository.edit(benefitRequest);
                return Response.status(Response.Status.BAD_REQUEST)
                        .entity(ErrorVM
                                .builder()
                                .success(false)
                                .msg(fmListDTO.getMessage())
                                .build())
                        .build();
            } else if (!benefitRequest.isCertify()) {
                return Response.status(Response.Status.EXPECTATION_FAILED)
                        .entity(ErrorVM
                                .builder()
                                .success(false)
                                .msg("Benefit not certified")
                                .build())
                        .build();
            } else if (!benefitRequest.isApproved()) {
                return Response.status(Response.Status.EXPECTATION_FAILED)
                        .entity(ErrorVM
                                .builder()
                                .success(false)
                                .msg("Benefit not approved")
                                .build())
                        .build();
            } else if (!benefitRequest.isAuthorize()) {
                return Response.status(Response.Status.EXPECTATION_FAILED)
                        .entity(ErrorVM
                                .builder()
                                .success(false)
                                .msg("Benefit not authorized")
                                .build())
                        .build();
            } else {
                return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
                        .entity(ErrorVM
                                .builder()
                                .success(false)
                                .msg("api failed")
                                .build())
                        .build();
            }
        }
        return Response.status(Response.Status.NOT_FOUND)
                .entity(ErrorVM
                        .builder()
                        .success(false)
                        .msg("Benefit not found")
                        .build())
                .build();
    }

    @Override
    public Response approveBenefits(@Valid PostFormByIdVM postFormByIdVM) {

        activityTrailService.logActivityTrail(postFormByIdVM.getUserId(), "Approved claims");

        BenefitRequest benefitRequest = benefitRequestRepository.find(postFormByIdVM.getId());
        //check if  benefit is available
        if (benefitRequest != null) {
            if (benefitRequest.isApproved()) {
                return Response.ok()
                        .entity(SuccessVM
                                .builder()
                                .success(true)
                                .msg("Benefit is Already approved!")
                                .build())
                        .build();
            }
            if (benefitRequest.isCertify()) {
                benefitRequest.setApproved(true);
                benefitRequest.setDeclined(false);
                benefitRequest.setStatus(Status.APPROVED);
                benefitRequest.setDateApproved(LocalDateTime.now());
                benefitRequest.setApprovedById(postFormByIdVM.getUserId());
                benefitRequestRepository.edit(benefitRequest);
                User user = userService.getUserByMemberId(benefitRequest.getMemberId());
                String message = "Dear " + user.getFirstName()
                        + " Your benefit request has been successfully approved." +
                        "In case of any challenges contact us on 0302634704 or email us at info.trustees@enterprisegroup.com.gh. Enterprise Trustees: " +
                        "Your Advantage!";
                if (fundMasterClient.checkClientIsETlSendSMSHasEmail(new SMSVM(user.getUserDetails().getCellPhone(), message), user)) {
                    mailService.sendEmail(
                            user,
                            EmailTemplatesEnum.CLAIM_STATUS,
                            String.valueOf(benefitRequest.getId()),
                            "successfully approved"
                    );
                }

                //send email to crm
                schemeId = user.getUserDetails().getSchemeId();
                subject = "Benefit pending Authorizationl";
                emailBody = "You have a new benefit request pending Authorization";
                userService.sendCrmEMail(schemeId, subject, emailBody);

                return Response.ok()
                        .entity(SuccessVM
                                .builder()
                                .success(true)
                                .msg("benefit approved")
                                .build())
                        .build();
            } else {
                return Response.status(Response.Status.NOT_FOUND)
                        .entity(ErrorVM
                                .builder()
                                .success(false)
                                .msg("Benefit not Certified")
                                .build())
                        .build();
            }
        }
        return Response.status(Response.Status.NOT_FOUND)
                .entity(ErrorVM
                        .builder()
                        .success(false)
                        .msg("Benefit not found")
                        .build())
                .build();
    }

    @Override
    public Response certifyBenefits(@Valid PostFormByIdVM postFormByIdVM) {
        //List<BenefitRequest> benefitRequests = benefitRequestService.getAll();
//       User user= userService.getUserByMemberId(userRepository.find(benefitRequest.getMemberId());

//        User user = userService.getUserByMemberId(benefitRequest.getMemberId());
        activityTrailService.logActivityTrail(postFormByIdVM.getUserId(), "Certified claims");

        BenefitRequest benefitRequest = benefitRequestRepository.find(postFormByIdVM.getId());


        //check if  benefit is available
        if (benefitRequest != null) {
            if (benefitRequest.isCertify()) {
                return Response.ok()
                        .entity(SuccessVM
                                .builder()
                                .success(true)
                                .msg("Benefit is Already certified!")
                                .build())
                        .build();
            }


            //check if benefit is approved
            benefitRequest.setCertify(true);
            benefitRequest.setStatus(Status.CERTIFIED);
            benefitRequest.setCertifiedBy(postFormByIdVM.getUserId());
            benefitRequest.setDateCertified(LocalDateTime.now());
            benefitRequestRepository.edit(benefitRequest);
            User user = userService.getUserByMemberId(benefitRequest.getMemberId());
            String message = "Dear " + user.getFirstName()
                    + " Your benefit request has been successfully Certified." +
                    "In case of any challenges contact us on 0302634704 or email us at info.trustees@enterprisegroup.com.gh. Enterprise Trustees: " +
                    "Your Advantage!";
            if (fundMasterClient.checkClientIsETlSendSMSHasEmail(new SMSVM(user.getUserDetails().getCellPhone(), message), user)) {
                mailService.sendEmail(
                        user,
                        EmailTemplatesEnum.CLAIM_STATUS,
                        String.valueOf(benefitRequest.getId()),
                        "Successfully Certified"
                );
            }
            return Response.ok()
                    .entity(SuccessVM
                            .builder()
                            .success(true)
                            .msg("benefit certified")
                            .build())
                    .build();
        }
        return Response.status(Response.Status.NOT_FOUND)
                .entity(ErrorVM
                        .builder()
                        .success(false)
                        .msg("Benefit not found")
                        .build())
                .build();
    }

    @Override
    public Response authorizeBenefits(@Valid PostFormByIdVM postFormByIdVM) {

        activityTrailService.logActivityTrail(postFormByIdVM.getUserId(), "Authorized claims");

        BenefitRequest benefitRequest = benefitRequestRepository.find(postFormByIdVM.getId());
        //check if  benefit is available
        if (benefitRequest != null) {

            if (benefitRequest.isAuthorize()) {
                return Response.ok()
                        .entity(SuccessVM
                                .builder()
                                .success(true)
                                .msg("Benefit is Already authorized!")
                                .build())
                        .build();
            }
            //check if benefit is approved and certified
            if (!benefitRequest.isCertify()) {
                return Response.status(Response.Status.NOT_FOUND)
                        .entity(ErrorVM
                                .builder()
                                .success(false)
                                .msg("Benefit not certified")
                                .build())
                        .build();
            } else if (!benefitRequest.isApproved()) {
                return Response.status(Response.Status.NOT_FOUND)
                        .entity(ErrorVM
                                .builder()
                                .success(false)
                                .msg("Benefit not approved")
                                .build())
                        .build();
            } else {
                benefitRequest.setAuthorize(true);
                benefitRequest.setStatus(Status.AUTHORIZED);
                benefitRequest.setAuthorizedById(postFormByIdVM.getUserId());
                benefitRequest.setDateAuthorize(LocalDateTime.now());
                benefitRequestRepository.edit(benefitRequest);
                User user = userService.getUserByMemberId(benefitRequest.getMemberId());
                String message = "Dear " + user.getFirstName()
                        + " Your benefit request has been successfully Authorized." +
                        "In case of any challenges contact us on 0302634704 or email us at info.trustees@enterprisegroup.com.gh. Enterprise Trustees: " +
                        "Your Advantage!";
                if (fundMasterClient.checkClientIsETlSendSMSHasEmail(new SMSVM(user.getUserDetails().getCellPhone(), message), user)) {
                    mailService.sendEmail(
                            user,
                            EmailTemplatesEnum.CLAIM_STATUS,
                            String.valueOf(benefitRequest.getId()),
                            "Successfully Authorized"
                    );
                }

                return Response.ok()
                        .entity(SuccessVM
                                .builder()
                                .success(true)
                                .msg("benefit authorized")
                                .build())
                        .build();
            }
        }
        return Response.status(Response.Status.NOT_FOUND)
                .entity(ErrorVM
                        .builder()
                        .success(false)
                        .msg("Benefit not found")
                        .build())
                .build();
    }

    @Override
    public Response sponsorDeclineBenefits(@Valid BenefitDeclineVM benefitDeclineVM) {
        // User user= userService.getUserByEmail(String.valueOf(userRepository.findOneByEmail(benefitRequest.getEmail())));

        activityTrailService.logActivityTrail(benefitDeclineVM.getUserId(), "Declined claims");

        BenefitRequest benefitRequest = benefitRequestRepository.find(benefitDeclineVM.getId());
        //check if  benefit is available
        if (benefitRequest != null) {
            benefitRequest.setDeclined(true);
            benefitRequest.setApproved(false);
            benefitRequest.setAuthorize(false);
            benefitRequest.setCertify(false);
            benefitRequest.setStatus(Status.DECLINED_BY_SPONSOR);
            benefitRequest.setDateDeclined(LocalDateTime.now());
            benefitRequest.setSponsorDeclineReason(benefitDeclineVM.getReason());
            benefitRequest.setDeclinedById(benefitDeclineVM.getUserId());
            benefitRequestRepository.edit(benefitRequest);
            User user = userService.getUserByMemberId(benefitRequest.getMemberId());
            String message = "Dear " + user.getFirstName()
                    + " Your benefit request has been successfully declined by sponsor because " + benefitDeclineVM.getReason() +
                    "In case of any challenges contact us on 0302634704 or email us at info.trustees@enterprisegroup.com.gh. Enterprise Trustees: " +
                    "Your Advantage!";
            if (fundMasterClient.checkClientIsETlSendSMSHasEmail(new SMSVM(user.getUserDetails().getCellPhone(), message), user)) {
                mailService.sendEmail(
                        user,
                        EmailTemplatesEnum.CLAIM_STATUS,
                        String.valueOf(benefitRequest.getId()),
                        "declined because " + benefitDeclineVM.getReason()
                );
            }

            return Response.ok()
                    .entity(SuccessVM
                            .builder()
                            .success(true)
                            .msg("benefit declined")
                            .build())
                    .build();
        }
        return Response.status(Response.Status.NOT_FOUND)
                .entity(ErrorVM
                        .builder()
                        .success(false)
                        .msg("Benefit not found")
                        .build())
                .build();
    }

    @Override
    public Response CRMDeclineBenefits(@Valid BenefitDeclineVM benefitDeclineVM) {

        activityTrailService.logActivityTrail(benefitDeclineVM.getUserId(), "Declined claims");

        BenefitRequest benefitRequest = benefitRequestRepository.find(benefitDeclineVM.getId());
        //check if  benefit is available
        if (benefitRequest != null) {
            benefitRequest.setDeclined(true);
            benefitRequest.setApproved(false);
            benefitRequest.setAuthorize(false);
            benefitRequest.setCertify(false);
            benefitRequest.setStatus(Status.DECLINED_BY_CRM);
            benefitRequest.setDateDeclined(LocalDateTime.now());
            benefitRequest.setCRMDeclineReason(benefitDeclineVM.getReason());
            benefitRequest.setDeclinedById(benefitDeclineVM.getUserId());
            benefitRequestRepository.edit(benefitRequest);
            User user = userService.getUserByMemberId(benefitRequest.getMemberId());
            String message = "Dear " + user.getFirstName()
                    + " Your benefit request has been successfully declined because " + benefitDeclineVM.getReason() +
                    "In case of any challenges contact us on 0302634704 or email us at info.trustees@enterprisegroup.com.gh. Enterprise Trustees: " +
                    "Your Advantage!";
            if (fundMasterClient.checkClientIsETlSendSMSHasEmail(new SMSVM(user.getUserDetails().getCellPhone(), message), user)) {
                mailService.sendEmail(
                        user,
                        EmailTemplatesEnum.CLAIM_STATUS,
                        String.valueOf(benefitRequest.getId()),
                        "declined because " + benefitDeclineVM.getReason()
                );
            }

            return Response.ok()
                    .entity(SuccessVM
                            .builder()
                            .success(true)
                            .msg("benefit declined")
                            .build())
                    .build();
        }
        return Response.status(Response.Status.NOT_FOUND)
                .entity(ErrorVM
                        .builder()
                        .success(false)
                        .msg("Benefit not found")
                        .build())
                .build();
    }

    @Override
    public Response getBenefitByid(long id) {
        BenefitRequest benefitRequest = benefitRequestRepository.find(id);
        if (benefitRequest != null) {
            return Response.status(Response.Status.OK)
                    .entity(SuccessVM.builder().success(true).data(benefitRequestService.setBenefitRequestExtraDetailsById(benefitRequest)).build())
                    .build();

        }
        return Response.status(Response.Status.NOT_FOUND)
                .entity(ErrorVM.builder().success(false).
                        msg("benefit Not found").build())
                .build();
    }

    @Override
    public Response getBenefitByMemberNo(String memberNO) {
        List<BenefitRequest> benefitRequests = benefitRequestService.getAll();
        return benefitRequests != null ?
                Response
                        .ok()
                        .entity(
                                SuccessVM.builder()
                                        .success(true)
                                        .data(benefitRequestService.setBenefitRequestExtraDetails(benefitRequests)
                                                .stream()
                                                .filter(((benefitRequest) -> benefitRequest.getMemberNo().equals(memberNO))).collect(Collectors.toList()))
                                        .build())
                        .build()
                :
                Response.status(Response.Status.BAD_REQUEST)
                        .entity(ErrorVM.builder().success(false).msg("No benefits found").build())
                        .build();
    }

    @Override
    public Response authorizeAndPushBenefitsToFM(@Valid PostFormByIdVM postFormByIdVM) {


        activityTrailService.logActivityTrail(postFormByIdVM.getUserId(), "Authorized and forwarded claims tp Fundmaster");

        BenefitRequest benefitRequest = benefitRequestRepository.find(postFormByIdVM.getId());
        //check if  benefit is available
        if (benefitRequest != null) {
            //check if benefit is approved and certified
            if (!benefitRequest.isCertify()) {
                return Response.status(Response.Status.NOT_FOUND)
                        .entity(ErrorVM
                                .builder()
                                .success(false)
                                .msg("Benefit not certified")
                                .build())
                        .build();
            } else if (!benefitRequest.isApproved()) {
                return Response.status(Response.Status.NOT_FOUND)
                        .entity(ErrorVM
                                .builder()
                                .success(false)
                                .msg("Benefit not approved")
                                .build())
                        .build();
            } else {
                benefitRequest.setAuthorize(true);
                benefitRequest.setStatus(Status.AUTHORIZED);
                benefitRequest.setAuthorizedById(postFormByIdVM.getUserId());
                benefitRequest.setDateAuthorize(LocalDateTime.now());
                benefitRequestRepository.edit(benefitRequest);

                //call save method
                return saveBenefitsFM(postFormByIdVM);
            }
        }
        return Response.status(Response.Status.NOT_FOUND)
                .entity(ErrorVM
                        .builder()
                        .success(false)
                        .msg("Benefit not found")
                        .build())
                .build();

    }

    @Override
    public Response authorizeAndPushBenefitsToFMPO(@Valid PostFormByIdVM postFormByIdVM) {
        BenefitRequest benefitRequest = benefitRequestRepository.find(postFormByIdVM.getId());
        if (benefitRequest != null) {
            benefitRequest.setApproved(true);
            benefitRequest.setDeclined(false);
            benefitRequest.setStatus(Status.APPROVED);
            benefitRequest.setDateApproved(LocalDateTime.now());
            benefitRequest.setApprovedById(postFormByIdVM.getUserId());
            benefitRequest.setCertify(true);
            benefitRequest.setStatus(Status.CERTIFIED);
            benefitRequest.setCertifiedBy(postFormByIdVM.getUserId());
            benefitRequest.setDateCertified(LocalDateTime.now());
            benefitRequest.setAuthorize(true);
            benefitRequest.setStatus(Status.AUTHORIZED);
            benefitRequest.setAuthorizedById(postFormByIdVM.getId());
            benefitRequest.setDateAuthorize(LocalDateTime.now());

            benefitRequestRepository.edit(benefitRequest);

            //call save method
            return saveBenefitsFM(postFormByIdVM);

        }
        return ErrorMsg("Failed, please try again");
    }

    @Override
    public Response getRecentClaims(int start, int size) {
        List<BenefitRequest> benefitRequests = benefitRequestService.getAll()
                .stream().filter(benefitRequest -> benefitRequest.isApproved() && benefitRequest.isCertify() && !benefitRequest.isAuthorize()).collect(Collectors.toList());
        if (benefitRequests.size() > 0) {
            if (benefitRequests.size() > 6) {
                return Response
                        .ok()
                        .entity(
                                SuccessVM.builder()
                                        .success(true)
                                        .data(benefitRequestService.setBenefitRequestExtraDetails(benefitRequests.subList(start, size)))
                                        .build())
                        .build();
            } else {
                return Response
                        .ok()
                        .entity(
                                SuccessVM.builder()
                                        .success(true)
                                        .data(benefitRequestService.setBenefitRequestExtraDetails(benefitRequests))
                                        .build())
                        .build();
            }
        }

        return Response.status(Response.Status.BAD_REQUEST)
                .entity(ErrorVM.builder().success(false).msg("No benefits found").build())
                .build();
    }

    @Override
    public Response getCountOfPendingClaims() throws IOException {
        long count = benefitRequestService.getCountOfPendingClaims();
        ObjectMapper objectMapper = new ObjectMapper();
        JsonObject jsonObject = Json.createObjectBuilder()
                .add("count", count)
                .build();
        return Response.status(Response.Status.OK)
                .entity(SuccessVM.builder().success(true).data(objectMapper.readValue(jsonObject.toString(), Object.class)).build())
                .build();
    }

    @Override
    public Response SearchBenefitRequest(String name) {
        return Response.ok()
                .entity(
                        SuccessVM.builder()
                                .success(true)
                                .data(benefitRequestService.setBenefitRequestExtraDetailsById(benefitRequestRepository.searchABenefitRequest(name)))
                                .build()
                ).build();
    }

}
