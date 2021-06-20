package com.systech.mss.controller;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/api")
public interface ActivityTrailController {

    @GET
    @Path("/activityTrail/getAll/{userId}")
    @Produces(MediaType.APPLICATION_JSON)
    Response getAll(@PathParam("userId") long userId);


    @GET
    @Path("/activityTrail/{userId}")
    @Produces(MediaType.APPLICATION_JSON)
    Response getByUserId(@PathParam("userId") long userId);


    @GET
    @Path("/activityTrail/by-date/{date}")
    @Produces(MediaType.APPLICATION_JSON)
    Response getActivityOfDate(@PathParam("date") String date);

    @GET
    @Path("/activityTrail/search/{mssuserid}/{name}")
    @Produces(MediaType.APPLICATION_JSON)
    Response SearchActivityTrail(@PathParam("mssuserid") long mssuserid,@PathParam("name") String name);

    @GET
    @Path("/activityTrail/filter/{mssuserid}/{dateFrom}/{dateTo}")
    @Produces(MediaType.APPLICATION_JSON)
    Response filterActivityByDate(@PathParam("mssuserid") long mssuserid,@PathParam("dateFrom") String dateFrom, @PathParam("dateTo") String dateTo);

    @GET
    @Path("/activityTrailMultiUser/search/{mssuserid}/{name}")
    @Produces(MediaType.APPLICATION_JSON)
    Response activityTrailMultiUser(@PathParam("mssuserid") long mssuserid,@PathParam("name") String name);

    @GET
    @Path("/activityTrailMultiUser/filter/{mssuserid}/{dateFrom}/{dateTo}")
    @Produces(MediaType.APPLICATION_JSON)
    Response activityTrailMultiUser(@PathParam("mssuserid") long mssuserid,@PathParam("dateFrom") String dateFrom, @PathParam("dateTo") String dateTo);

    @GET
    @Path("/activityTrail/by-user-date/{userId}/{date}")
    @Produces(MediaType.APPLICATION_JSON)
    Response getActivityLogOfUserOnDate(@PathParam("userId") long userId, @PathParam("date") String date);
}
