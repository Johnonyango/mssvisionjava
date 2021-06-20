Ext.define('MssPhoenix.view.tablet.admin.permissions.CREPermissions', {
    extend: 'Ext.Container',
    xtype: 'crepermissions',
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
                                }
                            ]
                        },
                        {
                            items: [{
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
                            ]
                        },
                        {
                            items:[
                                {
                                    xtype: 'button',
                                    text: 'Set Defaults',
                                    ui: 'action',
                                   // id: 'setcreDefBtn',
                                    handler: 'setDefaultsCRE'
                                },
                                {width:50},
                                {
                                    xtype: 'button',
                                    text: 'Save',
                                    ui: 'action',
                                    iconCls: 'fa fa-save',
                                    iconAlign: "right",
                                    //  id: 'savecrePermsBtn',
                                    handler: 'saveCREPerms'
                                },
                            ]
                        }
                    ]
                }
            ],
        }
    ]
});