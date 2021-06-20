package com.systech.mss.repository;

import com.systech.mss.domain.Profile;
import com.systech.mss.domain.User;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends AbstractRepository<User,Long> {

    Optional<User> findOneByLogin(String login);
    Optional<User> findOneByEmail(String email);
    List<User> findAllBySponsorRefNo(String sponsorRefNo);
    List<User> findUserBySponsorId(long sponsorId );
    Optional<User> findOneBySponsorId(long sponsorId);
    Optional<User> findOneByResetKey(String resetKey);
    Optional<User> findOneByActivationKey(String activationKey);
    Optional<User> findOneBySecurityCode(String securityCode);
    Optional<User> findOneById(long userId);

    List<User> findAll();


    List<User> findByProfile(Profile profile);

    List<User> filter(String dateFrom, String dateTo);

    List<User> filter(Profile profile,String dateFrom, String dateTo);

    List<User> getUserPrincipalOfficers(long schemeId);

    List<User> getUserCRM(long schemeId);


}
