Ext.define('MssPhoenix.view.tablet.sponsor.user.Users', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',
    xtype : 'sponsorusers', 
    
    layout: {
        type: 'fit'
    },
    viewModel:'sponsor-userviewmodel',

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
                        html: '<h3>Users</h3>'
                    },
                    {
                        xtype: 'sponsorusersgrid',
                        cls: 'module-body',

                    },

                ]
            }, 
        ]

    }]
});