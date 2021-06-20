Ext.define('MssPhoenix.view.tablet.sponsor.members.MemberUploadBatch', {
    extend: 'MssPhoenix.view.widgets.Window',
    xtype: 'sponsormemberuploadbatch',
    width: 500,

    controller: 'memberuploadbatchcontroller',
    padding: 15,

    items: [{
        xtype: 'module',
        items: [{
            xtype: 'formpanel',
            reference: 'form',
            itemId: 'uploadmemberform',
            cls: 'module-body',
            layout: {
                type: 'vbox',
                align: 'stretch',
            },
            defaults: {
                width: '100%',
                layout: {
                    type: 'hbox',
                    align: 'stretch',
                }
            },
            items: [{
                    xtype: 'toolbar',
                    cls: 'module-head',
                    items: [

                        {
                            xtype: 'toolbar',
                            cls:'module-head',
                            items: [
                             
                                {
                                    xtype: 'component',
                                    
                                    html:'<h3>Upload Members in Batch</h3>'
                                },
                            ]
                        },    
                    ]
                },

                {
                    items: [{
                            xtype: 'filefield',
                            id: 'btnBrowseMemberFile',
                            width: '100%',
                            labelWidth: '100%',
                            name: 'uploadedFile',
                            msgTarget: 'side',
                            placeholder: 'Add Files',
                            allowBlank: false,
                            anchor: '100%',
                            margin: '0 0 0 0'
                        },

                    ]
                },

            ],
        }]
    }],
    buttons: [{
            text: 'Upload',
            id: 'btnMemberBatchUpload',
            name: 'uploadMemberFile',
            handler: 'OnMemberAddBatchSubmit',
            formBind: true,
        },
        {
            text: 'Cancel',
            handler: 'onCancelBtnClick'
        }
    ]

});