Ext.define('MssPhoenix.view.phone.admin.permissions.CREPermissions', {
    extend: 'Ext.Container',
    xtype: 'phonecrepermissions',
    items: [
        {
            title: 'CRE',
            xtype: 'formpanel',
            reference: 'crepermissionsform',
            itemId: 'crepermissionsform',
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
                                    label: 'Schemes Menu',
                                    margin: '0 0 0 6',
                                    name: 'schemesMenuActivated',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',

                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'Allow Initiate Claims',
                                    margin: '0 0 0 6',
                                    name: 'allowInitiateClaims',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                },{
                                    xtype: 'selectbox',
                                    label: 'Upload Docs',
                                    margin: '0 0 0 6',
                                    name: 'allowUploadDocs',
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
                                    handler: 'saveCREPerms' 
                                    
                                },
                                {height:10},
                                {
                                    xtype: 'button',
                                    minWidth:20,
                                    height: 50,
                                    iconCls:'fa fa-ban',
                                    text: 'Set Defaults',
                                    ui: 'action',
                                    handler: 'setDefaultsCRE' 
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
                //     id: 'savecrePermsBtn',
                //     handler: 'saveCREPerms'
                // },
                // {
                //     text: 'Set Defaults',
                //     ui: 'action',
                //     id: 'setcreDefBtn',
                //     handler: 'setDefaultsCRE'
                // },
            ]
        }
    ]
});