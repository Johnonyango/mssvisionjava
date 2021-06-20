Ext.define('MssPhoenix.view.tablet.shared.ticket.SupportTicket', {
    extend: 'MssPhoenix.view.widgets.Module',
    height: 456,
    xtype: 'supportticket',

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
                    xtype: 'supportticketgrid',
                    margin: '10 0 0 0'
                }
            ]
        },
    ]
});
