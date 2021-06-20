Ext.define('MssPhoenix.view.tablet.admin.LandingPageContent.SentDocumentsGrid', {
    extend: 'MssPhoenix.view.widgets.Table',
    xtype: 'sentdocumentsgrid',
   // title: 'Users',

    store: {
        type: 'adminsentdocumentsstore'
    },
    layout: 'fit',
    
    selectable: {
        // Disables sorting by header click, though it will be still available via menu
        columns: true,
        cells: true,
        checkbox: true,
        drag: true,
        extensible: 'y'
    
    },

    columns: [
        { text: 'Viewed By', dataIndex: 'viewedBy' ,flex:1 },
        { text: 'Sent To', dataIndex: 'sentTo',flex:2 },
        { text: 'File Priority', dataIndex: 'filePriority',flex:1 },
        { text: 'Description', dataIndex: 'descriptions',flex:2 },
    ],

    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        displayMsg: 'Display records {0}  of {2}',
        emptyMsg: 'No Record to display'
    },
});