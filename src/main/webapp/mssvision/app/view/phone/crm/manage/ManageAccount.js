Ext.define('MssPhoenix.view.phone.crm.manage.ManageAccount', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',

    controller: 'crmmanageaccountcontroller',
    viewModel: 'crmmanageaccountviewmodel',

    scrollable: true,
    height:700,
    items: [{
        xtype: 'container',
        padding: 15,
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        minHeight:500,
        scrollable:true,
        items: [

            {
                xtype: 'container',
                cls: 'module-head',
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
                    height: 120,
                    width: 120,
                    style: {
                        'border-radius': '50%'
                    }
                },
                    {
                        maxWidth: "100%",
                        xtype: 'container',
                        layout: {
                            type: 'vbox'
                        },
                        alignSelf: 'center',
                        padding: 20,
                        flex: 1,
                        margin: '0 0 0 0',
                        items: [{
                            xtype: 'component',
                            bind: {
                                html: '{userInfo}'
                            }
                        }
                        ]
                    }

                ]
            },
            {
                xtype: 'button',
                width: '99%',
                text: 'Change Password',
                margin: '5 0 20 0',
                handler: 'showChangePwdWin'
            },
        ]
    }]
});