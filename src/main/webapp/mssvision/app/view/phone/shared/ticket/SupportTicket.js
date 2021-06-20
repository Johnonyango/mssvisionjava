Ext.define('MssPhoenix.view.phone.shared.ticket.SupportTicket', {
    extend: 'MssPhoenix.view.widgets.Module',
    height: 456,
    xtype: 'phonesupportticket',

    layout: {
        type: 'vbox'
    },

    defaults: {
        width: '100%'
    },

    viewModel: {
        type: 'ticketsvmodel'
    },

    items: [
        {
            xtype: 'container',
            cls: 'module-body',
            items: [
                {
                    xtype: 'phonesupportticketgrid',
                    margin: '10 0 0 0'
                }
            ]
        },
    ]
});
