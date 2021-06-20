Ext.define('MssPhoenix.view.tablet.shared.notifications.Inbox', {
    extend: 'Ext.Container',
    xtype: 'inbox',
    padding: 15,
    items: [
        {
            xtype: 'table',
            itemId:'inboxtb',
            selectable: {
                columns: true,
                checkbox: true,
                extensible: 'y',
                mode: 'single'
            },

            store: {
                type: 'broadcastmessagesinbox'
            },

            minHeight: 200,
            scrollable: 'x',

            columns: [
                {
                    text: 'FROM',
                    dataIndex: 'fromName',
                    flex: 1,
                },
                {
                    text: 'SUBJECT',
                    dataIndex: 'subject',
                    flex: 2,
                },
                {
                    text: 'DATE',
                    dataIndex: 'shortCreatedAt',
                    flex: 1,
                },
                {
                    text: 'STATUS',
                    dataIndex: 'read',
                    flex: 1,
                    align: 'center',
                    renderer: 'formMessageReadStatus',
                    cell: {
                        encodeHtml: false
                    },
                },
            ],

            bbar: {
                xtype: 'pagingtoolbar',
                displayInfo: true,
                displayMsg: 'Display records {0} - {1} of {2}',
                emptyMsg: 'No Record to display'
            },
        }
    ],
    listeners: {
        click: {
            fn: 'onInboxGridSelected',
            element: 'element'
        }
    }
});