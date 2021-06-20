Ext.define('MssPhoenix.view.tablet.sponsor.tpfa.TPFA', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',

    xtype : 'sponsortpfa', 

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
                        html: '<h3>TPFA</h3>'
                    },
                    {
                        xtype: 'tpfagrid',
                        cls: 'module-body',

                    },

                ]
            }, 
        ]

    }
    ]
});

