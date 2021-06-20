package com.systech.mss.service;

import com.systech.mss.config.Constants;
import com.systech.mss.controller.vm.SponsorUserVM;
import com.systech.mss.domain.Config;
import com.systech.mss.domain.EmailTemplatesEnum;
import com.systech.mss.domain.Profile;
import com.systech.mss.domain.User;
import com.systech.mss.domain.common.Clients;
import com.systech.mss.repository.ConfigRepository;
import com.systech.mss.repository.ProfileRepository;
import com.systech.mss.repository.SponsorUserRepository;
import com.systech.mss.repository.UserRepository;
import com.systech.mss.service.dto.LoginDTO;
import com.systech.mss.service.dto.MemberDTO;
import com.systech.mss.service.dto.UserDTO;
import com.systech.mss.seurity.PasswordEncoder;
import com.systech.mss.seurity.SecurityHelper;
import com.systech.mss.util.RandomUtil;
import com.systech.mss.vm.SMSVM;
import org.slf4j.Logger;

import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import javax.security.enterprise.AuthenticationException;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import static com.systech.mss.util.StringUtil.generateRandomPassword;

public class UserService {

    @Inject
    private Logger log;

    @Inject
    private SecurityHelper securityHelper;

    @Inject
    private PasswordEncoder passwordEncoder;

    @Inject
    private UserRepository userRepository;

    @Inject
    private SponsorUserRepository sponsorUserRepository;


    @Inject
    private SessionService sessionService;

    @Inject
    private ProfileService profileService;

    @Inject
    private ProfileRepository profileRepository;

    @Inject
    private ConfigRepository configRepository;

    @Inject
    private MailService mailService;

    @Inject
    private FundMasterClient fundMasterClient;

    @PersistenceContext(name = Constants.PERSISTENCE_UNIT_NAME)
    private EntityManager entityManager;


    protected EntityManager getEntityManager() {
        return entityManager;
    }


    public Optional<User> activateRegistration(String key) {
        log.debug("Activating user for activation key {}", key);
        return userRepository.findOneByActivationKey(key)
                .map(user -> {
                    // activate given user for the registration key.
                    user.setActivated(true);
//                    user.setActivationKey(null);
                    userRepository.edit(user);
                    log.debug("Activated user: {}", user);
                    return user;
                });
    }

    public Optional<User> completePasswordReset(String newPassword, String key) {
        log.debug("Reset user password for reset key {}", key);
        return userRepository.findOneByResetKey(key)
                .filter(user -> user.getResetDate().isAfter(LocalDateTime.now().minusHours(24))) // minus 24 hours
                .map(user -> {
                    user.setPassword(passwordEncoder.encode(newPassword));
                    user.setResetKey(null);
                    user.setResetDate(null);
                    userRepository.edit(user);
                    return user;
                });
    }

    public Optional<User> requestPasswordReset(String mail) {
        return userRepository.findOneByEmail(mail)
                .filter(User::isActivated)
                .map(user -> {
                    user.setResetKey(RandomUtil.generateResetKey());
                    user.setResetDate(LocalDateTime.now());
                    userRepository.edit(user);
                    return user;
                });
    }

    public User createUser(String login,
                           String password,
                           String email,
                           String langKey,
                           String fmIdentifier,
                           long profileId,
                           MemberDTO memberDTO
    ) {

        User newUser = new User();
        String encryptedPassword = passwordEncoder.encode(password);
        newUser.setLogin(login);
        // new user gets initially a generated password
        newUser.setPassword(encryptedPassword);
        newUser.setEmail(email);
        newUser.setLangKey(langKey);
        newUser.setFmIdentifier(fmIdentifier);
        // new user is not active
        newUser.setActivated(true);
        newUser.setProfileById(profileId);
        // new user gets registration key
        newUser.setActivationKey(RandomUtil.generateActivationKey());

        newUser.setUserDetails(memberDTO);
//        newUser.setMbshipStatus(memberDTO.getMbshipStatus());

        //set first name and last name
        String name = memberDTO.getName();
        //split name by space
        if (name != null) {
            String[] nameParts = name.trim().split("\\s+");
            if (nameParts.length >= 2) {
                newUser.setFirstName(nameParts[0]);
                newUser.setLastName(nameParts[1]);
            }
        }


        try {
            userRepository.create(newUser);
        } catch (Exception e) {
            return null;
        }
        log.debug("Created Information for User: {}", newUser);
        return newUser;
    }

    public User createUser(String login,
                           String password,
                           String email,
                           String langKey,
                           String fmIdentifier,
                           long profileId
    ) {

        User newUser = new User();
        String encryptedPassword = passwordEncoder.encode(password);
        newUser.setLogin(login);
        // new user gets initially a generated password
        newUser.setPassword(encryptedPassword);
        newUser.setEmail(email);
        newUser.setLangKey(langKey);
        newUser.setFmIdentifier(fmIdentifier);
        // new user is not active
        newUser.setActivated(false);
        newUser.setProfileById(profileId);
        // new user gets registration key
        newUser.setActivationKey(RandomUtil.generateActivationKey());
        userRepository.create(newUser);
        log.debug("Created Information for User: {}", newUser);
        return newUser;
    }

    public User createUser(UserDTO userDTO) {
        User user = setUserDetail(userDTO.getLogin(), userDTO.getProfileId(), userDTO.getEmail(), userDTO.getLangKey());
        userRepository.create(user);
        log.debug("Created Information for User: {}", user);
        return user;
    }

    public User createUser(SponsorUserVM sponsorUserVM) {
        Profile profile = profileService.getProfileByName(sponsorUserVM.getProfileName());
        User user = new User();
        user.setActivated(true);
        String password =RandomUtil.generatePassword();
        String encryptedPassword = passwordEncoder.encode(password);
        MemberDTO memberDTO = new MemberDTO();
        user.setPassword(encryptedPassword);
        user.setEmail(sponsorUserVM.getEmail());
        user.setLogin(sponsorUserVM.getEmail());
        user.setFirstName(sponsorUserVM.getFirstName());
        memberDTO.setSponsorRefNo(String.valueOf(sponsorUserVM.getParentSponsorId()));
        memberDTO.setSchemeId(sponsorUserVM.getSchemeId());
        memberDTO.setName(profileService.getSponsorNameById(Long.parseLong(memberDTO.getSponsorRefNo())));
        memberDTO.setProfile(profile.getName());
        memberDTO.setSponsorId(sponsorUserVM.getSponsorId());
        user.setFmIdentifier(profile.getName());
        user.setProfileById(profile.getId());
        user.setUserDetails(memberDTO);
        userRepository.create(user);
        mailService.sendEmail(user, EmailTemplatesEnum.ACCOUNT_ACTIVATION,user.getLogin(),password);
        return user;

    }

    public User editUser(SponsorUserVM sponsorUserVM) {
        Profile profile = profileService.getProfileByName(sponsorUserVM.getProfileName());
        User user = getUserById(sponsorUserVM.getId());
        user.setEmail(sponsorUserVM.getEmail());
        user.setFirstName(sponsorUserVM.getFirstName());
        user.getUserDetails().setProfile(profile.getName());
        user.setProfileById(profile.getId());
        user.setFmIdentifier(profile.getName());

        userRepository.edit(user);
        return user;

    }

    public User resetUser(long id) {
        User user = getUserById(id);
        String password = generateRandomPassword(8);
        String encryptedPassword = passwordEncoder.encode(password);
        user.setPassword(encryptedPassword);
        user.setLockedStatus(false);
        user.setDeactivatedByAdmin(false);
        user.setFlg_firstTime(String.valueOf(true));
        user.setNumTrials(0);
        userRepository.edit(user);
        String message = "Dear " + user.getUserDetails().getName()
                + " Your password has been reset to " + password +
                " By the Administrator. In case of any challenges contact us on 0302634704 or email us at info.trustees@enterprisegroup.com.gh. Enterprise Trustees: " +
                "Your Advantage!";

        if (fundMasterClient.checkClientIsETlSendSMSHasEmail(new SMSVM(user.getUserDetails().getCellPhone(), message), user)) {

            mailService.sendEmail(
                    user,
                    EmailTemplatesEnum.PASSWORD_RESET,
                    user.getLogin(),
                    password
            );
        }
        return user;

    }

    private User setUserDetail(String login, long profileId, String email, String langKey) {
        User user = new User();
        user.setLogin(login);
        user.setProfileById(profileId);
        user.setEmail(email);
        if (langKey == null) {
            user.setLangKey("en"); // default language
        } else {
            user.setLangKey(langKey);
        }
        String encryptedPassword = passwordEncoder.encode(RandomUtil.generatePassword());
        user.setPassword(encryptedPassword);
        user.setResetKey(RandomUtil.generateResetKey());
        user.setResetDate(LocalDateTime.now());
        user.setActivated(true);
        return user;
    }

    public void updateUser(String fmIdentifier, String email, String langKey) {
        userRepository.findOneByLogin(securityHelper.getCurrentUserLogin())
                .ifPresent(user -> {
                    user.setFmIdentifier(fmIdentifier);
                    user.setEmail(email);
                    user.setLangKey(langKey);
                    userRepository.edit(user);
                    log.debug("Changed Information for User: {}", user);
                });
    }

    public Optional<UserDTO> updateUser(UserDTO userDTO) {
        return Optional.of(userRepository
                .find(userDTO.getId()))
                .map(user -> {
                    user.setLogin(userDTO.getLogin());
                    user.setFmIdentifier(userDTO.getFmIdentifier());
                    user.setEmail(userDTO.getEmail());
                    user.setActivated(userDTO.isActivated());
                    user.setLangKey(userDTO.getLangKey());
                    userRepository.edit(user);
                    log.debug("Changed Information for User: {}", user);
                    return user;
                })
                .map(UserDTO::new);
    }


    public void deleteUser(String login) {
        userRepository.findOneByLogin(login).ifPresent(user -> {
            userRepository.remove(user);
            log.debug("Deleted User: {}", user);
        });
    }

    public User changePassword(String login, String currentPassword, String newPassword, boolean checkCurrentPwd) {
        Optional<User> u;
        if (checkCurrentPwd)
            u = userRepository.findOneByLogin(login)
                    .filter(user -> user.getPassword().equals(passwordEncoder.encode(currentPassword)));
        else u = userRepository.findOneByLogin(login);
        if (u.isPresent()) {
            User user = u.get();
            String encryptedPassword = passwordEncoder.encode(newPassword);
            user.setPassword(encryptedPassword);
            if (!checkCurrentPwd)
                user.setFlg_firstTime(String.valueOf(false));
            log.debug("Changed password for User: {}", user);
            return userRepository.edit(user);
        }
        return null;
    }

    //    public Optional<User> getUserWithAuthoritiesByLogin(String login) {
//        return userRepository.findOneWithAuthoritiesByLogin(login);
//    }
//
//    public User getUserWithAuthorities(Long id) {
//        return userRepository.findOneWithAuthoritiesById(id).orElse(null);
//    }
//
//    public User getUserWithAuthorities() {
//        return userRepository.findOneWithAuthoritiesByLogin(securityHelper.getCurrentUserLogin()).orElse(null);
//    }
//
    public User authenticate(LoginDTO loginDTO) throws AuthenticationException {
        Optional<User> userOptional = userRepository.findOneByLogin(loginDTO.getUsername());
        //do additional query to fm to get members
        User userAuthentic = //userOptional.filter(User::isActivated)
                userOptional.filter(user -> user.getPassword().equals(passwordEncoder.encode(loginDTO.getPassword())))
                        .orElseThrow(AuthenticationException::new);
        if (userAuthentic != null) {
//            sessionService.SaveASessionToDb(userAuthentic.getId());

            userAuthentic.setNumTrials(0);
            userAuthentic.setLockedStatus(false);
            userRepository.edit(userAuthentic);
            return userAuthentic;
        }

        return null;
    }
//
//    /**
//     * @return a list of all the authorities
//     */
//    public List<String> getAuthorities() {
//        return authorityRepository.findAll()
//                .stream()
//                .map(Authority::getName)
//                .collect(toList());
//    }


    public boolean checkIfUserExists(long id) {
        return userRepository.existsById(id);

    }

    public User editTicket(User user) {
        return userRepository.edit(user);
    }


    public String getUsersFullNameById(long userId) {
        User user = userRepository.find(userId);
        return user.getFirstName() + " " + user.getLastName();
    }

    public User getUserById(long userId) {
        return userRepository.find(userId);
    }

    public User getUserByMemberId(long memberId) {
        CriteriaBuilder criteriaBuilder = getEntityManager().getCriteriaBuilder();
        CriteriaQuery<User> query = criteriaBuilder.createQuery(User.class);
        Root<User> from = query.from(User.class);
        query.select(from)
                .where(
                        criteriaBuilder.equal(
                                from.get("userDetails").get("memberId"),
                                memberId
                        )
                );
        List<User> users = getEntityManager().createQuery(query).getResultList();
        if (users.size() > 0) {
            return users.get(0);
        }
        return null;
    }

    public User getUserByEmail(String email) {
        CriteriaBuilder criteriaBuilder = getEntityManager().getCriteriaBuilder();
        CriteriaQuery<User> query = criteriaBuilder.createQuery(User.class);
        Root<User> from = query.from(User.class);
        query.select(from)
                .where(
                        criteriaBuilder.equal(
                                from.get("userDetails").get("email"),
                                email
                        )
                );
        List<User> users = getEntityManager().createQuery(query).getResultList();
        if (users.size() > 0) {
            return users.get(0);
        }
        return null;
    }


    public String getSponsorNameByRefNo(String refNo) {

        CriteriaBuilder criteriaBuilder = getEntityManager().getCriteriaBuilder();
        CriteriaQuery<User> query = criteriaBuilder.createQuery(User.class);
        Root<User> from = query.from(User.class);
        Predicate sponsorIdPredicate = criteriaBuilder.equal(
                from.get("userDetails").get("sponsorRefNo"),
                refNo
        );
        Predicate schemeIdPredicate = criteriaBuilder.equal(
                from.get("profile").get("name"),
                "SPONSOR"
        );
        Predicate predicateForUserIdAndIp = criteriaBuilder.and(sponsorIdPredicate, schemeIdPredicate);
        query.where(predicateForUserIdAndIp);

        List<User> users = getEntityManager().createQuery(query).getResultList();
        if (users.size() > 0) {
            return users.get(0).getUserDetails().getName();
        }
        return null;

    }

    public String getSponsorNameBySponsorId(long sponsorId) {

        CriteriaBuilder criteriaBuilder = getEntityManager().getCriteriaBuilder();
        CriteriaQuery<User> query = criteriaBuilder.createQuery(User.class);
        Root<User> from = query.from(User.class);
        Predicate sponsorIdPredicate = criteriaBuilder.equal(
                from.get("userDetails").get("sponsorId"),
                sponsorId
        );
        Predicate schemeIdPredicate = criteriaBuilder.equal(
                from.get("profile").get("name"),
                "SPONSOR"
        );
        Predicate predicateForUserIdAndIp = criteriaBuilder.and(sponsorIdPredicate, schemeIdPredicate);
        query.where(predicateForUserIdAndIp);

        List<User> users = getEntityManager().createQuery(query).getResultList();
        if (users.size() > 0) {
            return users.get(0).getUserDetails().getName();
        }
        return null;

    }


    public List<User> getAdminUsers() {

        CriteriaBuilder criteriaBuilder = getEntityManager().getCriteriaBuilder();
        CriteriaQuery<User> query = criteriaBuilder.createQuery(User.class);
        Root<User> from = query.from(User.class);
        Predicate profile1 = criteriaBuilder.equal(
                from.get("profile").get("name"),
                "ADMIN"
        );
        Predicate profile2 = criteriaBuilder.equal(
                from.get("profile").get("name"),
                "ADMINISTRATOR"
        );
        Predicate profiles = criteriaBuilder.or(profile1, profile2);
        query.where(profiles);

        return getEntityManager().createQuery(query).getResultList();

    }

    public String getUserNameByUserId(long id) {
        CriteriaBuilder criteriaBuilder = getEntityManager().getCriteriaBuilder();
        CriteriaQuery<User> query = criteriaBuilder.createQuery(User.class);
        Root<User> from = query.from(User.class);
        query.select(from)
                .where(
                        criteriaBuilder.equal(
                                from.get("id"),
                                id
                        )
                );
        List<User> users = getEntityManager().createQuery(query).getResultList();
        if (!users.isEmpty()) {
            return users.get(0).getFirstName();
        } else {
            return null;
        }
    }

    public String getFullNameByMemberId(long memberId) {
        CriteriaBuilder criteriaBuilder = getEntityManager().getCriteriaBuilder();
        CriteriaQuery<User> query = criteriaBuilder.createQuery(User.class);
        Root<User> from = query.from(User.class);
        query.select(from)
                .where(
                        criteriaBuilder.equal(
                                from.get("userDetails").get("memberId"),
                                memberId
                        )
                );
        List<User> users = getEntityManager().createQuery(query).getResultList();
        if (!users.isEmpty()) {
            return users.get(0).getFirstName() + " " + users.get(0).getLastName();
        } else {
            return null;
        }
    }

    public long getUsersCount() {

        return userRepository.findAll().size();


    }

    public void finishSendEmailsToMemberPO(long schemeId,String subject, String email){
        List<User> users=userRepository.getUserPrincipalOfficers(schemeId);
        for (User user:users){
            String salutation="Dear "+user.getUserDetails().getName()+" <br>";
            mailService.sendPlainEmail(user.getEmail(),subject,salutation + email);
        }
    }

    public void finishSendEmailsToMemberCRM(long schemeId,String subject, String email){
        List<User> users=userRepository.getUserCRM(schemeId);
        for (User user:users){
            String salutation="Dear "+user.getUserDetails().getName()+" <br>";
            mailService.sendPlainEmail(user.getEmail(),subject,salutation + email);
        }
    }


    public void sendPoEMail(long schemeId,String subject,String email){
        Config config=configRepository.getActiveConfig();
        if(config.getClient().equals(Clients.OTHERS)){
            finishSendEmailsToMemberPO(schemeId,subject,email);
        }

    }
    public void sendCrmEMail(long schemeId,String subject,String email){
        Config config=configRepository.getActiveConfig();
        if(config.getClient().equals(Clients.OTHERS)){
            finishSendEmailsToMemberCRM(schemeId,subject,email);
        }

    }

}
