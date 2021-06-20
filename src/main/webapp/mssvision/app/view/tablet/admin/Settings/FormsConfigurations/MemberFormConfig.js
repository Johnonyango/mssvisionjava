Ext.define('MssPhoenix.view.tablet.admin.Settings.FormsConfigurations.MemberFormConfig', {
    extend: 'Ext.Container',
    xtype: 'memberformconfig',
    items: [
        {
            xtype: 'formpanel',
            reference: 'memberform',
            itemId: 'memberform',
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
                                    label: 'Membership Status Readonly',
                                    name: 'membershipStatusReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    margin: '0 0 0 6',
                                    displayField: 'name',

                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Membership Status Hidden',
                                    margin: '0 0 0 6',
                                    name: 'membershipStatusHidden',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',

                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Scheme Id Readonly',
                                    margin: '0 0 0 6',
                                    name: 'schemeIdReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                },{
                                    xtype: 'selectbox',
                                    label: 'Scheme Id Hidden',
                                    margin: '0 0 0 6',
                                    name: 'schemeIdHidden',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Salutation Readonly',
                                    margin: '0 0 0 6',
                                    name: 'salutationReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                },{
                                    xtype: 'selectbox',
                                    label: 'Salutation Hidden',
                                    margin: '0 0 0 6',
                                    name: 'salutationHidden',
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
                                    label: 'Surname Readonly',
                                    name: 'surnameReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',

                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Surname Hidden',
                                    margin: '0 0 0 6',
                                    name: 'surnameHidden',
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
                                    name: 'firstnameReadOnly',
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
                                    name: 'firstnameHidden',
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
                                    name: 'othernamesReadOnly',
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
                                    name: 'othernamesHidden',
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
                                    label: 'Gender Readonly',
                                    name: 'genderReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',

                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Gender Hidden',
                                    margin: '0 0 0 6',
                                    name: 'genderHidden',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',

                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Marital Status Readonly',
                                    margin: '0 0 0 6',
                                    name: 'maritalStatusReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                },{
                                    xtype: 'selectbox',
                                    label: 'Marital Status Hidden',
                                    margin: '0 0 0 6',
                                    name: 'maritalStatusHidden',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Marital Status At Entry Readonly',
                                    margin: '0 0 0 6',
                                    name: 'maritalStatusAtEntryReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                },{
                                    xtype: 'selectbox',
                                    label: 'Marital Status At Entry Hidden',
                                    margin: '0 0 0 6',
                                    name: 'maritalStatusAtEntryHidden',
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
                                    label: 'Date of Birth Readonly',
                                    name: 'dobReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',

                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Date of Birth Hidden',
                                    margin: '0 0 0 6',
                                    name: 'dobHidden',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',

                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Nationa Id Readonly',
                                    margin: '0 0 0 6',
                                    name: 'idNoReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                },{
                                    xtype: 'selectbox',
                                    label: 'Nationa Id Hidden',
                                    margin: '0 0 0 6',
                                    name: 'idNoHidden',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Other Id Readonly',
                                    margin: '0 0 0 6',
                                    name: 'otherIdNoReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                },{
                                    xtype: 'selectbox',
                                    label: 'Other Id Hidden',
                                    margin: '0 0 0 6',
                                    name: 'otherIdNoHidden',
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
                                    label: 'Tax Pin Readonly',
                                    name: 'taxPinNoReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',

                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Tax Pin Hidden',
                                    margin: '0 0 0 6',
                                    name: 'taxPinNoHidden',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',

                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Fixed phone Readonly',
                                    margin: '0 0 0 6',
                                    name: 'fixedPhoneReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                },{
                                    xtype: 'selectbox',
                                    label: 'Fixed phone Hidden',
                                    margin: '0 0 0 6',
                                    name: 'fixedPhoneHidden',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Secondary Phone Readonly',
                                    margin: '0 0 0 6',
                                    name: 'secondaryPhoneReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                },{
                                    xtype: 'selectbox',
                                    label: 'Secondary Phone Hidden',
                                    margin: '0 0 0 6',
                                    name: 'secondaryPhoneHidden',
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
                                    label: 'Cellphone Readonly',
                                    name: 'cellPhoneReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',

                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Cellphone Hidden',
                                    margin: '0 0 0 6',
                                    name: 'cellPhoneHidden',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',

                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Email Readonly',
                                    margin: '0 0 0 6',
                                    name: 'emailReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                },{
                                    xtype: 'selectbox',
                                    label: 'Email Hidden',
                                    margin: '0 0 0 6',
                                    name: 'emailHidden',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Other Contacts Readonly',
                                    margin: '0 0 0 6',
                                    name: 'otherContactsReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                },{
                                    xtype: 'selectbox',
                                    label: 'Other Contacts Hidden',
                                    margin: '0 0 0 6',
                                    name: 'otherContactsHidden',
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
                                    label: 'Postal Address Readonly',
                                    name: 'postalAddressReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',

                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Postal Address Hidden',
                                    margin: '0 0 0 6',
                                    name: 'postalAddressHidden',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',

                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Building Readonly',
                                    margin: '0 0 0 6',
                                    name: 'buildingReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                },{
                                    xtype: 'selectbox',
                                    label: 'Building Hidden',
                                    margin: '0 0 0 6',
                                    name: 'buildingHidden',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Road Readonly',
                                    margin: '0 0 0 6',
                                    name: 'roadReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                },{
                                    xtype: 'selectbox',
                                    label: 'Road Hidden',
                                    margin: '0 0 0 6',
                                    name: 'roadHidden',
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
                                    label: 'Town Readonly',
                                    name: 'townReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',

                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Town Hidden',
                                    margin: '0 0 0 6',
                                    name: 'townHidden',
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
                                    name: 'nationalityReadOnly',
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
                                    name: 'nationalityHidden',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Country Readonly',
                                    margin: '0 0 0 6',
                                    name: 'countryReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                },{
                                    xtype: 'selectbox',
                                    label: 'Country Hidden',
                                    margin: '0 0 0 6',
                                    name: 'countryHidden',
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
                                    label: 'Residential Address Readonly',
                                    name: 'residentialAddressReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',

                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Residential Address Hidden',
                                    margin: '0 0 0 6',
                                    name: 'residentialAddressHidden',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',

                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Place of birth District Readonly',
                                    margin: '0 0 0 6',
                                    name: 'placeOfBirthDistrictNameReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                },{
                                    xtype: 'selectbox',
                                    label: 'Place of birth District Hidden',
                                    margin: '0 0 0 6',
                                    name: 'placeOfBirthDistrictNameHidden',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Place of birth Traditional Authority Readonly',
                                    margin: '0 0 0 6',
                                    name: 'placeOfBirthTANameReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                },{
                                    xtype: 'selectbox',
                                    label: 'Place of birth Traditional Authority Hidden',
                                    margin: '0 0 0 6',
                                    name: 'placeOfBirthTANameHidden',
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
                                    label: 'Place of birth Village Readonly',
                                    name: 'villageNameReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',

                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Place of birth Village Hidden',
                                    margin: '0 0 0 6',
                                    name: 'villageNameHidden',
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
                                    name: 'permanentDistrictNameReadOnly',
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
                                    name: 'permanentDistrictNameHidden',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Permanent Traditional Authority Readonly',
                                    margin: '0 0 0 6',
                                    name: 'permanentTANameReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                },{
                                    xtype: 'selectbox',
                                    label: 'PermanentTraditional Authority Hidden',
                                    margin: '0 0 0 6',
                                    name: 'permanentTANameNameHidden',
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
                                    label: 'Permanent Village Readonly',
                                    name: 'permanentVillageNameReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',

                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Permanent Village Hidden',
                                    margin: '0 0 0 6',
                                    name: 'permanentVillageNameHidden',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',

                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Staff No Readonly',
                                    margin: '0 0 0 6',
                                    name: 'staffNoReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                },{
                                    xtype: 'selectbox',
                                    label: 'Staff No Hidden',
                                    margin: '0 0 0 6',
                                    name: 'staffNoHidden',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'National Pension No Readonly',
                                    margin: '0 0 0 6',
                                    name: 'nationalPenNoReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                },{
                                    xtype: 'selectbox',
                                    label: 'National Pension No Hidden',
                                    margin: '0 0 0 6',
                                    name: 'nationalPenNoHidden',
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
                                    label: 'Designation Readonly',
                                    name: 'designationReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',

                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Designation Hidden',
                                    margin: '0 0 0 6',
                                    name: 'designationHidden',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',

                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Department Readonly',
                                    margin: '0 0 0 6',
                                    name: 'departmentReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                },{
                                    xtype: 'selectbox',
                                    label: 'Department Hidden',
                                    margin: '0 0 0 6',
                                    name: 'departmentHidden',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Date of Appointment Readonly',
                                    margin: '0 0 0 6',
                                    name: 'dateOfAppointmentReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                },{
                                    xtype: 'selectbox',
                                    label: 'Date of Appointment Hidden',
                                    margin: '0 0 0 6',
                                    name: 'dateOfAppointmentHidden',
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
                                    label: 'Job Grade Readonly',
                                    name: 'jobGradeIdReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',

                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Job Grade Hidden',
                                    margin: '0 0 0 6',
                                    name: 'jobGradeIdHidden',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',

                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Salary Readonly',
                                    margin: '0 0 0 6',
                                    name: 'monthlySalaryReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                },{
                                    xtype: 'selectbox',
                                    label: 'Salary Hidden',
                                    margin: '0 0 0 6',
                                    name: 'monthlySalaryHidden',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Contract End Date Readonly',
                                    margin: '0 0 0 6',
                                    name: 'contractEndDateReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                },{
                                    xtype: 'selectbox',
                                    label: 'Contract End Date Hidden',
                                    margin: '0 0 0 6',
                                    name: 'contractEndDateHidden',
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
                                    label: 'Member No Readonly',
                                    name: 'memberNoReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',

                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Member No Hidden',
                                    margin: '0 0 0 6',
                                    name: 'memberNoHidden',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',

                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Membership No Readonly',
                                    margin: '0 0 0 6',
                                    name: 'membershipNoReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                },{
                                    xtype: 'selectbox',
                                    label: 'Membership No Hidden',
                                    margin: '0 0 0 6',
                                    name: 'membershipNoHidden',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Party Ref No Readonly',
                                    margin: '0 0 0 6',
                                    name: 'partyRefNoReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                },{
                                    xtype: 'selectbox',
                                    label: 'Party Ref No Hidden',
                                    margin: '0 0 0 6',
                                    name: 'partyRefNoHidden',
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
                                    label: 'Date joined Readonly',
                                    name: 'dateJoinedSchemeReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',

                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Date Joined Hidden',
                                    margin: '0 0 0 6',
                                    name: 'dateJoinedSchemeHidden',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',

                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Company Readonly',
                                    margin: '0 0 0 6',
                                    name: 'companyIdReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                },{
                                    xtype: 'selectbox',
                                    label: 'Company Hidden',
                                    margin: '0 0 0 6',
                                    name: 'companyIdHidden',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Member class Readonly',
                                    margin: '0 0 0 6',
                                    name: 'mclassIdReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                },{
                                    xtype: 'selectbox',
                                    label: 'Member Class Hidden',
                                    margin: '0 0 0 6',
                                    name: 'mclassIdHidden',
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
                                    label: 'Policy No Readonly',
                                    name: 'policyNoReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',

                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Policy No Hidden',
                                    margin: '0 0 0 6',
                                    name: 'policyNoHidden',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',

                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Region Readonly',
                                    margin: '0 0 0 6',
                                    name: 'regionReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                },{
                                    xtype: 'selectbox',
                                    label: 'Region Hidden',
                                    margin: '0 0 0 6',
                                    name: 'regionHidden',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Depot Readonly',
                                    margin: '0 0 0 6',
                                    name: 'depotReadOnly',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                },{
                                    xtype: 'selectbox',
                                    label: 'Depot Hidden',
                                    margin: '0 0 0 6',
                                    name: 'depotHidden',
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
                                    label: 'File Upload Hidden',
                                    name: 'fileHidden',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',

                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Submit Form Hidden',
                                    margin: '0 0 0 6',
                                    name: 'submitFormHidden',
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
                                  //  id: 'savecrePermsBtn',
                                    handler: 'saveMemberConfig'
                                },
                                {width:50},
                                {
                                    xtype: 'button',
                                    text: 'Set Defaults',
                                    ui: 'action',
                                   // id: 'setcreDefBtn',
                                    handler: 'setDefaultsMember'
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