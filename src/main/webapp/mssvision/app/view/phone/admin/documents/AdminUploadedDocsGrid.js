Ext.define('MssPhoenix.view.phone.admin.documents.AdminUploadedDocsGrid', {
    extend: 'MssPhoenix.view.widgets.Table',

    xtype : 'phoneadminuploadeddocsgrid',

    store: {
        type: 'adminuploadeddocs'
    },

    minHeight: 200,

    columns: [
        {
        text: 'Sent To',
        dataIndex: 'profileName',
        flex: 2,
        hidden:true,

        },
        // {
        // text: 'File Priority',
        // dataIndex: 'filePriority',
        // flex: 2
        // },
        {
        text: 'Description',
        dataIndex: 'comments',
        flex: 2
        },        
        {
        text: 'Document Name',
        dataIndex: 'originalFileName',
        flex: 2
        },
        {
            text: 'Date Uploaded',
            dataIndex: 'shortDate',
            flex: 1,
            hidden:true,
        },
        {
            text: ':::',
            flex: 1,
            dataIndex: 'id',
            hidden:true,
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