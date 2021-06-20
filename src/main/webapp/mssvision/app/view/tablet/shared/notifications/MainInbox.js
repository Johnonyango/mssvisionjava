Ext.define('MssPhoenix.view.tablet.shared.notifications.MainInbox', {
    extend: 'Ext.Container',

    // xtype: 'maininbox',
    controller: 'notificationscontroller',
    viewModel: {
        data: {
            allowCompose: 'block',
            showOutbox: 'block'
        }
    },
    layout: {
        type: 'fit'
    },
    items: [
        {
            xtype: 'container',
            padding: 15,
            items: [
                {
                    xtype: 'toolbar',
                    items: [
                        '->',
                        {
                            text: 'Reload',
                            iconCls: 'fa fa-redo',
                            handler: 'onReloadClick'
                        },
                        {
                            bind: {
                                style: {
                                    'display': '{allowCompose}'
                                }
                            },
                            text: 'compose',
                            iconCls: 'fa fa-plus',
                            handler: 'onComposeClick'
                        }
                    ]
                },
                {
                    xtype: 'tabpanel',
                    minHeight: 400,
                    items: [
                        {
                            title: 'Inbox',
                            iconCls: 'fa fa-inbox-in',
                            items: [
                                {
                                    xtype: 'inbox'
                                }
                            ]
                        },
                        {
                            bind: {
                                style: {
                                    'display': '{showOutbox}'
                                }
                            },
                            title: 'Outbox',
                            iconCls: 'fa fa-inbox-out',
                            items: [
                                {
                                    xtype: 'outbox'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
});