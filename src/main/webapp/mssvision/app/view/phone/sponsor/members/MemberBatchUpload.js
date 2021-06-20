Ext.define('MssPhoenix.view.phone.sponsor.members.MemberBatchUpload', {
    extend: 'MssPhoenix.view.widgets.Window',
    xtype: 'memberbatchuploadphone',
    width: '70%',
    height:500,
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
                text: 'Download Sample Template',
                renderer: function () {
                    return `<a target="_blank" href="../mss/docs/MemberUploadFinal.xls">View</a>`;
                },
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
                height:500,
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