package com.systech.mss.service.dto;


import com.systech.mss.util.Ignore;
import lombok.*;

import java.math.BigDecimal;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class MessageModelDTO extends BaseDTO{
    boolean success;
    String message;
    @Ignore
    BigDecimal amount;
    @Ignore
    String code;
    @Ignore
    int year;
    @Ignore
    String month;

}
