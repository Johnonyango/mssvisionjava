package com.systech.mss.controller;

import com.systech.mss.controller.vm.AddressVM;
import com.systech.mss.domain.Admins;
import com.systech.mss.domain.LandingPageContent;
import com.systech.mss.vm.LandingPageContentVM;
import org.eclipse.microprofile.metrics.annotation.Timed;
import org.eclipse.microprofile.openapi.annotations.Operation;
import org.eclipse.microprofile.openapi.annotations.responses.APIResponse;

import javax.validation.Valid;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/api")
public interface LandingPageContentController {
    @Timed
    @Operation(summary = "get all landingpagecontent  details from fundmaster")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/getLandingPageContentDetailsAll")
    Response getLandingPageContentDetailsAll();


    @Timed
    @Operation(summary = "post  landingpagecontent  details to db")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.MULTIPART_FORM_DATA)
    @Path("/postLandingPageContent")
    Response postLandingPageContent(@Valid LandingPageContent landingPageContent);

    @Timed
    @Operation(summary = "get  landingpagecontent  details from fundmaster")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/updateLogo/{documentId}")
    Response updateLogo(@PathParam("documentId") long documentId);



    @Timed
    @Operation(summary = "get  pensioner Image from db")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/pensionerImage/{documentId}")
    Response pensionerImage(@PathParam("documentId") long documentId);

    @Timed
    @Operation(summary = "get  Login Image from db")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/loginImage/{documentId}")
    Response loginImage(@PathParam("documentId") long documentId);

    @Timed
    @Operation(summary = "get  Member Icon from db")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/memberIcon/{documentId}")
    Response memberIcon(@PathParam("documentId") long documentId);

    @Timed
    @Operation(summary = "get  Pensioner Icon from db")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/pensionerIcon/{documentId}")
    Response pensionerIcon(@PathParam("documentId") long documentId);

    @Timed
    @Operation(summary = "get  Address from db")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/updateaddress")
    Response address(@Valid AddressVM addressVM);

    @Timed
    @Operation(summary = "post  Welcome Statement from db")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Path("/welcomeStatement")
    Response welcomeStatement(@Valid LandingPageContentVM landingPageContentVM);

    @Timed
    @Operation(summary = "get  memberTab message from db")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Path("/memberMessage")
    Response memberMessage(@Valid LandingPageContentVM landingPageContentVM);

    @Timed
    @Operation(summary = "get   pensionerMessage from db")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Path("/pensionerMessage")
    Response  pensionerMessage(@Valid LandingPageContentVM landingPageContentVM);

    @Timed
    @Operation(summary = "get   whySaveMessage from db")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Path("/whySaveMessage")
    Response  whySaveMessage(@Valid LandingPageContentVM landingPageContentVM);

    @Timed
    @Operation(summary = "get   map Location from db")
    @APIResponse(responseCode = "200", description = "OK")
    @APIResponse(responseCode = "401", description = "Unauthorized")
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Path("/mapLoc")
    Response  mapLoc(@Valid LandingPageContentVM landingPageContentVM);
}
