    Ext.define('MssPhoenix.view.phone.sponsor.bills.Bills', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',
    xtype : 'sponsorbillsphone', 
    
    layout: {
        type: 'vbox',
        align:'stretch'
    },
    controller: 'bookbillsgridcontroller',
    
    defaults:{
        width:'100%'
    },
    items: [{
        xtype: 'module',
        margin: '10 10 10 10',
        items: [{
                xtype: 'component',
                cls: 'module-head',
                html: '<h3>Bills</h3>'
            },
            {
    
                cls: 'module-body',
                items: [
                    {
                        xtype: 'container',
                        padding: '15px',
                        scrollable: true,
                        items: [
                            {
                                xtype: 'fieldset',
                                title: 'Search Bills',
                                margin: '10 0 0 0',
                                items: [
                                    {
                                        xtype: 'formpanel',
                                        reference:'searchbills',
                                        itemId: 'searchbills',              
                                        layout: {
                                            type: 'vbox',
                                        },
                                        items: [
                                            {
                                xtype: 'mitextfield',
                                name: 'searchValue',
                                placeholder: 'Enter search key',
                                tooltip: 'Enter search key',
                                allowBlank: false,
                            },
                            {
                                xtype: 'button',
                                scale: 'small',
                                iconCls: 'x-fa fa-search',
                                ui: 'action',
                                handler: 'searchBills'
                            },
                                        ],
                                    },
                                ]
                            },
                            {
                                xtype: 'fieldset',
                                title: 'FilterBills',
                                margin: '10 0 0 0',
                                items: [
                                    {
                                        xtype: 'formpanel',
                                        reference:'filterbills',
                                        itemId: 'filterbills',              
                                        layout: {
                                            type: 'vbox',
                                        },
                                        items: [
                                            {
                                                xtype: 'midatefield',
                                                name: 'dateFrom',
                                                label:'From',
                                                placeholder: 'From Date',
                                                tooltip: 'Specify start date',
                                                maxDate: new Date(),
                                            },
                                            {
                                                xtype: 'midatefield',
                                                // label: 'To',
                                                name: 'dateTo',
                                                label:'To',
                                                placeholder: 'End Date',
                                                tooltip: 'Specify end date',
                                                maxDate: new Date(),
                                                value: new Date(),
                                                flex: 1
                                            },
                                            {
                                                margin: '0 0 0 0',
                                                xtype: 'button',
                                                scale: 'small',
                                                iconCls: 'x-fa fa-search',
                                                ui: 'action',
                                                handler: 'filterBills'
                                            },
                                        ],
                                    },
                                ]
                            },
                
                            {
                                cls: 'module-body',
                                xtype: 'container',
                
                                items: [{
                                    xtype: 'sponsorbillsphonegrid',
                                    margin: '10 0 0 0'
                                }]
                            }
                        ]
                    }
                ]

            },
        ],
    }, 
]

});