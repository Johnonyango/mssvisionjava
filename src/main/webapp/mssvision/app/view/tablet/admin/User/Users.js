Ext.define('MssPhoenix.view.tablet.admin.User.Users', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',
   // maxHeight:500,
  items:[
      {
        xtype: 'container',
        padding: '15px',
        scrollable: true,
        items: [
            {
                xtype: 'module',
                layout: {
                    type: 'vbox'
                },
            
                defaults: {
                    width: '100%'
                },
            
                viewModel: {
                    type: 'usersvmodel'
                },
            
                
                items: [
                    
            
                    {
                        xtype: 'container',
                        cls: 'module-body',
                        items: [
                            {
                                xtype: 'usersgrid',
                                margin: '10 0 0 0'
                            }
                        ]
                    },
                ]

            },

        ],
        
      

    }],
 
   
  // xtype: 'Users',

   
});