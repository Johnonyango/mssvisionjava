Ext.define('MssPhoenix.view.tablet.sponsor.claims.Claims', {
    extend: 'MssPhoenix.view.widgets.Module',

    xtype:'sponsorclaims',
    viewModel:{
        type:'sponsorclaimsvmodel'
    },
   
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    
    
    defaults:{
        width:'100%'
    },
  
    items: [{
        xtype: 'container',
        scrollable: true,
        scrollable: 'y',
        height:'100%',
        
        items: [{
                xtype: 'module',
                margin: '10 10 10 10',
                items: [{
                        xtype: 'component',
                        cls: 'module-head',
                        html: '<h3>Claims</h3>'
                    },
                    {
                        xtype: 'sponsorclaimsgrid',
                        cls: 'module-body',

                    },

                ]
            }, 
        ]

    }]
});