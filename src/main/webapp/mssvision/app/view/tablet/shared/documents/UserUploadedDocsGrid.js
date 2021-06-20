Ext.define('MssPhoenix.view.tablet.shared.documents.UserUploadedDocsGrid', {
    extend: 'MssPhoenix.view.widgets.Table',

    xtype: 'useruploadeddocsgrid',

    store: {
        type: 'useruploadeddocs'
    },

    minHeight: 200,

    columns: [
        {
            text: 'Document Name',
            dataIndex: 'originalFileName',
            flex: 2
        },
        {
            text: 'Date Uploaded',
            dataIndex: 'shortDate',
            flex: 1
        },
        {
            text: ':::',
            flex: 1,
            dataIndex: 'id',
            renderer: function (v) {
                return `<a target="_blank" href="${MssPhoenix.model.Session.fileUploadPath}/FileHandler?file=${v}">View</a>`;
            },
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

});