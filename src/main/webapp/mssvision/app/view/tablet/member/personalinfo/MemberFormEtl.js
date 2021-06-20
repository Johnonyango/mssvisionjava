Ext.define('MssPhoenix.view.tablet.member.personalinfo.MemberFormEtl', {
    extend: 'Ext.form.FormPanel',
    xtype: 'memberformetl',
    reference: 'memberformetl',

    items: [
        {
            xtype: 'container',
            items: [
                {
                    xtype: 'tabpanel',
                    scroll: true,
                    minHeight: 400,
                    defaults: {
                        scrollable: true,
                    },
                    items: [
                        {
                            title: 'Personal Information',
                            items: [
                                {
                                    xtype: "fieldset",
                                    autoHeight: true,
                                    collapsed: false,
                                    anchor: "98%",
                                    items: [
                                        {
                                            xtype: 'hcontainer',
                                            items: [
                                                {
                                                    defaults: {
                                                        margin: '0 2 0 2'
                                                    },
                                                    items: [
                                                        {
                                                            xtype: "mitextfield",
                                                            name: "member_Id",
                                                            label: "ID",
                                                            hidden: true,
                                                            bind: {
                                                                value: `${MssPhoenix.model.Session.getMemberId()}`,

                                                            },

                                                        },
                                                        {
                                                            xtype: "mitextfield",
                                                            name: "mbshipStatus",
                                                            label: "Status",
                                                            bind: {
                                                                readOnly: `{memberFormConfig.membershipStatusReadOnly}`,
                                                                hidden: `{memberFormConfig.membershipStatusHidden}`
                                                            }
                                                        },
                                                        {
                                                            xtype: "mitextfield",
                                                            name: "schemeId",
                                                            label: "Scheme ID",
                                                            bind: {
                                                                readOnly: `{memberFormConfig.schemeIdReadOnly}`,
                                                                hidden: `{memberFormConfig.schemeIdHidden}`
                                                            }
                                                        },
                                                        {
                                                            xtype: "selectbox",
                                                            name: "title",
                                                            label: "Title",
                                                            allowBlank: false,
                                                            blankText: "Please Select Title..",
                                                            emptyText: "Select Title...",
                                                            store: {
                                                                type: "salutations",
                                                            },
                                                            displayField: "title",
                                                            valueField: "id",
                                                            anchor: "100%",
                                                            bind: {
                                                                readOnly: `{memberFormConfig.salutationReadOnly}`,
                                                                hidden: `{memberFormConfig.salutationHidden}`
                                                            }
                                                        },
                                                        {
                                                            xtype: "mitextfield",
                                                            label: "Surname",
                                                            allowBlank: false,
                                                            maxLength: 50,
                                                            name: "surname",
                                                            anchor: "100%",
                                                            bind: {
                                                                readOnly: `{memberFormConfig.surnameReadOnly}`,
                                                                hidden: `{memberFormConfig.surnameHidden}`
                                                            },
                                                            required: true
                                                        },
                                                        {
                                                            xtype: "mitextfield",
                                                            label: "Firstname",
                                                            allowBlank: false,
                                                            maxLength: 50,
                                                            name: "firstname",
                                                            anchor: "100%",
                                                            bind: {
                                                                readOnly: `{memberFormConfig.firstnameReadOnly}`,
                                                                hidden: `{memberFormConfig.firstnameHidden}`
                                                            },
                                                            required: true
                                                        },
                                                        {
                                                            xtype: "mitextfield",
                                                            maxLength: 50,
                                                            label: "Othernames",
                                                            allowBlank: true,
                                                            name: "othernames",
                                                            anchor: "100%",
                                                            bind: {
                                                                readOnly: `{memberFormConfig.othernamesReadOnly}`,
                                                                hidden: `{memberFormConfig.othernamesHidden}`
                                                            },
                                                        },
                                                    ]
                                                },
                                                {
                                                    defaults: {
                                                        margin: '0 2 0 2'
                                                    },
                                                    items: [

                                                        {
                                                            xtype: "selectbox",
                                                            name: "gender",
                                                            label: "Gender",
                                                            allowBlank: false,
                                                            emptyText: "Select Gender...",
                                                            store: new Ext.data.Store({
                                                                fields: ["id", "value"],
                                                                data: [
                                                                    ["MALE", "Male"],
                                                                    ["FEMALE", "Female"],
                                                                ],
                                                            }),
                                                            displayField: "value",
                                                            valueField: "id",
                                                            anchor: "100%",
                                                            bind: {
                                                                readOnly: `{memberFormConfig.genderReadOnly}`,
                                                                hidden: `{memberFormConfig.genderHidden}`
                                                            },
                                                            required: true
                                                        },
                                                        {
                                                            xtype: "selectbox",
                                                            name: "maritalStatusName",
                                                            label: "Current Marital Status",
                                                            store: {
                                                                type: "maritalStatuses"
                                                            },
                                                            displayField: "status",
                                                            valueField: "id",
                                                            anchor: "100%",
                                                            bind: {
                                                                readOnly: `{memberFormConfig.maritalStatusReadOnly}`,
                                                                hidden: `{memberFormConfig.maritalStatusHidden}`
                                                            },
                                                        },
                                                        {
                                                            xtype: "selectbox",
                                                            name: "maritalStatusAtDoeName",
                                                            label: "Marital Status At Date Of Entry",
                                                            store: {
                                                                type: "maritalStatuses"
                                                            },
                                                            displayField: "status",
                                                            valueField: "id",
                                                            anchor: "100%",
                                                            bind: {
                                                                readOnly: `{memberFormConfig.maritalStatusAtEntryReadOnly}`,
                                                                hidden: `{memberFormConfig.maritalStatusAtEntryHidden}`
                                                            },
                                                            required: true
                                                        },
                                                        {
                                                            xtype: "midatefield",
                                                            label: "Date Of Birth",
                                                            name: "dob",
                                                            dateFormat: 'Y-m-d',
                                                            allowBlank: false,
                                                            maxValue: new Date(),
                                                            minValue: new Date(1977),
                                                            anchor: "100%",
                                                            bind: {
                                                                readOnly: `{memberFormConfig.dobReadOnly}`,
                                                                hidden: `{memberFormConfig.dobHidden}`
                                                            },
                                                            required: true
                                                        },
                                                    ]
                                                },
                                                {
                                                    defaults: {
                                                        margin: '0 2 0 2'
                                                    },
                                                    items: [

                                                        {
                                                            xtype: "mitextfield",
                                                            label: "National Identification Number",
                                                            name: "idNo",
                                                            anchor: "100%",
                                                            bind: {
                                                                readOnly: `{memberFormConfig.idNoReadOnly}`,
                                                                hidden: `{memberFormConfig.idNoHidden}`
                                                            },
                                                            required: true
                                                        },
                                                        {
                                                            xtype: "mitextfield",
                                                            label: "Other Identification Document",
                                                            allowBlank: true,
                                                            name: "otherIdNo",
                                                            msgTarget: "under",
                                                            blankText: "Passport Number Cannot be Null!",
                                                            bind: {
                                                                readOnly: `{memberFormConfig.otherIdNoReadOnly}`,
                                                                hidden: `{memberFormConfig.otherIdNoHidden}`
                                                            },
                                                            anchor: "100%",
                                                        },
                                                        {
                                                            xtype: "mitextfield",
                                                            label: "Tax ID Number",
                                                            name: "pinNo",
                                                            anchor: "100%",
                                                            bind: {
                                                                readOnly: `{memberFormConfig.taxPinNoReadOnly}`,
                                                                hidden: `{memberFormConfig.taxPinNoHidden}`
                                                            },
                                                        },
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                            ]
                        },
                        {
                            title: "Address Information",
                            items: [
                                {
                                    xtype: "fieldset",
                                    autoHeight: true,
                                    collapsed: false,
                                    anchor: "98%",
                                    items: [
                                        {
                                            xtype: 'hcontainer',
                                            items: [
                                                {
                                                    defaults: {
                                                        margin: '0 2 0 2'
                                                    },
                                                    items: [
                                                        {
                                                            xtype: "mitextfield",
                                                            label: "Phone No.(Primary)",
                                                            name: "fixedPhone",
                                                            anchor: "100%",
                                                            bind: {
                                                                readOnly: `{memberFormConfig.fixedPhoneReadOnly}`,
                                                                hidden: `{memberFormConfig.fixedPhoneHidden}`
                                                            },
                                                            required: true
                                                        },
                                                        {
                                                            xtype: "mitextfield",
                                                            label: "Secondary Phone No.",
                                                            name: "secondaryPhone",
                                                            renderer: function (value) {
                                                                return value.replace(/^(\d{3})(\d{3})(\d{4})$/, "$1-$2-$3");
                                                            },
                                                            bind: {
                                                                readOnly: `{memberFormConfig.secondaryPhoneReadOnly}`,
                                                                hidden: `{memberFormConfig.secondaryPhoneHidden}`
                                                            },
                                                            anchor: "100%",
                                                        },
                                                        {
                                                            xtype: "mitextfield",
                                                            label: "Telephone",
                                                            allowBlank: true,
                                                            name: "cellPhone",
                                                            bind: {
                                                                readOnly: `{memberFormConfig.cellPhoneReadOnly}`,
                                                                hidden: `{memberFormConfig.cellPhoneHidden}`
                                                            },
                                                            anchor: "100%",
                                                        },
                                                        {
                                                            xtype: "mitextfield",
                                                            label: "Email",
                                                            name: "email",
                                                            validators: "email",
                                                            anchor: "100%",
                                                            bind: {
                                                                readOnly: `{memberFormConfig.emailReadOnly}`,
                                                                hidden: `{memberFormConfig.emailHidden}`
                                                            },
                                                            readOnly: true
                                                        },
                                                    ]
                                                },
                                                {
                                                    defaults: {
                                                        margin: '0 2 0 2'
                                                    },
                                                    items: [
                                                        {
                                                            xtype: "mitextfield",
                                                            label: "Other Contacts",
                                                            allowBlank: true,
                                                            name: "otherContacts",
                                                            bind: {
                                                                readOnly: `{memberFormConfig.otherContactsReadOnly}`,
                                                                hidden: `{memberFormConfig.otherContactsHidden}`
                                                            },
                                                            anchor: "100%",
                                                        },
                                                        {
                                                            xtype: "mitextfield",
                                                            label: "Postal Address",
                                                            name: "postalAddress",
                                                            maxLength: 50,
                                                            anchor: "100%",
                                                            bind: {
                                                                readOnly: `{memberFormConfig.postalAddressReadOnly}`,
                                                                hidden: `{memberFormConfig.postalAddressHidden}`
                                                            },
                                                            required: true
                                                        },
                                                        {
                                                            xtype: "mitextfield",
                                                            label: "Building",
                                                            name: "building",
                                                            bind: {
                                                                readOnly: `{memberFormConfig.buildingReadOnly}`,
                                                                hidden: `{memberFormConfig.buildingHidden}`
                                                            },
                                                            maxLength: 50,
                                                            anchor: "100%",
                                                        },
                                                        {
                                                            xtype: "mitextfield",
                                                            label: "Road",
                                                            name: "road",
                                                            maxLength: 50,
                                                            bind: {
                                                                readOnly: `{memberFormConfig.roadReadOnly}`,
                                                                hidden: `{memberFormConfig.roadHidden}`
                                                            },
                                                            anchor: "100%",
                                                        },
                                                    ]
                                                },
                                                {
                                                    defaults: {
                                                        margin: '0 2 0 2'
                                                    },
                                                    items: [
                                                        {
                                                            xtype: "mitextfield",
                                                            label: "Town",
                                                            name: "town",
                                                            maxLength: 50,
                                                            bind: {
                                                                readOnly: `{memberFormConfig.townReadOnly}`,
                                                                hidden: `{memberFormConfig.townHidden}`
                                                            },
                                                            anchor: "100%",
                                                        },
                                                        {
                                                            xtype: "mitextfield",
                                                            label: "Nationality",
                                                            name: "nationality",
                                                            maxLength: 50,
                                                            bind: {
                                                                readOnly: `{memberFormConfig.nationalityReadOnly}`,
                                                                hidden: `{memberFormConfig.nationalityHidden}`
                                                            },
                                                            anchor: "100%",
                                                        },
                                                        {
                                                            xtype: "selectbox",
                                                            name: "country",
                                                            label: "Country",
                                                            store: {
                                                                type: "countries",
                                                            },
                                                            displayField: "name",
                                                            valueField: "name",
                                                            bind: {
                                                                readOnly: `{memberFormConfig.countryReadOnly}`,
                                                                hidden: `{memberFormConfig.countryHidden}`
                                                            },
                                                            required: true
                                                        },
                                                        {
                                                            xtype: "mitextfield",
                                                            label: "Residential Address",
                                                            name: "residentialAddress",
                                                            blankText: "Address Cannot be empty!",
                                                            maxLength: 50,
                                                            bind: {
                                                                readOnly: `{memberFormConfig.residentialAddressReadOnly}`,
                                                                hidden: `{memberFormConfig.residentialAddressHidden}`
                                                            },
                                                            anchor: "100%"
                                                        },
                                                    ]
                                                },
                                                {
                                                    defaults: {
                                                        margin: '0 2 0 2'
                                                    },
                                                    items: [
                                                        {
                                                            xtype: "selectbox",
                                                            name: "placeOfBirthDistrictName",
                                                            label: "Place of Birth",
                                                            blankText: "Select place of birth...",
                                                            store: {
                                                                type: "districtstore",
                                                            },
                                                            displayField: "name",
                                                            valueField: "id",
                                                            anchor: "100%",
                                                            editable: false,
                                                            queryMode: 'local',
                                                            bind: {
                                                                readOnly: `{memberFormConfig.placeOfBirthDistrictNameReadOnly}`,
                                                                hidden: `{memberFormConfig.placeOfBirthDistrictNameHidden}`
                                                            },
                                                            listeners: {
                                                                select: 'pobDtrSelect'
                                                            },
                                                        },
                                                        {
                                                            xtype: "selectbox",
                                                            name: "placeOfBirthTAName",
                                                            itemId: "placeOfBirthTAName",
                                                            label: "Traditional Authority",
                                                            blankText: "Select traditional authority...",
                                                            displayField: "name",
                                                            valueField: "id",
                                                            anchor: "100%",
                                                            editable: false,
                                                            bind: {
                                                                readOnly: `{memberFormConfig.placeOfBirthTANameReadOnly}`,
                                                                hidden: `{memberFormConfig.placeOfBirthTANameHidden}`
                                                            },
                                                            listeners: {
                                                                select: 'pobTrSelect',
                                                            }
                                                        },
                                                        {
                                                            xtype: "selectbox",
                                                            name: "villageName",
                                                            itemId: "villageName",
                                                            label: "Village",
                                                            blankText: "Village...",
                                                            bind: {
                                                                readOnly: `{memberFormConfig.villageNameReadOnly}`,
                                                                hidden: `{memberFormConfig.villageNameHidden}`
                                                            },
                                                            displayField: "name",
                                                            valueField: "name",
                                                            editable: false,
                                                            anchor: "100%",
                                                        },
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                            ]
                        },
                        {
                            title: "Employment Information",
                            items: [
                                {
                                    xtype: "fieldset",
                                    autoHeight: true,
                                    collapsed: false,
                                    anchor: "98%",
                                    items: [
                                        {
                                            xtype: 'hcontainer',
                                            items: [
                                                {
                                                    defaults: {
                                                        margin: '0 2 0 2'
                                                    },
                                                    items: [
                                                        {
                                                            xtype: "minumberfield",
                                                            label: "Staff Number",
                                                            name: "staffNo",
                                                            maxLength: 50,
                                                            anchor: "100%",
                                                            bind: {
                                                                readOnly: `{memberFormConfig.staffNoReadOnly}`,
                                                                hidden: `{memberFormConfig.staffNoHidden}`
                                                            },
                                                        },
                                                        {
                                                            xtype: "minumberfield",
                                                            label: "National Pension Number",
                                                            name: "nationalPenNo",
                                                            maxLength: 50,
                                                            anchor: "100%",
                                                            bind: {
                                                                readOnly: `{memberFormConfig.nationalPenNoReadOnly}`,
                                                                hidden: `{memberFormConfig.nationalPenNoHidden}`
                                                            },
                                                        },
                                                        {
                                                            xtype: "mitextfield",
                                                            label: "Designation",
                                                            maxLength: 50,
                                                            name: "designation",
                                                            anchor: "100%",
                                                            bind: {
                                                                readOnly: `{memberFormConfig.designationReadOnly}`,
                                                                hidden: `{memberFormConfig.designationHidden}`
                                                            },
                                                        },
                                                        {
                                                            xtype: "mitextfield",
                                                            label: "Department",
                                                            name: "department",
                                                            maxLength: 50,
                                                            anchor: "100%",
                                                            bind: {
                                                                readOnly: `{memberFormConfig.departmentReadOnly}`,
                                                                hidden: `{memberFormConfig.departmentHidden}`
                                                            },
                                                        },
                                                    ]
                                                },
                                                {
                                                    defaults: {
                                                        margin: '0 2 0 2'
                                                    },
                                                    items: [
                                                        {
                                                            xtype: "mitextfield",
                                                            name: "jobGradeId",
                                                            hiddenName: "jobGradeId",
                                                            label: "Job Grade",
                                                            bind: {
                                                                readOnly: `{memberFormConfig.dateOfAppointmentReadOnly}`,
                                                                hidden: `{memberFormConfig.dateOfAppointmentHidden}`
                                                            },
                                                        },
                                                        {
                                                            xtype: "midatefield",
                                                            label: "Date Of Appointment",
                                                            maxValue: new Date(),
                                                            allowBlank: false,
                                                            minValue: "1950-01-01",
                                                            name: "dateOfAppointment",
                                                            startDateField: "dateofbirth",
                                                            bind: {
                                                                readOnly: `{memberFormConfig.jobGradeIdReadOnly}`,
                                                                hidden: `{memberFormConfig.jobGradeIdHidden}`
                                                            },
                                                            anchor: "100%",
                                                        },
                                                        {
                                                            xtype: "minumberfield",
                                                            label: "Current Monthly Salary",
                                                            value: 0,
                                                            minValue: 0,
                                                            name: "monthlySalary",
                                                            anchor: "100%",
                                                            bind: {
                                                                readOnly: `{memberFormConfig.monthlySalaryReadOnly}`,
                                                                hidden: `{memberFormConfig.monthlySalaryHidden}`
                                                            },
                                                            renderer: 'moneyFormatFunc'
                                                        },
                                                        {
                                                            xtype: "midatefield",
                                                            label: "Contract End Date",
                                                            allowBlank: true,
                                                            name: "contractEndDate",
                                                            anchor: "100%",
                                                            bind: {
                                                                readOnly: `{memberFormConfig.contractEndDateReadOnly}`,
                                                                hidden: `{memberFormConfig.contractEndDateHidden}`
                                                            },
                                                        },
                                                    ]
                                                },
                                            ]
                                        }
                                    ],
                                },
                            ]
                        },
                        {
                            title: "Membership Information",
                            items: [
                                {
                                    xtype: "fieldset",
                                    autoHeight: true,
                                    collapsed: false,
                                    anchor: "98%",
                                    items: [
                                        {
                                            xtype: 'hcontainer',
                                            items: [
                                                {
                                                    defaults: {
                                                        margin: '0 2 0 2'
                                                    },
                                                    items: [
                                                        {
                                                            xtype: "mitextfield",
                                                            label: "Membership Number",
                                                            name: "memberNo",
                                                            anchor: "100%",
                                                            bind: {
                                                                readOnly: `{memberFormConfig.memberNoReadOnly}`,
                                                                hidden: `{memberFormConfig.memberNoHidden}`
                                                            },
                                                        },
                                                        {
                                                            xtype: "mitextfield",
                                                            label: "Membership ID",
                                                            name: "membershipNo",
                                                            maxLength: 50,
                                                            anchor: "100%",
                                                            bind: {
                                                                readOnly: `{memberFormConfig.membershipNoReadOnly}`,
                                                                hidden: `{memberFormConfig.membershipNoHidden}`
                                                            },
                                                        },
                                                        {
                                                            xtype: "mitextfield",
                                                            label: "Party Ref No.",
                                                            name: "partyRefNo",
                                                            maxLength: 50,
                                                            bind: {
                                                                readOnly: `{memberFormConfig.partyRefNoReadOnly}`,
                                                                hidden: `{memberFormConfig.partyRefNoHidden}`
                                                            },
                                                            anchor: "100%",
                                                        },
                                                        {
                                                            xtype: "midatefield",
                                                            label: "Date Of Joining Scheme",
                                                            allowBlank: false,
                                                            dateFormat: 'Y-m-d',
                                                            maxValue: new Date(),
                                                            name: "dateJoinedScheme",
                                                            anchor: "100%",
                                                            bind: {
                                                                readOnly: `{memberFormConfig.dateJoinedSchemeReadOnly}`,
                                                                hidden: `{memberFormConfig.dateJoinedSchemeHidden}`
                                                            }
                                                        },
                                                        {
                                                            xtype: "mitextfield",
                                                            name: "companyId",
                                                            reference: "memberCompanyId",
                                                            label: "Cost Center",
                                                            bind: {
                                                                readOnly: `{memberFormConfig.companyIdReadOnly}`,
                                                                hidden: `{memberFormConfig.companyIdHidden}`
                                                            },
                                                        },
                                                    ]
                                                }
                                                , {
                                                    defaults: {
                                                        margin: '0 2 0 2'
                                                    },
                                                    items: [
                                                        {
                                                            xtype: "mitextfield",
                                                            name: "mclassId",
                                                            reference: "memberMclassId",
                                                            hiddenName: "mclassId",
                                                            label: "Member Class",
                                                            bind: {
                                                                readOnly: `{memberFormConfig.mclassIdReadOnly}`,
                                                                hidden: `{memberFormConfig.mclassIdHidden}`
                                                            },
                                                        },
                                                        {
                                                            xtype: "minumberfield",
                                                            label: "Account Number",
                                                            name: "policyNo",
                                                            maxLength: 50,
                                                            anchor: "100%",
                                                            bind: {
                                                                readOnly: `{memberFormConfig.policyNoReadOnly}`,
                                                                hidden: `{memberFormConfig.policyNoHidden}`
                                                            },
                                                        },
                                                        {
                                                            xtype: "mitextfield",
                                                            label: "Region",
                                                            maxLength: 50,
                                                            name: "region",
                                                            anchor: "100%",
                                                            bind: {
                                                                readOnly: `{memberFormConfig.regionReadOnly}`,
                                                                hidden: `{memberFormConfig.regionHidden}`
                                                            },
                                                        },
                                                        {
                                                            xtype: "minumberfield",
                                                            label: "Depot",
                                                            maxLength: 50,
                                                            name: "depot",
                                                            anchor: "100%",
                                                            bind: {
                                                                readOnly: `{memberFormConfig.depotReadOnly}`,
                                                                hidden: `{memberFormConfig.depotHidden}`
                                                            },
                                                        },
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                            ]
                        },
                        {
                            title: 'Documents',
                            items: [
                                {
                                    xtype: 'container',
                                    layout: 'hbox',
                                    items: [
                                        {
                                            width: '30%',
                                            xtype: 'container'
                                        },
                                        {
                                            width: '30%',
                                            xtype: 'fieldset',
                                            padding: '30 0 0 0',
                                            title: 'Documents',
                                            items: [
                                                {
                                                    xtype: 'container',
                                                    cls: 'module-body',
                                                    items: [
                                                        {
                                                            xtype: 'mifilefield',
                                                            name: 'file',
                                                            label: 'Upload documents',
                                                            placeholder: 'Select file',
                                                            tooltip: 'Select file',
                                                            multiple: true,
                                                            bind: {
                                                                hidden: `{memberFormConfig.fileHidden}`
                                                            },
                                                            minWidth: 200
                                                        },
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            width: '30%',
                                            xtype: 'container'
                                        },
                                    ]
                                }
                            ]
                        }
                    ]
                },
            ],
        }
    ],

    bbar: [
        "->",
        {
            text: "Save",
            iconCls: "fa fa-sign-in-alt",
            bind: {
                hidden: `{memberFormConfig.submitFormHidden}`
            },
            handler: "submitForm",
            ui: 'action',
        },
    ],
});

