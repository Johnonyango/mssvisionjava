Ext.define('MssPhoenix.view.tablet.sponsor.claims.ViewClaims', {
    extend: 'MssPhoenix.view.widgets.Window',
    xtype: 'sponsorviewclaims',
    maxWidth: 900,
    scrollable: true,
    maxHeight: 650,
    controller: 'sponsorviewclaimscontroller',
    padding: 15,
    closable: true,
    title: 'Claim Details',
    items: [
        {
            xtype: 'formpanel',
            margin: '0 10 0 10',
            layout: 'hbox',
            reference: 'form',
            items: [
                {
                    xtype: 'container',
                    layout: 'vbox',
                    items: [
                        {
                            xtype: 'fieldset',
                            title: 'Member details',

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
                            items: [
                                {
                                    items: [
                                        {
                                            xtype: 'mitextfield',
                                            label: 'Member No.',
                                            name: 'memberNo',
                                            margin: '10 0 0 0',
                                            readOnly: true,
                                        }
                                    ]
                                },
                                {
                                    items: [
                                        {
                                            xtype: 'mitextfield',
                                            label: 'member Name',
                                            name: 'memberName',
                                            readOnly: true,
                                            margin: '10 0 0 0',
                                        }
                                    ]
                                },
                                {
                                    items: [
                                        {
                                            xtype: 'mitextfield',
                                            label: 'date of Birth',
                                            margin: '10 0 0 0',
                                            name: 'dob',
                                            readOnly: true,
                                        },
                                        {
                                            xtype: 'mitextfield',
                                            label: 'Date of joining',
                                            margin: '10 0 0 6',
                                            name: 'doj',
                                            readOnly: true,
                                        }
                                    ]
                                },
                                {
                                    items: [
                                        {
                                            xtype: 'mitextfield',
                                            label: 'date of Exit',
                                            margin: '10 0 0 0',
                                            name: 'doe',
                                            readOnly: true,
                                        },
                                        {
                                            xtype: 'mitextfield',
                                            label: 'Age at exit',
                                            margin: '10 0 0 6',
                                            name: 'age',
                                            readOnly: true
                                        }
                                    ]
                                },
                            ],
                        },
                    ]
                },
                {
                    xtype: 'container',
                    layout: 'vbox',
                    items: [
                        {
                            xtype: 'fieldset',
                            title: 'Claim request details',
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
                            items: [
                                {
                                    items: [
                                        {
                                            xtype: 'mitextfield',
                                            label: 'Reason For Exit',
                                            margin: '10 0 0 0',
                                            name: 'benefitReason',
                                            readOnly: true,
                                        },
                                        // {
                                        //     xtype: 'mitextfield',
                                        //     label: 'Payement Options',
                                        //     name: 'paymentOption',
                                        //     margin: '10 0 0 6',
                                        //     readOnly: true,
                                        // }
                                    ]
                                },
                            ],
                        },
                        {
                            // xtype: 'container',
                            // cls: 'module-body',
                            xtype: 'fieldset',
                            title: 'Documents',
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
                            items: [
                                {

                                    items: [
                                        {
                                            xtype: 'button',
                                            text: 'View Submitted Documents',
                                            ui: 'action',
                                            handler: 'viewDocuments',
                                            iconCls: 'fa fa-eye',
                                            margin: '20 10 10 10'
                                        }
                                    ]
                                }
                            ],
                        },
                    ]
                },
            ]
        },
    ],
    bbar: [
        // {
        //     text: 'close',
        //     ui: 'action',
        //     // scale: 'small',
        //     handler: 'onCancelBtnClick',
        //     iconCls: 'fa fa-ban',
        //
        // },
        {
            text: 'Decline',
            ui: ' decline',
            // scale: 'small',
            handler: 'onDeclineBtnClick',
            iconCls: 'fa fa-ban',

        },
        '->',
        {
            text: 'Certify',
            ui: 'action',
            // scale: 'small',
            handler: 'onCertifyBtnClick',
            iconCls: 'fa fa-save',
        },
        {
            text: 'Approve',
            ui: 'action',
            // scale: 'small',
            handler: 'onApproveBtnClick',
            iconCls: 'fa fa-save',
        },

    ],
});