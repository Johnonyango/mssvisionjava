package com.systech.mss.mail;

import com.systech.mss.domain.*;

import java.io.Serializable;

public class MailEvent {

    private User user;
    private Ticket ticket;
    private TicketMessage ticketMessage;
    private BenefitRequest benefitRequest;
    private String subjectTemplate;
    private String contentTemplate;

    private String action;
    private String changes;
    private String[] args;
    private SupportMessages supportMessages;
    private Serializable serializable;
    private EmailTemplatesEnum emailTemplatesEnum;

    public MailEvent(User user, String subjectTemplate, String contentTemplate) {
        this.user = user;
        this.subjectTemplate = subjectTemplate;
        this.contentTemplate = contentTemplate;
    }

    public MailEvent(User user, Ticket ticket, String subjectTemplate, String contentTemplate) {
        this.user = user;
        this.ticket = ticket;
        this.subjectTemplate = subjectTemplate;
        this.contentTemplate = contentTemplate;
    }


    public MailEvent(String action, User user, BenefitRequest benefitRequest, String changes, String subjectTemplate, String contentTemplate) {
        this.action = action;
        this.user = user;
        this.benefitRequest = benefitRequest;
        this.changes = changes;
        this.subjectTemplate = subjectTemplate;
        this.contentTemplate = contentTemplate;
    }

    public MailEvent(User user, BenefitRequest benefitRequest, String subjectTemplate, String contentTemplate) {
        this.user = user;
        this.benefitRequest = benefitRequest;
        this.subjectTemplate = subjectTemplate;
        this.contentTemplate = contentTemplate;
    }

    public MailEvent(User user, Ticket ticket, TicketMessage ticketMessage, String subjectTemplate, String contentTemplate) {
        this.user = user;
        this.ticket = ticket;
        this.ticketMessage = ticketMessage;
        this.subjectTemplate = subjectTemplate;
        this.contentTemplate = contentTemplate;
    }

    public MailEvent(String action, SupportMessages supportMessages) {
        this.action = action;
        this.supportMessages = supportMessages;
    }

    public MailEvent(String action, Serializable serializable) {
        this.action = action;
        this.serializable = serializable;
    }

    public MailEvent(String action, User user, String subjectTemplate, String contentTemplate, String... args) {
        this.action = action;
        this.user = user;
        this.subjectTemplate = subjectTemplate;
        this.contentTemplate = contentTemplate;
        this.args = args;
    }

    public MailEvent(User user, EmailTemplatesEnum emailTemplatesEnum, String[] args) {
        this.user = user;
        this.emailTemplatesEnum = emailTemplatesEnum;
        this.args = args;
    }

    private String to, subject, message;

    public MailEvent(String action, String email, String subject, String message) {
        this.action = action;
        this.to=email;
        this.subject=subject;
        this.message=message;
    }

    public Ticket getTicket() {
        return ticket;
    }

    public BenefitRequest getBenefitRequest() {
        return benefitRequest;
    }

    public User getUser() {
        return user;
    }

    public String getSubjectTemplate() {
        return subjectTemplate;
    }

    public String getContentTemplate() {
        return contentTemplate;
    }

    public String getAction() {
        return action;
    }

    public String[] getArgs() {
        return args;
    }

    public Serializable getSerializable() {
        return serializable;
    }

    public SupportMessages getSupportMessages() {
        return supportMessages;
    }

    public String getChanges() {
        return changes;
    }

    public void setChanges(String changes) {
        this.changes = changes;
    }

    public EmailTemplatesEnum getEmailTemplatesEnum() {
        return emailTemplatesEnum;
    }

    public String getTo() {
        return to;
    }

    public String getSubject() {
        return subject;
    }

    public String getMessage() {
        return message;
    }
}