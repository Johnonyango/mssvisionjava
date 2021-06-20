package com.systech.mss.domain;

import lombok.Getter;
import lombok.Setter;

import javax.json.bind.annotation.JsonbTransient;
import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.security.PrivateKey;
import java.time.LocalDateTime;

@Entity
@Table(name="landingpagecontent")
@Getter
@Setter
public class LandingPageContent implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @JsonbTransient
    @Column(name = "created_date",updatable = false)
    private LocalDateTime createdDate;

    @Lob
    //@NotNull
    private String welcomeMessage;

    @Column
    private long logo=0l; //comes from Documents id

    @Column
    private long pensionerImage=0l; //comes from Documents id

    @Column
    private long loginImage=0l;

    @Column
    private long memberIcon=0l;

    @Column
    private long pensionerIcon=0l;

    @Lob
   // @NotNull
    private String whySaveMessage;

    @Lob
    @Column
    private String memberMessage;

    @Lob
   // @NotNull
    private String pensionerMessage;

    @Lob
    @Column
    private String mapLoc;

    @Embedded
    private Address address;

    @Column
    @Enumerated(EnumType.STRING)
    StatusConfig statusConfig=StatusConfig.ACTIVE;

    @Transient
    String addressString;

    @Transient
    String shortDate;
}