Ext.define('MssPhoenix.view.phone.admin.faq.FaqGrid', {
    extend: 'MssPhoenix.view.widgets.Table',
    xtype: 'phonefaqgrid',
    store: {
        type: 'faq'
    },
    minHeight: 200,
    scrollable: 'x',

    columns: [
        {
            text: 'ID',
            dataIndex: 'id',
            hidden:true,
        },
        {
            text: 'TITLE',
            dataIndex: 'title',
            flex: 2,
        },
        {
            text: 'SUBTITLE',
            dataIndex: 'subtitle',
            flex: 1,
        },
        {
            text: 'PROFILE',
            dataIndex: 'profileName',
            flex: 1,
        },
        {
            text: 'CREATED AT',
            dataIndex: 'shortDate',
            flex: 1,
            
        },
    ],

    listeners: {
        click: {
            element: 'element',
            fn: 'editFaq'
        }
    },

    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        displayMsg: 'Display records {0} - {1} of {2}',
        emptyMsg: 'No Record to display'
    },
});