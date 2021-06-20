Ext.define('MssPhoenix.view.tablet.shared.ticket.MainTicket', {
    extend: 'Ext.tab.Panel',
    xtype: 'mainticket',
    controller: 'mainticketcontroller',

    width: 500,
    height: 1700,
    defaults: {
        bodyPadding: 10,
        // scrollable: true
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
    
]



});