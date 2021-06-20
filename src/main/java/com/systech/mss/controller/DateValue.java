package com.systech.mss.controller;

import com.systech.mss.controller.vm.DateValueVm;
import com.systech.mss.controller.vm.PermissionsVM;

import javax.validation.Valid;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/api")
public interface DateValue {
    @GET
    @Path("/dates")
    @Produces(MediaType.APPLICATION_JSON)
    Response getAll();

    @POST
    @Path("/dates/update/{billDate}")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    Response updateDate(@PathParam("billDate") long billDate);
}
