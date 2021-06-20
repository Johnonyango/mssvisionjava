package com.systech.mss.controller.vm;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.systech.mss.util.Ignore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Getter
@Setter
@ToString
@NoArgsConstructor
public class PotentialMemberETL implements Serializable {
    @Ignore
    public String sponsorId;
    @Ignore
    public String employer;
    @Ignore
    public String employerAddress;
    @Ignore
    public String employerProdNo;
    @Ignore
    public String schemeproduct;
    @Ignore
    public String title;
    @Ignore
    public String surName;
    @Ignore
    public String etl_firstName;
    @Ignore
    public String etl_lastName;
    @Ignore
    public String salary;
    @Ignore
    public String dateOfAppointment;
    @Ignore
    public String taxNumber;
    @JsonProperty("MsurName")
    @Ignore
    public String msurName;
    @JsonProperty("MfirstName")
    @Ignore
    public String mfirstName;
    @JsonProperty("M_otherName")
    @Ignore
    public String m_otherName;
    @Ignore
    public String dateOfBirth;
    @Ignore
    public String age;
    @Ignore
    public String gender;
    @Ignore
    public String etl_maritalStatus;
    @Ignore
    public String nationality;
    @Ignore
    public String etl_country;
    @Ignore
    public String postalTown;
    @Ignore
    public String region;
    @Ignore
    public String etl_country_of_Birth;
    @Ignore
    public String postalAddress;
    @Ignore
    public String homeAddress;
    @Ignore
    public String countryCode;
    @Ignore
    public String etl_phoneNumber;
    @Ignore
    public String etl_emailAddress;
    @Ignore
    public String tier_account;
    @Ignore
    public String otherIdType;
    @Ignore
    public String otherIdentificationNumber;
    @Ignore
    public String socialSecurity;
    @Ignore
    public String nameOfFather;
    @Ignore
    public String nameOfMother;
    @Ignore
    public String addressOfFather;
    @Ignore
    public String addressOfMother;
    @Ignore
    public String beneficiaryName;
    @Ignore
    public String benDateOfBirth;
    @Ignore
    public String benRelationship;
    @Ignore
    public String benPostalAddress;
    @Ignore
    public String benEmail;
    @Ignore
    public String benPhoneNumber;
    @Ignore
    public String benAllocation;
    @Ignore
    public String beneficiaryName1;
    @Ignore
    public String benDateOfBirth1;
    @Ignore
    public String benRelationship1;
    @Ignore
    public String benRelationship2;
    @Ignore
    public String benRelationship3;
    @Ignore
    public String benPostalAddress1;
    @Ignore
    public String benEmail1;
    @Ignore
    public String benPhoneNumber1;
    @Ignore
    public String benAllocation1;
    @Ignore
    public String beneficiaryName2;
    @Ignore
    public String benDateOfBirth2;
    @Ignore
    public String benPostalAddress2;
    @Ignore
    public String benEmail2;
    @Ignore
    public String benPhoneNumber2;
    @Ignore
    public String benAllocation2;
    @Ignore
    public String beneficiaryName3;
    @Ignore
    public String benDateOfBirth3;
    @Ignore
    public String benPostalAddress3;
    @Ignore
    public String benEmail3;
    @Ignore
    public String benPhoneNumber3;
    @Ignore
    public String benAllocation3;
    @Ignore
    public String acceptTerms;

    public Map<String, Object> xtractEtlMemberFromRequest() {
        String otherIdType = getOtherIdType();
        if (otherIdType.isEmpty()) {
            otherIdType = "NOT_SPECIFIED";
        }
        try {
            Map<String, Object> jsonObject = new HashMap<>();
            jsonObject.put("surname", getSurName());
            jsonObject.put("title", getTitle());
            jsonObject.put("firstname", getEtl_firstName());
            jsonObject.put("othernames", getEtl_lastName());
            jsonObject.put("motherName", getNameOfMother());
            jsonObject.put("fatherName", getNameOfFather());
            jsonObject.put("email", getEtl_emailAddress());
            jsonObject.put("idNo", getOtherIdentificationNumber());
            jsonObject.put("idType", "NATIONAL");
            jsonObject.put("socialSecurity", getSocialSecurity());
            jsonObject.put("schemeproduct", getSchemeproduct());
            jsonObject.put("maritalStatus", getEtl_maritalStatus().isEmpty() ? "NOT_SPECIFIED" : getEtl_maritalStatus());
            jsonObject.put("cellPhone", getCountryCode()+getEtl_phoneNumber());
            jsonObject.put("employerProdNo", getEmployerProdNo());
            jsonObject.put("employer", getEmployer());
            jsonObject.put("salary", getSalary());
            jsonObject.put("employerAddress", getEmployerAddress());
            jsonObject.put("memberDob", getDateOfBirth());
            jsonObject.put("memberGender", getGender());
            jsonObject.put("memberDateOfAppointment", getDateOfAppointment());
            jsonObject.put("memberAddressResidentialAddress", getHomeAddress());
            jsonObject.put("memberAddressPostalAddress", getPostalAddress());
            jsonObject.put("memberAddressTown", getPostalTown());
            jsonObject.put("memberAddressRegion", getRegion());
            jsonObject.put("memberCountry", getEtl_country());
            jsonObject.put("nationality", getNationality());
            jsonObject.put("otherIDType", otherIdType);
            jsonObject.put("otherIDNumber", getOtherIdentificationNumber());
            jsonObject.put("maritalStatusAtDoe", getEtl_maritalStatus().isEmpty() ? "NOT_SPECIFIED" : getEtl_maritalStatus());
            jsonObject.put("staffNumber", "");
            jsonObject.put("otherContacts", getCountryCode()+getEtl_phoneNumber());
            jsonObject.put("memberNextOfKinName", "");
            jsonObject.put("memberNextOfKinRltShip", "");
            jsonObject.put("memberNextOfKinAddress", "");
            jsonObject.put("nextOfKinAllocation", 0);
            jsonObject.put("parmanentVillage", "");
            jsonObject.put("parmanentTraditionalAuthority", "");
            jsonObject.put("parmanentDistrict", "");
            jsonObject.put("placeOfBirthVillage", "");
            jsonObject.put("placeOfBirthTraditionalAuthority", "");
            jsonObject.put("placeOfBirthDistrict", "");
            jsonObject.put("secondaryPhoneNumber", getCountryCode()+getEtl_phoneNumber());
            jsonObject.put("road", "");
            jsonObject.put("building", "");
            jsonObject.put("postalTown", getPostalTown());
            jsonObject.put("taxNumber", getTaxNumber());
            jsonObject.put("homeAddress", getHomeAddress());
            jsonObject.put("maidenName", String.format("%s %s %s", getMsurName(), getMfirstName(), getM_otherName()));


            Map<String, Object> ben1 = new HashMap<>();
            Map<String, Object> ben2 = new HashMap<>();
            Map<String, Object> ben3 = new HashMap<>();
            Map<String, Object> ben4 = new HashMap<>();

            ben1.put("memberBeneficiaryFirstname", getBeneficiaryName());
            ben1.put("memberBeneficiaryDob", getBenDateOfBirth());
            ben1.put("memberBeneficiaryRelationship", getBenRelationship());
            ben1.put("memberBeneficiaryBenAllocation", getBenAllocation());
            ben1.put("memberBeneficiaryAddressEmail", getBenEmail());
            ben1.put("memberBeneficiaryAddressPostalAddress", getBenPostalAddress());
            ben1.put("memberBeneficiaryAddressCellPhone", getBenPhoneNumber());

            ben2.put("memberBeneficiaryFirstname", getBeneficiaryName1());
            ben2.put("memberBeneficiaryDob", getBenDateOfBirth1());
            ben2.put("memberBeneficiaryRelationship", getBenRelationship1());
            ben2.put("memberBeneficiaryBenAllocation", getBenAllocation1());
            ben2.put("memberBeneficiaryAddressEmail", getBenEmail1());
            ben2.put("memberBeneficiaryAddressPostalAddress", getBenPostalAddress1());
            ben2.put("memberBeneficiaryAddressCellPhone", getBenPhoneNumber1());

            ben3.put("memberBeneficiaryFirstname", getBeneficiaryName2());
            ben3.put("memberBeneficiaryDob", getBenDateOfBirth2());
            ben3.put("memberBeneficiaryRelationship", getBenRelationship2());
            ben3.put("memberBeneficiaryBenAllocation", getBenAllocation2());
            ben3.put("memberBeneficiaryAddressEmail", getBenEmail2());
            ben3.put("memberBeneficiaryAddressPostalAddress", getBenPostalAddress2());
            ben3.put("memberBeneficiaryAddressCellPhone", getBenPhoneNumber2());

            ben4.put("memberBeneficiaryFirstname", getBeneficiaryName3());
            ben4.put("memberBeneficiaryDob", getBenDateOfBirth3());
            ben4.put("memberBeneficiaryRelationship", getBenRelationship3());
            ben4.put("memberBeneficiaryBenAllocation", getBenAllocation3());
            ben4.put("memberBeneficiaryAddressEmail", getBenEmail3());
            ben4.put("memberBeneficiaryAddressPostalAddress", getBenPostalAddress3());
            ben4.put("memberBeneficiaryAddressCellPhone", getBenPhoneNumber3());


            List<Object> jsonArray = new ArrayList<>();
            jsonArray.add(ben1);
            jsonArray.add(ben2);
            jsonArray.add(ben3);
            jsonArray.add(ben4);
            jsonObject.put("beneficiaries", jsonArray);
            return jsonObject;
        } catch (Exception je) {
            je.printStackTrace();
        }
        return null;
    }
}
