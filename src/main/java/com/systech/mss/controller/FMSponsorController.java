package com.systech.mss.controller;

import com.systech.mss.controller.vm.BillRequestVM;
import com.systech.mss.controller.vm.PotentialMemberVM;
import com.systech.mss.controller.vm.SearchSponsorDetailsVM;
import com.systech.mss.controller.vm.SponsorIdAndMemberIdVm;
import org.eclipse.microprofile.metrics.annotation.Timed;
import org.eclipse.microprofile.openapi.annotations.Operation;
import org.eclipse.microprofile.openapi.annotations.responses.APIResponse;
import org.json.simple.parser.ParseException;

import javax.validation.Valid;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.io.IOException;
import java.util.Date;

@Path("/api")
public interface FMSponsorController {

    @Timed
    @Operation(summary = "get sponsor details from fundmaster")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @Path("/get-sponsor-details/{mssuserid}/{sponsorRefNo}")
    @GET
    @Produces({MediaType.APPLICATION_JSON})
    Response getSponsorDetails(@PathParam("mssuserid") long mssuserid, @PathParam("sponsorRefNo") String sponsorRefNo);

    @Timed
    @Operation(summary = "get contribution bills per sponsor from fundmaster")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @Path("/get-contribution-bills-per-sponsor/{mssuserid}/{schemeId}/{sponsorId}")
    @GET
    @Produces({MediaType.APPLICATION_JSON})
    Response getContributionBillsPerSponsor(@PathParam("mssuserid") long mssuserid, @PathParam("schemeId") long schemeId, @PathParam("sponsorId") long sponsorId, @QueryParam("start") int start,
                                            @QueryParam("size") int size );

    @Timed
    @Operation(summary = "get contribution bills per sponsor from fundmaster")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @Path("/filter-contribution-bills-per-sponsor/{mssuserid}/{schemeId}/{sponsorId}/{dateFrom}/{dateTo}")
    @GET
    @Produces({MediaType.APPLICATION_JSON})
    Response filterContributionBillsPerSponsor(@PathParam("mssuserid") long mssuserid, @PathParam("schemeId") long schemeId, @PathParam("sponsorId") long sponsorId, @PathParam("dateFrom") Date dateFrom,@PathParam("dateTo") Date dateTo,@QueryParam("start") int start,
                                               @QueryParam("size") int size );

    @Timed
    @Operation(summary = "get contribution bills per sponsor from fundmaster")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @Path("/search-contribution-bills-per-sponsor/{mssuserid}/{schemeId}/{sponsorId}/{searchKey}")
    @GET
    @Produces({MediaType.APPLICATION_JSON})
    Response searchContributionBillsPerSponsor(@PathParam("mssuserid") long mssuserid, @PathParam("schemeId") long schemeId, @PathParam("sponsorId") long sponsorId, @PathParam("searchKey") String searchKey ,@QueryParam("start") int start,
                                               @QueryParam("size") int size );

    @Timed
    @Operation(summary = "get contribution summary per sponsor from fundmaster")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @Path("/get-contribution-bills-summary/{mssuserid}/{schemeId}/{sponsorId}")
    @GET
    @Produces({MediaType.APPLICATION_JSON})
    Response getContributionsBillsSummary(@PathParam("mssuserid") long mssuserid, @PathParam("schemeId")
            long schemeId, @PathParam("sponsorId") long sponsorId ,@QueryParam("start") int start,
    @QueryParam("size") int size) throws IOException, ParseException;

    @Timed
    @Operation(summary = "get members due for retirement per sponsor from fundmaster")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @Path("/get-members-due-for-retirement/{id}/{profileId}")
    @GET
    @Produces({MediaType.APPLICATION_JSON})
    Response getMembersDueForRetirementPerSponsor(@PathParam("id") Long id ,@ PathParam("profileId") Long profileId);

    @Timed
    @Operation(summary = "search for sponsor member details from fundmaster")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @Path("/search-for-sponsor-member-details/{identifierValue}/{value}/{profile}/{sponsorId}/{schemeId}")
    @GET
    @Produces({MediaType.APPLICATION_JSON})
    Response searchForSponsorMemberDetails(@PathParam("identifierValue") String identifierValue ,@PathParam("value") String value, @PathParam("profile") String profile, @PathParam("sponsorId") String sponsorId, @PathParam("schemeId") String schemeId);

    @Timed
    @Operation(summary = "search for sponsor member details from fundmaster")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @Path("/check-id-number-exits/{sponsorId}/{idType}/{idnumber}/{isSponsorId}")
    @GET
    @Produces({MediaType.APPLICATION_JSON})
    Response checkIdnumberExits(@PathParam("sponsorId") String sponsorId ,@PathParam("idType") String idType, @PathParam("idnumber") String idnumber, @PathParam("isSponsorId") String isSponsorId);

    @Timed
    @Operation(summary = "get sponsor potential members from fundmaster")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @Path("/get-sponsor-potential-members/{schemeId}/{sponsorId}")
    @GET
    @Produces({MediaType.APPLICATION_JSON})
    Response getSponsorPotentialMembers(@PathParam("schemeId") Long schemeId ,@PathParam("sponsorId") Long sponsorId );

    @Timed
    @Operation(summary = "get scheme sponsor id from fundmaster")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @Path("/getschemesponsorid/{schemeId}/{profileId}")
    @GET
    @Produces({MediaType.APPLICATION_JSON})
    Response getschemesponsorid(@PathParam("schemeId") Long schemeId ,@PathParam("profileId") Long profileId );

    @Timed
    @Operation(summary = "get receipts of sponsor from fundmaster")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @Path("/get-sponsor-contributions-receipts/{mssuserid}/{schemeId}/{sponsorId}")
    @GET
    @Produces({MediaType.APPLICATION_JSON})
    Response getSponsorContributionsReceipts(@PathParam("mssuserid") long mssuserid,@PathParam("schemeId") long schemeId ,@PathParam("sponsorId") String sponsorId);

    @Timed
    @Operation(summary = "get scheme sponsor id from fundmaster")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @Path("/get-sponsor-member-listing/{mssuserid}/{id}/{profile}/{schemeId}")
    @GET
    @Produces({MediaType.APPLICATION_JSON})
    Response getSponsorMemberListing(@PathParam("mssuserid") long mssuserid,
                                     @PathParam("id") long id ,
                                     @PathParam("profile") String profile,
                                     @PathParam("schemeId") long schemeId ,
                                     @QueryParam("start") int start,
                                     @QueryParam("size") int size);

    @Timed
    @Operation(summary = "get member count of sponsor  from fundmaster")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @Path("/get-sponsor-member-listing-count/{id}/{profile}/{schemeId}")
    @GET
    @Produces({MediaType.APPLICATION_JSON})
    Response getSponsorMemberListingCount(@PathParam("id") Long id ,
                                     @PathParam("profile") String profile,
                                     @PathParam("schemeId") Long schemeId
                                      ) throws IOException;

    @Timed
    @Operation(summary = "get summary of sponsor schemes from fundmaster")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/sponsor/schemes/{sponsorId}")
    Response getSponsorMemberSchemes(@PathParam("sponsorId") long sponsorId);


    @Timed
    @Operation(summary = "get summary of sponsor schemes from fundmaster")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/get-sponsor-member-classes/{sponsorId}")
    Response getSponsorMemberClasses(@PathParam("sponsorId") long sponsorId);

    @Timed
    @Operation(summary = "get summary of sponsor schemes from fundmaster")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/get-sponsor-company-cost-centres/{sponsorId}")
    Response getSponsorCompanyCostCentres(@PathParam("sponsorId") long sponsorId);

    @Timed
    @Operation(summary = "get summary of sponsor schemes from fundmaster")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/sponsor/getSponsorMemberAndPensionerCount/{sponsorRefNo}")
    Response getSponsorMemberAndPensionerCount(@PathParam("sponsorRefNo") String sponsorRefNo) throws IOException;

    @Timed
    @Operation(summary = "book contribution bill to fundmaster")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @Path("/bookContributionBill/{mssuserid}")
    @POST
    @Produces({MediaType.APPLICATION_JSON})
    Response bookContributionBill(@PathParam("mssuserid") long mssuseerid, @Valid BillRequestVM billRequestVM);

    @Timed
    @Operation(summary = "save member from sponsor to fundmaster")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @Path("/savePotentialMember")
    @POST
    @Produces({MediaType.APPLICATION_JSON})
    @Consumes({MediaType.APPLICATION_JSON})
    Response savePotentialMember(@Valid PotentialMemberVM potentialMemberVM);

    @Timed
    @Operation(summary = "get member by name")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "400", description = "bad request")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/sponsormember/{mssuserid}/{name}/{id}/{profile}/{schemeId}")
    Response getSponsorMemberByName(
                                    @PathParam("mssuserid") long mssuserid,
                                    @PathParam("name") String name,
                                    @PathParam("id") long id ,
                                    @PathParam("profile") String profile,
                                    @PathParam("schemeId") long schemeId ,
                                    @QueryParam("start") int start,
                                    @QueryParam("size") int size) throws IOException;

    @Timed
    @Operation(summary = "delete a bill from mss")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @Path("/cancelBill/{id}")
    @DELETE
    @Produces({MediaType.APPLICATION_JSON})
    Response cancelBill(@PathParam("id") long id);


    @Timed
    @Operation(summary = "get summary of sponsor statistics from fundmaster")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/sponsor/dashboard/{sponsorId}")
    Response getSponsorDashboardMenuStatistics(@PathParam("sponsorId") long sponsorId);

    @Timed
    @Operation(summary = "Get Sponsor Details By Identifier")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/getSponsorDetailsByIdentifier/{schemeId}/{identifier}/{identifierValue}")
    Response getSponsorDetailsByIdentifier(@PathParam("schemeId") long schemeId, @PathParam("identifier") String identifier,@PathParam("identifierValue") String identifierValue);


    @Timed
    @Operation(summary = "searchSponsorDetails")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Path("/searchSponsorDetails")
    Response searchSponsorDetails(@Valid SearchSponsorDetailsVM searchSponsorDetailsVM);


    @Timed
    @Operation(summary = "Get Sponsor Details By Identifier")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/getSponsorPotentialMembers/{schemeId}/{sponsorId}")
    Response getSponsorPotentialMembers(@PathParam("schemeId") long schemeId, @PathParam("sponsorId") long sponsorId);


    @Timed
    @Operation(summary = "Get Sponsor Details By Identifier")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/getpotentialmemberbeneficiaries/{memberId}")
    Response getPotentialMemberBeneficiaries(@PathParam("memberId") long memberId);

    @Timed
    @Operation(summary = "Get Sponsor Details By Identifier")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/getpotentialmemberdetails/{memberId}")
    Response getPotentialMemberDetails(@PathParam("memberId") long memberId);




    @Timed
    @Operation(summary = "searchSponsorDetails")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Path("/approveOrDissaproveSponsorPotentialMember")
    Response approveOrDissaproveSponsorPotentialMember(@Valid SponsorIdAndMemberIdVm sponsorIdAndMemberIdVm);

    @Timed
    @Operation(summary = "Get Sponsor Details By Identifier")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/getMemberTpfa/{schemeId}/{sponsorId}/{receiptStatus}")
    Response getSponsorTPFA(@PathParam("schemeId") long schemeId, @PathParam("sponsorId") long sponsorId, @PathParam("receiptStatus") String receiptStatus);
}
