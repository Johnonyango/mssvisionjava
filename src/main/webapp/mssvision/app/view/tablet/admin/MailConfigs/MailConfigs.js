Ext.define('MssPhoenix.view.tablet.admin.MailConfigs.MailConfigs', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',
   
    xtype: 'mailconfigs',

    items: [
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
                        type: 'mailconfigsvmodel'
                    },


                    items: [

                        {
                            xtype: 'container',
                            cls: 'module-body',
                            items: [
                                {
                                    xtype: 'mailconfigsgrid',
                                    margin: '2 0 0 0'
                                }
                            ]
                        },
                    ]
                }
            ]
        }
    ]

});