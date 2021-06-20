package com.systech.mss.controller.vm;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.systech.mss.seurity.DateUtils;
import com.systech.mss.util.Ignore;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.Transient;
import java.io.Serializable;
import java.util.Date;


@Embeddable
@NoArgsConstructor
public class MemberEditVM implements Serializable {
    @Ignore
    @Transient
    @JsonProperty
            ("member_Id")
    public Long getMember_Id() {
        return this.member_Id;
    }

    public void setMember_Id(Long member_Id) {
        this.member_Id = member_Id;
    }

    Long member_Id;


    @Ignore
    @Transient
    @JsonProperty
            ("mbshipStatus")
    public String getMStatus() {
        return this.mbshipStatus;
    }

    public void setMStatus(String mbshipStatus) {
        this.mbshipStatus = mbshipStatus;
    }

    String mbshipStatus;

    @Ignore
    @Column
    @JsonProperty
            ("schemeId")
    public Long getSchemeId() {
        return this.schemeId;
    }

    public void setSchemeId(Long schemeId) {
        this.schemeId = schemeId;
    }

    Long schemeId;

    @Ignore
    @Column
    @JsonProperty
            ("title")
    public String getTitle() {
        return this.title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    String title;

    @Ignore
    @Column
    @JsonProperty
            ("surname")
    public String getSurname() {
        return this.surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    String surname;

    @Ignore
    @Column
    @JsonProperty
            ("firstname")
    public String getFirstname() {
        return this.firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    String firstname;

    @Ignore
    @Column
    @JsonProperty
            ("othernames")
    public String getOthernames() {
        return this.othernames;
    }

    public void setOthernames(String othernames) {
        this.othernames = othernames;
    }

    String othernames;

    @Ignore
    @Column
    @JsonProperty
            ("gender")
    public String getGender() {
        return this.gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    String gender;

    @Ignore
    @Column
    @JsonProperty
            ("maritalStatusName")
    public String getMaritalStatusName() {
        return this.maritalStatusName;
    }

    public void setMaritalStatusName(String maritalStatusName) {
        this.maritalStatusName = maritalStatusName;
    }

    String maritalStatusName;

    @Ignore
    @Column
    @JsonProperty
            ("maritalStatusAtDoeName")
    public String getMaritalStatusAtDoeName() {
        return this.maritalStatusAtDoeName;
    }

    public void setMaritalStatusAtDoeName(String maritalStatusAtDoeName) {
        this.maritalStatusAtDoeName = maritalStatusAtDoeName;
    }

    String maritalStatusAtDoeName;

    @Ignore
    @Column
    @JsonProperty
            ("dob")
    public Date getDob() {
        return this.dob;
    }

    public void setDob(Date dob) {
        this.dob = dob;
    }

    Date dob;

    @Ignore
    @Column
    @JsonProperty
            ("idNo")
    public String getIdNo() {
        return this.idNo;
    }

    public void setIdNo(String idNo) {
        this.idNo = idNo;
    }

    String idNo;

    @Ignore
    @Column
    @JsonProperty
            ("pinNo")
    public String getPinNo() {
        return this.pinNo;
    }

    public void setPinNo(String pinNo) {
        this.pinNo = pinNo;
    }

    String pinNo;

    @Ignore
    @Column
    @JsonProperty
            ("fixedPhone")
    public String getFixedPhone() {
        return this.fixedPhone;
    }

    public void setFixedPhone(String fixedPhone) {
        this.fixedPhone = fixedPhone;
    }

    String fixedPhone;

    @Ignore
    @Column
    @JsonProperty
            ("secondaryPhone")
    public String getSecondaryPhone() {
        return this.secondaryPhone;
    }

    public void setSecondaryPhone(String secondaryPhone) {
        this.secondaryPhone = secondaryPhone;
    }

    String secondaryPhone;

    @Ignore
    @Column
    @JsonProperty
            ("cellPhone")
    public String getCellPhone() {
        return this.cellPhone;
    }

    public void setCellPhone(String cellPhone) {
        this.cellPhone = cellPhone;
    }

    String cellPhone;

    @Ignore
    @Column
    @JsonProperty
            ("email")
    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    String email;

    @Ignore
    @Column
    @JsonProperty
            ("otherContacts")
    public String getOtherContacts() {
        return this.otherContacts;
    }

    public void setOtherContacts(String otherContacts) {
        this.otherContacts = otherContacts;
    }

    String otherContacts;

    @Ignore
    @Column
    @JsonProperty
            ("postalAddress")
    public String getPostalAddress() {
        return this.postalAddress;
    }

    public void setPostalAddress(String postalAddress) {
        this.postalAddress = postalAddress;
    }

    String postalAddress;

    @Ignore
    @Column
    @JsonProperty
            ("building")
    public String getBuilding() {
        return this.building;
    }

    public void setBuilding(String building) {
        this.building = building;
    }

    String building;

    @Ignore
    @Column
    @JsonProperty
            ("road")
    public String getRoad() {
        return this.road;
    }

    public void setRoad(String road) {
        this.road = road;
    }

    String road;

    @Ignore
    @Column
    @JsonProperty
            ("town")
    public String getTown() {
        return this.town;
    }

    public void setTown(String town) {
        this.town = town;
    }

    String town;

    @Ignore
    @Column
    @JsonProperty
            ("nationality")
    public String getNationality() {
        return this.nationality;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

    String nationality;

    @Ignore
    @Column
    @JsonProperty
            ("country")
    public String getCountry() {
        return this.country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    String country;

    @Ignore
    @Column
    @JsonProperty
            ("residentialAddress")
    public String getResidentialAddress() {
        return this.residentialAddress;
    }

    public void setResidentialAddress(String residentialAddress) {
        this.residentialAddress = residentialAddress;
    }

    String residentialAddress;

    @Ignore
    @Column
    @JsonProperty
            ("placeOfBirthDistrictName")
    public String getPlaceOfBirthDistrictName() {
        return this.placeOfBirthDistrictName;
    }

    public void setPlaceOfBirthDistrictName(String placeOfBirthDistrictName) {
        this.placeOfBirthDistrictName = placeOfBirthDistrictName;
    }

    String placeOfBirthDistrictName;

    @Ignore
    @Column
    @JsonProperty
            ("placeOfBirthTAName")
    public String getPlaceOfBirthTAName() {
        return this.placeOfBirthTAName;
    }

    public void setPlaceOfBirthTAName(String placeOfBirthTAName) {
        this.placeOfBirthTAName = placeOfBirthTAName;
    }

    String placeOfBirthTAName;

    @Ignore
    @Column
    @JsonProperty
            ("villageName")
    public String getVillageName() {
        return this.villageName;
    }

    public void setVillageName(String villageName) {
        this.villageName = villageName;
    }

    String villageName;

    @Ignore
    @Column
    @JsonProperty
            ("permanentDistrictName")
    public String getPermanentDistrictName() {
        return this.permanentDistrictName;
    }

    public void setPermanentDistrictName(String permanentDistrictName) {
        this.permanentDistrictName = permanentDistrictName;
    }

    String permanentDistrictName;

    @Ignore
    @Column
    @JsonProperty
            ("permanentTAName")
    public String getPermanentTAName() {
        return this.permanentTAName;
    }

    public void setPermanentTAName(String permanentTAName) {
        this.permanentTAName = permanentTAName;
    }

    String permanentTAName;

    @Ignore
    @Column
    @JsonProperty
            ("permanentVillageName")
    public String getPermanentVillageName() {
        return this.permanentVillageName;
    }

    public void setPermanentVillageName(String permanentVillageName) {
        this.permanentVillageName = permanentVillageName;
    }

    String permanentVillageName;

    @Ignore
    @Column
    @JsonProperty
            ("staffNo")
    public int getStaffNo() {
        return this.staffNo;
    }

    public void setStaffNo(int staffNo) {
        this.staffNo = staffNo;
    }

    int staffNo;

    @Ignore
    @Column
    @JsonProperty
            ("nationalPenNo")
    public int getNationalPenNo() {
        return this.nationalPenNo;
    }

    public void setNationalPenNo(int nationalPenNo) {
        this.nationalPenNo = nationalPenNo;
    }

    int nationalPenNo;

    @Ignore
    @Column
    @JsonProperty
            ("designation")
    public String getDesignation() {
        return this.designation;
    }

    public void setDesignation(String designation) {
        this.designation = designation;
    }

    String designation;

    @Ignore
    @Column
    @JsonProperty
            ("department")
    public String getDepartment() {
        return this.department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    String department;

    @Ignore
    @Column
    @JsonProperty
            ("dateOfAppointment")
    public String getDateOfAppointment() {
        return this.dateOfAppointment;
    }

    public void setDateOfAppointment(String dateOfAppointment) {
        this.dateOfAppointment = dateOfAppointment;
    }

    String dateOfAppointment;

    @Ignore
    @Column
    @JsonProperty
            ("monthlySalary")
    public double getMonthlySalary() {
        return this.monthlySalary;
    }

    public void setMonthlySalary(double monthlySalary) {
        this.monthlySalary = monthlySalary;
    }

    double monthlySalary;

    @Ignore
    @Column
    @JsonProperty
            ("memberNo")
    public String getMemberNo() {
        return this.memberNo;
    }

    public void setMemberNo(String memberNo) {
        this.memberNo = memberNo;
    }

    String memberNo;

    @Ignore
    @Column
    @JsonProperty("dateJoinedScheme")
    public Date getDateJoinedScheme() {
        return this.dateJoinedScheme;
    }

    public void setDateJoinedScheme(Date dateJoinedScheme) {
        this.dateJoinedScheme = dateJoinedScheme;
    }

    Date dateJoinedScheme;

    @Transient
    String dobString;

    public String getDobString() {
        return DateUtils.shortDate(getDob());
    }

    @Ignore
    @Column
    public String otherIdNo;

    @Ignore
    @Column
    public String membershipNo;

    @Ignore
    @Column
    public String policyNo;

    @Ignore
    @Column
    public String region;

    @Ignore
    @Column
    public String depot;

    @Ignore
    @Column
    public String jobGradeId;

    @Ignore
    @Column
    public String contractEndDate;

    @Ignore
    @Column
    public String partyRefNo;

    @Ignore
    @Column
    public String companyId;

    @Ignore
    @Column
    public String mclassId;

}
