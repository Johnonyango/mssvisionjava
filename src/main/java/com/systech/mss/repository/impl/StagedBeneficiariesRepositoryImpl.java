package com.systech.mss.repository.impl;

import com.systech.mss.domain.StagedBeneficiaries;
import com.systech.mss.repository.StagedBeneficiariesRepository;
import org.slf4j.Logger;

import javax.inject.Inject;
import javax.persistence.EntityManager;

public class StagedBeneficiariesRepositoryImpl extends AbstractRepositoryImpl<StagedBeneficiaries, Long> implements StagedBeneficiariesRepository {

    @Inject
    private EntityManager em;

    @Inject
    Logger log;

    public StagedBeneficiariesRepositoryImpl() {
        super(StagedBeneficiaries.class);
    }

    @Override
    protected EntityManager getEntityManager() {
        return em;
    }
}
