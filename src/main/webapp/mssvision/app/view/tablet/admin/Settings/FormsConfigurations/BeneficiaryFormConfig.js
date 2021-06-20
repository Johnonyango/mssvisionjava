Ext.define('MssPhoenix.view.tablet.admin.Settings.FormsConfigurations.BeneficiaryFormConfig', {
    extend: 'Ext.Container',
    xtype: 'beneficiaryformconfig',
    items: [
        {
            xtype: 'formpanel',
            reference: 'beneficiaryform',
            itemId: 'beneficiaryform',
            jsonSubmit: true,
            items: [
                {
                    xtype: 'container',
                    cls: 'module-body',
                    height: 400,
                    padding: 20,
                    scrollable: true,
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    defaults: {
                        width: '100%',
                        xtype: 'container',
                        layout: {
                            type: 'hbox',
                            align: 'stretch',
                            flex: 1,
                        },
                        margin: '5 0',
                    },
                    items: [
                        {
                            items: [
                                {
                                    xtype: 'minumberfield',
                                    label: 'id',
                                    name: 'id',
                                    valueField: 'value',
                                    hidden: true
                                },
                                {
                                    xtype: 'selectbox',
                                    label: 'Surname Readonly',
                                    name: 'benSurnameReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    margin: '0 0 0 6',
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Surname Hidden',
                                    margin: '0 0 0 6',
                                    name: 'benSurnameHidden',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',

                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Firstname Readonly',
                                    margin: '0 0 0 6',
                                    name: 'benFirstnameReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                },{
                                    xtype: 'selectbox',
                                    label: 'Firstname Hidden',
                                    margin: '0 0 0 6',
                                    name: 'benFirstnameHidden',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Othername Readonly',
                                    margin: '0 0 0 6',
                                    name: 'benOthernamesReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                },{
                                    xtype: 'selectbox',
                                    label: 'Othername Hidden',
                                    margin: '0 0 0 6',
                                    name: 'benOthernamesHidden',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                }
                            ]
                        },
                        {
                            items: [
                                {
                                    xtype: 'selectbox',
                                    label: 'Relationship Category Readonly',
                                    name: 'benRelationShipCategoryReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',

                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Relationship Category Hidden',
                                    margin: '0 0 0 6',
                                    name: 'benRelationShipCategoryHidden',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',

                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Date of BirthReadonly',
                                    margin: '0 0 0 6',
                                    name: 'benDobReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                },{
                                    xtype: 'selectbox',
                                    label:  'Date of Birth Hidden',
                                    margin: '0 0 0 6',
                                    name: 'benDobHidden',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Relationship Type Readonly',
                                    margin: '0 0 0 6',
                                    name: 'benRelationshipTypeReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                },{
                                    xtype: 'selectbox',
                                    label: 'Relationship Type Hidden',
                                    margin: '0 0 0 6',
                                    name: 'benRelationshipTypeHidden',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                }
                            ]
                        },
                        {
                            items: [
                                {
                                    xtype: 'selectbox',
                                    label: 'Lumpsum Entitlements Readonly',
                                    name: 'benLumpsumEntitlementReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',

                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Lumpsum Entitlements Hidden',
                                    margin: '0 0 0 6',
                                    name: 'benLumpsumEntitlementHidden',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',

                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Group Life Entitlement Readonly',
                                    margin: '0 0 0 6',
                                    name: 'benMonthlyEntitlementReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                },{
                                    xtype: 'selectbox',
                                    label: 'Group Life Entitlement Hidden',
                                    margin: '0 0 0 6',
                                    name: 'benMonthlyEntitlementHidden',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Gender Readonly',
                                    margin: '0 0 0 6',
                                    name: 'benGenderReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                },{
                                    xtype: 'selectbox',
                                    label: 'Gender Hidden',
                                    margin: '0 0 0 6',
                                    name: 'benGenderHidden',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                }
                            ]
                        },
                        {
                            items: [
                                {
                                    xtype: 'selectbox',
                                    label: 'Maiden Name Readonly',
                                    name: 'benMaidenNameReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',

                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Maiden Name Hidden',
                                    margin: '0 0 0 6',
                                    name: 'benMaidenNameHidden',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',

                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'National Id Readonly',
                                    margin: '0 0 0 6',
                                    name: 'benIdNoReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                },{
                                    xtype: 'selectbox',
                                    label: 'National Id Hidden',
                                    margin: '0 0 0 6',
                                    name: 'benIdNoHidden',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Nationality Readonly',
                                    margin: '0 0 0 6',
                                    name: 'benNationalityReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                },{
                                    xtype: 'selectbox',
                                    label: 'Nationality Hidden',
                                    margin: '0 0 0 6',
                                    name: 'benNationalityHidden',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                }
                            ]
                        },
                        {
                            items: [
                                {
                                    xtype: 'selectbox',
                                    label: 'Address Readonly',
                                    name: 'benAddressPostalAddressReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',

                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Address Hidden',
                                    margin: '0 0 0 6',
                                    name: 'benAddressPostalAddressHidden',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',

                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Mobile Number Readonly',
                                    margin: '0 0 0 6',
                                    name: 'benCellPhoneReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                },{
                                    xtype: 'selectbox',
                                    label: 'Mobile Number Hidden',
                                    margin: '0 0 0 6',
                                    name: 'benCellPhoneHidden',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Date Of Appointment Readonly',
                                    margin: '0 0 0 6',
                                    name: 'benDateOfAppointmentReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                },{
                                    xtype: 'selectbox',
                                    label: 'Date Of Appointment Hidden',
                                    margin: '0 0 0 6',
                                    name: 'benDateOfAppointmentHidden',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                }
                            ]
                        },
                        {
                            items: [
                                {
                                    xtype: 'selectbox',
                                    label: 'Nomination from Number Readonly',
                                    name: 'benNIdReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',

                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Nomination from Number Hidden',
                                    margin: '0 0 0 6',
                                    name: 'benNIdHidden',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',

                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Place of Birth District Readonly',
                                    margin: '0 0 0 6',
                                    name: 'placeOfBirthDistrictIdReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                },{
                                    xtype: 'selectbox',
                                    label: 'Place of Birth District Hidden',
                                    margin: '0 0 0 6',
                                    name: 'placeOfBirthDistrictIdHidden',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Traditional Authority Readonly',
                                    margin: '0 0 0 6',
                                    name: 'placeOfBirthTAIdReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                },{
                                    xtype: 'selectbox',
                                    label: 'Traditional Authority Hidden',
                                    margin: '0 0 0 6',
                                    name: 'placeOfBirthTAIdHidden',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                }
                            ]
                        },
                        {
                            items: [
                                {
                                    xtype: 'selectbox',
                                    label: 'Village ReadOnly',
                                    name: 'placeOfBirthVillageIdReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',

                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Village Hidden',
                                    margin: '0 0 0 6',
                                    name: 'placeOfBirthVillageIdHidden',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',

                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Bank Readonly',
                                    margin: '0 0 0 6',
                                    name: 'bankNameReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                },{
                                    xtype: 'selectbox',
                                    label: 'Bank Hidden',
                                    margin: '0 0 0 6',
                                    name: 'bankNameHidden',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Bank Branch Readonly',
                                    margin: '0 0 0 6',
                                    name: 'benBankBranchIdReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                },{
                                    xtype: 'selectbox',
                                    label: 'Bank Branch Hidden',
                                    margin: '0 0 0 6',
                                    name: 'benBankBranchIdHidden',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                }
                            ]
                        },
                        {
                            items: [
                                {
                                    xtype: 'selectbox',
                                    label: 'Account name ReadOnly',
                                    name: 'benAccountNameReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',

                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Account name Hidden',
                                    margin: '0 0 0 6',
                                    name: 'benAccountNameHidden',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',

                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Account No Readonly',
                                    margin: '0 0 0 6',
                                    name: 'benAccountNoReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                },{
                                    xtype: 'selectbox',
                                    label: 'Account No Hidden',
                                    margin: '0 0 0 6',
                                    name: 'benAccountNoHidden',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Permanent District Readonly',
                                    margin: '0 0 0 6',
                                    name: 'permanentDistrictIdReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                },{
                                    xtype: 'selectbox',
                                    label: 'Permanent District Hidden',
                                    margin: '0 0 0 6',
                                    name: 'permanentDistrictIdHidden',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                }
                            ]
                        },
                        {
                            items: [
                                {
                                    xtype: 'selectbox',
                                    label: 'Permanent Traditional Authority ReadOnly',
                                    name: 'permanentTAIdReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',

                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Permanent Traditional Authority Hidden',
                                    margin: '0 0 0 6',
                                    name: 'permanentTAIdHidden',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',

                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Permanent Village Readonly',
                                    margin: '0 0 0 6',
                                    name: 'permanentVillageIdReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                },{
                                    xtype: 'selectbox',
                                    label: 'Permanent Village Hidden',
                                    margin: '0 0 0 6',
                                    name: 'permanentVillageIdHidden',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'File Upload Hidden',
                                    margin: '0 0 0 6',
                                    name: 'fileHidden',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                },{
                                    xtype: 'selectbox',
                                    label: 'Save Button Hidden',
                                    margin: '0 0 0 6',
                                    name: 'saveBeneficiaryHidden',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                }
                            ]
                        },
                        {
                            items: [
                                {
                                    xtype: 'selectbox',
                                    label: 'Guardian First Name ReadOnly',
                                    name: 'benGuardianFnReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',

                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Guardian First Name Hidden',
                                    margin: '0 0 0 6',
                                    name: 'benGuardianFnHidden',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',

                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Guardian Surname Readonly',
                                    margin: '0 0 0 6',
                                    name: 'benGuardianSnReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                },{
                                    xtype: 'selectbox',
                                    label: 'Guardian Surname Hidden',
                                    margin: '0 0 0 6',
                                    name: 'benGuardianSnHidden',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Guardian Other Name Readonly',
                                    margin: '0 0 0 6',
                                    name: 'benGuardianOnReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                },{
                                    xtype: 'selectbox',
                                    label: 'Guardian Other Name Hidden',
                                    margin: '0 0 0 6',
                                    name: 'benGuardianOnHidden',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                }
                            ]
                        },
                        {
                            items: [
                                {
                                    xtype: 'selectbox',
                                    label: 'Guardian Gender ReadOnly',
                                    name: 'benGuardianGenderReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',

                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Guardian Gender Hidden',
                                    margin: '0 0 0 6',
                                    name: 'benGuardianGenderHidden',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',

                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Guardian Email Readonly',
                                    margin: '0 0 0 6',
                                    name: 'benGuardianEmailReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                },{
                                    xtype: 'selectbox',
                                    label: 'Guardian Email Hidden',
                                    margin: '0 0 0 6',
                                    name: 'benGuardianEmailHidden',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Guardian Address Readonly',
                                    margin: '0 0 0 6',
                                    name: 'benGuardianAddrReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                },{
                                    xtype: 'selectbox',
                                    label: 'Guardian Address Hidden',
                                    margin: '0 0 0 6',
                                    name: 'benGuardianAddrHidden',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                }
                            ]
                        },
                        {
                            items: [
                                {
                                    xtype: 'selectbox',
                                    label: 'Guardian Town ReadOnly',
                                    name: 'benGuardianTownReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',

                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Guardian Town Hidden',
                                    margin: '0 0 0 6',
                                    name: 'benGuardianTownHidden',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',

                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Guardian Country Readonly',
                                    margin: '0 0 0 6',
                                    name: 'benGuardianCountryReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                },{
                                    xtype: 'selectbox',
                                    label: 'Guardian Country Hidden',
                                    margin: '0 0 0 6',
                                    name: 'benGuardianCountryHidden',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Guardian Relationship Readonly',
                                    margin: '0 0 0 6',
                                    name: 'benGuardianRelationReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                },{
                                    xtype: 'selectbox',
                                    label: 'Guardian Relationship Hidden',
                                    margin: '0 0 0 6',
                                    name: 'benGuardianRelationHidden',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                }
                            ]
                        },
                        {
                            items:[
                                {
                                    xtype: 'button',
                                    text: 'Save',
                                    ui: 'action',
                                    iconCls: 'fa fa-save',
                                    iconAlign: "right",
                                    handler: 'saveBeneficiaryConfig'
                                },
                                {width:50},
                                {
                                    xtype: 'button',
                                    text: 'Set Defaults',
                                    ui: 'action',
                                    handler: 'setDefaultsBeneficiary'
                                },
                            ]
                        }
                    ]
                }
            ],
            bbar: [
                '->',
               
            ]
        }
    ]
});