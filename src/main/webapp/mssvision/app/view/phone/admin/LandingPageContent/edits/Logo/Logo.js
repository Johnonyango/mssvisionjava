Ext.define('MssPhoenix.view.phone.admin.LandingPageContent.edits.Logo.Logo', {
    extend: 'MssPhoenix.view.widgets.Window',
    width: 150,
    height: 656,
    xtype: 'phoneedits-logo',
    controller: 'logocontroller',
    viewModel: {
        data: {
            userId: null
        }
    },
    
    items: [
        {
            xtype: 'component',
            html: `<h3>Upload Logo</h3>`
        },
        {
            xtype: 'toolbar',
            items: [
               
                '->',
                {
                    xtype: 'formpanel',
                    reference: 'logoform',
                    itemId: 'logoform',
                    layout: {
                        type: 'vbox',
                        align: 'stretch',
                    },
                    items: [
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
                        {height:5},
                        {
                            margin: '0 0 0 10',
                            xtype: 'button',
                            scale: 'small',
                            text: 'Upload',
                            ui: 'action',
                            handler: 'onSaveLogoBtnClick'
                        },
                        {height:5},
                        {
                            margin: '0 0 0 10',
                            iconCls: 'fa fa-redo',
                            scale: 'small',
                            handler: 'reloadUploadedDocs',
                            ui: 'action'
                        },
                        {height:5},
                        {
                            margin: '0 0 0 10',
                            xtype: 'button',
                            scale: 'small',
                            text: 'Set Active',
                            ui: 'action',
                            handler: 'onPickLogo'
                        },
                        {height:5},
                        {
                            margin: '0 0 0 10',
                            xtype: 'button',
                            scale: 'small',
                            text: 'Close',
                            ui: 'action',
                            handler: 'onCancelBtnClick'
                        }
                    ]
                },
                
            ]
        },
        {
            xtype: 'container',
            cls: 'module-body',
            height: 300,
            scrollable: true,

            items: [{
                xtype: 'logogrid',
            },]
        }
    ]
});