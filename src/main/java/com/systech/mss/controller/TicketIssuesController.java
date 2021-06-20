package com.systech.mss.controller;

import com.systech.mss.domain.TicketIssues;
import org.eclipse.microprofile.metrics.annotation.Timed;
import org.eclipse.microprofile.openapi.annotations.Operation;
import org.eclipse.microprofile.openapi.annotations.responses.APIResponse;

import javax.validation.Valid;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/api")
public interface TicketIssuesController {

    @Timed
    @Operation(summary = "get Ticket Issues")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "400", description = "bad request")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/ticket/issues")
    public Response getTicketIssues();

    @Timed
    @Operation(summary = "get Ticket Issues")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "400", description = "bad request")
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/ticket/issues")
    public Response createTicketIssue(@Valid TicketIssues ticketIssues);

    @Timed
    @Operation(summary = "delete Ticket Issues")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "400", description = "bad request")
    @DELETE
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/ticket/issues")
    public Response deleteTicketIssue(@Valid TicketIssues ticketIssues);

    @Timed
    @Operation(summary = "delete Ticket Issues by id")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "400", description = "bad request")
    @DELETE
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/ticket/issues/{id}")
    public Response deleteTicketIssueById(@PathParam("id") long id);
}
