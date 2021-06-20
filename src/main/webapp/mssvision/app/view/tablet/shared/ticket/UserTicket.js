Ext.define('MssPhoenix.view.tablet.shared.ticket.UserTicket', {
    extend: 'MssPhoenix.view.widgets.Module',
    height: 456,
    xtype: 'userticket',

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
                    xtype: 'userticketgrid',
                    margin: '10 0 0 0'
                }
            ]
        },
    ]
});
