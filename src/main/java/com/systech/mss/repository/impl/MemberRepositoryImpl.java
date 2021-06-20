package com.systech.mss.repository.impl;

import com.systech.mss.domain.Member;
import com.systech.mss.repository.MemberRepository;

import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.Query;
import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

public class MemberRepositoryImpl extends AbstractRepositoryImpl<Member, Long> implements MemberRepository {
    @Inject
    private EntityManager em;

    public MemberRepositoryImpl() {
        super(Member.class);
    }

    @Override
    protected EntityManager getEntityManager() {
        return em;
    }

    @Transactional(Transactional.TxType.REQUIRED)
    @Override
    public List<Member> getUnPushedToXe() {
        try {
            Query query = getEntityManager().createQuery(
                    "FROM Member m WHERE  m.posted=:posted ORDER BY m.id DESC", Member.class
            );
            query.setParameter("posted",false);
            return query.getResultList();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return new ArrayList<>();
    }
}
