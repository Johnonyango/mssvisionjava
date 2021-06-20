Ext.define('MssPhoenix.view.tablet.shared.activitylog.MultiUserActivityLogs', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',
    
    layout: {
        type: 'vbox'
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
                        html: '<h3>Activity Logs</h3>'
                    },
                    {
                        xtype: 'multiuseractivitylogsgrid',
                        cls: 'module-body',

                    },

                ]
            }, 
        ]

    }]
});