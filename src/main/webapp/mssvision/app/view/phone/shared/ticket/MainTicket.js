Ext.define('MssPhoenix.view.phone.shared.ticket.MainTicket', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',
    items: [{
        xtype: 'module',
        scrollable: true,
        padding:15,
        items: [
            {
                xtype: 'tabpanel',
                minHeight: 500,
                items: [
                    {
                        title:'my Tickets',
                        items: [{
                            xtype: 'userticket',
                        }]
                    },
                    {
                        title: "Support Ticket",
                        items: [{
                            xtype: 'phonesupportticket',
                        }]
                    }
                ]
            }
        ]
    }]
});