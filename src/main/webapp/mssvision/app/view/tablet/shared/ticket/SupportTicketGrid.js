Ext.define('MssPhoenix.view.tablet.shared.ticket.SupportTicketGrid', {
    extend: 'MssPhoenix.view.widgets.Table',
    xtype: 'supportticketgrid',

    controller: 'supportticketgridcontroller',
    store: {
        type: 'supportticket'
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
            items: [
                {
                xtype: 'button',
                text: 'View Ticket',
                name: 'viewTicket',
                handler: 'onViewTicketButtonClick',                
				iconCls: 'x-fa fa-eye', 
                },
                {
                    xtype: 'searchfield',
                    name: 'ticketIdSearch',
                    reference: 'searchId',
                    placeholder: 'ticket id to search',
                    width: 200,
                    listeners: {
                        specialkey: 'onIdSearchEnterKey'
                    }
    
                },    
                '->',
                {
                    iconCls:'fa fa-share',
                    name: 'forwardTicket',
                    text: 'Forward Ticket',
                    handler: 'onForwardTicketButtonClick',
                    ui: 'action'
                }, 
                {
                    iconCls:'fa fa-redo',
                    name: 'reloadSupportTicketGrid',
                    handler: 'reloadSupportTicketGrid',
                    ui: 'action'
                },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                

            ]
        },
    ],
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
        { 
            text: 'Feedback',  
            dataIndex: 'newOwnerRepliesCount', 
            renderer: 'formatTicketReplies', 
            cell: {
                encodeHtml: false
            },
            flex: 2 
        },
        
    ]


});
