package com.systech.mss.controller.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.systech.mss.controller.UserController;
import com.systech.mss.controller.vm.ErrorVM;
import com.systech.mss.controller.vm.ManagedUserVM;
import com.systech.mss.controller.vm.SuccessVM;
import com.systech.mss.domain.*;
import com.systech.mss.repository.TicketRepository;
import com.systech.mss.repository.UserRepository;
import com.systech.mss.service.*;
import com.systech.mss.service.dto.UserDTO;
import org.slf4j.Logger;

import javax.ejb.EJB;
import javax.inject.Inject;
import javax.json.Json;
import javax.json.JsonObject;
import javax.transaction.Transactional;
import javax.validation.Valid;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.UriInfo;

import java.io.IOException;
import java.time.format.DateTimeFormatter;
import java.time.format.FormatStyle;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import static com.systech.mss.config.Constants.EMAIL_ALREADY_USED_TYPE;
import static com.systech.mss.config.Constants.LOGIN_ALREADY_USED_TYPE;

@Transactional
public class UserControllerImpl implements UserController {
    @Context
    UriInfo uriInfo;
    @Inject
    private ProfileService profileService;

    @Inject
    private Logger log;

    @Inject
    private UserRepository userRepository;

    @Inject
    private TicketsService ticketsService;

    @Inject
    private TicketRepository ticketRepository;

    @Inject
    private ActivityTrailService activityTrailService;

    @Inject
    private MailService mailService;

    @Inject
    private UserService userService;

    @Override
    public Response createUser(ManagedUserVM managedUserVM) {
        log.debug("REST request to save User : {}", managedUserVM);

        //Lowercase the user login before comparing with database
        if (userRepository.findOneByLogin(managedUserVM.getLogin().toLowerCase()).isPresent()) {
            return Response.status(Response.Status.BAD_REQUEST)
                    .entity(ErrorVM.builder().msg(LOGIN_ALREADY_USED_TYPE)
                            .success(false)
                            .build()
                    )
                    .build();
        } else if (userRepository.findOneByEmail(managedUserVM.getEmail()).isPresent()) {
            return Response.status(Response.Status.BAD_REQUEST)
                    .entity(ErrorVM.builder().msg(EMAIL_ALREADY_USED_TYPE)
                            .success(false)
                            .build()
                    )
                    .build();
        }


        else {
            User newUser = userService.createUser(managedUserVM);
            mailService.sendCreationEmail(newUser);
            return Response.created(uriInfo.getBaseUriBuilder()
                    .path(UserController.class)
                    .path(String.valueOf(newUser.getId()))
                    .build()).entity(SuccessVM.builder().success(true).data(new UserDTO(newUser)).build()).build();

        }


    }

    @Override
    public Response getAllUsers() {
      //  activityTrailService. logActivityTrail(StaffNo, "Requested all admins");
        List<User> usersList = userRepository.findAll();

        return usersList != null ? Response.ok()
                .entity(
                        SuccessVM.builder()
                                .success(true)
                                .data(setAdminExtraDetails(usersList))
                                .build()
                ).build() :
                Response.status(Response.Status.BAD_REQUEST)
                        .entity(ErrorVM.builder().success(false).msg("No data found").build())
                        .build();
    }
    @Override
    public Response resetUser(long id) {
        User user = userService.resetUser(id);
        if(user!= null){
            return Response.status(Response.Status.OK)
                    .entity(SuccessVM.builder().success(true).data(user).msg("password edited").build())
                    .build();
        }

        return Response.status(Response.Status.BAD_REQUEST)
                .entity(ErrorVM.builder().success(false).msg(
                        "Mss Api call failed"
                ).build())
                .build();
    }

    @Override
    public Response editUser(@Valid User user) {
        if(userRepository.existsById(user.getId())) {
            userRepository.edit(user);
            return Response.status(Response.Status.OK)
                    .entity(SuccessVM.builder().success(true).data(user).msg("User edited").build())
                    .build();
        }
        return Response.status(Response.Status.NOT_FOUND)
                .entity(ErrorVM.builder().success(false).
                        msg("User not found").build())
                .build();
    }

    @Override
    public Response dropUser(long id) {
        if (userRepository.existsById(id)) {
            userRepository.deleteById(id);
            return Response.status(Response.Status.OK)
                    .entity(SuccessVM.builder().success(true).msg("User Deleted").build())
                    .build();
        }
        return Response.status(Response.Status.NOT_FOUND)
                .entity(ErrorVM.builder().success(false).
                        msg("User not found").build())
                .build();
    }

    @Override
    public Response getUser(long id) {
        User user = userService.getUserById(id);
        if (user != null) {
            return Response.status(Response.Status.OK)
                    .entity(SuccessVM.builder().success(true).data(user).build())
                    .build();

        }
        return Response.status(Response.Status.NOT_FOUND)
                .entity(ErrorVM.builder().success(false).
                        msg("Users Not found").build())
                .build();
    }

    @Override
    public Response getAllUsers(long mssuserid, long sponsorId) {
        activityTrailService.logActivityTrail(mssuserid, "Viewed Sponsor Users");
        List<User> user = userRepository.findUserBySponsorId(sponsorId);
        if (user != null) {
            return Response.status(Response.Status.OK)
                    .entity(SuccessVM.builder().success(true).data(setExtraDetails(user)).build())
                    .build();

        }
        return Response.status(Response.Status.NOT_FOUND)
                .entity(ErrorVM.builder().success(false).
                        msg("Users Not found").build())
                .build();
    }


    @Override
    public Response getTicketByCreatedByUserId(long userId) {

        activityTrailService.logActivityTrail(userId, "viewed tickets Created");

        List<Ticket> ticket = ticketsService.getTicketByCreatedByUserId(userId);
        if (ticket != null) {
            return Response.status(Response.Status.OK)
                    .entity(SuccessVM.builder().success(true).data(ticketsService.setTicketExtraDetails(ticket)).build())
                    .build();

        }
        return Response.status(Response.Status.NOT_FOUND)
                .entity(ErrorVM.builder().success(false).
                        msg("User Not found").build())
                .build();
    }

    @Override
    public Response getTicketByCreatedByUserIdInRange(long userId, int start, int size) {

        activityTrailService.logActivityTrail(userId, "viewed tickets Created");

        List<Ticket> ticket = ticketsService.getTicketsRange(start, size);
        if (ticketRepository.find(userId) != null) {
            return Response.status(Response.Status.OK)
                    .entity(SuccessVM.builder().success(true)
                            .data(ticketsService.setTicketExtraDetails(ticket
                                    .stream()
                                    .filter(ticket1 -> ticket1.getCreatedBy().getId() == (userId))
                                    .collect(Collectors.toList())))
                            .build())
                    .build();

        }
        return Response.status(Response.Status.NOT_FOUND)
                .entity(ErrorVM.builder().success(false).
                        msg("User Not found").build())
                .build();
    }


    @Override
    public Response getTicketByRecipientId(long userId) {

        activityTrailService.logActivityTrail(userId, "viewed tickets received");

        List<Ticket> ticket = ticketsService.getTicketByRecipientUserId(userId);
        if (ticket != null) {
            //log activity trail
            activityTrailService.logActivityTrail(userId, "Viewed support tickets");

            return Response.status(Response.Status.OK)
                    .entity(SuccessVM.builder().success(true).data(ticketsService.setTicketExtraDetails(ticket)).build())
                    .build();

        }
        return Response.status(Response.Status.NOT_FOUND)
                .entity(ErrorVM.builder().success(false).
                        msg("User Not found").build())
                .build();
    }

    @Override
    public Response getTicketByRecipientIdInRange(long userId, int start, int size) {

        activityTrailService.logActivityTrail(userId, "viewed tickets received");

        List<Ticket> ticket = ticketsService.getTicketsRange(start, size);
        if (ticketRepository.find(userId) != null) {
            return Response.status(Response.Status.OK)
                    .entity(SuccessVM.builder().success(true)
                            .data(ticketsService.setTicketExtraDetails(ticket
                                    .stream()
                                    .filter(ticket1 -> ticket1.getRecepient().getId() == (userId))
                                    .collect(Collectors.toList())))
                            .build())
                    .build();

        }
        return Response.status(Response.Status.NOT_FOUND)
                .entity(ErrorVM.builder().success(false).
                        msg("User Not found").build())
                .build();
    }

    @Override
    public Response getAllUsersCount() throws IOException {
        long usersCount = userService.getUsersCount();
        ObjectMapper objectMapper=new ObjectMapper();
        JsonObject jsonObject = Json.createObjectBuilder()
                .add("usersCount", usersCount)
                .build();
        log.error("users count found");

        return Response.status(Response.Status.OK)
                .entity(SuccessVM.builder().success(true).data(objectMapper.readValue(jsonObject.toString(),Object.class)).build())
                .build();

    }

    @Override
    public Response getUserByProfile(long mssuserid, String profileName) {
        activityTrailService.logActivityTrail(mssuserid,"filtered users registered using profile "+profileName);

        Profile profile=profileService.getProfileByName(profileName);

        if(profile!=null){
            return Response.ok()
                    .entity(
                            SuccessVM.builder()
                                    .success(true)
                                    .data(userRepository.findByProfile(profile))
                                    .build()
                    ).build();
        }
        return Response.status(Response.Status.NOT_FOUND)
                .entity(ErrorVM.builder().success(false).
                        msg("Profile Not found").build())
                .build();

    }

    @Override
    public Response getUsersRegisteredBetween(long mssuserid, String dateFrom, String dateTo) {
        activityTrailService.logActivityTrail(mssuserid,"filtered users registered from +"+dateFrom+" to "+dateTo);

        return Response.ok()
                .entity(
                        SuccessVM.builder()
                                .success(true)
                                .data(userRepository.filter(dateFrom,dateTo))
                                .build()
                ).build();
    }

    @Override
    public Response getUsersRegisteredBetween(long mssuserid, String profileName, String dateFrom, String dateTo) {
        activityTrailService.logActivityTrail(mssuserid,"filtered users of profile "+profileName+ " registered from +"+dateFrom+" to "+dateTo);

        Profile profile=profileService.getProfileByName(profileName);
        return Response.ok()
                .entity(
                        SuccessVM.builder()
                                .success(true)
                                .data(userRepository.filter(profile,dateFrom,dateTo))
                                .build()
                ).build();
    }

    public List<User> setExtraDetails(List<User> users) {

        for (User u : users) {
            u.setProfileName(profileService.getProfileNameById(u.getProfile().getId()));
            try{
                u.setSponsorName(userService.getSponsorNameBySponsorId(u.getUserDetails().getSponsorId()));
            }
            catch(NullPointerException e){
                u.setSponsorName("N/A");
            }
        }

        return users;
        }



    public List<User> setAdminExtraDetails(List<User> users) {

        for (User u : users) {
            u.setProfileName(profileService.getProfileNameById(u.getProfile().getId()));

        }
        return users;
    }


}
