Ext.define('MssPhoenix.view.tablet.sponsor.members.AddMembers', {
    extend: 'MssPhoenix.view.widgets.Window',
    xtype: 'sponsoraddmembersform',
    viewModel: {
        type: 'addmembervmodel'
    },
    height: "90%",
    width: "85%",
    scrollable: true,
    closable: true,
    controller: 'sponsoraddmemberformcontroller',
    title: 'Add Member',
    items: [
        {
            layout: "hbox",
            border: false,
            xtype: 'formpanel',
            reference: 'memberaddform',
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
                            title: "Personal Information",
                            autoHeight: true,
                            collapsed: false,
                            anchor: "98%",
                            items: [
                                {
                                    xtype: 'minumberfield',
                                    label: 'Sponsor Id',
                                    bind: {
                                        value: '{sponsorId}'
                                    },
                                    name: 'sponsorId',
                                    hidden: true,
                                },
                                {
                                    xtype: 'minumberfield',
                                    label: 'Scheme Id',
                                    bind: {
                                        value: '{schemeId}'
                                    },
                                    name: 'schemeId',
                                    hidden: true,
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
                                    editable: false,
                                    displayField: "title",
                                    valueField: "id",
                                    anchor: "100%",
                                },
                                {
                                    xtype: "mitextfield",
                                    label: "Surname",
                                    allowBlank: false,
                                    maxLength: 50,
                                    name: "lastname",
                                    anchor: "100%",
                                    required: true
                                },
                                {
                                    xtype: "mitextfield",
                                    label: "Firstname",
                                    allowBlank: false,
                                    maxLength: 50,
                                    name: "firstname",
                                    anchor: "100%",
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
                                    name: "maritalStatus",
                                    label: "Current Marital Status",
                                    allowBlank: false,
                                    blankText: "Select Marital Status..",
                                    emptyText: "Select Marital Status..",
                                    store: {
                                        type: "maritalStatuses"
                                    },
                                    displayField: "status",
                                    valueField: "id",
                                    anchor: "100%",
                                    required: true
                                },
                                {
                                    xtype: "selectbox",
                                    name: "maritalStatusAtDoe",
                                    hiddenName: "maritalStatusAtDoe",
                                    label: "Marital Status At Date Of Entry",
                                    allowBlank: true,
                                    blankText: "Select Marital Status..",
                                    emptyText: "Select Marital Status..",
                                    store: {
                                        type: "maritalStatuses"
                                    },
                                    displayField: "status",
                                    valueField: "id",
                                    anchor: "100%",
                                    editable: false
                                },
                                {
                                    xtype: "midatefield",
                                    label: "Date Of Birth",
                                    name: "dateOfBirth",
                                    dateFormat: 'Y-m-d',
                                    allowBlank: false,
                                    endDateField: "dateofappment",
                                    minValue: new Date(1977),
                                    maxDate: new Date(),
                                    anchor: "100%",
                                    required: true
                                },
                                {
                                    xtype: "mitextfield",
                                    label: "National Identification Number",
                                    name: "idNumber",
                                    anchor: "100%",
                                    required: true
                                },
                                {
                                    xtype: "mitextfield",
                                    label: "Passport Number",
                                    allowBlank: true,
                                    name: "otherIdNo",
                                    msgTarget: "under",
                                    anchor: "100%",
                                },
                                {
                                    xtype: "mitextfield",
                                    label: "Tax ID Number",
                                    name: "pinNo",
                                    anchor: "100%",
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
                            title: "Address Information",
                            autoHeight: true,
                            collapsed: false,
                            anchor: "98%",
                            items: [
                                {
                                    xtype: "mitextfield",
                                    label: "Phone No.(Primary)",
                                    name: "phoneNumber",
                                    anchor: "100%",
                                    required: true
                                },
                                {
                                    xtype: "mitextfield",
                                    label: "Secondary Phone No.",
                                    name: "secondaryPhoneNumber",
                                    renderer: function (value) {
                                        return value.replace(/^(\d{3})(\d{3})(\d{4})$/, "$1-$2-$3");
                                    },
                                    anchor: "100%",
                                },
                                {
                                    xtype: "mitextfield",
                                    label: "Telephone",
                                    allowBlank: true,
                                    name: "fixedPhone",
                                    anchor: "100%",
                                },
                                {
                                    xtype: "mitextfield",
                                    label: "Other Contacts",
                                    allowBlank: true,
                                    name: "otherContacts",
                                    anchor: "100%",
                                },
                                {
                                    xtype: "mitextfield",
                                    label: "Address",
                                    name: "postalAddress",
                                    blankText: "Address Cannot be empty!",
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
                                    editable: false,
                                    required: true
                                },
                                {
                                    xtype: "mitextfield",
                                    label: "Email",
                                    name: "emailAddress",
                                    validators: "email",
                                    anchor: "100%",
                                },
                                {
                                    xtype: "mitextfield",
                                    label: "Residential Address",
                                    name: "residentialAddress",
                                    blankText: "Address Cannot be empty!",
                                    maxLength: 50,
                                    anchor: "100%",
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
                            title: "Place Of Information",
                            autoHeight: true,
                            collapsed: false,
                            anchor: "98%",
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
                                    listeners: {
                                        select: 'pobTrSelect'
                                    }
                                },
                                {
                                    xtype: "selectbox",
                                    name: "villageName",
                                    itemId: "villageName",
                                    label: "Village",
                                    blankText: "Village...",
                                    displayField: "name",
                                    valueField: "name",
                                    editable: false,
                                    anchor: "100%",
                                },
                            ]
                        },
                        {
                            xtype: "fieldset",
                            title: "Permanent Home Address Information",
                            autoHeight: true,
                            collapsed: false,
                            anchor: "98%",
                            items: [
                                {
                                    xtype: "selectbox",
                                    name: "permanentDistrictName",
                                    label: "District",
                                    blankText: "Select place of birth...",
                                    store: {
                                        type: "districtstore",
                                    },
                                    displayField: "name",
                                    valueField: "id",
                                    anchor: "100%",
                                    editable: false,
                                    listeners: {
                                        select: 'pmDtrSelect'
                                    }
                                },
                                {
                                    xtype: "selectbox",
                                    name: "permanentTAName",
                                    itemId: "permanentTAName",
                                    label: "Traditional Authority",
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
                                    name: "permanentVillageName",
                                    itemId: "permanentVillageName",
                                    label: "Village",
                                    blankText: "Village...",
                                    reference: "permanentVillage",
                                    displayField: "name",
                                    valueField: "name",
                                    editable: false,
                                    anchor: "100%",
                                },
                            ],
                        },
                        {
                            xtype: "fieldset",
                            title: "Membership Information",
                            autoHeight: true,
                            collapsed: false,
                            anchor: "98%",
                            items: [
                                {
                                    xtype: "midatefield",
                                    label: "Date Of Joining Scheme",
                                    dateFormat: 'Y-m-d',
                                    maxValue: new Date(),
                                    name: "dateJoinedScheme",
                                    anchor: "100%",
                                },
                                {
                                    xtype: 'selectbox',
                                    store: {
                                        type: 'companyclass'
                                    },
                                    label: 'Choose Company Cost Centre',
                                    displayField: 'name',
                                    name: 'companyId',
                                    valueField: 'id',
                                    flex: 1,
                                    margin: '0 5 0 5',
                                    required: true,
                                },

                                {
                                    xtype: 'selectbox',
                                    store: {
                                        type: 'memberclass'
                                    },
                                    label: 'Choose Your Member Class',
                                    displayField: 'name',
                                    name: 'mclassId',
                                    valueField: 'id',
                                    margin: '0 0 0 5',
                                    flex: 1,
                                    required: true,
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
                            title: "Employment Information",
                            autoHeight: true,
                            collapsed: false,
                            anchor: "98%",
                            items: [
                                {
                                    xtype: "mitextfield",
                                    label: "Staff Number",
                                    name: "staffNo",
                                    maxLength: 50,
                                    anchor: "100%",
                                },
                                {
                                    xtype: "mitextfield",
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
                                // {
                                //     xtype: "mitextfield",
                                //     name: "payrollNo",
                                //     label: "Payroll Number",
                                // },
                                {
                                    xtype: "minumberfield",
                                    name: "monthlySalary",
                                    label: "Monthly Salary",
                                },
                                {
                                    xtype: "midatefield",
                                    label: "Date Of Employment",
                                    dateFormat: 'Y-m-d',
                                    maxValue: new Date(),
                                    allowBlank: false,
                                    minValue: "1950-01-01",
                                    name: "dateOfAppointment",
                                    startDateField: "dateofbirth",
                                    anchor: "100%",
                                },
                            ],
                        },
                        {
                            xtype: "fieldset",
                            title: "Documents",
                            autoHeight: true,
                            collapsed: false,
                            anchor: "98%",
                            items: [
                                {
                                    xtype: "mifilefield",
                                    label: "Upload Documents",
                                    name: "file",
                                    multiple: true,
                                    anchor: "100%",
                                },
                            ],
                        },
                    ],
                },

            ],
        },],

    bbar: [
        "->",
        {
            text: "Cancel",
            iconCls: "fa fa-ban",
            handler: "onCancelBtnClick",
            ui: 'action'
        },
        {
            text: "Save",
            iconCls: "fa fa-sign-in-alt",
            handler: "submitMemberForm",
            ui: 'action'
        },
    ],
});