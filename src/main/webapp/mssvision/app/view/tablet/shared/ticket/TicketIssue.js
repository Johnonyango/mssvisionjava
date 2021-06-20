Ext.define('MssPhoenix.view.tablet.shared.ticket.TicketIssue', {
    extend: 'MssPhoenix.view.widgets.Module',
    height: 456,
    xtype: 'ticketissue',

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
                    xtype: 'ticketissuegrid',
                    margin: '10 0 0 0'
                }
            ]
        },
    ]
});
