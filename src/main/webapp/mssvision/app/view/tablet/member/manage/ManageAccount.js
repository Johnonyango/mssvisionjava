Ext.define('MssPhoenix.view.tablet.member.manage.ManageAccount', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',

    controller: 'membermanageaccountcontroller',
    viewModel: 'membermanageaccountviewmodel',
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
                height: 456,
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
                                bind: {
                                    html: '{userInfo}'
                                }
                            },
                            {
                                xtype: 'button',
                                text: 'View Membership Certificate',
                                ui: 'action',
                                handler: 'viewMemberCertificate'
                            }
                        ]
                    }

                ]
            },

            {
                height: 456,
                margin: '0 30 0 20',
                flex: 1,
                xtype: 'container',
                items: [
                    {
                        xtype: 'changepwd',
                    },
                    {
                        bind: {
                            style: {
                                display: '{hidePreserveAccount}'
                            }
                        },
                        xtype: 'fieldset',
                        title: 'Preserve your account',
                        items: [
                            {
                                margin: '20 0 0 0',
                                xtype: 'button',
                                width: '100%',
                                text: 'Preserve Account',
                                handler: 'onPreserveAccountClick'
                            }
                        ]
                    },
                ]
            }
        ]
    }]
});