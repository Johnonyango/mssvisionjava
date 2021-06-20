Ext.define('MssPhoenix.view.phone.shared.ticket.SupportTicketGrid', {
    extend: 'MssPhoenix.view.widgets.Table',
    xtype: 'phonesupportticketgrid',

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
            layout: 'vbox',
            docked: 'top',
            defaults: {
                ui: 'action',
            },
            items: [
                {
                    xtype: 'container',
                    layout: 'hbox',
                    items:[
                        {
                            xtype: 'searchfield',
                            reference: 'searchId',
                            placeholder: 'ticket id to search',
                            width: 200,
                            listeners: {
                                specialkey: 'onIdSearchEnterKey'
                            }
            
                        },
                        {
                            xtype: 'button',
                            iconCls:'fa fa-redo',
                            handler: 'reloadSupportTicketGrid',
                            ui: 'action'
                        },
                    ]
                },
                {
                xtype: 'button',
                text: 'View Ticket',
                handler: 'onViewTicketButtonClick',                
				iconCls: 'x-fa fa-eye', 
                },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                

            ]
        },
    ],
    columns: [
        { text: 'Ticket Id', dataIndex: 'id', flex: 1 },
        { text: 'Subject', dataIndex: 'subject', flex: 2 ,hidden: true},
        { text: 'Body', dataIndex: 'body', flex: 3 ,hidden: true},
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

    ],
    loadMask: true


});
