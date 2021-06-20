Ext.define('MssPhoenix.view.phone.admin.permissions.SponsorPermissions', {
    extend: 'Ext.Container',
    xtype: 'phonesponsorpermissions',
    items: [
        {
            title: 'Sponsor',
            xtype: 'formpanel',
            reference: 'sponsorpermissionsform',
            itemId: 'sponsorpermissionsform',
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
                            type: 'vbox',
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
                                },
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
                                }, {
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
                                },
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
                                },
                                {
                                    xtype: 'selectbox',
                                    label: 'View Activity Log',
                                    name: 'auditTrailMenuActivated',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',

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
                                {
                                    xtype: 'button',
                                    minWidth:20,
                                    height: 50,
                                    iconCls:'fa fa-save',
                                    text: 'Save',
                                    ui: 'action',
                                    handler: 'saveSponsorPerms' 
                                    
                                },
                                {height:10},
                                {
                                    xtype: 'button',
                                    minWidth:20,
                                    height: 50,
                                    iconCls:'fa fa-ban',
                                    text: 'Set Defaults',
                                    ui: 'action',
                                    handler: 'setDefaultsSponsor' 
                                },





                            ]
                        },
                       
                       
                      
                    ]
                }
            ],
            bbar: [
                '->',
                // {
                //     text: 'Save',
                //     ui: 'action',
                //     iconCls: 'fa fa-save',
                //     iconAlign: "right",
                //     handler: 'saveSponsorPerms'
                // },
                // {
                //     text: 'Set Defaults',
                //     ui: 'action',
                //     handler: 'setDefaultsSponsor'
                // },
            ]
        }
    ]
});