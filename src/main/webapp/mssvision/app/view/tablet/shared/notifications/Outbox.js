Ext.define('MssPhoenix.view.tablet.shared.notifications.Outbox', {
    extend: 'Ext.Container',

    xtype : 'outbox',

    padding:15,
    items: [
        {
            xtype:'table',
            itemId:'outboxtb',
            store: {
                type: 'broadcastmessagesoutbox'
            },


            selectable: {
                columns: true,
                checkbox: true,
                extensible: 'y',
                mode: 'single'
            },

            minHeight: 200,
            scrollable: 'x',

            columns: [
                {
                    text: 'SUBJECT',
                    dataIndex: 'subject',
                    flex: 2,
                },
                {
                    text: 'SENT TO',
                    dataIndex: 'toProfileName',
                    flex: 2,
                },
                {
                    text: 'RECEIVERS',
                    dataIndex: 'receiversOutbox',
                    flex: 2,
                },
                {
                    text: 'DATE',
                    dataIndex: 'shortCreatedAt',
                    flex: 1,
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
            fn: 'onOutboxGridSelected',
            element: 'element'
        }
    }
});