Ext.define('MssPhoenix.view.phone.admin.MailConfigs.MailConfigs', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',
   
    xtype: 'phonemailconfigs',

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
                        type: 'phonemailconfigsvmodel'
                    },


                    items: [

                        {
                            xtype: 'container',
                            cls: 'module-body',
                            items: [
                                {
                                    xtype: 'phonemailconfigsgrid',
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