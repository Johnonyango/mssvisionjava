Ext.define('MssPhoenix.view.phone.admin.ManageAdmin.Admins', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',
    //alias: 'widget.admin',
    //maxHeight:500,
    //
    //
    xtype: 'phoneadmins',

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
                                    xtype: 'phoneadminsgrid',
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