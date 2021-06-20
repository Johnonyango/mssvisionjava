Ext.define('MssPhoenix.view.tablet.crm.home.CrmRecentSupportTicketsGrid', {
    extend: 'MssPhoenix.view.widgets.Table',

    xtype: 'crmrecentsupportticketsgrid',
    id: 'crmrecentsupportticketsgrid',

    store: {
        type: 'crmrecentsupportticket'
    },
    controller: 'supportticketgridcontroller',
    minHeight: 200,
    columns: [
        { text: 'Ticket Id', dataIndex: 'id', flex: 1 },
        { text: 'Subject', dataIndex: 'subject', flex: 2 },
        { text: 'Body', dataIndex: 'body', flex: 3 },
        { text: 'Created by', dataIndex: 'ownerName', flex: 1 },
        { 
            text: 'Status', 
            dataIndex: 'status', 
            renderer: 'formatTicketStatus', 
            cell: {
                encodeHtml: false
            },
            flex: 1 
        },
        { 
            text: 'Priority', 
            dataIndex: 'priority', 
            renderer: 'formatTicketPriority', 
            cell: {
                encodeHtml: false
            },
            flex: 1 
        },
        
    ]
});