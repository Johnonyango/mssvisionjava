Ext.define('MssPhoenix.view.tablet.admin.LandingPageContent.edits.PensionerImage', {   
    extend: 'MssPhoenix.view.widgets.Window',    
    xtype:'edits-pensionerimage',
    width: 900,
    height: 656,
    controller: 'pensionerimagecontroller',
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
                    html: `<h3>Upload Pensioner Image</h3>`+`<h3>Dimensions in Pixels: width * Height (600 * 400)</h3>`
                },
                '->',
                {
                    xtype: 'formpanel',
                    reference: 'pensionerimageform',
                    itemId: 'pensionerimageform',
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
                            handler: 'onSavePensionerImageBtnClick'
                        }
                    ]
                },
                {
                    margin: '0 0 0 10',
                    iconCls: 'fa fa-redo',
                    scale: 'small',
                    handler: 'reloadUploadedDocs',
                    ui: 'action'
                },
                {
                    margin: '0 0 0 10',
                    xtype: 'button',
                    scale: 'small',
                    text: 'Set Active',
                    ui: 'action',
                    handler: 'onPickPensionerImage'
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
                xtype: 'pensionerimagegrid',
            },]
        }
    ]
});