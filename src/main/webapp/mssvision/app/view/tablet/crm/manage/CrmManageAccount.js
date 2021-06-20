Ext.define('MssPhoenix.view.tablet.crm.manage.CrmManageAccount', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',
    controller: 'crmmanageaccountcontroller',
    xtype: 'crmmanageaccount',
    viewModel:'crmmanageaccountviewmodel',
    items: [{
        xtype: 'container',
        scrollable: true,
        padding: 15,
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
        items: [

            {
                xtype: 'container',
                cls: 'module-head',
                height: 400,
                flex: 1,
                layout: {
                    type: 'vbox',
                    align: 'center',
                },
                items: [{
                        xtype: 'image',
                        cls: 'roundedCorner',
                        alt: 'Current user image',
                        src: '<shared>/images/avatar.jpg',
                        height: 189,
                        width: 189,
                        style: {
                            'border-radius': '50%'
                        }
                    },
                    {
                        maxWidth: 356,
                        xtype: 'container',
                        layout: {
                            type: 'vbox'
                        },
                        alignSelf: 'center',
                        padding: 20,
                        flex: 1,
                        margin: '10 0 0 0',
                        items: [
                            {
                                xtype: 'component',
                                bind:{
                                    html: '{userInfo}'
                                }
                            }
                        ]
                    }

                ]
            },

            {
                height: 320,
                margin: '0 30 0 20',
                flex: 1,
                xtype: 'changepwd',
            }

        ]
    }]
});