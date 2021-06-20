package com.systech.mss.controller.impl;

import com.systech.mss.controller.PermissionsController;
import com.systech.mss.controller.vm.PermissionsVM;
import com.systech.mss.controller.vm.SuccessVM;
import com.systech.mss.domain.BaseModel;
import com.systech.mss.domain.Profile;
import com.systech.mss.repository.*;

import javax.annotation.PostConstruct;
import javax.inject.Inject;
import javax.ws.rs.core.Response;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class PermissionsControllerImpl extends BaseController implements PermissionsController {

    String[] profiles = {
            "MEMBER",
            "SPONSOR",
            "PENSIONER",
            "CRM",
            "CRE",
            "BILLING OFFICER",
            "CLAIM OFFICER",
            "CLAIM REVIEWER"
    };


    @Inject
    PermissionsMemberRepository permissionsMemberRepository;
    @Inject
    PermissionsSponsorRepository permissionsSponsorRepository;
    @Inject
    PermissionsPensionerRepository permissionsPensionerRepository;
    @Inject
    PermissionsCrmRepository permissionsCrmRepository;
    @Inject
    PermissionsCRERepository permissionsCRERepository;
    @Inject
    PermissionsPORepository permissionsPORepository;
    @Inject
    PermissionsBillingOfficerRepository permissionsBillingOfficerRepository;
    @Inject
    PermissionsClaimOfficerRepository permissionsClaimOfficerRepository;
    @Inject
    PermissionsClaimsReviewerRepository permissionsClaimsReviewerRepository;
    @Inject
    ProfileRepository profileRepository;

    @PostConstruct
    public void init() {
        List<Profile> list = profileRepository.findAll();
        if (list != null) {
            profiles = new String[list.size()];
            for (int i = 0; i < profiles.length; i++) {
                profiles[i] = list.get(i).getName();
            }
        }
    }

    @Override
    public Response getAll() {
        Map<String, Object> objectMap = new HashMap<>();
        for (String profile : profiles) {
            objectMap.put(profile.replaceAll(" ","_"), getForProfile(profile));
        }
        return Response.ok()
                .entity(
                        SuccessVM.builder().success(true)
                                .data(objectMap)
                                .build()
                ).build();
    }

    private BaseModel getForProfile(String profileName) {
        BaseModel baseModel;
        switch (profileName) {
            case "MEMBER":
                baseModel = permissionsMemberRepository.getPermissions();
                break;
            case "SPONSOR":
                baseModel = permissionsSponsorRepository.getPermissions();
                break;
            case "PENSIONER":
                baseModel = permissionsPensionerRepository.getPermissions();
                break;
            case "CRM":
                baseModel = permissionsCrmRepository.getPermissions();
                break;
            case "CRE":
                baseModel = permissionsCRERepository.getPermissions();
                break;
            case "PRINCIPAL OFFICER":
                baseModel = permissionsPORepository.getPermissions();
                break;
            case "BILLING OFFICER":
                baseModel = permissionsBillingOfficerRepository.getPermissions();
                break;
            case "CLAIM OFFICER":
                baseModel = permissionsClaimOfficerRepository.getPermissions();
                break;
            case "CLAIM REVIEWER":
                baseModel = permissionsClaimsReviewerRepository.getPermissions();
                break;

            default:
                return null;
        }
        return baseModel;
    }

    @Override
    public Response getPermissionsForProfile(String profileName) {

        BaseModel baseModel = getForProfile(profileName);
        if (baseModel == null)
            return ErrorMsg("Unknown profile");

        return Response.ok()
                .entity(
                        SuccessVM.builder().success(true)
                                .data(baseModel)
                                .build()
                ).build();
    }

    @Override
    public Response setDefaults(String profileName) {
        BaseModel baseModel;
        switch (profileName) {
            case "MEMBER":
                baseModel = permissionsMemberRepository.setDefault();
                break;
            case "SPONSOR":
                baseModel = permissionsSponsorRepository.setDefault();
                break;
            case "PENSIONER":
                baseModel = permissionsPensionerRepository.setDefault();
                break;
            case "CRM":
                baseModel = permissionsCrmRepository.setDefault();
                break;
            case "CRE":
                baseModel = permissionsCRERepository.setDefault();
                break;
            case "PRINCIPAL OFFICER":
                baseModel = permissionsPORepository.setDefault();
                break;
            case "BILLING OFFICER":
                baseModel = permissionsBillingOfficerRepository.setDefault();
                break;
            case "CLAIM OFFICER":
                baseModel = permissionsClaimOfficerRepository.setDefault();
                break;
            case "CLAIM REVIEWER":
                baseModel = permissionsClaimsReviewerRepository.setDefault();
                break;
            default:
                return ErrorMsg("Please try again");

        }
        return Response.ok()
                .entity(
                        SuccessVM.builder().success(true)
                                .msg("Done")
                                .data(baseModel)
                                .build()
                ).build();
    }

    @Override
    public Response setDefaults() {

        for (String profile : profiles) {
            setDefaults(profile);
        }

        return Response.ok()
                .entity(
                        SuccessVM.builder().success(true)
                                .msg("Done")
                                .build()
                ).build();
    }

    @Override
    public Response updateProfile(PermissionsVM permissionsVM) {
        switch (permissionsVM.getProfileName()) {
            case "MEMBER":
                permissionsMemberRepository.update(permissionsVM.getMemberVM());
                break;
            case "SPONSOR":
                permissionsSponsorRepository.update(permissionsVM.getSponsorVM());
                break;
            case "PENSIONER":
                permissionsPensionerRepository.update(permissionsVM.getPensionerVM());
                break;
            case "CRM":
                permissionsCrmRepository.update(permissionsVM.getCrmVM());
                break;
            case "CRE":
                permissionsCRERepository.update(permissionsVM.getCrevm());
                break;
            case "PRINCIPAL OFFICER":
                permissionsPORepository.update(permissionsVM.getPoVM());
                break;
            case "BILLING OFFICER":
                permissionsBillingOfficerRepository.update(permissionsVM.getPermissionsBillingOfficerVM());
                break;
            case "CLAIM OFFICER":
                permissionsClaimOfficerRepository.update(permissionsVM.getPermissionsClaimsOfficerVM());
                break;
            case "CLAIM REVIEWER":
                permissionsClaimsReviewerRepository.update(permissionsVM.getPermissionsClaimReviewerVM());
                break;
            default:
                return ErrorMsg("Unknown profile");
        }

        return Response.ok()
                .entity(
                        SuccessVM.builder().success(true)
                                .msg("Done")
                                .build()
                ).build();
    }
}
