Ext.define('MssPhoenix.view.tablet.shared.notifications.DetailsInbox', {
    extend: 'MssPhoenix.view.widgets.Window',

    xtype : 'detailsinbox',
    closable: true,
    title: 'Message Details',
    width: 600,
    height: 480,
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
                    reference: 'detailsform',
                    itemId: 'detailsform',
                    layout: {
                        type: 'vbox',
                        align: 'stretch',
                    },
                    padding: 15,
                    items: [
                        {
                            xtype: 'mitextfield',
                            name: 'to',
                            label: 'To',
                            readOnly:true,
                        },
                        {
                            xtype: 'mitextfield',
                            name: 'shortDate',
                            label: 'Date',
                            readOnly:true,
                        },
                        {
                            xtype: 'mitextfield',
                            name: 'subject',
                            label: 'Subject',
                            readOnly:true
                        },
                        // {
                        //     xtype: 'mitextfield',
                        //     name: 'profile',
                        //     itemId:'profile',
                        //     readOnly:true,
                        //     bind: {
                        //         value: '{profile}'
                        //     }
                        // },
                        {
                            xtype: 'mitextarea',
                            name: 'message',
                            label: 'Message',
                            inputType: 'text',
                            readOnly:true,
                        },
                        {
                            xtype: 'button',
                            name: 'file',
                            text: 'Download File(s)',
                            handler:'downloadInboxFiles',
                            tooltip: 'Click to download',
                        },
                    ],
                },
            ]
        },
    ],
});