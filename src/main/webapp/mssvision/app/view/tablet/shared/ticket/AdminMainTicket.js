Ext.define('MssPhoenix.view.tablet.shared.ticket.AdminMainTicket', {
    extend: 'Ext.tab.Panel',
    xtype: 'adminmainticket',
    controller: 'mainticketcontroller',

    width: 500,
    height: 1700,
    defaults: {
        bodyPadding: 10,
    },
    tabBar: {
        layout: {
            pack: 'left'
        }
    },
    items: [
        {
            title: 'My Tickets',
            xtype: 'userticket',
            name: 'userticket',
        },
        {
            title: 'Support Tickets',
            xtype: 'supportticket',
            name: 'supportticket',
        },
        {
            title: 'Ticket Issues management',
            xtype: 'ticketissue',
            name: 'ticketissue',
        },
    ]
});