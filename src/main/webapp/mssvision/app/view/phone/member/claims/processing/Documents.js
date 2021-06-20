Ext.define('MssPhoenix.view.phone.member.claims.processing.Documents', {
    extend: 'MssPhoenix.view.tablet.member.claims.processing.BaseClaimWin',

    xtype: 'memberphone-claimdocuments',

    width: "80%",
    maxHeight: "80%",
    padding: 15,
    title: 'Documents',
    viewmodel: {
        data: {
            content: 'Kindly upload necessary documents',
            userId: null,
            reqId: null
        }
    },

    items: [{
        xtype: 'formpanel',
        // defaults: {
        //     width: '100%'
        // },
        items: [
            {
                xtype: 'component',
                cls: 'module-body',
                bind: {
                    html: `{content}`
                }
            },

            {
                xtype: 'fieldset',
                title: 'Upload File(s)',
                items: [
                    {
                        xtype: 'formpanel',
                        reference: 'memberclaimdocumentsform',
                        itemId: 'memberclaimdocumentsform',
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
                            }, {
                                xtype: 'mitextfield',
                                name: 'reqId',
                                hidden: true,
                                bind: {
                                    value: '{reqId}'
                                }
                            },
                            {
                                xtype: 'filefield',
                                name: 'file',
                                placeholder: 'Select file',
                                tooltip: 'Select file',
                                multiple: true,
                                required: true,
                            },
                            {
                                margin: '0 0 0 10',
                                xtype: 'button',
                                scale: 'small',
                                text: 'Upload',
                                ui: 'action',
                                formBind: true,
                                handler: 'documentsWindowUploadDocs'
                            },
                        ]
                    },
                ]
            }

        ],

        bbar: [{
            text: 'Cancel',
            handler: 'onCancelBtnClick',
            ui: 'action'
        },
            '->',
            {
                text: 'Previous',
                handler: 'showStepTwoForm',
                ui: 'action'
            },
            {
                text: 'Next',
                formBind: true,
                handler: 'documentsBtnClick',
                // handler: 'showMissingDocs',
                ui: 'action',
                iconAlign: 'right',
                iconCls: 'x-fa fa-angle-right',
            }
        ]
    }]
});