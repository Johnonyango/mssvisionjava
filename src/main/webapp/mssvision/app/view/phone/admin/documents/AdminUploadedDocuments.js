Ext.define('MssPhoenix.view.phone.admin.documents.AdminUploadedDocuments', {
    extend: 'Ext.Container',
    
    xtype : 'phoneadminuploadeddocuments',
    controller:'adminuploadeddocumentscontroller',
    viewModel:{
        data:{
            userId:null
        }
    },
    items: [
        {
            height: 500,
            width:350,
            margin: '0 0 0 0',
            flex: 1,
            xtype: 'module',
            reference: 'form',
            // xtype: 'toolbar',
            items: [
                {
                    cls: 'module-head',
                    xtype: 'component',
                    html: `<h3>Upload your files here</h3>`,
                },
               
                
                {
                    xtype: 'formpanel',
                    reference: 'adminuploadeddocsform',
                    itemId: 'adminuploadeddocsform',
                    layout: {
                        type: 'vbox',
                        align: 'stretch',
                    },
                    items: [
                        {
                            xtype: 'selectbox',
                            store: {
                                type: 'permissions'
                            },
                            label:'Sent To',
                            displayField: 'name',
                            name:'forProfileId',
                            valueField: 'id',
                            flex: 1,
                            minWidth: 20,
                        },
                        // {width:50},
                        {
                            xtype: 'textareafield',
                            labelAlign: 'left',
                            msgTarget: 'side',
                            name: 'comments',
                            label: 'Description',
                            // maxRows: 10,
                            inputType: 'text'
                        },
                        {width:50},
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
                        {items:[{
                            margin: '0 0 0 10',
                            xtype: 'button',
                            width:250,
                            scale: 'small',
                            text: 'Upload',
                            formBind: true,
                            ui: 'action',
                            handler: 'adminuploadeddocsformSubmit'

                        },
                        {height:10},
                             {
                            margin:'0 0 0 10',
                            iconCls:'fa fa-redo',
                            xtype: 'button',
                            width:250,
                            scale: 'small',
                            text: 'Reload',
                            handler: 'reloadUploadedDocs',
                            ui: 'action'
                        },]}
                        
                    ]
                },

                {
                    margin:'0 0 0 10',
                    iconCls:'fa fa-redo',
                    handler: 'reloadUploadedDocs',
                    ui: 'action'
                },
            ]
        },
        {
            xtype: 'container',
            cls: 'module-body',
            height: 300,
            scrollable: true,

            items: [{
                xtype: 'phoneadminuploadeddocsgrid',
            },]
        }
    ]
});