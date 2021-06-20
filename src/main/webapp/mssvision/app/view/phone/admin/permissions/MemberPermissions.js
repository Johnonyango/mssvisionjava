Ext.define('MssPhoenix.view.phone.admin.permissions.MemberPermissions', {
    extend: 'Ext.Container',
    xtype: 'phonememberpermissions',
    items: [
        {
            title: 'Member',
            xtype: 'formpanel',
            reference: 'memberpermissionsform',
            itemId: 'memberpermissionsform',
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
                                    label: 'View Contributions',
                                    margin: '0 0 0 6',
                                    name: 'contributionsMenuActivated',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',

                                    valueField: 'value',
                                    editable: false
                                },
                                {
                                    xtype: 'selectbox',
                                    label: 'Allow View Balances',
                                    name: 'balancesMenuActivated',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',

                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Allow View Claims',
                                    margin: '0 0 0 6',
                                    name: 'claimsMenuActivated',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',

                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Allow Use Projection Calculator',
                                    margin: '0 0 0 6',
                                    name: 'projectionsMenuActivated',
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
                                    name: 'documentsMenuActivated',
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
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Allow Make Contributions Via Portal',
                                    margin: '0 0 0 6',
                                    name: 'allowMakeContributions',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',

                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Allow Initiate Claim',
                                    margin: '0 0 0 6',
                                    name: 'allowInitiateClaim',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',

                                    valueField: 'value',
                                    editable: false
                                },
                                {
                                    xtype: 'selectbox',
                                    label: 'Allow Use STK Push',
                                    name: 'allowStkPush',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',

                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Allow Request Statement',
                                    margin: '0 0 0 6',
                                    name: 'allowRequestStatement',
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
                            xtype: 'button',
                            minWidth:20,
                            height: 50,
                            iconCls:'fa fa-save',
                            text: 'Save',
                            ui: 'action',
                            handler: 'saveMemberPerms' 
                            
                        },
                        {height:10},
                        {
                            xtype: 'button',
                            minWidth:20,
                            height: 50,
                            iconCls:'fa fa-ban',
                            text: 'Set Defaults',
                            ui: 'action',
                            handler: 'setDefaultsMember' 
                        },
                       
                        
                        
                        
                        
                    ]
                }
            ],
            bbar: [
                '->',
               
            ]
        }
    ]
});