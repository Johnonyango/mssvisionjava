package com.systech.mss.controller;

import com.systech.mss.controller.vm.ManagedUserVM;
import com.systech.mss.domain.Config;
import com.systech.mss.domain.User;
import com.systech.mss.seurity.JwtTokenNeeded;
import org.eclipse.microprofile.metrics.annotation.Timed;
import org.eclipse.microprofile.openapi.annotations.Operation;
import org.eclipse.microprofile.openapi.annotations.responses.APIResponse;
import org.eclipse.microprofile.openapi.annotations.tags.Tag;

import javax.validation.Valid;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.io.IOException;
import java.net.URISyntaxException;

@Path("/api")
public interface UserController {

    @Timed
    @Operation(summary = "create a new user")
    @APIResponse(responseCode = "201", description = "Created")
    @APIResponse(responseCode = "400", description = "Bad Request")
    @Path(value = "/users")
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @JwtTokenNeeded
    Response createUser(ManagedUserVM managedUserVM) throws URISyntaxException;

    @Timed
    @Operation(summary = "get All Users")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "400", description = "bad request")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/getAllUsers")
    Response getAllUsers();

    @Timed
    @Operation(summary = "reset  users")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @Path("/resetUser/{id}")
    @PUT
    @Produces({MediaType.APPLICATION_JSON})
    Response resetUser(@PathParam("id") long id);

    @Timed
    @Operation(summary = "edit a user")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "400", description = "bad request")
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/editUser")
    Response editUser(@Valid User user);

    @Timed
    @Operation(summary = "delete a User from mss")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @Path("/dropUser/{id}")
    @DELETE
    @Produces({MediaType.APPLICATION_JSON})
    Response dropUser(@PathParam("id") long id);

    @Timed
    @Operation(summary = "get a User from mss by id")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @Path("/getUser/{id}")
    @GET
    @Produces({MediaType.APPLICATION_JSON})
    Response getUser(@PathParam("id") long id);

    @Operation(summary = "get All Users by sponsor id")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "400", description = "bad request")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/getAllUsers/{mssuserid}/{sponsorId}")
    Response getAllUsers(@PathParam("mssuserid") long mssuserid,@PathParam("sponsorId") long sponsorId);


    @Timed
    @Operation(summary = "get Ticket created by user id")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "400", description = "bad request")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/user/{userId}/ticket/created")
    Response getTicketByCreatedByUserId(@PathParam("userId") long userId);

    @Timed
    @Operation(summary = "get Ticket created by user id in range")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "400", description = "bad request")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/user/{userId}/{start}/{size}/ticket/created")
    Response getTicketByCreatedByUserIdInRange(@PathParam("userId") long userId, @PathParam("start")  int start, @PathParam("size")  int size);

    @Timed
    @Operation(summary = "get Ticket created by user id")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "400", description = "bad request")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/user/{userId}/ticket/received")
    Response getTicketByRecipientId(@PathParam("userId") long userId);

    @Timed
    @Operation(summary = "get Ticket created by user id in range")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "400", description = "bad request")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/user/{userId}/{start}/{size}/ticket/received")
    Response getTicketByRecipientIdInRange(@PathParam("userId") long userId, @PathParam("start")  int start, @PathParam("size")  int size);

    @Timed
    @Operation(summary = "get All Users Count")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "400", description = "bad request")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/getAllUsersCount")
    Response getAllUsersCount() throws IOException;

    @Timed
    @Operation(summary = "get Users By Profile")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "400", description = "bad request")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/user/getUserByProfile/{mssuserid}/{profileName}")
    Response getUserByProfile(@PathParam("mssuserid") long mssuserid, @PathParam("profileName") String profileName);


    @GET
    @Path("/user/getUsersRegisteredBetween/{mssuserid}/{dateFrom}/{dateTo}")
    @Produces(MediaType.APPLICATION_JSON)
    Response getUsersRegisteredBetween(@PathParam("mssuserid") long mssuserid,@PathParam("dateFrom") String dateFrom, @PathParam("dateTo") String dateTo);


    @GET
    @Path("/user/getUsersRegisteredBetween/{mssuserid}/{profileName}/{dateFrom}/{dateTo}")
    @Produces(MediaType.APPLICATION_JSON)
    Response getUsersRegisteredBetween(@PathParam("mssuserid") long mssuserid,@PathParam("profileName") String profileName,@PathParam("dateFrom") String dateFrom, @PathParam("dateTo") String dateTo);



}
