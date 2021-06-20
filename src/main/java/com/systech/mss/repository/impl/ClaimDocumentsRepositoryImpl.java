package com.systech.mss.repository.impl;

import com.systech.mss.domain.ClaimDocuments;
import com.systech.mss.repository.ClaimDocumentsRepository;

import javax.inject.Inject;
import javax.persistence.EntityManager;

public class ClaimDocumentsRepositoryImpl extends AbstractRepositoryImpl<ClaimDocuments,Long> implements ClaimDocumentsRepository {

    @Inject
    private EntityManager em;

    @Override
    protected EntityManager getEntityManager() {
        return em;
    }

    public ClaimDocumentsRepositoryImpl() {
        super(ClaimDocuments.class);
    }
}
