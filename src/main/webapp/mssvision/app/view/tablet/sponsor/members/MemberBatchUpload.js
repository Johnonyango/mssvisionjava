Ext.define('MssPhoenix.view.tablet.sponsor.members.MemberBatchUpload', {
    extend: 'MssPhoenix.view.widgets.Window',
    xtype: 'memberbatchupload',
    width: '70%',
    height: 500,
    controller: 'memberbatchuploadcontroller',
    items: [{
        xtype: 'formpanel',
        layout: 'form',
        reference: 'fileform',
        itemId: 'uploadmemberform',
        items: [{
            xtype: 'filefield',
            label: "Batch:",
            name: 'uploadedFile',
            allowBlank: false,
            accept: '.xls, .xlsx',
            anchor: '100%',
        }],
        buttons: [{
            text: 'Upload',
            handler: 'onFileFormUploadButtonClick',
            formBind: true,
        },
            '->',
            {
                xtype: 'component',
                html: `<a target="_blank" href="../docs/NEW_MEMBER_TEMPLATE.xls">Download Template</a>`,
            }
        ]
    },
        {
            xtype: 'formpanel',
            reference: 'importform',
            itemId: 'savememberform',
            labelAlign: 'left',
            bodyStyle: 'padding:5px',

            height: 300,
            frame: true,
            items: [{
                xtype: 'tabpanel',
                autoHeight: true,
                height: 500,
                layoutOnTabChange: true,
                defaults: {
                    autoScroll: true,
                    layout: 'fit',
                },
                activeTab: 0,
                items: [{
                    title: 'Valid Imports',
                    items: [{
                        xtype: 'membervalidimportgrid',
                        height: 200,
                    }]
                }, {
                    title: 'Exceptions',
                    items: [{
                        xtype: 'memberimportexceptiongrid',
                        height: 200,
                    }]
                }]

            }]
        }
    ],
    buttons: ['->', {
        text: 'Save',
        id: 'btnSaveBatchUpload',
        disabled: true,
        reference: 'savebtn',
        handler: 'onSaveBtnClick'
    },
        {
            text: 'Close',
            id: 'btnCloseBatchUpload',
            reference: 'closeBtn',
            handler: 'onCloseBtnClick'
        },
    ]

});