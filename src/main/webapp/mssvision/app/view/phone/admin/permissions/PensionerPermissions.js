Ext.define('MssPhoenix.view.phone.admin.permissions.PensionerPermissions', {
    extend: 'Ext.Container',
    xtype: 'phonepensionerpermissions',
    items: [
        {
            title: 'Pensioner',
            xtype: 'formpanel',
            reference: 'pensionerpermissionsform',
            itemId: 'pensionerpermissionsform',
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
                                    label: 'View Payrolls',
                                    margin: '0 0 0 6',
                                    name: 'payrollsMenuActivated',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                },
                                {
                                    xtype: 'selectbox',
                                    label: 'Allow Deductions',
                                    name: 'deductionsMenuActivated',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    editable: false
                                }, {
                                    xtype: 'selectbox',
                                    label: 'View COE',
                                    margin: '0 0 0 6',
                                    name: 'coeMenuActivated',
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
                                    margin: '0 0 0 6',
                                    name: 'ticketsMenuActivated',
                                    store: {
                                        type: 'yesno'
                                    },
                                    displayField: 'name',

                                    valueField: 'value',
                                    editable: false
                                },
                                {
                                    xtype: 'selectbox',
                                    label: 'View Account Info',
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
                                    handler: 'savePensionerPerms' 
                                    
                                },
                                {height:10},
                                {
                                    xtype: 'button',
                                    minWidth:20,
                                    height: 50,
                                    iconCls:'fa fa-ban',
                                    text: 'Set Defaults',
                                    ui: 'action',
                                    handler: 'setDefaultsPensioner' 
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
                //     handler: 'savePensionerPerms'
                // },
                // {
                //     text: 'Set Defaults',
                //     ui: 'action',
                //     handler: 'setDefaultsPensioner'
                // },
            ]
        }
    ]
});