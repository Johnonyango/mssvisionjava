Ext.define('MssPhoenix.view.tablet.principalofficer.registeredmembers.MemberDetailsForm', {
    extend: 'Ext.form.FormPanel',
    xtype: 'registeredmemberdetailsform',
    reference: 'registeredmemberdetailsform',
    scrollable: true,
    items: [
        {
            xtype: 'tabpanel',
            scroll: true,
            height: 400,
            items: [
                {
                    title: 'SCHEME & EMPLOYER',
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
                                    title: 'SCHEME & EMPLOYER',
                                    items: [
                                        {
                                            xtype: 'container',
                                            cls: 'module-body',
                                            items: [
                                                {
                                                    xtype: "mitextfield",
                                                    label: "Scheme Name",
                                                    name: "schemeName",
                                                    readOnly: true,
                                                    anchor: "100%",
                                                },
                                                {
                                                    xtype: "mitextfield",
                                                    label: "Employer Name",
                                                    name: "sponsorName",
                                                    readOnly: true,
                                                    anchor: "100%",
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
                },
                {
                    title: 'PERSONAL DETAILS',
                    items: [
                        {
                            xtype: "fieldset",
                            title: "Personal Information",
                            autoHeight: true,
                            collapsed: false,
                            anchor: "98%",
                            items: [
                                {
                                    xtype: "hcontainer",
                                    items: [
                                        {
                                            defaults: {
                                                margin: '0 2 0 2'
                                            },
                                            items: [
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
                                                    editable: false,
                                                },
                                                {
                                                    xtype: "mitextfield",
                                                    label: "Firstname",
                                                    allowBlank: false,
                                                    maxLength: 50,
                                                    name: "firstname",
                                                    anchor: "100%",
                                                    readOnly: true
                                                },
                                                {
                                                    xtype: "mitextfield",
                                                    label: "Surname",
                                                    allowBlank: false,
                                                    maxLength: 50,
                                                    name: "lastname",
                                                    anchor: "100%",
                                                    readOnly: true
                                                },
                                                {
                                                    xtype: "mitextfield",
                                                    maxLength: 50,
                                                    label: "Othernames",
                                                    allowBlank: true,
                                                    name: "othernames",
                                                    anchor: "100%",
                                                }
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
                                                    editable: false
                                                },
                                                {
                                                    xtype: "selectbox",
                                                    name: "maritalStatus",
                                                    label: "Current Marital Status",
                                                    allowBlank: false,
                                                    store: {
                                                        type: "maritalStatuses"
                                                    },
                                                    displayField: "status",
                                                    valueField: "id",
                                                    anchor: "100%",
                                                },
                                                {
                                                    xtype: "midatefield",
                                                    label: "Date Of Birth",
                                                    name: "dateOfBirthFormatted",
                                                    allowBlank: false,
                                                    maxValue: new Date((new Date().getFullYear()) - 16),
                                                    minValue: new Date(1977),
                                                    anchor: "100%",
                                                    readOnly: true
                                                },
                                                {
                                                    xtype: "mitextfield",
                                                    label: "National Identification Number",
                                                    name: "idNumber",
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
                                                    label: "Other Identification Type",
                                                    allowBlank: true,
                                                    name: "identificationDocument",
                                                    msgTarget: "under",
                                                    blankText: "Passport Number Cannot be Null!",
                                                    anchor: "100%",
                                                },
                                                {
                                                    xtype: "mitextfield",
                                                    label: "Other Identification Number",
                                                    name: "identificationDocumentNumber",
                                                    anchor: "100%",
                                                },
                                                {
                                                    xtype: "mitextfield",
                                                    label: "Nationality",
                                                    name: "nationality",
                                                    anchor: "100%",
                                                },
                                            ]
                                        },
                                    ],
                                },
                            ]
                        },
                    ]
                },
                {
                    title: 'CONTACT INFORMATION',
                    items: [
                        {
                            xtype: "fieldset",
                            title: "Contact Information",
                            autoHeight: true,
                            collapsed: false,
                            anchor: "98%",
                            items: [
                                {
                                    xtype: "hcontainer",
                                    items: [
                                        {
                                            defaults: {
                                                margin: '0 2 0 2'
                                            },
                                            items: [
                                                {
                                                    xtype: "mitextfield",
                                                    label: "Phone No.",
                                                    name: "phoneNumber",
                                                    anchor: "100%",
                                                },
                                                {
                                                    xtype: "mitextfield",
                                                    label: "Secondary Phone No.",
                                                    name: "secondaryPhoneNumber",
                                                    anchor: "100%",
                                                },
                                                {
                                                    xtype: "mitextfield",
                                                    label: "Email",
                                                    name: "emailAddress",
                                                    anchor: "100%",
                                                    readOnly: true
                                                },
                                                {
                                                    xtype: "mitextfield",
                                                    label: "Postal Address",
                                                    name: "postalAddress",
                                                    blankText: "Address Cannot be empty!",
                                                    maxLength: 50,
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
                                                    label: "Residential Address",
                                                    name: "residentialAddress",
                                                    maxLength: 50,
                                                    anchor: "100%",
                                                },
                                                {
                                                    xtype: "mitextfield",
                                                    label: "Road",
                                                    name: "road",
                                                    maxLength: 50,
                                                    anchor: "100%",
                                                },
                                                {
                                                    xtype: "mitextfield",
                                                    label: "Town",
                                                    name: "town",
                                                    maxLength: 50,
                                                    anchor: "100%",
                                                },
                                                {
                                                    xtype: "mitextfield",
                                                    name: "country",
                                                    hiddenName: "country",
                                                    label: "Country",
                                                    readOnly: true
                                                },
                                            ]
                                        },
                                    ],
                                },
                            ]
                        },

                    ]
                },
                {
                    title: 'PLACE OF BIRTH INFORMATION',
                    items: [
                        {
                            xtype: "fieldset",
                            title: "Place Of Information",
                            autoHeight: true,
                            collapsed: false,
                            anchor: "98%",
                            items: [
                                {
                                    xtype: "hcontainer",
                                    items: [
                                        {
                                            defaults: {
                                                margin: '0 2 0 2'
                                            },
                                            items: [
                                                {
                                                    xtype: "mitextfield",
                                                    name: "pobPlaceOfBirth",
                                                    label: "Place of Birth",
                                                },
                                                {
                                                    xtype: "mitextfield",
                                                    name: "pobTraditionalAuthority",
                                                    itemId: "pobTraditionalAuthority",
                                                    label: "Traditional Authority",
                                                },
                                                {
                                                    xtype: "mitextfield",
                                                    name: "pobVillage",
                                                    itemId: "pobVillage",
                                                    label: "Village",
                                                },
                                            ]
                                        },
                                    ],
                                },
                            ],
                        },
                    ]
                },
                {
                    title: 'HOME ADDRESS INFORMATION',
                    items: [
                        {
                            xtype: "fieldset",
                            title: "Permanent Home Address Information",
                            autoHeight: true,
                            collapsed: false,
                            anchor: "98%",
                            items: [
                                {
                                    xtype: "hcontainer",
                                    items: [
                                        {
                                            defaults: {
                                                margin: '0 2 0 2'
                                            },
                                            items: [
                                                {
                                                    xtype: "mitextfield",
                                                    name: "phmPlaceOfBirth",
                                                    label: "District",
                                                },
                                                {
                                                    xtype: "mitextfield",
                                                    name: "phmTraditionalAuthority",
                                                    itemId: "phmTraditionalAuthority",
                                                    label: "Traditional Authority",
                                                },
                                                {
                                                    xtype: "mitextfield",
                                                    name: "phmVillage",
                                                    itemId: "phmVillage",
                                                    label: "Village",
                                                },
                                            ]
                                        },
                                    ]
                                },
                            ]
                        },

                    ]
                },
                {
                    title: 'EMPLOYMENT INFORMATION',
                    items: [
                        {
                            xtype: "fieldset",
                            title: "Employment Information",
                            autoHeight: true,
                            collapsed: false,
                            anchor: "98%",
                            items: [
                                {
                                    xtype: "hcontainer",
                                    border: false,
                                    items: [
                                        {
                                            defaults: {
                                                margin: '0 2 0 2'
                                            },
                                            items: [
                                                {
                                                    xtype: "selectbox",
                                                    name: "employed",
                                                    label: "Employed?",
                                                    store: {
                                                        fields: ['name', 'value'],
                                                        data: [
                                                            {name: 'Yes', value: "YES"},
                                                            {name: 'No', value: "NO"},
                                                        ]
                                                    },
                                                    displayField: "name",
                                                    valueField: "value",
                                                    anchor: "100%",
                                                    editable: false,
                                                },
                                                {
                                                    xtype: "mitextfield",
                                                    label: "Staff Number",
                                                    allowBlank: false,
                                                    maxLength: 50,
                                                    name: "staffNo",
                                                    anchor: "100%",
                                                    readOnly: true
                                                },
                                                {
                                                    xtype: "mitextfield",
                                                    label: "National Pension Number",
                                                    allowBlank: false,
                                                    maxLength: 50,
                                                    name: "nssn",
                                                    anchor: "100%",
                                                    readOnly: true
                                                },
                                                {
                                                    xtype: "mitextfield",
                                                    maxLength: 50,
                                                    label: "Designation",
                                                    allowBlank: true,
                                                    name: "designation",
                                                    anchor: "100%",
                                                },
                                            ]
                                        }, {
                                            defaults: {
                                                margin: '0 2 0 2'
                                            },
                                            items: [
                                                {
                                                    xtype: "mitextfield",
                                                    maxLength: 50,
                                                    label: "Department",
                                                    allowBlank: true,
                                                    name: "department",
                                                    anchor: "100%",
                                                },
                                                {
                                                    xtype: "midatefield",
                                                    maxLength: 50,
                                                    label: "Date Of Appointment",
                                                    allowBlank: true,
                                                    name: "dateOfAppointment",
                                                    anchor: "100%",
                                                },
                                                {
                                                    xtype: "minumberfield",
                                                    label: "Current Monthly Salary",
                                                    name: "currentMonthlySalary",
                                                    anchor: "100%",
                                                },
                                            ]
                                        },

                                    ],
                                },
                            ],
                        },
                    ]
                },
                {
                    title: 'DOCUMENTS',
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
                                                    xtype: "button",
                                                    width: '90%',
                                                    bind: {
                                                        text: 'Download {numAttachedDocs} documents',
                                                    },
                                                    handler:'downloadMemberDocs'
                                                },
                                                {
                                                    xtype: "mitextfield",
                                                    allowBlank: false,
                                                    maxLength: 50,
                                                    name: "id",
                                                    anchor: "100%",
                                                    readOnly: true,
                                                    hidden: true
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
        }
    ],
    bbar: [
        {
            text: "Reload",
            iconCls: "fa fa-redo",
            handler: "reloadMemberDetails",
            ui: 'action'
        },
        "->",
        {
            text: 'Decline',
            ui: ' decline',
            handler: 'onDeclineNewMemberDetails',
            iconCls: 'fa fa-ban',
        },
        {
            text: "Approve & send to Fundmaster",
            iconCls: "fa fa-sign-in-alt",
            handler: "approveNewMemberDetails",
            ui: 'action'
        },
    ],
});

