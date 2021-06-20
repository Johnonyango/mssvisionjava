package com.systech.mss.controller;

import com.systech.mss.domain.Ticket;
import com.systech.mss.domain.TicketCategory;
import org.eclipse.microprofile.metrics.annotation.Timed;
import org.eclipse.microprofile.openapi.annotations.Operation;
import org.eclipse.microprofile.openapi.annotations.responses.APIResponse;

import javax.validation.Valid;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
@Path("/api")
public interface TicketCategoryController {
    @Timed
    @Operation(summary = "get TicketCategory")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "400", description = "bad request")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/ticketCategory")
    Response getTicketCategories();

    @Timed
    @Operation(summary = "get all TicketCategory")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "400", description = "bad request")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/ticketCategory/{start}/{limit}")
    Response getTicketCategoryRange(@PathParam("start") int start, @PathParam("limit") int size);

    @Timed
    @Operation(summary = "get TicketCategory by id")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "400", description = "bad request")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/ticketCategory/{id}")
    Response getTicketCategoryByiD(@PathParam("id") long id);

    @Timed
    @Operation(summary = "get tickets in a TicketCategory ")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "400", description = "bad request")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/ticketCategory/{id}/ticket")
    Response getTicketsInTicketCategory(@PathParam("id") long id);


    @Timed
    @Operation(summary = "create TicketCategory")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "400", description = "bad request")
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/ticketCategory")
    Response createTicketCategory(@Valid TicketCategory ticketCategory);

    @Timed
    @Operation(summary = "edit TicketCategory")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "400", description = "bad request")
    @PUT
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/ticketCategory/{id}")
    Response editTicketCategory(@PathParam("id") long id, @Valid TicketCategory ticketCategory);

    @Timed
    @Operation(summary = "Delete a TicketCategory")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "400", description = "bad request")
    @DELETE
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/ticketCategory/{id}")
    Response deleteTicketCategory(@PathParam("id") long id);
}
