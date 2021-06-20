Ext.define('MssPhoenix.view.phone.admin.LandingPageContent.edits.PensionerImage.PensionerImageGrid', {
    extend: 'MssPhoenix.view.widgets.Table',

    xtype: 'phonepensionerimagegrid',

    store: {
        type: 'pensionerimagestore'
    },

    minHeight: 200,

    selectable: {
        // Disables sorting by header click, though it will be still available via menu
        columns: true,
        cells: true,
        checkbox: true,
        drag: true,
        mode: 'single',
        extensible: 'y'
    },


    columns: [
        {
            text: 'Image Name',
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