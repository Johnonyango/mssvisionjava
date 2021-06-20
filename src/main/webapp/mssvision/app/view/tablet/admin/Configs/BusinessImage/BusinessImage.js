Ext.define('MssPhoenix.view.tablet.admin.Configs.BusinessImage.BusinessImage', {
    extend: 'MssPhoenix.view.widgets.Window',
    width: 900,
    height: 656,
    xtype: 'businessImage',
    controller: 'businessimagecontroller',
    viewModel: {
        data: {
            userId: null
        }
    },
    items: [
        {
            xtype: 'toolbar',
            items: [
                {
                    xtype: 'component',
                    html: `<h3>Upload a Business Image</h3>`
                },
                '->',
                {
                    xtype: 'formpanel',
                    reference: 'businessimageform',
                    itemId: 'businessimageform',
                    layout: {
                        type: 'hbox',
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
                        {
                            margin: '0 0 0 10',
                            xtype: 'button',
                            scale: 'small',
                            text: 'Upload',
                            ui: 'action',
                            handler: 'onSaveBusinessImageBtnClick'
                        }
                    ]
                },
                {
                    margin: '0 0 0 10',
                    iconCls: 'fa fa-redo',
                    scale: 'small',
                    handler: 'reloadUploadedBImage',
                    ui: 'action'
                },
                {
                    margin: '0 0 0 10',
                    xtype: 'button',
                    scale: 'small',
                    text: 'Set Active',
                    ui: 'action',
                   // handler: 'onPickBusinessLogo'
                },
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
        {
            xtype: 'container',
            cls: 'module-body',
            height: 300,
            scrollable: true,

            items: [{
                xtype: 'businessimagegrid',
            },]
        }
    ]
});