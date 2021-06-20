package com.systech.mss.controller.impl;

import com.systech.mss.controller.FMSponsorController;
import com.systech.mss.controller.SponsorUserController;
import com.systech.mss.controller.vm.ErrorVM;
import com.systech.mss.controller.vm.SponsorUserVM;
import com.systech.mss.controller.vm.SuccessVM;
import com.systech.mss.domain.Permission;
import com.systech.mss.domain.User;
import com.systech.mss.domain.UserSponsor;
import com.systech.mss.repository.*;
import com.systech.mss.service.ActivityTrailService;
import com.systech.mss.service.ProfileService;
import com.systech.mss.service.SponsorUserService;
import com.systech.mss.service.UserService;
import org.slf4j.Logger;

import javax.inject.Inject;
import javax.transaction.Transactional;
import javax.validation.Valid;
import javax.ws.rs.core.Response;
import java.util.List;


@Transactional
public class SponsorUserControllerImpl implements SponsorUserController {

    @Inject
    UserRepository userRepository;

    @Inject
    SponsorUserRepository sponsorUserRepository;

    @Inject
    private ActivityTrailRepository trailRepository;


    @Inject
    ProfileService profileService;

    @Inject
    private Logger log;

    @Inject
    UserService userService;


    @Inject
    SponsorUserPermissionRepository sponsorUserPermissionRepository;

    @Inject
    private ActivityTrailService activityTrailService;

    @Override
    public Response getSponsorUser(long id) {
        User userSponsor = userService.getUserById(id);
        return userSponsor !=null ?Response.ok()
                .entity(
                        SuccessVM.builder()
                                .success(true)
                                .data(userSponsor)
                                .build()
                ).build():
                Response.status(Response.Status.BAD_REQUEST)
                        .entity(ErrorVM.builder().success(false).msg("No data found").build())
                        .build();
    }

    @Override
    public Response getSponsorUser(String name) {
        List<UserSponsor> sponsorUserList = sponsorUserRepository.getSponsorUserByName(name);
        return sponsorUserList!=null ?Response.ok()
                .entity(
                        SuccessVM.builder()
                                .success(true)
                                .data(sponsorUserList)
                                .build()
                ).build():
                Response.status(Response.Status.BAD_REQUEST)
                        .entity(ErrorVM.builder().success(false).msg("No data found").build())
                        .build();
    }

    @Override
    public Response getSponsorUsers() {
        List<UserSponsor> sponsorUserList = sponsorUserRepository.getSponsorUsers();
        return sponsorUserList!=null ?Response.ok()
                .entity(
                        SuccessVM.builder()
                                .success(true)
                                .data(setExtraDetails(sponsorUserList))
                                .build()
                ).build():
                Response.status(Response.Status.BAD_REQUEST)
                        .entity(ErrorVM.builder().success(false).msg("No data found").build())
                        .build();
    }

    @Override
    public Response getSponsorUsersPermissions() {
        List<Permission> sponsorUserPermissionsList = sponsorUserPermissionRepository.getSponsorUsersPermissions();
        return sponsorUserPermissionsList!=null ?Response.ok()
                .entity(
                        SuccessVM.builder()
                                .success(true)
                                .data(sponsorUserPermissionsList)
                                .build()
                ).build():
                Response.status(Response.Status.BAD_REQUEST)
                        .entity(ErrorVM.builder().success(false).msg("No data found").build())
                        .build();
    }

    @Override
    public Response addSponsorUser(@Valid SponsorUserVM sponsorUserVM) {
        User user = userService.createUser(sponsorUserVM);
        if (user.getId()>0){
            return Response.ok().entity(SuccessVM.builder().success(true).build()).build();
        }
        return Response.status(Response.Status.BAD_REQUEST)
                .entity(ErrorVM.builder().success(false).msg(
                        "Mss Api call failed"
                ).build())
                .build();

    }

    @Override
    public Response updateSponsorUser(@Valid SponsorUserVM sponsorUserVM) {
        User userSponsor = userService.editUser(sponsorUserVM);
        if(userSponsor!= null){
            return Response.status(Response.Status.OK)
                    .entity(SuccessVM.builder().success(true).data(userSponsor).msg("user edited").build())
                    .build();
        }

        return Response.status(Response.Status.BAD_REQUEST)
                .entity(ErrorVM.builder().success(false).msg(
                        "Mss Api call failed"
                ).build())
                .build();

    }

    @Override
    public Response resetSponsorUser(long id) {
        User userSponsor = userService.resetUser(id);
        if(userSponsor!= null){
            return Response.status(Response.Status.OK)
                    .entity(SuccessVM.builder().success(true).data(userSponsor).msg("password edited").build())
                    .build();
        }

        return Response.status(Response.Status.BAD_REQUEST)
                .entity(ErrorVM.builder().success(false).msg(
                        "Mss Api call failed"
                ).build())
                .build();
    }


    @Override
    public Response dropSponsorUser(long id) {

        if(userRepository.existsById(id)) {
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


    public List<UserSponsor> setExtraDetails(List<UserSponsor > userSponsorList){

        for (UserSponsor u : userSponsorList){
            u.setProfileName(profileService.getProfileNameById(u.getProfileID()));
            u.setSponsorName(userService.getUsersFullNameById(u.getParentSponsor().getId()));
        }

        return userSponsorList;

    }
    private void logActivityTrail(long userId,String msg){
        trailRepository.create(trailRepository.getActivityTrail(userId,msg));
    }


}
