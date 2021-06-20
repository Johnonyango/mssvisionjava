Ext.define('MssPhoenix.view.tablet.shared.notifications.SendBroadCast', {
    extend: 'MssPhoenix.view.widgets.Window',

    // Uncomment to give this component an xtype
    closable: true,
    title: 'Broadcast Message',
    xtype: 'sendbroadcast',
    width: 600,
    minHeight: 480,
    maxHeight: "80%",
    controller: 'notificationscontroller',
    viewModel: {
        data: {
            labelText: '',
            profile: ''
        },
    },
    items: [
        {
            xtype: 'module',
            reference: 'form',
            items: [
                {
                    xtype: 'formpanel',
                    reference: 'sendbroadcastform',
                    itemId: 'sendbroadcastform',
                    layout: {
                        type: 'vbox',
                        align: 'stretch',
                    },
                    padding: 15,
                    items: [
                        {
                            xtype: 'mitextfield',
                            name: 'subject',
                            label: 'Subject',
                            required: true
                        },
                        {
                            xtype: 'mitextfield',
                            name: 'profile',
                            itemId: 'profile',
                            hidden: true,
                            bind: {
                                value: '{profile}'
                            }
                        },
                        {
                            xtype: 'selectbox',
                            label: 'Profile',
                            store: {
                                type: 'profile'
                            },
                            displayField: 'name',
                            valueField: 'loginIdentifierName',
                            editable: false,
                            required: true,
                            listeners: {
                                select: 'sendBroadCastOnProfileChange'
                            }
                        },
                        {
                            xtype: 'label',
                            itemId: 'labelText',
                            bind: {
                                html: '{labelText}',
                            }
                        },
                        {
                            xtype: 'mitextfield',
                            name: 'users',
                        },
                        {
                            xtype: 'mitextarea',
                            name: 'message',
                            label: 'Message',
                            rows:8,
                            required: true
                        },
                        {
                            xtype: 'mifilefield',
                            name: 'file',
                            label: 'Attach file(s)',
                            placeholder: 'Select file',
                            tooltip: 'Select file',
                        },
                    ],
                },
            ]
        },
    ],
    bbar: [
        '->',
        {
            xtype: 'button',
            scale: 'small',
            text: 'Send Broadcast',
            formBind: true,
            minWidth: 100,
            iconCls: 'fa fa-send',
            iconAlign: 'right',
            ui: 'action',
            handler: 'onSendBroadcastClick'
        },
    ]
});