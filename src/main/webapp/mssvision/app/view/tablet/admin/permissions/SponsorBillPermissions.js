Ext.define('MssPhoenix.view.tablet.admin.permissions.SponsorBillPermissions', {
    extend: 'Ext.Container',
    xtype: 'sponsorbillpermissionform',
    padding: 15,

    
    items: [
        {
            xtype: 'module',
            items: [
                {
                    xtype: 'container',
                    cls: 'module-body',
                    layout: {
                        type: 'vbox',
                        align: 'stretch',
                    },
                    defaults: {
                        width: '100%',
                        xtype: 'container',
                        layout: {
                            type: 'hbox',
                            align: 'stretch',
                        }
                    },
                    items: [   
                        {
                            items: [
                                {
                                xtype:'formpanel',
                                reference: 'sponsorbillspermissionsformref',
                                itemId: 'sponsorbillspermissionsformref',
                                jsonSubmit: true,
                                layout: {
                                    type: 'vbox',
                                    align: 'stretch',
                                },
                                items:[
                                   
                                    {
                                        xtype: 'selectbox',
                                        label: 'Add Date to be chosen during Billing',
                                        name: 'dateNumber',
                                        store: {
                                            type: 'datestore'
                                        },
                                        displayField: 'name',
                                        valueField: 'value',
                                        editable: false
                                    },
                                    {
                                        items:[
                                            {
                                                xtype: 'button',
                                                text: 'Save',
                                                ui: 'action',
                                                iconCls: 'fa fa-save',
                                                iconAlign: "right",
                                               id: 'btnsavePaymentDate',
                                                handler: 'savePaymentDate',
                                                margin: '0 0 10 6',
                                            },
                                            {width:50},

                                        ]
                                    }
                                   
                                   
                                ]
                            }
                               
                            
                         ],
                        
                        }
                       
                    ],
                }
            ]
        }
    ],
    // bbar: [
    //     {
    //         text: 'Process',
    //         formBind: true,
    //         id: 'btnsavePaymentDate',
    //         handler: 'savePaymentDate',
    //     },
    // ]

});

