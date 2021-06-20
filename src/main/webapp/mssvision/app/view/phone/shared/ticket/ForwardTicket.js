Ext.define('MssPhoenix.view.phone.shared.ticket.ForwardTicket', {
    extend: 'MssPhoenix.view.widgets.Window',
    xtype: 'phoneforwardTicket',
    maxWidth: '90%',
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
                    layout: 'vbox',
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
            ui: 'action',
            // scale: 'small',
            handler: 'onSubmitBtnClick',
            iconCls: 'fa fa-save',

        },
        {
            ui: 'action',
            // scale: 'small',
            handler: 'onCancelBtnClick',
            iconCls: 'fa fa-ban',

        }
    ],
});