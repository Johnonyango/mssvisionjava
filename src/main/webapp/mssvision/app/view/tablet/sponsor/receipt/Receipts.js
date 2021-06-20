Ext.define('MssPhoenix.view.tablet.sponsor.receipt.Receipts', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',

    xtype : 'sponsorreceipts', 

    items: [
        {
        xtype: 'container',
        //scrollable: true,
        scrollable: 'y',
        items: [{
                xtype: 'module',
                margin: '10 10 10 10',
                items: [{
                        xtype: 'component',
                        cls: 'module-head',
                        html: '<h3>Receipts</h3>'
                    },
                    {
                        xtype: 'sponsorreceiptgrid',
                        cls: 'module-body',

                    },

                ]
            }, 
        ]

    }
    ]
});