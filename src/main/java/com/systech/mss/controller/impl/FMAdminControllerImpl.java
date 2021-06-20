package com.systech.mss.controller.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.systech.mss.controller.FMAdminController;
import com.systech.mss.controller.vm.AdminVM;
import com.systech.mss.controller.vm.ErrorVM;
import com.systech.mss.controller.vm.ManagedUserVM;
import com.systech.mss.controller.vm.SuccessVM;
import com.systech.mss.domain.*;
import com.systech.mss.repository.ActivityTrailRepository;
import com.systech.mss.repository.AdminRepository;
import com.systech.mss.repository.ProfileRepository;
import com.systech.mss.repository.UserRepository;
import com.systech.mss.service.*;
import com.systech.mss.service.dto.AdminDTO;
import com.systech.mss.service.dto.FmListDTO;
import com.systech.mss.service.dto.MemberDTO;
import com.systech.mss.seurity.PasswordEncoder;
import org.slf4j.Logger;

import javax.inject.Inject;
import javax.validation.Valid;
import javax.ws.rs.core.Response;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.List;
import java.util.Optional;

import static com.systech.mss.config.Constants.EMAIL_ALREADY_USED_TYPE;
import static com.systech.mss.config.Constants.LOGIN_ALREADY_USED_TYPE;
import static com.systech.mss.util.StringUtil.generateRandomPassword;
import static javax.ws.rs.core.MediaType.APPLICATION_JSON_TYPE;
import static javax.ws.rs.core.Response.Status.BAD_REQUEST;


public class FMAdminControllerImpl implements FMAdminController {

    @Inject
    private Admins admins;
    @Inject
    private ActivityTrailRepository trailRepository;

    @Inject
    private FMAdminClient fmAdminClient;

    @Inject
    private AdminService adminService;

    @Inject
    private AdminRepository adminRepository;

    @Inject
    Logger logger;

    @Inject
    private ProfileService profileService;

    @Inject
    ActivityTrailService activityTrailService;

    @Inject
    FundMasterClient fundMasterClient;

    @Inject
    UserRepository userRepository;

    @Inject
    private PasswordEncoder passwordEncoder;

    @Inject
    private ProfileRepository profileRepository;

    @Inject
    private UserService userService;

    @Inject
    private MailService mailService;


    @Override
    public Response getAdminByStaffNo(long StaffNo) {
     activityTrailService.logActivityTrail(StaffNo, "Viewed All Members");

        FmListDTO fmListDTO = fmAdminClient.getAdminDetails(StaffNo);
        if (fmListDTO.isSuccess()) {
            return Response.status(Response.Status.OK)
                    .entity(SuccessVM.builder().success(true).data(fmListDTO.getRows().get(0)).build())
                    .build();
        }
        return ErrorMsg("Mss Api call failed");
    }

    @Override
    public Response getAdminDetailsAll() {
       //activityTrailService.logActivityTrail(mssUserId, "Viewed All Admins");
        List<User> users=userService.getAdminUsers();

        return users!=null ?Response.ok()
                .entity(
                        SuccessVM.builder()
                                .success(true)
                                .data(users)
                                .build()
                ).build():
                Response.status(Response.Status.BAD_REQUEST)
                        .entity(ErrorVM.builder().success(false).msg("No data found").build())
                        .build();

    }




    @Override
    public Response createAdmin(@Valid Admins admins) {
        activityTrailService.logActivityTrail(admins.getUserId(),"created admin of email "+admins.getEmail());

        return userRepository.findOneByLogin(admins.getEmail().toLowerCase())
                .map(user -> Response.status(BAD_REQUEST).type(APPLICATION_JSON_TYPE)
                        .entity(
                                ErrorVM.builder().msg(LOGIN_ALREADY_USED_TYPE).success(false).build()).build())
                .orElseGet(() -> {
                    Profile profile = profileService.getProfileByName("ADMIN");

                    MemberDTO memberDTO = fundMasterClient.checkMemberIfExists1(
                            "EMAIL",
                            admins.getEmail(),
                            "ADMINISTRATOR"
                    );
                    if(memberDTO.isSuccess() && !memberDTO.getName().equals("")) {
                        User user = new User();
                        user.setActivated(true);
                        String pwd = generateRandomPassword(8);
                        String encryptedPassword = passwordEncoder.encode(pwd);
                        user.setPassword(encryptedPassword);
                        user.setEmail(admins.getEmail());
                        user.setLogin(admins.getEmail());
                        String name = memberDTO.getName();
                        //split name by space
                        if (name != null) {
                            String[] nameParts = name.trim().split("\\s+");
                            if (nameParts.length >= 2) {
                                user.setFirstName(nameParts[0]);
                                user.setLastName(nameParts[1]);
                            }
                        }
                        user.setFmIdentifier(profile.getName());
                        user.setProfileById(profile.getId());
                        user.setUserDetails(memberDTO);
                        mailService.sendEmail(
                                user,
                                EmailTemplatesEnum.ADMIN_ACCOUNT_ACTIVATION,
                                admins.getEmail(),
                                pwd
                        );
                        userRepository.create(user);
                        return Response.status(Response.Status.OK)
                                .entity(SuccessVM.builder().data(user).msg("Admin created successfully and email sent to the admin").success(true).build())
                                .build();
                    }
                    return ErrorMsg("Admin does not exist in core Xe");
                });


    }
    @Override
    public Response lockAccount(long id) {

        User user=userRepository.find(id);
        if(user != null) {
            user.setDeactivatedByAdmin(true);
            userRepository.edit(user);
            return Response.status(Response.Status.OK)
                    .entity(SuccessVM.builder().success(true).msg("Account Locked").build())
                    .build();
        }
        return Response.status(Response.Status.NOT_FOUND)
                .entity(ErrorVM.builder().success(false).
                        msg("User not found").build())
                .build();
    }


    private Response ErrorMsg(String msg){
        return Response.status(Response.Status.BAD_REQUEST)
                .entity(ErrorVM.builder().success(false).msg(
                        msg
                ).build())
                .build();
    }

}


