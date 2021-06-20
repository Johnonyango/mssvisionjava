Ext.define('MssPhoenix.view.tablet.admin.MobileMoneyConfig.MobileMoneyConfigs', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',
   
    xtype: 'mobilemoneyconfigs',

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
                        type: 'mobilemoneyconfigsvmodel'
                    },


                    items: [

                        {
                            xtype: 'container',
                            cls: 'module-body',
                            items: [
                                {
                                    xtype: 'mobilemoneyconfigsgrid',
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