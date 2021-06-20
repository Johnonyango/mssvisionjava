package com.systech.mss.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import org.eclipse.microprofile.metrics.annotation.Timed;
import org.eclipse.microprofile.openapi.annotations.Operation;
import org.eclipse.microprofile.openapi.annotations.responses.APIResponse;
import org.json.simple.parser.ParseException;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.io.IOException;

@Path("/api")
public interface FmCrmController {

    @Timed
    @Operation(summary = "get Recent Claims ")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/sponsor/getSponsorsByCrmId/{id}")
    public Response getSponsorsByCrmId(@PathParam("id") long id);

    @Timed
    @Operation(summary = "get members of scheme and sponsor from fundmaster")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @Path("/sponsor/getMemberListing/{id}/{profile}/{schemeId}")
    @GET
    @Produces({MediaType.APPLICATION_JSON})
    Response getSponsorMemberListing(@PathParam("id") Long id ,
                                     @PathParam("profile") String profile,
                                     @PathParam("schemeId") Long schemeId ,
                                     @QueryParam("start") int start,
                                     @QueryParam("size") int size);

    @Timed
    @Operation(summary = "get count of pending claims ")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/sponsor/getCountOfMembers/{id}")
    public Response getCountOfMembers(@PathParam("id") Long id ) throws IOException, ParseException;

    @Timed
    @Operation(summary = "get count of pending claims ")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/sponsor/getCountOfSponsorsAndMembers/{id}")
    public Response getCountOfSponsorsAndMembers(@PathParam("id") Long id ) throws IOException, ParseException;

    @Timed
    @Operation(summary = "get user id frm fm ")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/getFMCRMUserId/{email}")
    public Response getFMCRMUserId(@PathParam("email") String email ) throws IOException, ParseException;

    @Timed
    @Operation(summary = "get user  from fm ")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/getFmUserDetailsById/{id}")
    public Response getFmUserDetailsById(@PathParam("id") long id ) throws JsonProcessingException, ParseException;

    @Timed
    @Operation(summary = "get user  from fm ")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/getMemberCumulativeStatement/{memberId}/{schemeId}")
    public Response getMemberCumulativeStatement(@PathParam("memberId") long memberId, @PathParam("schemeId") long schemeId ) throws IOException, ParseException;
}
