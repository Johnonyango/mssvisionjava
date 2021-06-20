Ext.define('MssPhoenix.view.tablet.shared.ticket.ForwardTicket', {
    extend: 'MssPhoenix.view.widgets.Window',
    xtype: 'forwardTicket',
    maxWidth: 900,
    scrollable: true,
    maxHeight: 650,
    controller: 'forwardticketcontroller',

    padding: 15,
    items: [
        {
            xtype: 'toolbar',
            cls: 'module-head',
            items: [
                {
                    xtype: 'component',
                    bind: {
                        html: '<h3>Forward Ticket</h3>'
                    }
                }

            ]
        },
        {
            xtype: 'container',
            cls: 'module-body',
            items: [
                {
                    xtype: 'formpanel',
                    margin: '10 10 0 10',
                    layout: 'hbox',
                    reference: 'form',
                    jsonSubmit: true,
                    items: [
                        {
                            xtype: 'mitextfield',
                            label: 'creator',
                            name: 'userId',
                            bind: {
                                value: '{user.more.id}'
                            },
                            hidden: true,
                        },
                        {
                            xtype: 'mitextfield',
                            label: 'ticketId',
                            name: 'ticketId',
                            bind: {
                                value: '{id}'
                            },
                            hidden: true,
                        },
                        {
                            xtype: 'selectbox',
                            label: 'Target Profile',
                            name: 'profileId',
                            store: {
                                type: 'profile'
                            },
                            displayField: 'name',
                            valueField: 'id',
                        }
                    ]
                }
            ]
        }
    ],
    bbar: [
        {
            text: 'submit',
            ui: 'action',
            name: 'forwardTicketSave',
            // scale: 'small',
            handler: 'onSubmitBtnClick',
            iconCls: 'fa fa-save',

        },
        '->',
        {
            text: 'cancel',
            ui: 'action',
            name: 'cancelTicketSave',
            // scale: 'small',
            handler: 'onCancelBtnClick',
            iconCls: 'fa fa-ban',

        }
    ],
});