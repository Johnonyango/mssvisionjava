Ext.define('MssPhoenix.view.phone.admin.permissions.CRMPermissions', {
    extend: 'Ext.Container',
    xtype: 'phonecrmpermissions',
    items: [
        {
            title: 'Client Relations Manager',
            xtype: 'formpanel',
            reference: 'crmpermissionsform',
            itemId: 'crmpermissionsform',
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
                                    label: 'View Sponsors',
                                    margin: '0 0 0 6',
                                    name: 'sponsorMenuActivated',
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
                                },
                                {
                                    xtype: 'selectbox',
                                    label: 'View & Create Tickets',
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
                                    margin: '0 0 0 6',
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
                                    xtype: 'button',
                                    minWidth:20,
                                    height: 50,
                                    iconCls:'fa fa-save',
                                    text: 'Save',
                                    ui: 'action',
                                    handler: 'saveCRMPerms' 
                                    
                                },
                                {height:10},
                                {
                                    xtype: 'button',
                                    minWidth:20,
                                    height: 50,
                                    iconCls:'fa fa-ban',
                                    text: 'Set Defaults',
                                    ui: 'action',
                                    handler: 'setDefaultsCrm' 
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
                //     handler: 'saveCRMPerms'
                // },
                // {
                //     text: 'Set Defaults',
                //     ui: 'action',
                //     handler: 'setDefaultsCrm'
                // },
            ]
        }
    ]
});