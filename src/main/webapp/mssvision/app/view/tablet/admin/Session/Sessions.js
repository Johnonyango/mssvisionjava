Ext.define('MssPhoenix.view.tablet.admin.Session.Sessions', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',
   //    maxHeight:400,
    xtype: 'Sessions',

    layout: {
        type: 'vbox'
    },

    defaults: {
        width: '100%'
    },

    viewModel: {
        type: 'sessionsvmodel'
    },

    controller: 'sessionsController',

    items: [
          

        {
            xtype: 'container',
            cls: 'module-body',
            items: [
                {
                    xtype: 'sessionsgrid',
                    margin: '10 0 0 0'
                }
            ]
        },
    ]
});