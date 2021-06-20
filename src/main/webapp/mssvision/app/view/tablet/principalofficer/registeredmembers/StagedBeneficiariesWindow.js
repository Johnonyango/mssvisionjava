Ext.define('MssPhoenix.view.tablet.principalofficer.registeredmembers.StagedBeneficiariesWindow', {
    extend: 'MssPhoenix.view.widgets.Window',

    xtype: 'stagedbeneficiarieswindow',

    controller: 'registeredmemberscontroller',

    viewModel: {
        data: {
            entitlement: 100,
            memberNo: null,
            benMemberId: null,
            memberEmail: null,
            idFieldName: 'unknown',
            idFieldNameVal: '',
        }
    },

    labelAlign: "left",
    bodyStyle: "padding:5px overflow : auto;",
    height: "90%",
    width: "85%",
    scrollable: true,
    closable: true,
    frame: true,
    title: 'Beneficiary',

    items: [
        {
            layout: "hbox",
            border: false,
            xtype: 'formpanel',
            reference: 'memberbeneficiaryform',
            jsonSubmit: true,
            padding: 10,
            items: [

                {
                    width: "25%",
                    xtype: "container",
                    border: false,
                    items: [
                        {
                            xtype: "fieldset",
                            title: "Basic Details",
                            autoHeight: true,
                            collapsed: false,
                            anchor: "98%",
                            items: [
                                {
                                    xtype: 'mitextfield',
                                    name: 'beneficiaryId',
                                    hidden: true,
                                },
                                {
                                    xtype: 'mitextfield',
                                    hidden: true,
                                    name: 'benMemberId',
                                    bind: {
                                        value: '{benMemberId}',
                                    },
                                },
                                {
                                    xtype: 'mitextfield',
                                    hidden: true,
                                    name: 'memberEmail',
                                    bind: {
                                        value: '{memberEmail}',
                                    },
                                },
                                {
                                    xtype: 'mitextfield',
                                    name: 'memberNo',
                                    hidden: true,
                                    bind: {
                                        value: '{memberNo}'
                                    },
                                },
                                {
                                    xtype: 'mitextfield',
                                    label: 'First Name',
                                    name: 'benFirstname',
                                    placeholder: 'First Name',
                                    required: true,
                                    allowBlank: false
                                },
                                {
                                    xtype: 'mitextfield',
                                    label: 'Surname',
                                    name: 'benSurname',
                                    margin: '0 0 0 6',
                                    placeholder: 'Surname',
                                    required: true,
                                    allowBlank: false,
                                },
                                {
                                    xtype: 'mitextfield',
                                    label: 'Other Name',
                                    name: 'benOthernames',
                                    placeholder: 'Last Name',
                                    margin: '0 0 0 6',
                                },

                                {
                                    xtype: 'selectbox',
                                    label: 'Category',
                                    margin: '0 0 0 6',
                                    store: {
                                        fields: ['value', 'name'],
                                        data: [{
                                            "value": "Beneficiary",
                                            "name": "BENEFICIARY"
                                        }
                                        ]
                                    },
                                    // value: 'Beneficiary',
                                    displayField: 'name',
                                    valueField: 'value',
                                    name: 'benRelationShipCategory',
                                    required: true,
                                    allowBlank: false,
                                },
                                {
                                    xtype: 'midatefield',
                                    label: 'D.O.B',
                                    name: 'benDob',
                                    placeholder: 'D.O.B',
                                    // value: new Date('1980'),
                                    dateFormat: 'Y-m-d',
                                    maxDate: new Date(),
                                    required: true,
                                    allowBlank: false,
                                    validators: 'date',
                                },
                                {
                                    xtype: 'selectbox',
                                    label: 'Relationship',
                                    margin: '0 0 0 6',
                                    name: 'benRelationshipType',
                                    store: {
                                        fields: ['value', 'name'],
                                        data: [{
                                            "value": "WIFE",
                                            "name": "WIFE"
                                        },
                                            {
                                                "value": "DAUGHTER",
                                                "name": "DAUGHTER"
                                            },
                                            {
                                                "value": "SON",
                                                "name": "SON"
                                            }, {
                                                "value": "MOTHER",
                                                "name": "MOTHER"
                                            }, {
                                                "value": "FATHER",
                                                "name": "FATHER"
                                            }, {
                                                "value": "BROTHER",
                                                "name": "BROTHER"
                                            },
                                            {
                                                "value": "HUSBAND",
                                                "name": "HUSBAND"
                                            }, {
                                                "value": "OTHER",
                                                "name": "OTHER"
                                            },
                                        ]
                                    },
                                    // value: 'WIFE',
                                    displayField: 'name',
                                    valueField: 'value',
                                    required: true,
                                    allowBlank: false,
                                },
                                {
                                    xtype: 'minumberfield',
                                    label: 'Lumpsum Entitlement',
                                    margin: '0 0 0 6',
                                    name: 'benLumpsumEntitlement',
                                    placeholder: 'Entitlement',
                                    minValue: 0,
                                    required: true,
                                    allowBlank: false,
                                },
                                {
                                    xtype: 'minumberfield',
                                    label: 'Group Life Entitlement',
                                    margin: '0 0 0 6',
                                    name: 'benMonthlyEntitlement',
                                    placeholder: 'Entitlement',
                                    maxValue: 100,
                                    minValue: 0,
                                    hidden: true,
                                },
                                {
                                    items: [{
                                        xtype: 'selectbox',
                                        label: 'Gender',
                                        name: 'benGender',
                                        store: {
                                            fields: ['value', 'name'],
                                            data: [{
                                                "value": "MALE",
                                                "name": "MALE"
                                            },
                                                {
                                                    "value": "FEMALE",
                                                    "name": "FEMALE"
                                                }, {
                                                    "value": "UNKNOWN",
                                                    "name": "OTHER"
                                                },
                                            ]
                                        },
                                        // value: 'MALE',
                                        displayField: 'name',
                                        valueField: 'value',
                                        required: true,
                                        allowBlank: false,
                                    },
                                    ]
                                },
                            ]
                        },

                    ],
                },

                {
                    width: "25%",
                    xtype: "container",
                    border: false,
                    items: [

                        {
                            xtype: "fieldset",
                            title: "Other details",
                            autoHeight: true,
                            collapsed: false,
                            anchor: "98%",
                            items: [

                                {
                                    xtype: 'mitextfield',
                                    label: 'Maiden Name',
                                    name: 'benMaidenName',
                                    margin: '0 0 0 6',
                                    placeholder: 'Maidenname',
                                },

                                {
                                    xtype: 'mitextfield',
                                    label: 'National ID',
                                    name: 'benIdNo',
                                    margin: '0 0 0 6',
                                    placeholder: 'National ID',
                                },

                                {
                                    xtype: 'mitextfield',
                                    label: 'Nationality',
                                    name: 'benNationality',
                                    margin: '0 0 0 6',
                                    placeholder: 'Nationality',
                                },

                                {
                                    xtype: 'mitextfield',
                                    label: 'Address',
                                    name: 'benAddressPostalAddress',
                                    margin: '0 0 0 6',
                                    placeholder: 'address',
                                },

                                {
                                    xtype: 'mitextfield',
                                    label: 'Mobile Number',
                                    name: 'benCellPhone',
                                    margin: '0 0 0 6',
                                    placeholder: 'Mobile Number',
                                },
                                {
                                    xtype: "midatefield",
                                    label: "Date Of Appointment",
                                    name: "benDateOfAppointment",
                                    dateFormat: 'Y-m-d',
                                    allowBlank: false,
                                    endDateField: "dateofappment",
                                    maxValue: new Date(),
                                    anchor: "100%",
                                },

                                {
                                    xtype: 'mitextfield',
                                    label: 'Nomination from Number',
                                    name: 'nId',
                                    margin: '0 0 0 6',
                                    placeholder: 'Nomination from Number',
                                },
                            ]
                        },

                        {
                            xtype: "fieldset",
                            title: "Place Of Birth",
                            autoHeight: true,
                            collapsed: false,
                            anchor: "98%",
                            items: [
                                {
                                    xtype: "selectbox",
                                    name: "placeOfBirthDistrictId",
                                    hiddenName: "placeOfBirth",
                                    label: "Place of Birth District",
                                    blankText: "Select place of birth...",
                                    store: {
                                        type: "districtstore",
                                    },
                                    displayField: "name",
                                    valueField: "id",
                                    anchor: "100%",
                                    editable: false,
                                    listeners: {
                                        select: 'pobDtrSelect'
                                    },
                                },
                                {
                                    xtype: "selectbox",
                                    name: "placeOfBirthTAId",
                                    itemId: "placeOfBirthTAId",
                                    hiddenName: "pltraditionalAuthority",
                                    label: "Traditional Authority",
                                    blankText: "Select traditional authority...",
                                    displayField: "name",
                                    valueField: "id",
                                    anchor: "100%",
                                    editable: false,
                                    listeners: {
                                        select: 'pobTrSelect'
                                    }
                                },

                                {
                                    xtype: "selectbox",
                                    name: "placeOfBirthVillageId",
                                    itemId: "placeOfBirthVillageId",
                                    hiddenName: "village",
                                    label: "Village",
                                    blankText: "Village...",
                                    displayField: "name",
                                    valueField: "id",
                                    anchor: "100%",
                                    editable: false,
                                },
                            ],
                        },


                    ],
                },

                {
                    width: "25%",
                    xtype: "container",
                    border: false,
                    items: [
                        {
                            xtype: "fieldset",
                            title: "Bank Details",
                            autoHeight: true,
                            collapsed: false,
                            anchor: "98%",
                            items: [
                                {
                                    xtype: 'selectbox',
                                    label: 'Bank',
                                    margin: '0 0 0 0',
                                    name: 'bankName',
                                    store: {
                                        type: 'bank'
                                    },
                                    displayField: 'name',
                                    valueField: 'id',
                                    listeners: {
                                        select: 'getBankBranches'
                                    },
                                },
                                {
                                    xtype: 'selectbox',
                                    label: 'Bank Branch',
                                    margin: '0 0 0 0',
                                    name: 'benBankBranchId',
                                    itemId: 'benBankBranchId',
                                    displayField: 'name',
                                    valueField: 'id',
                                },
                                {
                                    xtype: 'mitextfield',
                                    label: 'Account name',
                                    name: 'benAccountName',
                                    margin: '0 0 0 6',
                                    placeholder: 'Account Name',
                                },
                                {
                                    xtype: 'mitextfield',
                                    label: 'Account No',
                                    name: 'benAccountNo',
                                    margin: '0 0 0 6',
                                    placeholder: 'Account No',
                                },

                            ],
                        },
                        {
                            xtype: "fieldset",
                            title: "Permanent Home Address",
                            autoHeight: true,
                            collapsed: false,
                            anchor: "98%",
                            items: [
                                {
                                    xtype: "selectbox",
                                    name: "permanentDistrictId",
                                    hiddenName: "placeOfBirth",
                                    label: "District",
                                    blankText: "Select place of birth...",
                                    displayField: "name",
                                    valueField: "id",
                                    store: {
                                        type: "districtstore",
                                    },
                                    anchor: "100%",
                                    editable: false,
                                    listeners: {
                                        select: 'pmDtrSelect'
                                    }
                                },
                                {
                                    xtype: "selectbox",
                                    name: "permanentTAId",
                                    itemId: "permanentTAId",
                                    hiddenName: "traditionalAuthority",
                                    label: "Traditional Authority",
                                    blankText: "Select traditional authority...",
                                    displayField: "name",
                                    valueField: "id",
                                    anchor: "100%",
                                    editable: false,
                                    listeners: {
                                        select: 'pmTrSelect'
                                    }
                                },
                                {
                                    xtype: "selectbox",
                                    name: "permanentVillageId",
                                    itemId: "permanentVillageId",
                                    hiddenName: "village",
                                    label: "Village",
                                    blankText: "Village...",
                                    displayField: "name",
                                    valueField: "id",
                                    anchor: "100%",
                                    editable: false,
                                },
                            ],
                        },
                    ],
                },
                {
                    width: "25%",
                    xtype: "container",
                    border: false,
                    items: [
                        {
                            xtype: "fieldset",
                            title: "Details of the Guardian",
                            autoHeight: true,
                            collapsed: false,
                            anchor: "98%",
                            items: [
                                {
                                    xtype: 'mitextfield',
                                    label: 'First Name',
                                    name: 'benGuardianFn',
                                    placeholder: 'First Name',
                                    allowBlank: false
                                },
                                {
                                    xtype: 'mitextfield',
                                    label: 'Surname',
                                    name: 'benGuardianSn',
                                    margin: '0 0 0 6',
                                    placeholder: 'Surname',
                                    allowBlank: false,
                                },
                                {
                                    xtype: 'mitextfield',
                                    label: 'Other Name',
                                    name: 'benGuardianOn',
                                    placeholder: 'Last Name',
                                    margin: '0 0 0 6',
                                },
                                {
                                    items: [
                                        {
                                            xtype: 'selectbox',
                                            label: 'Gender',
                                            name: 'benGuardianGender',
                                            store: {
                                                fields: ['value', 'name'],
                                                data: [{
                                                    "value": "MALE",
                                                    "name": "MALE"
                                                },
                                                    {
                                                        "value": "FEMALE",
                                                        "name": "FEMALE"
                                                    }, {
                                                        "value": "UNKNOWN",
                                                        "name": "OTHER"
                                                    },
                                                ]
                                            },
                                            value: 'MALE',
                                            displayField: 'name',
                                            valueField: 'value',
                                            allowBlank: false,
                                        },
                                    ]
                                },

                                {
                                    xtype: 'mitextfield',
                                    label: 'Email',
                                    name: 'benGuardianEmail',
                                    placeholder: 'Last Name',
                                    margin: '0 0 0 6',
                                },
                                {
                                    xtype: 'mitextfield',
                                    label: 'Address',
                                    name: 'benGuardianAddr',
                                    placeholder: 'Address',
                                    margin: '0 0 0 6',
                                },
                                {
                                    xtype: 'mitextfield',
                                    label: 'Town',
                                    name: 'benGuardianTown',
                                    placeholder: 'Town',
                                    margin: '0 0 0 6',
                                },
                                {
                                    xtype: 'mitextfield',
                                    label: 'Country',
                                    name: 'benGuardianCountry',
                                    placeholder: 'country',
                                    margin: '0 0 0 6',
                                },
                                {
                                    xtype: 'mitextfield',
                                    label: 'Relationship',
                                    name: 'benGuardianRelation',
                                    placeholder: 'Relationship',
                                    margin: '0 0 0 6',
                                },

                            ],
                        },
                        {
                            xtype: "fieldset",
                            title: "Beneficiary Documents",
                            autoHeight: true,
                            collapsed: false,
                            anchor: "98%",
                            items: [
                                {
                                    xtype: "button",
                                    text: "Download Documents",
                                    handler:'downloadStagedBeneficiaryDocs'
                                },
                            ],
                        },
                    ],
                },

            ],
        },
    ],


    bbar: [
        {
            xtype: 'button',
            text: 'Close',
            ui: 'action',
            handler: 'onCancelBtnClick'
        },
        '->',
        {
            xtype: 'button',
            text: 'Decline',
            ui: 'decline',
            handler: 'declineStagedBeneficiaryDetails'
        },
        {
            text: 'Approve Details',
            iconCls: 'fa fa-save',
            scale: 'small',
            ui: 'action',
            handler: 'approveStagedBeneficiaryDetails'
        }
    ]
});