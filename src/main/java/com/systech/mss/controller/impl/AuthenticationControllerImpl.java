package com.systech.mss.controller.impl;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.systech.mss.controller.AuthenticationController;
import com.systech.mss.controller.vm.ErrorVM;
import com.systech.mss.controller.vm.SuccessVM;
import com.systech.mss.domain.*;
import com.systech.mss.repository.ConfigRepository;
import com.systech.mss.repository.SessionRepository;
import com.systech.mss.repository.UserRepository;
import com.systech.mss.service.FMMemberClient;
import com.systech.mss.service.ProfileService;
import com.systech.mss.service.SessionService;
import com.systech.mss.service.UserService;
import com.systech.mss.service.dto.FmListDTO;
import com.systech.mss.service.dto.LoginDTO;
import com.systech.mss.seurity.TokenProvider;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.slf4j.Logger;

import javax.inject.Inject;
import javax.security.enterprise.AuthenticationException;
import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.Response;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import static com.systech.mss.config.Constants.BEARER_PREFIX;
import static javax.ws.rs.core.HttpHeaders.AUTHORIZATION;
import static javax.ws.rs.core.Response.Status.BAD_REQUEST;
import static javax.ws.rs.core.Response.Status.UNAUTHORIZED;

public class AuthenticationControllerImpl implements AuthenticationController {
    @Inject
    private SessionService sessionService;

    @Inject
    private TokenProvider tokenProvider;

    @Context
    HttpServletRequest httpServletRequest;

    @Inject
    private UserService userService;

    @Inject
    private ProfileService profileService;

    @Inject
    private SessionRepository sessionRepository;

    @Inject
    private UserRepository userRepository;

    @Inject
    private ConfigRepository configRepository;


    @Inject
    private Logger logger;

    @Inject
    private FMMemberClient fmMemberClient;


    @Override
    public Response login(@Valid LoginDTO loginDTO) {
        Config config = configRepository.getActiveConfig();
        //check member login indentifier
        Profile profile=profileService.getProfileByName("MEMBER");
        if(profile.getLoginIdentifier().equals(LoginIdentifier.PHONE)) {
            String username = loginDTO.getUsername();
            if (username.startsWith("0")) {
                if(config.getCountryCode().startsWith("+")){
                    username = config.getCountryCode() + loginDTO.getUsername().substring(1);
                }else {
                    username = "+"+config.getCountryCode() + loginDTO.getUsername().substring(1);
                }

            } else if (username.startsWith(config.getCountryCode().startsWith("+")?config.getCountryCode().substring(1):config.getCountryCode())) {
                username = "+" + loginDTO.getUsername();
            }
            loginDTO.setUsername(username);
        }
        Optional<User> userOptional = userRepository.findOneByLogin(loginDTO.getUsername());
        if(!userOptional.isPresent()){
            return Response.status(Response.Status.BAD_REQUEST)
                    .entity(ErrorVM.builder().success(false).msg("Username not Found").build())
                    .build();
        }
        if(userOptional.get().isLockedStatus()){
            return Response.status(Response.Status.BAD_REQUEST)
                    .entity(ErrorVM.builder().success(false).msg("Your account is locked, Please contact Administrator").build())
                    .build();
        }
        User user;
        try {
            user = userService.authenticate(loginDTO);
            if (user!=null){
                if (!user.isActivated()) {
                    return Response.status(Response.Status.BAD_REQUEST)
                            .entity(ErrorVM.builder().success(false).msg("Account not activated").build())
                            .build();
                }
               else if (user.isDeactivatedByAdmin()){
                    return Response.status(Response.Status.BAD_REQUEST)
                            .entity(ErrorVM.builder().success(false).msg("Account was locked by admin. Please contact your administrator").build())
                            .build();
                }
                //check member status before login
                if(user.getProfile().getName().equals("MEMBER")) {
                    FmListDTO fmListDTO = fmMemberClient.getMemberDetails(user.getUserDetails().getMemberId());
                    if (fmListDTO != null && fmListDTO.isSuccess()) {
                        Object memberDetails = fmListDTO.getRows().get(0);
                        String jsonString = new ObjectMapper().writeValueAsString(memberDetails);
                        JSONParser jsonParser = new JSONParser();
                        JSONObject jsonObject = (JSONObject) jsonParser.parse(jsonString);
                        if (jsonObject != null) {
                            String membershipStatus = jsonObject.get("mbshipStatus").toString();
                            if (membershipStatus.equals("RETIRED") ||
                                    membershipStatus.equals("RETIRED_ILL_HEALTH") ||
                                    membershipStatus.equals("DEATH_IN_RETIREMENT") ||
                                    membershipStatus.equals("WITHDRAWN") ||
                                    membershipStatus.equals("DEATH_IN_SERVICE") ||
                                    membershipStatus.equals("INTERDICTION") ||
                                    membershipStatus.equals("DEFFERED") ||
                                    membershipStatus.equals("TRANSFERED") ||
                                    membershipStatus.equals("DELETED") ||
                                    membershipStatus.equals("TRANSFERRED_INTRA_INTRA") ||
                                    membershipStatus.equals("TRANSFERRED_INTRA_OUT")
                            ) {
                                return Response.status(Response.Status.BAD_REQUEST)
                                        .entity(ErrorVM.builder()
                                                .success(false)
                                                .msg("Sorry, your membership status has no portal access rights. Please contact your scheme administrator").build())
                                        .build();
                            }
                        }
                    }
                }
            }


            String token = tokenProvider.generateToken(user, loginDTO.isRememberMe());
            String profileName = user.getProfile().getName();
            Map<Object, Object> data = new HashMap<>();
            data.put("user", user);
            data.put("profileName", profileName);
            Session session = new Session();
            session.setActive(true);
            session.setCreatedDate(LocalDateTime.now());
            session.setUserId(user.getId());
            session.setIpAddress(httpServletRequest.getRemoteAddr());
            Session session1 =
                    sessionService.saveSession(session);

            data.put("sessionId", session1.getId());
            return Response.ok()
                    .header(AUTHORIZATION, BEARER_PREFIX + token)
                    .entity(SuccessVM.builder().success(true).token(token).data(data).build())
                    .build();

        } catch (AuthenticationException ex) {
            ex.printStackTrace();
            User user1 = userOptional.get();
            logger.info(user1.toString());
            int trial=0;
            try {
                trial=user1.getNumTrials();
                trial=trial+1;
                user1.setNumTrials(trial);
                if (user1.getNumTrials() >= configRepository.getActiveConfig().getNumTrials()) {
                    user1.setLockedStatus(true);
                }
                userRepository.edit(user1);
            }
            catch (NullPointerException nullPointerException){
                trial=1;
                user1.setNumTrials(1);
                userRepository.edit(user1);
            }
            trial=configRepository.getActiveConfig().getNumTrials()-trial;
            if(trial==0){

                return Response.status(UNAUTHORIZED)
                        .header(AuthenticationException.class.getName(), ex.getLocalizedMessage())
                        .entity(ErrorVM.builder().success(false).msg("Incorrect credentials. Your account has been locked, please contact the administrator").build())
                        .build();
            }

            return Response.status(UNAUTHORIZED)
                    .header(AuthenticationException.class.getName(), ex.getLocalizedMessage())
                    .entity(ErrorVM.builder().success(false).msg("Incorrect credentials. You have "+trial+ " Trials remaining").build())
                    .build();
        } catch (ParseException | JsonProcessingException e) {
            return Response.status(BAD_REQUEST)
                    .entity(ErrorVM.builder().success(false).msg(e.getLocalizedMessage()).build())
                    .build();
        }
    }

    @Override
    public Response sessionLogout(long sessionId) {
        Session session = sessionRepository.find(sessionId);
        if (session != null) {
            session.setStoppedAt(LocalDateTime.now());
            session.setActive(false);
            sessionRepository.edit(session);

            return Response.ok()
                    .header(AUTHORIZATION, BEARER_PREFIX)
                    .entity(SuccessVM.builder().success(true).build())
                    .build();
        }
        return Response.status(UNAUTHORIZED)
                .entity(ErrorVM.builder().success(false).msg("Session Invalid").build())
                .build();
    }


}
