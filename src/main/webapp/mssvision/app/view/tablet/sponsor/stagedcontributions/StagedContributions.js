Ext.define('MssPhoenix.view.tablet.sponsor.stagedcontributions.StagedContributions', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',
    xtype : 'stagedcontributions', 
    
    layout: {
        type: 'vbox',
        align:'stretch'
    },
    

    defaults:{
        width:'100%'
    },

    items: [{
        xtype: 'container',
        scrollable: true,
        scrollable: 'y',
        
        items: [{
                xtype: 'module',
                margin: '10 10 10 10',
                items: [{
                        xtype: 'component',
                        cls: 'module-head',
                        html: '<h3>Staged Contributions</h3>'
                    },
                    {
                        xtype: 'stagedcontributionsgrid',
                        cls: 'module-body',

                    },

                ]
            }, 
        ]

    }]
});