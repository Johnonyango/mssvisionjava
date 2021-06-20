Ext.define('MssPhoenix.view.phone.admin.home.AdminHome', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',

    xtype: 'phoneadminhome',
    viewModel: 'homevmodel',


    items: [
        {
            xtype: 'container',
            padding: '15px',
            scrollable: true,
            width: '100%',

            defaults: {
                width: '100%'
            },
            layout: {
                type: 'vbox',
                align: 'stretch'
            },

            items: [

                
                

                {
                    xtype: 'admin-cards'
                },

                
                {
                    xtype:  'bar-basic'
                },

                {
                    margin: '20 0 0 0',
                    xtype: 'module',
                    scrollable: 'y',
                    maxHeight: 450,
                    items: [{
                        xtype: 'component',
                        html: '<h3>Sessions</h3>',
                        
                    },
                    {
                        cls: 'module-body',
                        xtype: 'container',
                        items: [{
                            xtype:'phonesessionsgrid', 
                        }]
                    }
                    ]
                }

            ]

        }]

});
