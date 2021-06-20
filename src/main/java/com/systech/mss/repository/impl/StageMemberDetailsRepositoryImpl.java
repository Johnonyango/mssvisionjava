package com.systech.mss.repository.impl;

import com.systech.mss.domain.StageMemberDetails;
import com.systech.mss.repository.StageMemberDetailsRepository;
import org.slf4j.Logger;

import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.Query;
import javax.transaction.Transactional;

public class StageMemberDetailsRepositoryImpl extends AbstractRepositoryImpl<StageMemberDetails, Long> implements StageMemberDetailsRepository {

    @Inject
    private EntityManager em;

    @Inject
    Logger log;

    public StageMemberDetailsRepositoryImpl() {
        super(StageMemberDetails.class);
    }

    @Override
    protected EntityManager getEntityManager() {
        return em;
    }

    @Transactional(Transactional.TxType.REQUIRED)
    @Override
    public StageMemberDetails findByMemberId(long memberId) {
        try {
            Query query = getEntityManager().createQuery("FROM  StageMemberDetails  s WHERE  s.memberId=:memberId", StageMemberDetails.class);
            query.setParameter("memberId", memberId);
            return (StageMemberDetails) query.getSingleResult();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }
}
