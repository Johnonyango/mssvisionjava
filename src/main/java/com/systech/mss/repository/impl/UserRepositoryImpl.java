package com.systech.mss.repository.impl;

import com.systech.mss.domain.ActivityTrail;
import com.systech.mss.domain.Profile;
import com.systech.mss.domain.User;
import com.systech.mss.repository.UserRepository;
import com.systech.mss.service.ProfileService;
import com.systech.mss.seurity.DateUtils;
import org.slf4j.Logger;

import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.Query;
import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static java.util.Collections.singletonMap;

public class UserRepositoryImpl extends AbstractRepositoryImpl<User, Long> implements UserRepository {
    @Inject
    private EntityManager em;

    @Override
    protected EntityManager getEntityManager() {
        return em;
    }

    public UserRepositoryImpl() {
        super(User.class);
    }

    @Inject
    Logger log;

    @Inject
    ProfileService profileService;

    @Override
    public Optional<User> findOneByLogin(String login) {
        return findSingleByNamedQuery("findUserByLogin", singletonMap("login", login));
    }

    @Override
    public Optional<User> findOneByEmail(String email) {
        return findSingleByNamedQuery("findUserByEmail", singletonMap("email", email));
    }

    @Override
    public List<User> findAllBySponsorRefNo(String sponsorRefNo) {

        return em.createNamedQuery("findUsersBySponsorRefNo", User.class).setParameter("sponsorRefNo", sponsorRefNo).getResultList();

    }


    @Override
    public List<User> findUserBySponsorId(long sponsorId) {
        return em.createNamedQuery("findUserBySponsorId", User.class).setParameter("sponsorId", sponsorId).getResultList();
    }


    @Override
    public Optional<User> findOneByResetKey(String resetKey) {
        return findSingleByNamedQuery("findUserByResetKey", singletonMap("resetKey", resetKey));

    }

    @Override
    public Optional<User> findOneByActivationKey(String activationKey) {
        return findSingleByNamedQuery("findUserByActivationKey", singletonMap("activationKey", activationKey));

    }

    @Override
    public Optional<User> findOneBySecurityCode(String securityCode) {
        return findSingleByNamedQuery("findUserBySecurityCode", singletonMap("securityCode", securityCode));

    }

    @Override
    public Optional<User> findOneById(long userId) {
        return findSingleByNamedQuery("findUserByUserId", singletonMap("id", userId));
    }

    @Override
    public List<User> findByProfile(Profile profile) {
        try {
            Query query = getEntityManager().createQuery("FROM User u WHERE  u.profile=:p", User.class);
            query.setParameter("p", profile);
            return query.getResultList();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public Optional<User> findOneBySponsorId(long sponsorId) {
        return findSingleByNamedQuery("findUserBySponsorId", singletonMap("sponsorId", sponsorId));

    }

    @Override
    public List<User> filter(String dateFrom, String dateTo) {
        //2021-03-02
        DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");
        LocalDate localDateFrom = LocalDate.parse(dateFrom, dateTimeFormatter);
        LocalDate localDateTo = LocalDate.parse(dateTo, dateTimeFormatter);

        List<User> users = em.createQuery("select ac from User ac where ac.createdDate>=:dateFrom and ac.createdDate<=:dateTo  order by ac.id desc", User.class)
                .setParameter("dateFrom", localDateFrom.atStartOfDay())
                .setParameter("dateTo", localDateTo.atTime(LocalTime.MAX))
                .getResultList();
        if (users != null) {
            for (User user :
                    users) {
                user.setShortDate(DateUtils.shortDate(user.getCreatedDate()));
                user.setShortDateTime(DateUtils.shortDateTime(user.getCreatedDate()));
            }
            return users;
        }


        return null;
    }

    @Override
    public List<User> filter(Profile profile, String dateFrom, String dateTo) {
        //2021-03-02
        DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");
        LocalDate localDateFrom = LocalDate.parse(dateFrom, dateTimeFormatter);
        LocalDate localDateTo = LocalDate.parse(dateTo, dateTimeFormatter);

        List<User> users = em.createQuery("select ac from User ac where ac.profile=:profile and ac.createdDate>=:dateFrom and ac.createdDate<=:dateTo  order by ac.id desc", User.class)
                .setParameter("profile", profile)
                .setParameter("dateFrom", localDateFrom.atStartOfDay())
                .setParameter("dateTo", localDateTo.atTime(LocalTime.MAX))
                .getResultList();
        if (users != null) {
            for (User user :
                    users) {
                user.setShortDate(DateUtils.shortDate(user.getCreatedDate()));
                user.setShortDateTime(DateUtils.shortDateTime(user.getCreatedDate()));
            }
            return users;
        }


        return null;
    }

    @Override
    public List<User> getUserPrincipalOfficers(long schemeId) {
        Profile profile=profileService.getProfileByName("PRINCIPAL OFFICER");
        try {
            Query query = getEntityManager().createQuery("FROM User u WHERE  u.profile=:profile AND u.userDetails.schemeId=:schemeId", User.class);
            query.setParameter("profile", profile);
            query.setParameter("schemeId", schemeId);
            return query.getResultList();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public List<User> getUserCRM(long schemeId) {
        Profile profile=profileService.getProfileByName("CRM");
        try {
            Query query = getEntityManager().createQuery("FROM User u WHERE  u.profile=:profile AND u.userDetails.schemeId=:schemeId", User.class);
            query.setParameter("profile", profile);
            query.setParameter("schemeId", schemeId);
            return query.getResultList();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }
}
