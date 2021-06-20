package com.systech.mss.domain;

public enum EmailTemplatesEnum {
    ACCOUNT_ACTIVATION("Account Activation", "name","username","password","portalLink"),
    MEMBER_ACCOUNT_ACTIVATION("Member Account Activation", "name","username","password","portalLink"),
    ADMIN_ACCOUNT_ACTIVATION("Admin Account Activation", "name","username","password","portalLink"),
    PRINCIPAL_OFFICER_ACCOUNT_ACTIVATION("Principal Officer Account Activation", "name","username","password","portalLink"),
    PASSWORD_RESET("Password Reset", "name","username","password","portalLink"),
    CLAIM_STATUS("Claim Status","name","benefitNumber","change","portalLink"),
    TICKET_RAISED("Ticket Raised","name","ticketNumber","portalLink"),
    TICKET_REPLY("Ticket Reply","name","ticketNumber","message","replyBy","timeReplied","portalLink");

    private String name;
    private String[] namedKeys;

    EmailTemplatesEnum(String s,String... namedKeys) {
        this.name = s;
        this.namedKeys=namedKeys;
    }

    public String[] getNamedKeys() {
        return namedKeys;
    }

    public void setNamedKeys(String[] namedKeys) {
        this.namedKeys = namedKeys;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return name;
    }

    public static EmailTemplatesEnum getEmailTemplatesEnum(String value){
        EmailTemplatesEnum[] emailTemplatesEnums=EmailTemplatesEnum.values();
        for (EmailTemplatesEnum emailTemplatesEnum : emailTemplatesEnums) {
            if (emailTemplatesEnum.getName().equalsIgnoreCase(value)){
                return emailTemplatesEnum;
            }
        }
        return null;
    }

}
