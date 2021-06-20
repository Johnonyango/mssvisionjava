Ext.define('MssPhoenix.view.tablet.shared.ticket.UserTicketGrid', {
    extend: 'MssPhoenix.view.widgets.Table',
    xtype: 'userticketgrid',

    controller: 'userticketgridcontroller',
    store: {
        type: 'userticket'
    },

    height: 456,
    layout: 'fit',

    selectable: {
        columns: true,
        cells: true,
        checkbox: true,
        drag: true,
        mode: 'single',
        extensible: 'y'
    },

    items: [
        {
            xtype: 'toolbar',
            docked: 'top',
            defaults: {
                ui: 'action',
            },
            items: [{
                xtype: 'button',
                text: 'View Ticket',
                name:'viewuserTicket',
                handler: 'onViewTicketButtonClick'
            },
            {
                xtype: 'searchfield',
                reference: 'searchId',
                name:'searchUserTicketId',
                placeholder: 'ticket id to search',
                width: 200,
                listeners: {
                    specialkey: 'onIdSearchEnterKey'
                }

            },

                '->',
            {
                iconCls: 'fa fa-redo',
                name:'reloadUserTicketGrid',
                handler: 'reloadUserTicketGrid',
                ui: 'action'
            },
            {
                xtype: 'button',
                name: 'addTicket',
                text: 'Add Ticket',
                handler: 'onAddTicketButtonClick',
                iconCls: 'x-fa fa-plus',

            }

            ]
        },
    ],
    columns: [
        { text: 'Ticket Id', dataIndex: 'id', flex: 1 },
        { text: 'Subject', dataIndex: 'subject', flex: 2 },
        { text: 'Body', dataIndex: 'body', flex: 3 },
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
        {
            text: 'Feedback', 
            dataIndex: 'newSupportRepliesCount',
            renderer: 'formatTicketReplies',
            cell: {
                encodeHtml: false
            },
            flex: 2
        },

    ],
    loadMask: true


});
