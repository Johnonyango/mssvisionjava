Ext.define('MssPhoenix.view.phone.crm.home.CrmHome', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',
    // xtype: 'crmhome',

    controller:'crmhomecontroller',  
    viewModel: 'crmhomevmodel',
    items: [{
        xtype: 'container',
        padding: '15px',
        scrollable: true,
        items: [{
            xtype: 'container',
            width: '100%',

            defaults: {
                width: '100%'
            },
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [
                //status tiles
                {
                    margin: '20 0 0 0',
                    xtype: 'crmphonestatustiles'
                },
                //sponsormemberchart
                {
                    margin: '20 0 0 0',
                    xtype: 'crm-sponsormemberschart'
                },

                //claims
                {
                    margin: '20 0 0 0',
                    xtype: 'module',
                    maxHeight: 350,
                    items: [
                        {
                            xtype: 'toolbar',
                            items: [
                                {
                                    xtype: 'component',
                                    html: '<h3>Recent Claims</h3>',
                                    cls: 'module-head',
                                },

                                '->',
                                {
                                    iconCls: 'fa fa-redo',
                                    handler: 'reloadClaimsGrid',
                                    ui: 'action'
                                },
                            ]
                        },
                        {
                            cls: 'module-body',
                            xtype: 'container',
                            items: [{
                                xtype: 'crmphonerecentclaimssgrid'
                            }]
                        }
                    ]
                },

                //tickets
                {
                    margin: '20 0 0 0',
                    xtype: 'module',
                    maxHeight: 350,
                    items: [{
                        xtype: 'toolbar',
                        items: [
                            {
                                xtype: 'component',
                                html: '<h3>Recent Support Ticket</h3>',
                                cls: 'module-head',
                            },

                            '->',
                            {
                                iconCls: 'fa fa-redo',
                                handler: 'reloadTicketsGrid',
                                ui: 'action'
                            },
                        ]
                    },
                    {
                        cls: 'module-body',
                        xtype: 'container',
                        items: [{
                            xtype: 'crmphonerecentsupportticketsgrid'
                        }]
                    }
                    ]
                }
            ]
        }
        ]
    }

    ]
});