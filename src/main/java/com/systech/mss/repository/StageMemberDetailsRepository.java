package com.systech.mss.repository;

import com.systech.mss.domain.StageMemberDetails;

public interface StageMemberDetailsRepository extends AbstractRepository<StageMemberDetails,Long>{
    StageMemberDetails findByMemberId(long memberId);

}
