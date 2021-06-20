Ext.define('MssPhoenix.view.phone.shared.ticket.AdminMainTicket', {
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
                        title:'My tickets',
                        items: [{
                            xtype: 'userticket',
                        }]
                    },
                    {
                        title: "support ticket",
                        items: [{
                            xtype: 'phonesupportticket',
                        }]
                    },
                    {
                        title: "ticket Issues",
                        items: [{
                            xtype: 'phoneticketissue',
                        }]
                    }
                ]
            }
        ]
    }]
});