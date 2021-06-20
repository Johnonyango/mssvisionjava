package com.systech.mss.controller;

import com.systech.mss.controller.vm.BenefitDeclineVM;
import com.systech.mss.controller.vm.PostFormByIdVM;
import com.systech.mss.vm.benefitrequest.*;
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
public interface BenefitRequestController {

    @Timed
    @Operation(summary = "Upload File")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @POST
    @Path("/benefitRequest/uploadClaimDocuments/{mssuserid}")
    @Consumes(MediaType.MULTIPART_FORM_DATA)
    @Produces(MediaType.APPLICATION_JSON)
    Response uploadClaimDocuments(@PathParam("mssuserid") long mssuserid, MultipartFormDataInput input) throws ParseException;

    @Timed
    @Operation(summary = "get single row member details from fundmaster")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/benefitRequest/getMemberBenefitRequests/{mssUserId}/{memberId}")
    Response getMemberBenefitRequests(@PathParam("mssUserId") long mssUserId, @PathParam("memberId") long memberId);

    @Timed
    @Operation(summary = "save Personal Details to MSS")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/benefitRequest/savePersonalDetails/{mssUserId}/{memberId}")
    Response savePersonalDetails(@PathParam("mssUserId") long mssUserId, @PathParam("memberId") long memberId, @Valid PersonalDetailsVM personalDetailsVM); //step one

    @Timed
    @Operation(summary = "save Ground Of Benefits To Mss")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/benefitRequest/saveGroundOfBenefits/{mssUserId}/{memberId}")
    Response saveGroundOfBenefits(@PathParam("mssUserId") long mssUserId,@PathParam("memberId") long memberId,  @Valid GroundOfBenefits groundOfBenefits); //step one


    @Timed
    @Operation(summary = "Get documents for reason for exit")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/benefitRequest/getDocumentsForReasonOfExit/{mssUserId}/{reasonForExitId}")
    Response getDocumentsForReasonOfExit(@PathParam("mssUserId") long mssUserId, @PathParam("reasonForExitId") long reasonForExitId);

    @Timed
    @Operation(summary = "get single row member details from fundmaster")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/benefitRequest/updateSetDocumentsUploaded/{mssUserId}/{recordId}")
    Response updateSetDocumentsUploaded(@PathParam("mssUserId") long mssUserId, @PathParam("recordId") long recordId);


    @Timed
    @Operation(summary = "save Ground Of Benefits To Mss")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/benefitRequest/saveMedicalReasons/{mssUserId}")
    Response saveMedicalReasons(@PathParam("mssUserId") long mssUserId, @Valid MedicalReasons medicalReasons);

    @Timed
    @Operation(summary = "save Ground Of Benefits To Mss")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/benefitRequest/savePaymentOptions/{mssUserId}")
    Response savePaymentOptions(@PathParam("mssUserId") long mssUserId, @Valid PaymentOptionsVM paymentOptionsVM); //step four

    @Timed
    @Operation(summary = "save Ground Of Benefits To Mss")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/benefitRequest/checkVestingLiabilities/{mssUserId}/{id}")
    Response checkVestingLiabilities(@PathParam("mssUserId") long mssUserId, @PathParam("id") long id);


    @Timed
    @Operation(summary = "save Ground Of Benefits To Mss")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/benefitRequest/saveBankDetails/{mssUserId}")
    Response saveBankDetails(@PathParam("mssUserId") long mssUserId, @Valid BankDetailsVM bankDetailsVM);//step six

    @Timed
    @Operation(summary = "save Ground Of Benefits To Mss")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/benefitRequest/finishSavingBenefitRequest/{mssUserId}/{reqId}")
    Response finishSavingBenefitRequest(@PathParam("mssUserId") long mssUserId, @PathParam("reqId") long reqId);

    @Timed
    @Operation(summary = "save Ground Of Benefits To Mss")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/benefitRequest/finishSavingBenefitRequestPo/{mssUserId}/{reqId}")
    Response finishSavingBenefitRequestPo(@PathParam("mssUserId") long mssUserId, @PathParam("reqId") long reqId);


    @Timed
    @Operation(summary = "get benefits from members by scheme id and sponsor id")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/benefitRequest/getBenefitsBySchemeIdAndSponsorId/{schemeId}/{sponsorId}")
    Response getBenefitsBySchemeIdAndSponsorId(@PathParam("schemeId") long schemeId, @PathParam("sponsorId") long sponsorId);


    @Timed
    @Operation(summary = "get benefits from members by scheme id and sponsor id")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/benefitRequest/getBenefitsBySchemeId/{mssUserId}/{schemeId}")
    Response getBenefitsBySchemeId(@PathParam("mssUserId") long mssUserId,@PathParam("schemeId") long schemeId);


    @Timed
    @Operation(summary = "get  all benefits ")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/benefitRequest/getAllBenefits/{mssUserId}")
    Response getAllBenefits(@PathParam("mssUserId") long mssUserId);

    @Timed
    @Operation(summary = "get  all benefits ")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/benefitRequest/getAllUnAuthorizedBenefits/{mssUserId}")
    Response getAllUnAuthorizedBenefits(@PathParam("mssUserId") long mssUserId);

    @Timed
    @Operation(summary = "get  all benefits ")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/benefitRequest/saveBenefitsFM")
    Response saveBenefitsFM(@Valid PostFormByIdVM postFormByIdVM);

    @Timed
    @Operation(summary = "approve benefits ")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/benefitRequest/approveBenefits")
    Response approveBenefits(@Valid PostFormByIdVM postFormByIdVM);

    @Timed
    @Operation(summary = "certify benefits ")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/benefitRequest/certifyBenefits")
    Response certifyBenefits(@Valid PostFormByIdVM postFormByIdVM);

    @Timed
    @Operation(summary = "authorize benefits ")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/benefitRequest/authorizeBenefits")
    Response authorizeBenefits(@Valid PostFormByIdVM postFormByIdVM);

    @Timed
    @Operation(summary = "approve benefits ")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/benefitRequest/sponsorDeclineBenefits")
    Response sponsorDeclineBenefits(@Valid BenefitDeclineVM benefitDeclineVM);

    @Timed
    @Operation(summary = "approve benefits ")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/benefitRequest/CRMDeclineBenefits")
    Response CRMDeclineBenefits(@Valid BenefitDeclineVM benefitDeclineVM);

    @Timed
    @Operation(summary = "get benefit by id")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/benefitRequest/{id}")
    Response getBenefitByid(@PathParam("id") long id);

    @Timed
    @Operation(summary = "get benefit by id")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/benefitRequest/getBenefitByMemberNo/{memberNO}")
    Response getBenefitByMemberNo(@PathParam("memberNO") String memberNO);

    @Timed
    @Operation(summary = "approve authorize and push benefits to fundmaster")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/benefitRequest/authorizeAndPushBenefitsToFM")
    Response authorizeAndPushBenefitsToFM(@Valid PostFormByIdVM postFormByIdVM);

    @Timed
    @Operation(summary = "approve authorize and push benefits to fundmaster")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/benefitRequest/authorizeAndPushBenefitsToFMPO")
    Response authorizeAndPushBenefitsToFMPO(@Valid PostFormByIdVM postFormByIdVM);

    @Timed
    @Operation(summary = "get Recent Claims ")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/benefitRequest/getRecentClaims/{start}/{size}")
    Response getRecentClaims(@PathParam("start") int start, @PathParam("size") int size);

    @Timed
    @Operation(summary = "get count of pending claims ")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/benefitRequest/getCountOfPendingClaims")
    Response getCountOfPendingClaims() throws IOException;

    @GET
    @Path("/benefitRequest/search/{name}")
    @Produces(MediaType.APPLICATION_JSON)
    Response SearchBenefitRequest(@PathParam("name") String name);
}
