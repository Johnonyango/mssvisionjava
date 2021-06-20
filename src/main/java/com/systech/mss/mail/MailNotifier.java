package com.systech.mss.mail;


import com.systech.mss.config.Constants;
import com.systech.mss.domain.*;
import com.systech.mss.repository.EmailTemplatesRepository;
import com.systech.mss.repository.MailConfigRepository;
import com.systech.mss.repository.NotificationRepository;
import org.apache.commons.mail.DefaultAuthenticator;
import org.apache.commons.mail.HtmlEmail;
import org.apache.deltaspike.core.api.message.Message;
import org.apache.deltaspike.core.api.message.MessageContext;
import org.apache.velocity.Template;
import org.apache.velocity.VelocityContext;
import org.apache.velocity.app.VelocityEngine;
import org.slf4j.Logger;

import javax.enterprise.context.ApplicationScoped;
import javax.enterprise.event.ObservesAsync;
import javax.inject.Inject;
import java.io.StringWriter;
import java.util.Locale;
import java.util.Optional;
import java.util.function.Function;

import static com.systech.mss.config.Constants.EMAIL_CONFIGS_NOT_SET;


@ApplicationScoped
public class MailNotifier {

    private static final String USER = "user";
    private static final String USERNAME = "userName";
    private static final String TICKETNUMBER = "ticketNumber";
    private static final String CLAIM_CHANGES = "claimChanges";
    private static final String BENEFITNUMBER = "benefitNumber";
    private static final String MAILLINK = "mailLink";
    private static final String ACTIVATION_LINK = "activationLink";
    private static final String PWD_RESET_LINK = "pwdResetLink";
    private static final String BASE_URL = "baseUrl";


    @Inject
    private Logger log;

    @Inject
    private VelocityEngine engine;

    @Inject
    private MessageContext messageContext;

    @Inject
    private MailConfigRepository mailConfigRepository;

    @Inject
    NotificationRepository notificationRepository;

    @Inject
    private EmailTemplatesRepository emailTemplatesRepository;

    public void sendEmail(@ObservesAsync MailEvent event) {

        if (event.getAction() != null) {
            switch (event.getAction()) {
                case Constants.SEND_SUPPORT_MESSAGE:
                    sendSupportEmail(event);
                    return;
                case Constants.SEND_ACTIVATION_EMAIL3:
                    sendActivationEmail3(event);
                    return;  
                case Constants.SEND_PLAIN_MESSAGE:
                    sendPlainMessage(event);
                    return;
                default:
            }
        }
        
        EmailTemplatesEnum emailTemplatesEnum = event.getEmailTemplatesEnum();
        if (emailTemplatesEnum != null) {
            switch (emailTemplatesEnum) {
                case ACCOUNT_ACTIVATION:
                case PRINCIPAL_OFFICER_ACCOUNT_ACTIVATION:
                case ADMIN_ACCOUNT_ACTIVATION:
                case MEMBER_ACCOUNT_ACTIVATION:
                case PASSWORD_RESET:
                    sendAccountActivationEmail(event, emailTemplatesEnum);
                    break;
                case CLAIM_STATUS:
                    sendMemberClaimActivityEmail(event);
                    break;
                case TICKET_RAISED:
                    sendTicketRaisedEmail(event);
                    break;
                case TICKET_REPLY:
                    sendTicketReplyEmail(event);
                    break;
                default:
            }

            return; //UKITOA JUWA UMEANZA KUWA MTU BLADFAKIN ☹
        }

        User user = event.getUser();
        String to = user.getEmail();
        if (getMailConfig().isPresent()) {
            MailConfig mailConfig = getMailConfig().get();
            Message message = getMessage(event.getUser());
            String subject = message.template(String.format("{%s}", event.getSubjectTemplate())).toString();
            String content = getContent(event, message);
            try {
//                log.info("Send e-mail to '{}' with subject '{}' and content={}", to, subject, content);
                // Prepare message
                HtmlEmail email = new HtmlEmail();
                email.setHostName(mailConfig.getHost());
                email.setStartTLSEnabled(true);
                email.setSmtpPort(mailConfig.getPort());
                email.setAuthenticator(new DefaultAuthenticator(mailConfig.getUsername(),
                        mailConfig.getPassword()));
                email.setFrom(mailConfig.getFrom());
                email.setSubject(subject);
                email.setHtmlMsg(content);
                email.addTo(to);
                String s = email.send();
                notificationRepository.create(
                        Notification.getInstance(
                                user.getUserDetails().getName(),
                                to,
                                content,
                                subject,
                                s != null
                        )
                );
                log.info("Sent e-mail to User '{}'", to);
            } catch (Exception e) {
                log.warn("e-mail could not be sent to user '{}', exception is: {}", to, e.getMessage());
            }

        } else {
            log.warn("e-mail could not be sent to user '{}', exception is: {}", to, EMAIL_CONFIGS_NOT_SET);
        }
    }

    private void sendPlainMessage(MailEvent event) {
        if (getMailConfig().isPresent()) {
            MailConfig mailConfig = getMailConfig().get();
            String subject = event.getSubject(),
                    content=event.getMessage(),
                    to=event.getTo();
            try {
                HtmlEmail email = new HtmlEmail();
                email.setHostName(mailConfig.getHost());
                email.setStartTLSEnabled(true);
                email.setSmtpPort(mailConfig.getPort());
                email.setAuthenticator(new DefaultAuthenticator(mailConfig.getUsername(), mailConfig.getPassword()));
                email.setFrom(mailConfig.getFrom());
                email.setSubject(subject);
                email.setHtmlMsg(content);
                email.addTo(to);
                String s = email.send();
                notificationRepository.create(
                        Notification.getInstance(
                                to,
                                to,
                                content,
                                subject,
                                s != null
                        )
                );
                log.info("Sent e-mail to User '{}'", to);
            } catch (Exception e) {
                log.error(e.getMessage());
            }
        }
    }

    private void sendAccountActivationEmail(MailEvent event, EmailTemplatesEnum emailTemplatesEnum) {
        Optional<MailConfig> mailConfigOptional = getMailConfig();
        if (!mailConfigOptional.isPresent()) {
            return;
        }
        EmailTemplates emailTemplates = emailTemplatesRepository.findByEmailTemplatesEnum(
                emailTemplatesEnum
        );
        if (emailTemplates != null) {
            MailConfig mailConfig = mailConfigOptional.get();
            String baseUrl = mailConfig.getBaseUrl();
            String[] args = event.getArgs();
            User user = event.getUser();
            String title = emailTemplates.getTitle();
            String content = emailTemplates.getTemplate();
            if (content != null) {
                /*
                  see how to automate this 🤭
                  see a listing of all keys in selected EmailTemplatesEnum and replace each
                 */
                content = content.replaceAll("#name", user.getUserDetails().getName())
                        .replaceAll("#username", args[0])
                        .replaceAll("#password", args[1])
                        .replaceAll("#portalLink", baseUrl);
            } else {
                content = "";
            }

            sendGeneralEmail(mailConfigOptional.get(), user, title, content);
        }
    }

    private void sendMemberClaimActivityEmail(MailEvent event) {
        Optional<MailConfig> mailConfigOptional = getMailConfig();
        if (!mailConfigOptional.isPresent()) {
            return;
        }
        EmailTemplates emailTemplates = emailTemplatesRepository.findByEmailTemplatesEnum(
                EmailTemplatesEnum.CLAIM_STATUS
        );
        if (emailTemplates != null) {
            MailConfig mailConfig = mailConfigOptional.get();
            String baseUrl = mailConfig.getBaseUrl();
            User user = event.getUser();
            String[] args = event.getArgs();
            String title = emailTemplates.getTitle();
            String content = emailTemplates.getTemplate();
            if (content != null) {
                /*
                  see how to automate this 🤭
                  see a listing of all keys in emailTemplates and replace each
                 */
                content = content.replaceAll("#name", user.getUserDetails().getName())
                        .replaceAll("#benefitNumber", args[0])
                        .replaceAll("#change", args[1])
                        .replaceAll("#portalLink", baseUrl);
            } else {
                content = "";
            }

            sendGeneralEmail(mailConfigOptional.get(), user, title, content);
        }
    }

    private void sendTicketRaisedEmail(MailEvent event) {
        Optional<MailConfig> mailConfigOptional = getMailConfig();
        if (!mailConfigOptional.isPresent()) {
            return;
        }
        EmailTemplates emailTemplates = emailTemplatesRepository.findByEmailTemplatesEnum(
                EmailTemplatesEnum.TICKET_RAISED
        );
        if (emailTemplates != null) {
            MailConfig mailConfig = mailConfigOptional.get();
            String baseUrl = mailConfig.getBaseUrl();
            String[] args = event.getArgs();
            User user = event.getUser();
            String title = emailTemplates.getTitle();
            String content = emailTemplates.getTemplate();
            if (content != null) {
                /*
                  see how to automate this 🤭
                  see a listing of all keys in emailTemplates and replace each
                 */
                content = content.replaceAll("#name", user.getUserDetails().getName())
                        .replaceAll("#ticketNumber", args[0])
                        .replaceAll("#portalLink", baseUrl);
            } else {
                content = "";
            }

            sendGeneralEmail(mailConfigOptional.get(), user, title, content);
        }
    }

    private void sendTicketReplyEmail(MailEvent event) {
        Optional<MailConfig> mailConfigOptional = getMailConfig();
        if (!mailConfigOptional.isPresent()) {
            return;
        }
        EmailTemplates emailTemplates = emailTemplatesRepository.findByEmailTemplatesEnum(
                EmailTemplatesEnum.TICKET_REPLY
        );
        if (emailTemplates != null) {
            MailConfig mailConfig = mailConfigOptional.get();
            String baseUrl = mailConfig.getBaseUrl();
            String[] args = event.getArgs();
            User user = event.getUser();
            String title = emailTemplates.getTitle();
            String content = emailTemplates.getTemplate();
            if (content != null) {
                /*
                  see how to automate this 🤭
                  see a listing of all keys in emailTemplates and replace each
                 */
                content = content.replaceAll("#name", user.getUserDetails().getName())
                        .replaceAll("#ticketNumber", args[0])
                        .replaceAll("#message", args[1])
                        .replaceAll("#replyBy", args[2])
                        .replaceAll("#timeReplied", args[3])
                        .replaceAll("#portalLink", baseUrl);
            } else {
                content = "";
            }

            sendGeneralEmail(mailConfigOptional.get(), user, title, content);
        }
    }

    private void sendGeneralEmail(MailConfig mailConfig, User user, String title, String content) {
        try {

            Template t = engine.getTemplate("mails/general.html");
            VelocityContext context = new VelocityContext();

            context.put("title", title);
            context.put("content", content);

            StringWriter writer = new StringWriter();
            t.merge(context, writer);
            String cc = writer.toString();

            HtmlEmail email = new HtmlEmail();
            email.setHostName(mailConfig.getHost());
            email.setStartTLSEnabled(true);
            email.setSmtpPort(mailConfig.getPort());
            email.setAuthenticator(new DefaultAuthenticator(mailConfig.getUsername(), mailConfig.getPassword()));
            email.setFrom(mailConfig.getFrom());
            email.setSubject(title);
            email.setHtmlMsg(cc);
            email.addTo(user.getEmail());
            String s = email.send();
            notificationRepository.create(
                    Notification.getInstance(
                            user.getUserDetails().getName(),
                            user.getEmail(),
                            content,
                            title,
                            s != null
                    )
            );
            log.info(s);
            log.info("Sent e-mail to User '{}'", user.getEmail());
        } catch (Exception e) {
            log.warn("e-mail could not be sent to user '{}', exception is: {}", user.getEmail(), e.getMessage());
        }

    }

    private void sendActivationEmail3(MailEvent mailEvent) {
        if (getMailConfig().isPresent()) {
            User user = mailEvent.getUser();
            MailConfig mailConfig = getMailConfig().get();

            Message message = getMessage(user);
            String baseUrl = mailConfig.getBaseUrl();

            String subject = message.template(String.format("{%s}", mailEvent.getSubjectTemplate())).toString();
            ;
            String[] args = mailEvent.getArgs();
            try {

                Template t = engine.getTemplate(String.format("mails/%s.html", mailEvent.getContentTemplate()));
                VelocityContext context = new VelocityContext();

                context.put("name", user.getUserDetails().getName());
                context.put("username", args[0]);
                context.put("password", args[1]);
                context.put("portalLink", baseUrl);

                context.put("props", (Function<String, Message>) message::template);
                StringWriter writer = new StringWriter();
                t.merge(context, writer);
                String content = writer.toString();

                HtmlEmail email = new HtmlEmail();
                email.setHostName(mailConfig.getHost());
                email.setStartTLSEnabled(true);
                email.setSmtpPort(mailConfig.getPort());
                email.setAuthenticator(new DefaultAuthenticator(mailConfig.getUsername(), mailConfig.getPassword()));
                email.setFrom(mailConfig.getFrom());
                email.setSubject(subject);
                email.setHtmlMsg(content);
                email.addTo(user.getEmail());
                email.send();
            } catch (Exception e) {
                log.error(e.getMessage());
            }
        }
    }

    private void sendSupportEmail(MailEvent event) {
        if (getMailConfig().isPresent()) {
            SupportMessages supportMessages = event.getSupportMessages();
            MailConfig mailConfig = getMailConfig().get();
            String subject = "ACTION REQUIRED";
            String content = supportMessages.getMessage();
            try {
                HtmlEmail email = new HtmlEmail();
                email.setHostName(mailConfig.getHost());
                email.setStartTLSEnabled(true);
                email.setSmtpPort(mailConfig.getPort());
                email.setAuthenticator(new DefaultAuthenticator(mailConfig.getUsername(),
                        mailConfig.getPassword()));
                email.setFrom(supportMessages.getEmail());
                email.setSubject(subject);
                email.setHtmlMsg(content);
                email.addTo(mailConfig.getSupportEmail());
                email.send();
            } catch (Exception e) {
                log.error(e.getMessage());
            }
        }
    }

    private String getContent(MailEvent mailEvent, Message message) {
        String baseUrl = getMailConfig().isPresent() ? getMailConfig().get().getBaseUrl() : "";
        Template t = engine.getTemplate(String.format("mails/%s.html", mailEvent.getContentTemplate()));
        VelocityContext context = new VelocityContext();
        if (mailEvent.getTicket() != null) {
            context.put(TICKETNUMBER, mailEvent.getTicket().getId());
            context.put(MAILLINK, baseUrl + "/mssvision/#mainticket");
        }
        if (mailEvent.getBenefitRequest() != null) {
            context.put(BENEFITNUMBER, mailEvent.getBenefitRequest().getId());
        }
        if (mailEvent.getChanges() != null) {
            context.put(CLAIM_CHANGES, mailEvent.getChanges());
        }
        context.put(USER, mailEvent.getUser());
        context.put(USERNAME, mailEvent.getUser().getUserDetails().getName());
        context.put(PWD_RESET_LINK, baseUrl + "/reset-password.jsp?key=" + mailEvent.getUser().getResetKey());
        context.put(ACTIVATION_LINK, baseUrl + "/handle?action=activate&key=" + mailEvent.getUser().getActivationKey());

        context.put("props", (Function<String, Message>) message::template);
        StringWriter writer = new StringWriter();
        t.merge(context, writer);
        return writer.toString();

    }

    private Message getMessage(User user) {
        return messageContext.messageSource("i18n.messages")
                .localeResolver(() -> Locale.forLanguageTag(user.getLangKey()))
                .message();
    }

    private Optional<MailConfig> getMailConfig() {
        return mailConfigRepository.findAll().stream()
                .filter(MailConfig::isEnabled)
                .findFirst();
    }

}
