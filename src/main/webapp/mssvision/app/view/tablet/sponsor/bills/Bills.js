Ext.define('MssPhoenix.view.tablet.sponsor.bills.Bills', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',
    xtype: 'sponsorbills',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },


    defaults: {
        width: '100%'
    },

    items: [{
        xtype: 'container',
        scrollable: true,

        items: [
            {
                xtype: 'module',
                margin: '10 10 10 10',
                items: [
                    {
                        xtype: 'component',
                        cls: 'module-head',
                        html: '<h3>Bills</h3>'
                    },
                    {
                        xtype: 'sponsorbillsgrid',
                        cls: 'module-body',
                    },

                ]
            },
        ]

    }]
});