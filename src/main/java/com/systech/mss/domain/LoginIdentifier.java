package com.systech.mss.domain;

public enum LoginIdentifier {
    PHONE("Phone"),
    EMAIL("Email"),
    MEMBER_NO("Member Number"),
    MEMBER_ID("Member ID"),
    STAFF_NO("Staff Number"),
    SPONSOR_NO("Sponsor Number"),
    ID_NO("National Number"),
    NSSN("NSSN");

    private String name;

    LoginIdentifier(String name) {
        this.name = name;
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
    
}