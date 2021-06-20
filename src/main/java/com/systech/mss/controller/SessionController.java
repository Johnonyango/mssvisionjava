package com.systech.mss.controller;

import com.systech.mss.domain.Admins;
import com.systech.mss.domain.Session;
import org.eclipse.microprofile.metrics.annotation.Timed;
import org.eclipse.microprofile.openapi.annotations.Operation;
import org.eclipse.microprofile.openapi.annotations.responses.APIResponse;

import javax.validation.Valid;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.io.IOException;
import java.util.Date;

@Path("/api")
public interface SessionController {
    @Timed
    @Operation(summary = "get Sessions from fundmaster")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/getAllSessions")
    Response getSessions();

    @Timed
    @Operation(summary = "filter Sessions by date from fundmaster")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/filterSessions/{date}")
    Response filterSessions(String date);

    @Timed
    @Operation(summary = "get Sessions by id from fundmaster")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/Sessions/{id}")
    Response getSessionsSingle(long id);

    @Timed
    @Operation(summary = "get Sessions from fundmaster")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/getSessionCount")
    Response getSessionCount() throws IOException;

    @Timed
    @Operation(summary = "get Sessions in a week")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/getSessionCountInAWeek")
    Response getSessionCountInAWeek();

//
}
