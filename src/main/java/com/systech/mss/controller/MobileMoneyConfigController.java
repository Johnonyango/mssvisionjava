package com.systech.mss.controller;

import com.systech.mss.domain.Config;
import com.systech.mss.domain.MobileMoneyConfig;
import org.eclipse.microprofile.metrics.annotation.Timed;
import org.eclipse.microprofile.openapi.annotations.Operation;
import org.eclipse.microprofile.openapi.annotations.responses.APIResponse;

import javax.validation.Valid;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/api")
public interface MobileMoneyConfigController {

    @Timed
    @Operation(summary = "get all mobile money configs details from fundmaster")
    @APIResponse(responseCode = "200", description = "Ok")
    @APIResponse(responseCode = "401", description = "Unauthorised")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/getSpecificFieldsOfActiveMobileMoneyConfigs")
    Response getSpecificFieldsOfActiveMobileMoneyConfigs();

    @Timed
    @Operation(summary = "get all mobile money configs details from fundmaster")
    @APIResponse(responseCode = "200", description = "Ok")
    @APIResponse(responseCode = "401", description = "Unauthorised")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/getAllMobileMoneyConfigs")
    Response getAllMobileMoneyConfigs();

    @Timed
    @Operation(summary = "create Config to db ")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Path("/createMobileMoneyConfig")
    Response createMobileMoneyConfig(@Valid MobileMoneyConfig mobileMoneyConfig);


    @Timed
    @Operation(summary = "edit config")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "400", description = "bad request")
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/editMobileMoneyConfig")
    Response editMobileMoneyConfig(@Valid MobileMoneyConfig mobileMoneyConfig);

    @Timed
    @Operation(summary = "delete a mobile money Config  from mss")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @Path("/deleteMobileMoneyConfig/{id}")
    @DELETE
    @Produces({MediaType.APPLICATION_JSON})
    Response deleteMobileMoneyConfig(@PathParam("id") long id);
}
