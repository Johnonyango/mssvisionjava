Ext.define('MssPhoenix.view.tablet.shared.documents.UserUploadedDocuments', {
    extend: 'Ext.Container',
    
    xtype : 'useruploadeddocuments',
    controller:'useruploadeddocumentscontroller',
    viewModel:{
        data:{
            userId:null
        }
    },
    items: [
        {
            xtype: 'toolbar',
            items: [  
                {
                   xtype:'component',
                   html:`<h3>Upload Files</h3>`
                },
                '->',
                {
                    xtype: 'formpanel',
                    reference: 'useruploadeddocsform',
                    itemId: 'useruploadeddocsform',
                    layout: {
                        type: 'hbox',
                        align: 'stretch',
                    },
                    items: [
                        {
                            xtype: 'mitextfield',
                            name:'userId',
                            hidden:true,
                            bind:{
                                value:'{userId}'
                            }
                        },
                        {
                            xtype: 'filefield',
                            name: 'file',
                            placeholder: 'Select file',
                            tooltip: 'Select file',
                            flex: 1,
                            required:true,
                            minWidth: 200
                        },
                        {
                            margin: '0 0 0 10',
                            xtype: 'button',
                            scale: 'small',
                            text: 'Upload',
                            ui: 'action',
                            handler: 'useruploadeddocsformSubmit'
                        }
                    ]
                },
                {
                    margin:'0 0 0 10',
                    iconCls:'fa fa-redo',
                    scale: 'small',
                    handler: 'reloadUploadedDocs',
                    ui: 'action'
                }
            ]
        },
        {
            xtype: 'container',
            cls: 'module-body',
            height: 300,
            scrollable: true,

            items: [{
                xtype: 'useruploadeddocsgrid',
            },]
        }
    ]
});