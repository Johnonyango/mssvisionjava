package com.systech.mss.controller.vm;

import com.systech.mss.domain.EmailTemplatesEnum;
import com.systech.mss.util.Ignore;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@Getter
@Setter
public class EmailTemplatesVM {

    @Ignore
    private long id;

    @Ignore
    String title;

    @Ignore
    String category;

    @Ignore
    EmailTemplatesEnum templatesType;

    @Ignore
    String template;

    @Ignore
    String namedKeys;

    @Ignore
    Date createdAt = new Date();

    @Ignore
    List<String> namedKeysList;

    public EmailTemplatesEnum getTemplatesType() {
        return EmailTemplatesEnum.getEmailTemplatesEnum(getCategory());
    }
}
