Ext.define('MssPhoenix.view.phone.admin.MobileMoneyConfig.MobileMoneyConfigs', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',
   
    xtype: 'phonemobilemoneyconfigs',

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
                        type: 'phonemobilemoneyconfigsvmodel'
                    },


                    items: [

                        {
                            xtype: 'container',
                            cls: 'module-body',
                            items: [
                                {
                                    xtype: 'phonemobilemoneyconfigsgrid',
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