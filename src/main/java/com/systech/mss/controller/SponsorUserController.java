package com.systech.mss.controller;

import com.systech.mss.controller.vm.SponsorUserVM;
import com.systech.mss.domain.SponsorUser;
import com.systech.mss.domain.User;
import com.systech.mss.domain.UserSponsor;
import org.eclipse.microprofile.metrics.annotation.Timed;
import org.eclipse.microprofile.openapi.annotations.Operation;
import org.eclipse.microprofile.openapi.annotations.responses.APIResponse;

import javax.validation.Valid;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/api")
public interface SponsorUserController {
    @Timed
    @Operation(summary = "get sponsor user from mss by staffNo")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @Path("/get-sponsor-user/{id}")
    @GET
    @Produces({MediaType.APPLICATION_JSON})
    Response getSponsorUser(@PathParam("id") long id );

    @Timed
    @Operation(summary = "get sponsor user from mss by Name")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @Path("/get-sponsor-user/{name}")
    @GET
    @Produces({MediaType.APPLICATION_JSON})
    Response getSponsorUser(@PathParam("name") String name);

    @Timed
    @Operation(summary = "get all sponsor users from mss")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @Path("/sponsorUsers/")
    @GET
    @Produces({MediaType.APPLICATION_JSON})
    Response getSponsorUsers();

    @Timed
    @Operation(summary = "get all sponsor users permissions from mss")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @Path("/sponsorUsersPermissions")
    @GET
    @Produces({MediaType.APPLICATION_JSON})
    Response getSponsorUsersPermissions();

    @Timed
    @Operation(summary = "add sponsor users  to mss")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @Path("/sponsorUserAdd")
    @POST
    @Produces({MediaType.APPLICATION_JSON})
    @Consumes({MediaType.APPLICATION_JSON})
    Response addSponsorUser(@Valid SponsorUserVM sponsorUserVM);

    @Timed
    @Operation(summary = "update sponsor users  to mss")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @Path("/sponsorUserAdd")
    @PUT
    @Produces({MediaType.APPLICATION_JSON})
    @Consumes({MediaType.APPLICATION_JSON})
    Response updateSponsorUser(@Valid SponsorUserVM sponsorUserVM);

    @Timed
    @Operation(summary = "reset sponsor users")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @Path("/sponsorUserReset{id}")
    @PUT
    @Produces({MediaType.APPLICATION_JSON})
    Response resetSponsorUser(@PathParam("id") long id);

    @Timed
    @Operation(summary = "delete a sponsor user from mss")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @Path("/sponsorUsers/{id}")
    @DELETE
    @Produces({MediaType.APPLICATION_JSON})
    Response dropSponsorUser(@PathParam("id") long id);
}
