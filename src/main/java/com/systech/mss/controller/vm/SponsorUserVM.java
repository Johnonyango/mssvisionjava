package com.systech.mss.controller.vm;

import com.systech.mss.service.dto.UserDTO;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Size;

import static com.systech.mss.config.Constants.PASSWORD_MAX_LENGTH;
import static com.systech.mss.config.Constants.PASSWORD_MIN_LENGTH;

@Getter
@Setter
public class SponsorUserVM {
    private Long id;

    private long parentSponsorId;

    private long sponsorId;

    private long schemeId;

    @Size(min = PASSWORD_MIN_LENGTH, max = PASSWORD_MAX_LENGTH)
    private String password;

    private String firstName;

    private String email;

    private String profileName;


}