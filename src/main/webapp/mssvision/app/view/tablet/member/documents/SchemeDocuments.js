Ext.define('MssPhoenix.view.tablet.member.documents.SchemeDocuments', {
    extend: 'Ext.Container',

    xtype: 'memberschemedocuments',

    cls: 'module-body',
    height: 400,
    scrollable: true,

    items: [
        {
            xtype: 'table',
            store: {
                type: 'schemedocuments'
            },

            minHeight: 200,

            columns: [{
                    text: 'Document Name',
                    dataIndex: 'originalFileName',
                    flex: 3
                },
                {
                    text: 'From',
                    dataIndex: 'fromUserFullName',
                    flex: 1
                },
                {
                    text: 'Date',
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
        }
    ]
});