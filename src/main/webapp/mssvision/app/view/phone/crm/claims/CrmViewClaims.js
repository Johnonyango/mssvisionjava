Ext.define('MssPhoenix.view.phone.crm.claims.CrmViewClaims', {
    extend: 'MssPhoenix.view.widgets.Window',

    xtype: 'crmphoneviewclaims',
    width: "90%",
    maxHeight: "90%",
    controller: 'crmviewclaimscontroller',
    title: 'Details',
    closable: true,
    padding: 15,

    items: [
        {
            xtype: 'container',
            scrollable: true,
            items: [
                {
                    xtype: 'formpanel',
                    margin: '10 10 0 10',
                    layout: 'vbox',
                    reference: 'form',
                    //form begin
                    items: [
                        {
                            layout: 'vbox',
                            items: [
                                {
                                    // xtype: 'container',
                                    // cls: 'module-body',
                                    layout: {
                                        type: 'vbox',
                                        align: 'stretch',
                                    },
                                    defaults: {
                                        width: '100%',
                                        xtype: 'container',
                                        layout: {
                                            type: 'vbox',
                                            align: 'stretch',
                                        }
                                    },

                                    xtype: 'fieldset',
                                    title: 'Member details',
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
                                                    name: 'dob',
                                                    margin: '10 0 0 0',
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
                                                    name: 'doe',
                                                    margin: '10 0 0 0',
                                                    readOnly: true,
                                                },
                                                {
                                                    xtype: 'mitextfield',
                                                    label: 'Age at exit',
                                                    name: 'age',
                                                    margin: '10 0 0 6',
                                                    readOnly: true
                                                }
                                            ]
                                        },
                                    ],
                                },


                                {
                                    layout: 'vbox',
                                    items: [
                                        {
                                            // xtype: 'container',
                                            // cls: 'module-body',
                                            layout: {
                                                type: 'vbox',
                                                align: 'stretch',
                                            },
                                            defaults: {
                                                width: '100%',
                                                xtype: 'container',
                                                layout: {
                                                    type: 'vbox',
                                                    align: 'stretch',
                                                }
                                            },

                                            xtype: 'fieldset',
                                            title: 'Claim request details',
                                            items: [
                                                {
                                                    items: [
                                                        {
                                                            xtype: 'mitextfield',
                                                            label: 'Reason for exit',
                                                            name: 'benefitReason',
                                                            margin: '10 0 0 0',
                                                            readOnly: true,
                                                        },
                                                        {
                                                            xtype: 'mitextfield',
                                                            label: 'Payement Options',
                                                            name: 'paymentOption',
                                                            margin: '10 0 0 6',
                                                            readOnly: true,
                                                        }
                                                    ]
                                                },
                                            ],
                                        }
                                    ]
                                },


                            ]
                        },

                        {
                            layout: 'vbox',
                            items: [
                                {
                                    // xtype: 'container',
                                    // cls: 'module-body',
                                    layout: {
                                        type: 'vbox',
                                        align: 'stretch',
                                    },
                                    defaults: {
                                        width: '100%',
                                        xtype: 'container',
                                        layout: {
                                            type: 'vbox',
                                            align: 'stretch',
                                        }
                                    },

                                    xtype: 'fieldset',
                                    title: 'Bank details',
                                    items: [
                                        {
                                            items: [
                                                {
                                                    xtype: 'mitextfield',
                                                    label: 'Bank Name',
                                                    name: 'bankName',
                                                    margin: '10 0 0 0',
                                                    readOnly: true,
                                                },
                                            ]
                                        },
                                        {
                                            items: [
                                                {
                                                    xtype: 'mitextfield',
                                                    label: 'Bank branch',
                                                    name: 'bankBranchName',
                                                    readOnly: true,
                                                },
                                            ]
                                        },

                                        {
                                            items: [
                                                {
                                                    xtype: 'mitextfield',
                                                    label: 'Account name',
                                                    name: 'accountName',
                                                    margin: '10 0 0 0',
                                                    readOnly: true,
                                                },]
                                        },

                                        {
                                            items: [
                                                {
                                                    xtype: 'mitextfield',
                                                    label: 'Account Number.',
                                                    margin: '10 0 0 0',
                                                    name: 'accountNumber',
                                                    readOnly: true
                                                }
                                            ]
                                        },
                                    ],
                                }
                                ,

                                {
                                    // xtype: 'container',
                                    // cls: 'module-body',
                                    layout: {
                                        type: 'vbox',
                                        align: 'stretch',
                                    },
                                    defaults: {
                                        width: '100%',
                                        xtype: 'container',
                                        layout: {
                                            type: 'vbox',
                                            align: 'stretch',
                                        }
                                    },

                                    xtype: 'fieldset',
                                    title: 'Documents',
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

                {
                    xtype: 'button',
                    text: 'Authorize and forward to  FundMaster',
                    ui: 'action',
                    handler: 'onAuthorizeBtnClick',
                    iconCls: 'fa fa-save',
                    width: '100%'
                },

                {
                    width: '100%',
                    xtype: 'button',
                    text: 'Send Back to sponsor',
                    ui: ' decline',
                    handler: 'onDeclineBtnClick',
                    iconCls: 'fa fa-ban',
                },

            ]
        }
    ],
});