package com.systech.mss.service.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.systech.mss.domain.Config;
import com.systech.mss.domain.common.Clients;
import com.systech.mss.repository.ConfigRepository;
import com.systech.mss.util.Ignore;
import lombok.*;

import javax.inject.Inject;
import java.util.List;

@Getter
@Setter
@ToString(exclude = {
        "rows"
})
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class SponsorContributionDTO extends BaseDTO {

    private String totalCount;

    private List<Object> rows;
    @Ignore
    private boolean success;
    @Ignore
    private String message;
}
