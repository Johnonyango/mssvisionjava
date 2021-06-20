Ext.define('MssPhoenix.view.tablet.admin.documents.AdminUploadedDocuments', {
    extend: 'Ext.Container',

    xtype: 'adminuploadeddocuments',
    controller: 'adminuploadeddocumentscontroller',
    viewModel: {
        data: {
            userId: null
        }
    },
    defaults: {
        height: 500,
    },
    padding: 15,
    items: [
        {
            xtype: 'module',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [
                {
                    margin: '0 10 0 0',
                    flex: 1,
                    xtype: 'module',
                    reference: 'form',
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
                            padding: 15,
                            items: [
                                {
                                    xtype: 'selectbox',
                                    store: {
                                        type: 'permissions'
                                    },
                                    label: 'Sent To',
                                    displayField: 'name',
                                    name: 'forProfileId',
                                    valueField: 'id',
                                    flex: 1,
                                    minWidth: 20,
                                },
                                {
                                    xtype: 'mitextarea',
                                    name: 'comments',
                                    label: 'Description',
                                    inputType: 'text'
                                },
                                {
                                    xtype: 'mitextfield',
                                    name: 'userId',
                                    hidden: true,
                                    bind: {
                                        value: '{userId}'
                                    }
                                },
                                {
                                    xtype: 'filefield',
                                    name: 'file',
                                    placeholder: 'Select file',
                                    tooltip: 'Select file',
                                    flex: 1,
                                    required: true,
                                    minWidth: 200
                                },
                            ],
                            bbar: [
                                '->',
                                {
                                    margin: '0 0 0 10',
                                    xtype: 'button',
                                    scale: 'small',
                                    text: 'Upload',
                                    formBind: true,
                                    ui: 'action',
                                    minWidth: 100,
                                    id: 'uploadAdminDocs',
                                    handler: 'adminuploadeddocsformSubmit'

                                },
                            ]
                        },
                    ]
                },
                {
                    xtype: 'container',
                    cls: 'module-body',
                    minHeight: 300,
                    flex: 2,
                    scrollable: true,
                    items: [
                        {
                            xtype: 'toolbar',
                            items: [
                                {
                                    xtype: 'component',
                                    html: '<h3>Recent outbox</h3>'
                                },
                                '->',
                                {
                                    margin: '0 0 0 10',
                                    iconCls: 'fa fa-redo',
                                    xtype: 'button',
                                    scale: 'small',
                                    text: 'Reload',
                                    id: 'reloadAdminDocs',
                                    handler: 'reloadUploadedDocs',
                                    ui: 'action'
                                },
                            ]
                        },
                        {
                            xtype: 'adminuploadeddocsgrid',
                        },
                    ]
                }
            ]
        }
    ]
});