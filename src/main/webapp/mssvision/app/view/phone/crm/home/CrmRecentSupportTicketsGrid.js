Ext.define('MssPhoenix.view.phone.crm.home.CrmRecentSupportTicketsGrid', {
    extend: 'MssPhoenix.view.widgets.Table',

    xtype: 'crmphonerecentsupportticketsgrid',
    id: 'crmrecentsupportticketsgrid',

    store: {
        type: 'crmrecentsupportticket'
    },
    controller: 'supportticketgridcontroller',
    minHeight: 200,
    columns: [
        { text: 'Ticket Id', dataIndex: 'id', flex: 1 },
        { text: 'Subject', dataIndex: 'subject', flex: 2, hidden: true },
        { text: 'Body', dataIndex: 'body', flex: 3, hidden: true },
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
            flex: 1,
            hidden: true
        },
        {
            text: 'Feedback',
            dataIndex: 'newSupportRepliesCount',
            renderer: 'formatTicketReplies',
            cell: {
                encodeHtml: false
            },
            flex: 2,
        },

    ]
});