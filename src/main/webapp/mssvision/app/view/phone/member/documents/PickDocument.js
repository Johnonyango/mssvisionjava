Ext.define('MssPhoenix.view.phone.member.documents.PickDocument', {
    extend: 'MssPhoenix.view.widgets.Window',
    
    xtype : 'memberphone-pickdocument',

    controller: 'memberdocumentscontroller',

    title:'Select File',
    width: "80%",
    minHeight: 200,
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