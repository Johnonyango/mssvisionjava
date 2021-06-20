package com.systech.mss.domain;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.Date;


@Entity
@Table(name = ClaimDocuments.TB_NAME)
@Getter
@Setter
@NoArgsConstructor
@ToString
public class ClaimDocuments {

    @Transient
    public static final String TB_NAME = "claimdocuments";

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;

    @Column(nullable = false)
    long benefitRequestId;

    @Column(nullable = false)
    long documentId;

    @Column(updatable = false)
    Date createdAt = new Date();

    @Transient
    String shortDate;

}
