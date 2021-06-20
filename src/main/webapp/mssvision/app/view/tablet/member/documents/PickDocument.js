Ext.define('MssPhoenix.view.tablet.member.documents.PickDocument', {
    extend: 'MssPhoenix.view.widgets.Window',
    
    xtype : 'memberpickdocument',

    controller: 'memberdocumentscontroller',

    title:'Select File',
    width: 600,
    minHeight: 200,
    height:480,
    closable: false,

    items: [
        {
            xtype:'useruploadeddocsgrid',
            itemId:'memberpickdocumentgrid',
            listeners:{
                click: {
                    element: 'element',
                    fn: 'pickDocumentGridSelected'
                },
            }
        }
    ],
    bbar: [
        '->',
        {
            text: 'Close',
            handler: 'closePickDocWin',
            ui: 'action'
        }
    ]
});