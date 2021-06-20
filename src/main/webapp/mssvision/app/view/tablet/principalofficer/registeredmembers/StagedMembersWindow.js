Ext.define('MssPhoenix.view.tablet.principalofficer.registeredmembers.StagedMembersWindow', {
    extend: 'MssPhoenix.view.widgets.Window',
    width: '80%',
    height: '90%',
    controller: 'registeredmemberscontroller',
    xtype: 'stagedmemberswindow',
    title: 'Member Details',
    closable: true,
    viewModel: {
        data: {
            numAttachedDocs: ''
        }
    },
    items: [
        {
            xtype: 'formpanel',
            reference: 'memberform',
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
                                                            label: "Surname",
                                                            allowBlank: false,
                                                            maxLength: 50,
                                                            name: "surname",
                                                            anchor: "100%",
                                                            readOnly: true,
                                                            required: true
                                                        },
                                                        {
                                                            xtype: "mitextfield",
                                                            label: "Firstname",
                                                            allowBlank: false,
                                                            maxLength: 50,
                                                            name: "firstname",
                                                            anchor: "100%",
                                                            readOnly: true,
                                                            required: true
                                                        },
                                                        {
                                                            xtype: "mitextfield",
                                                            maxLength: 50,
                                                            label: "Othernames",
                                                            allowBlank: true,
                                                            name: "othernames",
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
                                                            editable: false,
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
                                                            editable: true
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
                                                            editable: false,
                                                            required: true
                                                        },
                                                        {
                                                            xtype: "mitextfield",
                                                            label: "Date Of Birth",
                                                            name: "dobString",
                                                            allowBlank: false,
                                                            anchor: "100%",
                                                            readOnly: true,
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
                                                            required: true
                                                        },
                                                        {
                                                            xtype: "mitextfield",
                                                            label: "Tax ID Number",
                                                            name: "pinNo",
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
                                                            required: true
                                                        },
                                                        {
                                                            xtype: "mitextfield",
                                                            label: "Secondary Phone No.",
                                                            name: "secondaryPhone",
                                                            renderer: function (value) {
                                                                return value.replace(/^(\d{3})(\d{3})(\d{4})$/, "$1-$2-$3");
                                                            },
                                                            anchor: "100%",
                                                        },
                                                        {
                                                            xtype: "mitextfield",
                                                            label: "Telephone",
                                                            allowBlank: true,
                                                            name: "cellPhone",
                                                            anchor: "100%",
                                                        },
                                                        {
                                                            xtype: "mitextfield",
                                                            label: "Email",
                                                            name: "email",
                                                            validators: "email",
                                                            anchor: "100%",
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
                                                            anchor: "100%",
                                                        },
                                                        {
                                                            xtype: "mitextfield",
                                                            label: "Postal Address",
                                                            name: "postalAddress",
                                                            maxLength: 50,
                                                            anchor: "100%",
                                                            required: true
                                                        },
                                                        {
                                                            xtype: "mitextfield",
                                                            label: "Building",
                                                            name: "building",
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
                                                            anchor: "100%",
                                                        },
                                                        {
                                                            xtype: "mitextfield",
                                                            label: "Nationality",
                                                            name: "nationality",
                                                            maxLength: 50,
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
                                                            required: true
                                                        },
                                                        {
                                                            xtype: "mitextfield",
                                                            label: "Residential Address",
                                                            name: "residentialAddress",
                                                            blankText: "Address Cannot be empty!",
                                                            maxLength: 50,
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
                                                            xtype: "mitextfield",
                                                            name: "placeOfBirthDistrictName",
                                                            label: "Place of Birth",
                                                        },
                                                        {
                                                            xtype: "mitextfield",
                                                            name: "placeOfBirthTAName",
                                                            itemId: "placeOfBirthTAName",
                                                            label: "Traditional Authority",
                                                        },
                                                        {
                                                            xtype: "mitextfield",
                                                            name: "villageName",
                                                            itemId: "villageName",
                                                            label: "Village",
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
                            title: "Permanent Home Address Information",
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
                                                            name: "permanentDistrictName",
                                                            label: "District",
                                                        },
                                                        {
                                                            xtype: "mitextfield",
                                                            name: "permanentTAName",
                                                            itemId: "permanentTAName",
                                                            label: "Traditional Authority",
                                                        },
                                                        {
                                                            xtype: "mitextfield",
                                                            name: "permanentVillageName",
                                                            itemId: "permanentVillageName",
                                                            label: "Village",
                                                        },
                                                    ]
                                                }
                                            ]
                                        }
                                    ],
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
                                                        },
                                                        {
                                                            xtype: "minumberfield",
                                                            label: "National Pension Number",
                                                            name: "nationalPenNo",
                                                            maxLength: 50,
                                                            anchor: "100%",
                                                        },
                                                        {
                                                            xtype: "mitextfield",
                                                            label: "Designation",
                                                            maxLength: 50,
                                                            name: "designation",
                                                            anchor: "100%",
                                                        },
                                                        {
                                                            xtype: "mitextfield",
                                                            label: "Department",
                                                            name: "department",
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
                                                            xtype: "midatefield",
                                                            label: "Date Of Appointment",
                                                            maxValue: new Date(),
                                                            allowBlank: false,
                                                            minValue: "1950-01-01",
                                                            name: "dateOfAppointment",
                                                            startDateField: "dateofbirth",
                                                            anchor: "100%",
                                                        },
                                                        {
                                                            xtype: "minumberfield",
                                                            label: "Current Monthly Salary",
                                                            value: 0,
                                                            minValue: 0,
                                                            name: "monthlySalary",
                                                            anchor: "100%",
                                                            readOnly: true,
                                                            renderer: 'moneyFormatFunc'
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
                                                            xtype: "minumberfield",
                                                            label: "Membership Number",
                                                            name: "memberNo",
                                                            anchor: "100%",
                                                            readOnly: true,
                                                        },
                                                        {
                                                            xtype: "midatefield",
                                                            label: "Date Of Joining Scheme",
                                                            allowBlank: false,
                                                            maxValue: new Date(),
                                                            name: "dateJoinedScheme",
                                                            anchor: "100%",
                                                            readOnly: true
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
                                                            xtype: "button",
                                                            width: '90%',
                                                            bind: {
                                                                text: 'Download {numAttachedDocs} documents',
                                                            },
                                                            handler: 'downloadStagedMemberDocs'
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
            text: 'Decline Changes',
            ui: ' decline',
            handler: 'onDeclineStageMemberDetails',
            iconCls: 'fa fa-ban',
        },
        {
            text: "Approve Details",
            iconCls: "fa fa-sign-in-alt",
            handler: "approveStageMemberDetails",
            ui: 'action',
        },
    ],
});