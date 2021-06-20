Ext.define('MssPhoenix.view.tablet.admin.permissions.PoPermissions', {
    extend: 'Ext.Container',
    xtype: 'popermissions',
    items: [
        {
            title: 'Principal Officer',
            xtype: 'formpanel',
            reference: 'popermissionsform',
            itemId: 'popermissionsform',
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
                                    xtype: 'selectbox',
                                    label: 'Allow Home Menu',
                                    name: 'homeMenuActivated',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',

                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'View Personal Info',
                                    margin: '0 0 0 6',
                                    name: 'personalInfoMenuActivated',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',

                                    valueField: 'value',
                                    editable: false
                                },
                                {
                                    xtype: 'selectbox',
                                    label: 'View Schemes',
                                    margin: '0 0 0 6',
                                    name: 'schemesMenuActivated',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',

                                    valueField: 'value',
                                    editable: false
                                },{
                                    xtype: 'selectbox',
                                    label: 'View Members',
                                    margin: '0 0 0 6',
                                    name: 'membersMenuActivated',
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
                                    label: 'Allow View Claims',
                                    name: 'claimsMenuActivated',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',

                                    valueField: 'value',
                                    editable: false
                                },
                                {
                                    xtype: 'selectbox',
                                    label: 'View & Do Billing',
                                    margin: '0 0 0 6',
                                    name: 'billsMenuActivated',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Allow View Receipts',
                                    margin: '0 0 0 6',
                                    name: 'receiptsMenuActivated',
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
                                    label: 'View & Create Tickets',
                                    margin: '0 0 0 6',
                                    name: 'ticketsMenuActivated',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',

                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'View Account Info',
                                    margin: '0 0 0 6',
                                    name: 'manageAccountMenuActivated',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',

                                    valueField: 'value',
                                    editable: false
                                },
                                {
                                    xtype: 'selectbox',
                                    label: 'Allow Book Bill via Portal ',
                                    name: 'allowBookBill',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                },
                                {
                                    xtype: 'selectbox',
                                    label: 'Allow Approve Documents ',
                                    margin: '0 0 0 6',
                                    name: 'allowApproveDocuments',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                },
                            ]
                        },
                        {
                            items: [

                                {
                                    xtype: 'selectbox',
                                    label: 'Allow Member',
                                    margin: '0 0 0 6',
                                    name: 'allowAddSingleUser',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                },
                                {
                                    xtype: 'selectbox',
                                    label: 'Allow Add Members Batch',
                                    margin: '0 0 0 6',
                                    name: 'allowAddBatchUser',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                },
                                {
                                    xtype: 'selectbox',
                                    label: 'Allow Initiate Claims',
                                    name: 'allowInitiateClaims',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                },
                                {
                                    xtype: 'selectbox',
                                    label: 'View Activity Log',
                                    name: 'auditTrailMenuActivated',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    margin: '0 0 0 6',
                                    valueField: 'value',
                                    editable: false
                                },
                            ]
                        },
                        {
                            items: [

                                {
                                    xtype: 'selectbox',
                                    label: 'View & Add Users',
                                    margin: '0 0 0 6',
                                    name: 'usersAccountMenuActivated',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',

                                    valueField: 'value',
                                    editable: false
                                },
                                {
                                    xtype: 'selectbox',
                                    label: 'Allow Benefit Calculator',
                                    margin: '0 0 0 6',
                                    name: 'allowBenefitCalculator',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                },

                            ]
                        },
                        {
                            items: [
                                {
                                    xtype: 'button',
                                    text: 'Set Defaults',
                                    ui: 'action',
                                    handler: 'setDefaultsPo'
                                },
                                {width: 50},
                                {
                                    xtype: 'button',
                                    text: 'Save',
                                    ui: 'action',
                                    iconCls: 'fa fa-save',
                                    iconAlign: "right",
                                    handler: 'savePoPerms'
                                },
                            ]
                        }
                    ]
                }
            ],
        }
    ]
});