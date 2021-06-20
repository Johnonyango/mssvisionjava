Ext.define('MssPhoenix.view.phone.admin.Configs.Configs', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',
   
    xtype: 'phoneconfigs',

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
                        type: 'configsvmodel'
                    },


                    items: [

                        {
                            xtype: 'container',
                            cls: 'module-body',
                            items: [
                                {
                                    xtype: 'phoneconfigsgrid',
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