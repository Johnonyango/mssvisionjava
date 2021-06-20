package com.systech.mss.service;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.systech.mss.config.Constants;
import com.systech.mss.domain.BenefitRequest;
import com.systech.mss.domain.Status;
import com.systech.mss.domain.User;
import com.systech.mss.repository.BenefitRequestRepository;
import com.systech.mss.service.dto.FmListDTO;
import com.systech.mss.util.StringUtil;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.slf4j.Logger;

import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.time.format.DateTimeFormatter;
import java.util.List;

public class BenefitRequestService {

    @Inject
    private BenefitRequestRepository benefitRequestRepository;

    @Inject
    private UserService userService;

    @Inject
    private FMMemberClient fmMemberClient;

    @Inject
    private Logger logger;

    @PersistenceContext(name = Constants.PERSISTENCE_UNIT_NAME)
    private EntityManager entityManager;

    protected EntityManager getEntityManager() {
        return entityManager;
    }

    public List<BenefitRequest> getBenefitsBySchemeIdAndSponsorId(long schemeId, long sponsorId) {
        CriteriaBuilder criteriaBuilder = getEntityManager().getCriteriaBuilder();
        CriteriaQuery<BenefitRequest> query = criteriaBuilder.createQuery(BenefitRequest.class);
        Root<BenefitRequest> from = query.from(BenefitRequest.class);
        Predicate schemeIdPredicate = criteriaBuilder.equal(
                from.get("schemeId"),
                schemeId
        );
        Predicate sponsorIdPredicate = criteriaBuilder.equal(
                from.get("sponsorId"),
                sponsorId
        );
        Predicate combinedPredicate = criteriaBuilder.and(schemeIdPredicate, sponsorIdPredicate);
        query.where(combinedPredicate);
        return getEntityManager().createQuery(query).getResultList();
    }

    public List<BenefitRequest> getBenefitsBySchemeId(long schemeId) {
        CriteriaBuilder criteriaBuilder = getEntityManager().getCriteriaBuilder();
        CriteriaQuery<BenefitRequest> query = criteriaBuilder.createQuery(BenefitRequest.class);
        Root<BenefitRequest> from = query.from(BenefitRequest.class);
        Predicate schemeIdPredicate = criteriaBuilder.equal(
                from.get("schemeId"),
                schemeId
        );
        query.where(schemeIdPredicate);
        return getEntityManager().createQuery(query).getResultList();
    }

    public List<BenefitRequest> setBenefitRequestExtraDetails(List<BenefitRequest> benefitRequests) {
        for (BenefitRequest benefitRequest : benefitRequests) {
            //set member name
            long memberId = benefitRequest.getMemberId();
            User user = userService.getUserByMemberId(memberId);
            //set approval certify and authorize status
            if (benefitRequest.isApproved()) {
                benefitRequest.setApprovedStatus("YES");

            } else {
                benefitRequest.setApprovedStatus("NO");
            }
            if (benefitRequest.isCertify()) {
                benefitRequest.setCertifiedStatus("YES");
            } else {
                benefitRequest.setCertifiedStatus("NO");
            }
            if (benefitRequest.isAuthorize()) {
                benefitRequest.setAuthorizedStatus("YES");
            } else {
                benefitRequest.setAuthorizedStatus("NO");
            }
            //set display amount or percentage
//            if (benefitRequest.getTotalAmount() > 0) {
//                String amount = StringUtil.toString(benefitRequest.getTotalAmount());
//                Double numParsed = Double.parseDouble(amount);
//                String numString = String.format("%,.2f", numParsed);
//                benefitRequest.setDisplayAmountOrPercentage(numString);
//            } else {
//                if (benefitRequest.getIsPercentageOrAmount().equalsIgnoreCase("Percentage Amount")) {
//                    benefitRequest.setDisplayAmountOrPercentage(benefitRequest.getAmountPercentage() + "%");
//                } else {
//                    benefitRequest.setDisplayAmountOrPercentage("0.00");
//                }
//            }
            //set display status
            if (benefitRequest.getStatus() == Status.PENDING) {
                benefitRequest.setDisplayStatus("Pending Approval");
            } else if (benefitRequest.getStatus() == Status.APPROVED) {
                benefitRequest.setDisplayStatus("Approved pending Authorization");
            } else if (benefitRequest.getStatus() == Status.DECLINED) {
                benefitRequest.setDisplayStatus("Decline");
            } else if (benefitRequest.getStatus() == Status.AUTHORIZED) {
                benefitRequest.setDisplayStatus("Authorized pending processing");
            } else if (benefitRequest.getStatus() == Status.UPLOADED) {
                benefitRequest.setDisplayStatus("Documents uploaded pending approval");
            } else if (benefitRequest.getStatus() == Status.NOT_UPLOADED) {
                benefitRequest.setDisplayStatus("Documents not uploaded");
            } else if (benefitRequest.getStatus() == Status.DECLINED_BY_CRM) {
                benefitRequest.setDisplayStatus("Declined by client relation manager");
            } else if (benefitRequest.getStatus() == Status.DECLINED_BY_SPONSOR) {
                benefitRequest.setDisplayStatus("Declined By Sponsor");
            } else if (benefitRequest.getStatus() == Status.PUSHED_TO_FUNDMASTER) {
                benefitRequest.setDisplayStatus("Awaiting processing");
            } else if (benefitRequest.getStatus() == Status.CERTIFIED) {
                benefitRequest.setDisplayStatus("Certified awaiting approval");
            } else {
                benefitRequest.setDisplayStatus("Pending");
            }
            //set name
           try {
               benefitRequest.setMemberName(user.getUserDetails().getName());
           }catch (NullPointerException exception){
               benefitRequest.setMemberName("N/A");
           }
        }
        return benefitRequests;
    }

    public BenefitRequest setBenefitRequestExtraDetails(BenefitRequest benefitRequest) {
        //set member name
        long memberId = benefitRequest.getMemberId();
        User user = userService.getUserByMemberId(memberId);
        //set approval certify and authorize status
        if (benefitRequest.isApproved()) {
            benefitRequest.setApprovedStatus("YES");
        } else {
            benefitRequest.setApprovedStatus("NO");
        }
        if (benefitRequest.isCertify()) {
            benefitRequest.setCertifiedStatus("YES");
        } else {
            benefitRequest.setCertifiedStatus("NO");
        }
        if (benefitRequest.isAuthorize()) {
            benefitRequest.setAuthorizedStatus("YES");
        } else {
            benefitRequest.setAuthorizedStatus("NO");
        }
        //set display amount or percentage
//        if (benefitRequest.getTotalAmount() > 0) {
//            String amount = StringUtil.toString(benefitRequest.getTotalAmount());
//            Double numParsed = Double.parseDouble(amount);
//            String numString = String.format("%,.2f", numParsed);
//            benefitRequest.setDisplayAmountOrPercentage(numString);
//        } else {
//            if (benefitRequest.getIsPercentageOrAmount().equalsIgnoreCase("Percentage Amount")) {
//                benefitRequest.setDisplayAmountOrPercentage(benefitRequest.getAmountPercentage() + "%");
//            } else {
//                benefitRequest.setDisplayAmountOrPercentage("0.00");
//            }
//        }
        //set display status
        if (benefitRequest.getStatus() == Status.PENDING) {
            benefitRequest.setDisplayStatus("Pending Approval");
        } else if (benefitRequest.getStatus() == Status.APPROVED) {
            benefitRequest.setDisplayStatus("Approved pending Authorization");
        } else if (benefitRequest.getStatus() == Status.DECLINED) {
            benefitRequest.setDisplayStatus("Decline");
        } else if (benefitRequest.getStatus() == Status.AUTHORIZED) {
            benefitRequest.setDisplayStatus("Authorized pending processing");
        } else if (benefitRequest.getStatus() == Status.UPLOADED) {
            benefitRequest.setDisplayStatus("Documents uploaded pending approval");
        } else if (benefitRequest.getStatus() == Status.NOT_UPLOADED) {
            benefitRequest.setDisplayStatus("Documents not uploaded");
        } else if (benefitRequest.getStatus() == Status.DECLINED_BY_CRM) {
            benefitRequest.setDisplayStatus("Declined by client relation manager");
        } else if (benefitRequest.getStatus() == Status.DECLINED_BY_SPONSOR) {
            benefitRequest.setDisplayStatus("Declined By Sponsor");
        } else if (benefitRequest.getStatus() == Status.PUSHED_TO_FUNDMASTER) {
            benefitRequest.setDisplayStatus("Awaiting payment");
        } else if (benefitRequest.getStatus() == Status.CERTIFIED) {
            benefitRequest.setDisplayStatus("Certified awaiting approval");
        } else {
            benefitRequest.setDisplayStatus("Pending");
        }

        return benefitRequest;
    }

    public List<BenefitRequest> setBenefitRequestExtraDetailsById(List<BenefitRequest> benefitRequests) {
        for (BenefitRequest benefitRequest : benefitRequests) {
            long memberId = benefitRequest.getMemberId();
            User user = userService.getUserByMemberId(memberId);
            //set approval certify and authorize status
            if (benefitRequest.isApproved()) {
                benefitRequest.setApprovedStatus("YES");
            } else {
                benefitRequest.setApprovedStatus("NO");
            }
            if (benefitRequest.isCertify()) {
                benefitRequest.setCertifiedStatus("YES");
            } else {
                benefitRequest.setCertifiedStatus("NO");
            }
            if (benefitRequest.isAuthorize()) {
                benefitRequest.setAuthorizedStatus("YES");
            } else {
                benefitRequest.setAuthorizedStatus("NO");
            }
            //set display amount or percentage
//            if (benefitRequest.getTotalAmount() > 0) {
//                String amount = StringUtil.toString(benefitRequest.getTotalAmount());
//                Double numParsed = Double.parseDouble(amount);
//                String numString = String.format("%,.2f", numParsed);
//                benefitRequest.setDisplayAmountOrPercentage(numString);
//            } else {
//                if (benefitRequest.getIsPercentageOrAmount().equalsIgnoreCase("Percentage Amount")) {
//                    benefitRequest.setDisplayAmountOrPercentage(benefitRequest.getAmountPercentage() + "%");
//                } else {
//                    benefitRequest.setDisplayAmountOrPercentage("0.00");
//                }
//            }
            //set display status
            if (benefitRequest.getStatus() == Status.PENDING) {
                benefitRequest.setDisplayStatus("Pending Approval");
            } else if (benefitRequest.getStatus() == Status.APPROVED) {
                benefitRequest.setDisplayStatus("Approved pending authorization");
            } else if (benefitRequest.getStatus() == Status.DECLINED) {
                benefitRequest.setDisplayStatus("Decline");
            } else if (benefitRequest.getStatus() == Status.AUTHORIZED) {
                benefitRequest.setDisplayStatus("Authorized pending processing");
            } else if (benefitRequest.getStatus() == Status.UPLOADED) {
                benefitRequest.setDisplayStatus("Documents uploaded pending approval");
            } else if (benefitRequest.getStatus() == Status.NOT_UPLOADED) {
                benefitRequest.setDisplayStatus("Documents not uploaded");
            } else if (benefitRequest.getStatus() == Status.DECLINED_BY_CRM) {
                benefitRequest.setDisplayStatus("Declined by client relation manager");
            } else if (benefitRequest.getStatus() == Status.DECLINED_BY_SPONSOR) {
                benefitRequest.setDisplayStatus("Declined By Sponsor");
            } else if (benefitRequest.getStatus() == Status.PUSHED_TO_FUNDMASTER) {
                benefitRequest.setDisplayStatus("Awaiting payment");
            } else if (benefitRequest.getStatus() == Status.CERTIFIED) {
                benefitRequest.setDisplayStatus("Certified awaiting approval");
            } else {
                benefitRequest.setDisplayStatus("Pending");
            }

            //set doe
            benefitRequest.setDoe(benefitRequest.getDateCreated().format(DateTimeFormatter.ofPattern("dd/MM/yyyy")));
            //set more details
            FmListDTO fmListDTO = fmMemberClient.getMemberDetails(benefitRequest.getMemberId());
            try {
                if (fmListDTO.isSuccess()) {
                    Object rows = fmListDTO.getRows().get(0);
                    String jsonString = new ObjectMapper().writeValueAsString(rows);
                    JSONParser jsonParser = new JSONParser();
                    JSONObject jsonObject = (JSONObject) jsonParser.parse(jsonString);
                    if (jsonObject != null) {
                        //set age at exit
                        benefitRequest.setAge(jsonObject.get("age").toString());
                        logger.info(benefitRequest.getDoj());
                        //set doj
                        benefitRequest.setDoj(jsonObject.get("dateJoinedScheme").toString());
                        //set name
                        benefitRequest.setMemberName(jsonObject.get("name").toString());
                    }
                }
            } catch (Exception e) {
                logger.info(e.getMessage());
            }
        }
        return benefitRequests;
    }

    public BenefitRequest setBenefitRequestExtraDetailsById(BenefitRequest benefitRequest) {
        long memberId = benefitRequest.getMemberId();
        User user = userService.getUserByMemberId(memberId);
        //set approval certify and authorize status
        if (benefitRequest.isApproved()) {
            benefitRequest.setApprovedStatus("YES");
        } else {
            benefitRequest.setApprovedStatus("NO");
        }
        if (benefitRequest.isCertify()) {
            benefitRequest.setCertifiedStatus("YES");
        } else {
            benefitRequest.setCertifiedStatus("NO");
        }
        if (benefitRequest.isAuthorize()) {
            benefitRequest.setAuthorizedStatus("YES");
        } else {
            benefitRequest.setAuthorizedStatus("NO");
        }
        //set display amount or percentage
//        if (benefitRequest.getTotalAmount() > 0) {
//            String amount = StringUtil.toString(benefitRequest.getTotalAmount());
//            Double numParsed = Double.parseDouble(amount);
//            String numString = String.format("%,.2f", numParsed);
//            benefitRequest.setDisplayAmountOrPercentage(numString);
//        } else {
//            if (benefitRequest.getIsPercentageOrAmount().equalsIgnoreCase("Percentage Amount")) {
//                benefitRequest.setDisplayAmountOrPercentage(benefitRequest.getAmountPercentage() + "%");
//            } else {
//                benefitRequest.setDisplayAmountOrPercentage("0.00");
//            }
//        }
        //set display status
        if (benefitRequest.getStatus() == Status.PENDING) {
            benefitRequest.setDisplayStatus("Pending Approval");
        } else if (benefitRequest.getStatus() == Status.APPROVED) {
            benefitRequest.setDisplayStatus("Approved pending certification");
        } else if (benefitRequest.getStatus() == Status.DECLINED) {
            benefitRequest.setDisplayStatus("Decline");
        } else if (benefitRequest.getStatus() == Status.AUTHORIZED) {
            benefitRequest.setDisplayStatus("Authorized pending processing");
        } else if (benefitRequest.getStatus() == Status.UPLOADED) {
            benefitRequest.setDisplayStatus("Documents uploaded pending approval");
        } else if (benefitRequest.getStatus() == Status.NOT_UPLOADED) {
            benefitRequest.setDisplayStatus("Documents not uploaded");
        } else if (benefitRequest.getStatus() == Status.DECLINED_BY_CRM) {
            benefitRequest.setDisplayStatus("Declined by client relation manager");
        } else if (benefitRequest.getStatus() == Status.DECLINED_BY_SPONSOR) {
            benefitRequest.setDisplayStatus("Declined By Sponsor");
        } else if (benefitRequest.getStatus() == Status.PUSHED_TO_FUNDMASTER) {
            benefitRequest.setDisplayStatus("Awaiting payment");
        } else if (benefitRequest.getStatus() == Status.CERTIFIED) {
            benefitRequest.setDisplayStatus("Certified awaiting authorization");
        } else {
            benefitRequest.setDisplayStatus("Pending");
        }
        //set doe
        benefitRequest.setDoe(benefitRequest.getDateCreated().format(DateTimeFormatter.ofPattern("dd/MM/yyyy")));
        //set more details
        FmListDTO fmListDTO = fmMemberClient.getMemberDetails(benefitRequest.getMemberId());
        try {
            if (fmListDTO.isSuccess()) {
                Object rows = fmListDTO.getRows().get(0);
                String jsonString = new ObjectMapper().writeValueAsString(rows);
                JSONParser jsonParser = new JSONParser();
                JSONObject jsonObject = (JSONObject) jsonParser.parse(jsonString);
                if (jsonObject != null) {
                    //set age at exit
                    benefitRequest.setAge(jsonObject.get("age").toString());
                    logger.info(benefitRequest.getDoj());
                    //set doj
                    benefitRequest.setDoj(jsonObject.get("dateJoinedScheme").toString());
                    //set name
                    benefitRequest.setMemberName(jsonObject.get("name").toString());
                }
            }
        } catch (Exception e) {
            logger.info(e.getMessage());
        }


        return benefitRequest;
    }

    public List<BenefitRequest> getAll() {
        return benefitRequestRepository.findAll();
    }

    public List<BenefitRequest> getRecentClaims(int start, int size) {
        if (size == 0) {
            size = 10;
        }
        return benefitRequestRepository.findRange(start, size);
    }

    public long getCountOfPendingClaims() {
        CriteriaBuilder criteriaBuilder = getEntityManager().getCriteriaBuilder();
        CriteriaQuery<Long> query = criteriaBuilder.createQuery(Long.class);
        Root<BenefitRequest> from = query.from(BenefitRequest.class);
        query.select(criteriaBuilder.count(from));
        query.where(
                criteriaBuilder.equal(
                        from.get("status"),
                        Status.APPROVED
                )
        );
        return getEntityManager()
                .createQuery(query)
                .getSingleResult();
    }


}
