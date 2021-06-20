Ext.define('MssPhoenix.view.phone.shared.ticket.UserTicket', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',
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
                    xtype: 'phoneuserticketgrid',
                    margin: '10 0 0 0'
                }
            ]
        },
    ]
});
