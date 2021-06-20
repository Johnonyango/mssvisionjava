Ext.define('MssPhoenix.view.tablet.sponsor.bils.ProcessExceptionForm', {
    extend: 'MssPhoenix.view.widgets.Window',
    xtype: 'billbatchupload',
    width: '70%',
    height:500,
    controller: 'processexceptionformcontrolller',
    items: [{
            xtype: 'formpanel',
            layout: 'form',
            reference: 'fileform',
            itemId: 'uploadexceptionform',
            items: [{
                xtype: 'filefield',
                label: "Batch:",
                name: 'formFile',
                allowBlank: false,
                accept: '.xls, .xlsx',
                anchor: '100%',
            }],
            buttons: [{
                text: 'Upload',
                handler: 'onUploadBtnClick',
                formBind: true,
            },
        ]
        },
        {
            xtype: 'formpanel',
            reference: 'importform',
            itemId: 'saveexceptionform',
            labelAlign: 'left',
            bodyStyle: 'padding:5px',

            height: 500,
            frame: true,
            items: [{
                xtype: 'tabpanel',
                autoHeight: true,
                height:400,
                layoutOnTabChange: true,
                defaults: {
                    autoScroll: true,
                    layout: 'fit',
                },
                activeTab: 0,
                items: [{
                    title: 'Valid Imports',
                    items: [{
                        xtype: 'billvalidimportgrid',
                        height: 250,
                    }]
                }, {
                    title: 'Exceptions',
                    items: [{
                        xtype: 'billimportexceptiongrid',
                        height: 250,
                    }]
                }]

            }]
        }
    ],
    buttons: ['->', {
            text: 'Save',
            disabled: true,
            reference: 'savebtn',
            handler: 'onSaveBtnClick'
        },
        {
            text: 'Close',
            reference: 'closeBtn',
            handler: 'onCloseBtnClick'
        },
    ]

});