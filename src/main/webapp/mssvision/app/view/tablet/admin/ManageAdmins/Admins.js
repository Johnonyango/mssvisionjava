Ext.define('MssPhoenix.view.tablet.admin.ManageAdmin.Admins', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',
    //alias: 'widget.admin',
    //maxHeight:500,
    //
    //
    xtype: 'admins',

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
                        type: 'adminsvmodel'
                    },


                    items: [

                        {
                            xtype: 'container',
                            cls: 'module-body',
                            items: [
                                {
                                    xtype: 'adminsgrid',
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