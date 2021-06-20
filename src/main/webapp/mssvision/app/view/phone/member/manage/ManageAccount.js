Ext.define('MssPhoenix.view.phone.member.manage.ManageAccount', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',

    controller: 'membermanageaccountcontroller',
    viewModel: 'membermanageaccountviewmodel',
    items: [{
        xtype: 'container',
        padding: 15,
        width: '100%',
        scrollable: true,
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        items: [
            {
                xtype: 'container',
                cls: 'module-head',
                flex: 1,
                layout: {
                    type: 'vbox',
                    align: 'center',
                },
                items: [
                    {
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
                        items: [
                            {
                                xtype: 'component',
                                bind: {
                                    html: '{userInfo}'
                                }
                            },
                            {
                                xtype: 'button',
                                text: 'View Membership Certificate',
                                ui: 'action',
                                handler: 'viewMemberCertificate'
                            },
                            {
                                xtype: 'button',
                                width: '99%',
                                text: 'Switch scheme',
                                ui: 'action',
                                margin: '20 0 5 0',
                                handler: 'memberSwitchSchemeFunc'
                            },
                            {
                                xtype: 'button',
                                width: '99%',
                                text: 'Switch Product',
                                ui: 'action',
                                margin: '20 0 5 0',
                                handler: 'switchproductswin'
                            },
                            {
                                xtype: 'button',
                                width: '99%',
                                text: 'Change Password',
                                margin: '5 0 20 0',
                                handler: 'showChangePwdWin'
                            },
                        ]
                    },

                ]
            },
        ]
    }]
});