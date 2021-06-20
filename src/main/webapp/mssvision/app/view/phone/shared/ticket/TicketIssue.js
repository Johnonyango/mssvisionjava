Ext.define('MssPhoenix.view.phone.shared.ticket.TicketIssue', {
    extend: 'MssPhoenix.view.widgets.Module',
    height: 456,
    xtype: 'phoneticketissue',

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
                    xtype: 'phoneticketissuegrid',
                    margin: '10 0 0 0'
                }
            ]
        },
    ]
});
