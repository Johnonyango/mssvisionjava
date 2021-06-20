package com.systech.mss.controller;

import com.systech.mss.controller.vm.MemberEditVM;
import com.systech.mss.controller.vm.SearchMemberDetailsVm;
import com.systech.mss.vm.UploadMemberDocumentVM;
import com.systech.mss.vm.benefitrequest.AddBeneficiaryVM;
import com.systech.mss.vm.benefitrequest.MakeContributionStkVM;
import org.eclipse.microprofile.metrics.annotation.Timed;
import org.eclipse.microprofile.openapi.annotations.Operation;
import org.eclipse.microprofile.openapi.annotations.responses.APIResponse;
import org.jboss.resteasy.plugins.providers.multipart.MultipartFormDataInput;
import org.json.simple.parser.ParseException;

import javax.validation.Valid;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.io.IOException;

@Path("/api")
public interface FMMemberController {

    @Timed
    @Operation(summary = "get single row member details from fundmaster")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/getMemberDetailsSingle/{mssUserId}/{memberId}")
    Response getMemberDetailsSingle(@PathParam("mssUserId") long mssUserId, @PathParam("memberId") long memberId) throws IOException;

    @Timed
    @Operation(summary = "get single row member details from fundmaster")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/getmemberdetailsbyschemeandemail/{mssUserId}/{schemeId}/{email}")
    Response getMemberDetailsBySchemeAndEmail(@PathParam("mssUserId") long mssUserId, @PathParam("schemeId") long schemeId, @PathParam("email") String email);

    @Timed
    @Operation(summary = "searchMemberDetails")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Path("/searchMemberDetails")
    Response searchMemberDetails(@Valid SearchMemberDetailsVm searchMemberDetailsVm);

    @Timed
    @Operation(summary = "get all member  details from fundmaster")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/getMemberDetailsAll/{mssUserId}/{memberId}")
    Response getMemberDetailsAll(@PathParam("mssUserId") long mssUserId, @PathParam("memberId") long memberId);

    @Timed
    @Operation(summary = "get summary of user balances from fundmaster")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/getmemberschemes/{mssUserId}/{identifierValue}/{emailPhone}/{profile}")
    Response getMemberSchemes(@PathParam("mssUserId") long mssUserId, @PathParam("identifierValue") String identifierValue, @PathParam("emailPhone") String emailPhone, @PathParam("profile") String profile);

    @Timed
    @Operation(summary = "get summary of user balances from fundmaster")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/getMemberBankDetails/{mssUserId}/{memberId}")
    Response getMemberBankDetails(@PathParam("mssUserId") long mssUserId, @PathParam("memberId") long memberId);

    @Timed
    @Operation(summary = "get summary of user balances from fundmaster")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/getSummary/{mssUserId}/{memberId}")
    Response getSummary(@PathParam("mssUserId") long mssUserId, @PathParam("memberId") long memberId);

    @Timed
    @Operation(summary = "request statement from fundmaster")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/requestStatement/{mssUserId}/{memberId}/{schemeId}/{fromDate}/{toDate}")
    Response requestStatement(@PathParam("mssUserId") long mssUserId, @PathParam("memberId") long memberId, @PathParam("schemeId") long schemeId, @PathParam("fromDate") String fromDate, @PathParam("toDate") String toDate);

    @Timed
    @Operation(summary = "request statement from fundmaster")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/sendMemberStatement/{mssUserId}/{memberId}/{schemeId}/{date}")
    Response sendMemberStatement(@PathParam("mssUserId") long mssUserId, @PathParam("memberId") long memberId, @PathParam("schemeId") long schemeId, @PathParam("date") String date);

    @Timed
    @Operation(summary = "get member balance from fundmaster")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/getClosingBalancesSummary/{mssUserId}/{memberId}")
    Response getClosingBalancesSummary(@PathParam("mssUserId") long mssUserId, @PathParam("memberId") long memberId);

    @Timed
    @Operation(summary = "get member balance from fundmaster")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/getClosingBalances/{mssUserId}/{memberId}")
    Response getClosingBalances(@PathParam("mssUserId") long mssUserId, @PathParam("memberId") long memberId);

    @Timed
    @Operation(summary = "get Recent Contributions from fundmaster")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/getRecentContributions/{mssUserId}/{memberId}/{schemeId}")
    Response getRecentContributions(@PathParam("mssUserId") long mssUserId, @PathParam("memberId") long memberId, @PathParam("schemeId") long schemeId);

    @Timed
    @Operation(summary = "get Recent Contributions from fundmaster")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/getPersonalInfo/{mssUserId}/{memberId}")
    Response getPersonalInfo(@PathParam("mssUserId") long mssUserId, @PathParam("memberId") long memberId) throws IOException;

    @Timed
    @Operation(summary = "get Beneficiaries from fundmaster")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/getBeneficiaries/{mssUserId}/{memberId}")
    Response getBeneficiaries(@PathParam("mssUserId") long mssUserId, @PathParam("memberId") long memberId) throws IOException;

    @Timed
    @Operation(summary = "get Beneficiaries from fundmaster")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/getBeneficiariesChart/{mssUserId}/{memberId}")
    Response getBeneficiariesChart(@PathParam("mssUserId") long mssUserId, @PathParam("memberId") long memberId) throws IOException;

    @Timed
    @Operation(summary = "get Beneficiaries from fundmaster")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/checkIfCanAddBeneficiaries/{mssUserId}/{memberId}")
    Response checkIfCanAddBeneficiaries(@PathParam("mssUserId") long mssUserId, @PathParam("memberId") long memberId);

    @Timed
    @Operation(summary = "add Beneficiary from fundmaster")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/addBeneficiary/{mssUserId}/")
    Response addBeneficiary(@PathParam("mssUserId") long mssUserId, @Valid AddBeneficiaryVM addBeneficiaryVM);

    @Timed
    @Operation(summary = "approveDeclineDeleteStagedBeneficiaryDetails")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/approveBeneficiary/{mssUserId}/{id}/{action}")
    Response approveBeneficiary(@PathParam("mssUserId") long mssUserId, @PathParam("id") long id, @PathParam("action") String action);

    @Timed
    @Operation(summary = "get Contributions from fundmaster")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/getContributions/{mssUserId}/{memberId}/{schemeId}")
    Response getContributions(@PathParam("mssUserId") long mssUserId, @PathParam("memberId") long memberId, @PathParam("schemeId") long schemeId);

    @Timed
    @Operation(summary = "get Contributions from fundmaster")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/getContributionsSummary/{mssUserId}/{memberId}/{schemeId}")
    Response getContributionsSummary(@PathParam("mssUserId") long mssUserId, @PathParam("memberId") long memberId, @PathParam("schemeId") long schemeId);

    @Timed
    @Operation(summary = "filter Contributions from fundmaster")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/filterContributions/{mssUserId}/{memberId}/{fromDate}/{toDate}")
    Response filterContributions(@PathParam("mssUserId") long mssUserId, @PathParam("memberId") long memberId, @PathParam("fromDate") String fromDate, @PathParam("toDate") String toDate);

    @Timed
    @Operation(summary = "make Contribution from fundmaster")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/makeContribution/{mssUserId}/")
    Response makeContribution(@PathParam("mssUserId") long mssUserId, @Valid MakeContributionStkVM makeContributionStkVM);

    @Timed
    @Operation(summary = "get Balances from fundmaster")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/getBalances/{mssUserId}/{memberId}/{count}")
    Response getBalances(@PathParam("mssUserId") long mssUserId, @PathParam("memberId") long memberId, @PathParam("count") int count);

    @Timed
    @Operation(summary = "get Balances As AtT oday from fundmaster")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/getBalancesAsAtToday/{mssUserId}/{memberId}/{schemeId}")
    Response getBalancesAsAtToday(@PathParam("mssUserId") long mssUserId, @PathParam("memberId") long memberId, @PathParam("schemeId") long schemeId);

    @Timed
    @Operation(summary = "get Claims from fundmaster")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/getClaims/{mssUserId}/{memberId}")
    Response getClaims(@PathParam("mssUserId") long mssUserId);

    @Timed
    @Operation(summary = "initiate Claim from fundmaster")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/initiateClaim/{mssUserId}/{memberId}")
    Response initiateClaim(@PathParam("mssUserId") long mssUserId);

    @Timed
    @Operation(summary = "projection from fundmaster")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/projections/{mssUserId}/{memberId}")
    Response projections(@PathParam("mssUserId") long mssUserId);

    @Timed
    @Operation(summary = "calculateWhatIfAnalysis from fundmaster")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/calculateWhatIfAnalysis/{mssUserId}/{schemeId}/{memberId}/{avcReceiptOption}/{ageAtExit}/{returnRate}/{salaryEscalationRate}/{projectedAvc}/{inflationRate}")
    Response calculateWhatIfAnalysis(
            @PathParam("mssUserId") long mssUserId,
            @PathParam("schemeId") long schemeId,
            @PathParam("memberId") long memberId,
            @PathParam("avcReceiptOption") String avcReceiptOption,
            @PathParam("ageAtExit") int ageAtExit,
            @PathParam("returnRate") double returnRate,
            @PathParam("salaryEscalationRate") double salaryEscalationRate,
            @PathParam("projectedAvc") long projectedAvc,
            @PathParam("inflationRate") long inflationRate
    );

    @Timed
    @Operation(summary = "request Member Certificate from fundmaster")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/requestMemberCertificate/{mssUserId}/{memberId}")
    Response requestMemberCertificate(@PathParam("mssUserId") long mssUserId, @PathParam("memberId") long memberId);


    @Timed
    @Operation(summary = "getReasonsForExit")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/getReasonsForExit/{mssUserId}")
    Response getReasonsForExit(@PathParam("mssUserId") long mssUserId);

    @Timed
    @Operation(summary = "getReasonForExitById")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/getReasonForExitById/{mssUserId}/{id}")
    Response getReasonForExitById(@PathParam("mssUserId") long mssUserId, @PathParam("id") long id);

    @Timed
    @Operation(summary = "activity Log")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/activityLog/{mssUserId}")
    Response activityLog(@PathParam("mssUserId") long mssUserId);

    @Timed
    @Operation(summary = "getMemberLoans")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/getMemberLoans/{mssUserId}/{memberId}")
    Response getMemberLoans(@PathParam("mssUserId") long mssUserId, @PathParam("memberId") long memberId);

    @Timed
    @Operation(summary = "getMissingDocuments")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/getmissingdocuments/{mssUserId}/{memberId}")
    Response getMissingDocuments(@PathParam("mssUserId") long mssUserId, @PathParam("memberId") long memberId);

    @Timed
    @Operation(summary = "getSubmittedDocuments")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/getsubmitteddocuments/{mssUserId}/{memberId}")
    Response getSubmittedDocuments(@PathParam("mssUserId") long mssUserId, @PathParam("memberId") long memberId);

    @Timed
    @Operation(summary = "checkSubmittedDocuments")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/checkSubmittedDocuments/{mssUserId}/{memberId}")
    Response checkSubmittedDocuments(@PathParam("mssUserId") long mssUserId, @PathParam("memberId") long memberId);

    @Timed
    @Operation(summary = "getPayBill")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/getPayBill/{mssUserId}")
    Response getPayBill(@PathParam("mssUserId") long mssUserId);

    @Timed
    @Operation(summary = "getAllAccountingPeriods")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/getAllAccountingPeriods/{mssUserId}/{schemedId}")
    Response getAllAccountingPeriods(@PathParam("mssUserId") long mssUserId, @PathParam("schemedId") String schemedId);

    @Timed
    @Operation(summary = "getMemberStatement")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/getMemberStatement/{mssUserId}/{memberId}/{apId}/{schemeId}")
    /**
     * apId is Accounting Period Id
     */
    Response getMemberStatement(@PathParam("mssUserId") long mssUserId, @PathParam("memberId") long memberId, @PathParam("apId") long apId, @PathParam("schemeId") long schemeId);

    @Timed
    @Operation(summary = "member Submit Required Document")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/memberSubmitRequiredDocument/{mssUserId}")
    Response memberSubmitRequiredDocument(@PathParam("mssUserId") long mssUserId, @Valid UploadMemberDocumentVM uploadMemberDocumentVM);

    @Timed
    @Operation(summary = "member Submit Required Document")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @POST
    @Consumes(MediaType.MULTIPART_FORM_DATA)
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/memberUploadRequiredDocument/{mssUserId}/{memberId}/{record}")
    Response memberUploadRequiredDocument(@PathParam("mssUserId") long mssUserId, @PathParam("memberId") long memberId, @PathParam("record") String record, MultipartFormDataInput input);

    @Timed
    @Operation(summary = "getCurrentMonthlyContributionAndBasicSalary")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/getCurrentMonthlyContributionAndBasicSalary/{mssUserId}/{memberId}/{schemeId}")
    Response getCurrentMonthlyContributionAndBasicSalary(@PathParam("mssUserId") long mssUserId, @PathParam("memberId") long memberId, @PathParam("schemeId") long schemeId);


    @Timed
    @Operation(summary = "projection from fundmaster")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/mpesaCallBack")
    Response mpesaCallBack(String s);

    @Timed
    @Operation(summary = "projection from fundmaster")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/pushContributionToXe/{mssUserid}/{stageCotributionId}")
    Response pushContributionToXe(@PathParam("mssUserid") long mssUserId, @PathParam("stageCotributionId") long stageCotributionId);

    @Timed
    @Operation(summary = "projection from fundmaster")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/mpesaTimeoutCallBack")
    Response mpesaTimeoutCallBack(String s);

    @Timed
    @Operation(summary = "getStagedMemberDetails all")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/getStagedMemberDetails")
    Response getStagedMemberDetailsAll();

    @Timed
    @Operation(summary = "getStagedMemberDetails single")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/getStagedMemberDetails/{id}")
    Response getStagedMemberDetailsSingle(@PathParam("id") long id);

    @Timed
    @Operation(summary = "Edit member details on fundmaster")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Path("/editMemberDetails/{memberId}")
    Response editMemberDetails(@PathParam("memberId") long memberId, @Valid MemberEditVM memberEditVM);

    @Timed
    @Operation(summary = "Upload docs Edit member details on fundmaster")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.MULTIPART_FORM_DATA)
    @Path("/editMemberDetailsUploadDocs/{recordId}")
    Response editMemberDetailsUploadDocs(@PathParam("recordId") long recordId, MultipartFormDataInput input);


    @Timed
    @Operation(summary = "approve stagedMemberDetails ")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/stagedMemberDetails/approve/{mssUserId}/{id}")
    Response approveStageMemberDetails(@PathParam("mssUserId") long mssUserId, @PathParam("id") long id);

    @Timed
    @Operation(summary = "decline stagedMemberDetails ")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/stagedMemberDetails/decline/{mssUserId}/{id}")
    Response declineStageMemberDetails(@PathParam("mssUserId") long mssUserId, @PathParam("id") long id);

    @Timed
    @Operation(summary = "getAllStagedContributions")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/getStagedContributions/{mssUserId}")
    Response getAllStagedContributions(@PathParam("mssUserId") long mssUserId);

    @Timed
    @Operation(summary = "getPortalLegibility")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/getPortalLegibility/{memberId}")
    Response getPortalLegibility(@PathParam("memberId") long memberId) throws IOException, ParseException;

    @Timed
    @Operation(summary = "GET MEMBER SPONSORS")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/getMemberProducts/{login}/{schemeId}") //login ie see users table
    Response GET_MEMBER_PRODUCTS(@PathParam("login") String login, @PathParam("schemeId") long schemeId);

    @Timed
    @Operation(summary = "preserve Account")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/preserveAccount/{mssUserId}/{memberId}/{schemeId}")
    Response preserveAccount(@PathParam("mssUserId") long mssUserId, @PathParam("memberId") long memberId, @PathParam("schemeId") long schemeId);


    @Timed
    @Operation(summary = "check member KYC")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/memberKYCCheck/{memberId}/{schemeId}")
    Response memberKYCCheck(@PathParam("memberId") long memberId, @PathParam("schemeId") long schemeId);




    @Timed
    @Operation(summary = "check member KYC")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/checkIfMemberHasGenericDoB/{memberId}")
    Response checkIfMemberHasGenericDoB(@PathParam("memberId") long memberId);

    @Timed
    @Operation(summary = "getMemberAccountDetails")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/getMemberAccountDetails/{memberId}/{schemeId}")
    Response getMemberAccountDetails(@PathParam("memberId") long memberId, @PathParam("schemeId") long schemeId);

    @Timed
    @Operation(summary = "getMemberAccountDetails")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/CHECK_IF_IDNUMBER_EXIST/{employerREFNo}/{idNumber}/{idType}")
    Response CHECK_IF_IDNUMBER_EXIST(@PathParam("employerREFNo") String employerREFNo, @PathParam("idNumber") String idNumber, @PathParam("idType") String idType);

    @Timed
    @Operation(summary = "getMemberAccountDetails")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/getStagedBeneficiaries/{mssUserId}")
    Response getStagedBeneficiaries(@PathParam("mssUserId") long mssUserId);


    @Timed
    @Operation(summary = "Upload File")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @POST
    @Path("/uploadBeneficiaryDocuments/{recordId}")
    @Consumes(MediaType.MULTIPART_FORM_DATA)
    @Produces(MediaType.APPLICATION_JSON)
    Response uploadBeneficiaryDocuments(@PathParam("recordId") long recordId, MultipartFormDataInput input) throws ParseException;

}
