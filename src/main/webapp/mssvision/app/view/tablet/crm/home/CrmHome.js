Ext.define('MssPhoenix.view.tablet.crm.home.CrmHome', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',
    xtype: 'crmhome',
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
                    xtype: 'crm-statustiles'
                },
                //sponsormemberchart
                // {
                //     margin: '20 0 0 0',
                //     xtype: 'crm-sponsormemberschart'
                // },
                // {
                //     xtype:'container',
                //     layout:{
                //         type:'hbox',
                //         align:'stretch'
                //     },
                //     items: [
                        
                //         {
                //             margin: '0 0 0 0',
                //             flex: 1,
                //             xtype: 'module',
                //             scrollable: 'y',
                //             height: 435,
                //             items: [
                //                 {
                //                     cls: 'module-body',
                //                     xtype: 'container',
                //                     items: [{
                //                         xtype: 'crmsponsormembersgrid',
                //                         margin: '10 0 0 0',
                //                         plugins:{
                //                             gridpagingtoolbar: false,
                //                         },
                //                     }]
                //                 }
                //             ]
                //         },

                //         //bar chart
                //         {
                //             xtype: 'crm-sponsormemberschart',
                //             flex:1,
                //             margin: '0 0 0 20',
                //         },

                //     ]
                // },

                //claims
                {
                    margin: '20 0 0 0',
                    xtype: 'module',
                    scrollable: 'y',
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
                                    iconCls:'fa fa-redo',
                                    handler: 'reloadClaimsGrid',
                                    ui: 'action'
                                },
                            ]
                        },
                        {
                            cls: 'module-body',
                            xtype: 'container',
                            items: [{
                                xtype: 'crmrecentclaimssgrid'
                            }]
                        }
                    ]          
                },

                //tickets
                {
                    margin: '20 0 0 0',
                    xtype: 'module',
                    scrollable: 'y',
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
                                iconCls:'fa fa-redo',
                                handler: 'reloadTicketsGrid',
                                ui: 'action'
                            },
                        ]
                    },
                        {
                            cls: 'module-body',
                            xtype: 'container',
                            items: [{
                                xtype: 'crmrecentsupportticketsgrid'
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