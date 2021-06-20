Ext.define('MssPhoenix.view.tablet.admin.permissions.ClaimsReviewerPermissions', {
    extend: 'Ext.Container',
    xtype: 'claimsreviewerpermissions',
    controller:'permissionscontroller',
    items: [
        {
            title: 'Claims Reviewer',
            xtype: 'formpanel',
            reference: 'claimsreviewerpermissionsform',
            itemId: 'claimsreviewerpermissionsform',
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
                                }, {
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
                                    label: 'Allow View Staged Contributions',
                                    name: 'stagedContributionsMenuActivated',
                                    margin: '0 0 0 6',
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
                                    label: 'View Documents',
                                    name: 'dmsMenuActivated',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',

                                    valueField: 'value',
                                    editable: false
                                }, {
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
                                }
                                , {
                                    xtype: 'selectbox',
                                    label: 'View TPFA Menu',
                                    margin: '0 0 0 6',
                                    name: 'tpfaMenuActivated',
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
                                {
                                    xtype: 'selectbox',
                                    label: 'Allow Add Single User',
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
                                    label: 'Allow Add Users in Batch',
                                    margin: '0 0 0 6',
                                    name: 'allowAddBatchUser',
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
                                    label: 'Allow to Stage Contributions',
                                    name: 'allowStageContributions',
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
                                // {
                                //     text: 'Change Payment Date',
                                //     margin: '0 0 0 6',
                                //     ui: 'action',
                                //     id: 'setPaymentDateBtn',
                                //     handler: 'onChangePayBtnClick'
                                // },
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
                                   // id: 'saveSponsorPermsBtn',
                                    handler: 'saveClaimsReviewerPerms'
                                },
                                {width:50},
                                {
                                    xtype: 'button',
                                    text: 'Set Defaults',
                                    ui: 'action',
                                   // id: 'setSponDefBtn',
                                    handler: 'setDefaultsClaimsReviewer'
                                },
                            ]
                        }
                    ]
                }
            ],
            bbar: [
                '->',
                {
                    text: 'Save',
                    ui: 'action',
                    iconCls: 'fa fa-save',
                    iconAlign: "right",
                    id: 'saveClaimReviewerPermsBtn',
                    handler: 'saveClaimsReviewerPerms'
                },
              
                {
                    text: 'Set Defaults',
                    ui: 'action',
                    id: 'setClaimReviewerDefBtn',
                    handler: 'setDefaultsClaimsReviewer'
                },
              
            ]
        }
    ]
});