Ext.define('MssPhoenix.view.tablet.sponsor.documents.ViewDocument', {
    extend: 'MssPhoenix.view.widgets.Window',

    xtype: 'sponsorviewdocuments',
    maxWidth: 900,
    scrollable: true,
    maxHeight: 650,

    controller: 'sponsorviewdocumentscontroller',

    padding: 15,
    items: [

        {
            xtype: 'formpanel',
            margin: '10 10 0 10',
            layout: 'hbox',
            reference: 'viewdocform',
            items: [
                {
                    layout: 'vbox',
                    items: [
                        {
                           
                            layout: {
                                type: 'vbox',
                                align: 'stretch',
                            },
                            defaults: {
                                width: '100%',
                                xtype: 'container',
                                layout: {
                                    type: 'hbox',
                                    align: 'stretch',
                                }
                            },

                            xtype: 'fieldset',
                            title: 'Document details',
                            items: [
                                {
                                    items: [
                                        {
                                            xtype: 'minumberfield',
                                            label: 'Member No.',
                                            name: 'memberNo',
                                            bind:{
                                                value:'{sponsorDocuments.memberNo}'
                                            },
                                            margin: '10 0 0 0',
                                            readOnly: true,
                                        }
                                    ]
                                },
                                {
                                    items: [
                                        {
                                            xtype: 'mitextfield',
                                            label: 'Document Name',
                                            name: 'docName',
                                            readOnly: true,
                                            margin: '10 0 0 0',
                                        }
                                    ]
                                },

                                {
                                    items: [
                                        {
                                            xtype: 'mitextfield',
                                            label: 'Document Number',
                                            margin: '10 0 0 0',
                                            name: 'docNum',
                                            readOnly: true,
                                        },
                                    
                                    ]
                                },

                      
                            ],
                        },

                    ]
                },

            ]
        },
    ],
    bbar: [
        {
            text: 'Approve',
            ui: 'action',
            handler: 'onApproveBtnClick',
            iconCls: 'fa fa-save',

        },
        '->',
        {
            text: 'close',
            ui: 'action',
            // scale: 'small',
            handler: 'onCancelBtnClick',
            iconCls: 'fa fa-ban',

        }
    ],
});
