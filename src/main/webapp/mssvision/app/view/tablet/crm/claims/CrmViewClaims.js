Ext.define('MssPhoenix.view.tablet.crm.claims.CrmViewClaims', {
    extend: 'MssPhoenix.view.widgets.Window',

    xtype: 'crmviewclaims',
    maxWidth: 900,
    // height: 506,
    //title: 'Claims',
    scrollable: true,
    maxHeight: 650,

    controller: 'crmviewclaimscontroller',
    padding: 15,
    items: [

        {
            xtype: 'formpanel',
            margin: '10 10 0 10',
            layout: 'hbox',
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
                                    type: 'hbox',
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


                    ]
                },

                {
                    layout: 'vbox',
                    items: [
                        // {
                        //     // xtype: 'container',
                        //     // cls: 'module-body',
                        //     layout: {
                        //         type: 'vbox',
                        //         align: 'stretch',
                        //     },
                        //     defaults: {
                        //         width: '100%',
                        //         xtype: 'container',
                        //         layout: {
                        //             type: 'hbox',
                        //             align: 'stretch',
                        //         }
                        //     },

                        //     xtype: 'fieldset',
                        //     title: 'Bank details',
                        //     items: [
                        //         {
                        //             items: [
                        //                 {
                        //                     xtype: 'mitextfield',
                        //                     label: 'Bank Name',
                        //                     name: 'bankName',
                        //                     margin: '10 0 0 0',
                        //                     readOnly: true,
                        //                 },
                        //             ]
                        //         },
                        //         {
                        //             items: [
                        //                 {
                        //                     xtype: 'mitextfield',
                        //                     label: 'Bank branch',
                        //                     name: 'bankBranchName',
                        //                     readOnly: true,
                        //                 },
                        //             ]
                        //         },

                        //         {
                        //             items: [
                        //                 {
                        //                     xtype: 'mitextfield',
                        //                     label: 'Account name',
                        //                     name: 'accountName',
                        //                     margin: '10 0 0 0',
                        //                     readOnly: true,
                        //                 },]
                        //         },

                        //         {
                        //             items: [
                        //                 {
                        //                     xtype: 'mitextfield',
                        //                     label: 'Account Number.',
                        //                     margin: '10 0 0 0',
                        //                     name: 'accountNumber',
                        //                     readOnly: true
                        //                 }
                        //             ]
                        //         },
                        //     ],
                        // }




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
                                            type: 'hbox',
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
                                }
                            ]
                        },
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
                                    type: 'hbox',
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
                                            margin:'20 10 10 10'
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
        {
            text: 'Authorize and forward to  FundMaster',
            ui: 'action',
            // scale: 'small',
            handler: 'onAuthorizeBtnClick',
            name: 'onAuthorizeBtnClick',
            iconCls: 'fa fa-save',

        },
        {
            text: 'Decline',
            ui: ' decline',
            // scale: 'small',
            handler: 'onDeclineBtnClick',
            name: 'onDeclineBtnClick',
            iconCls: 'fa fa-ban',

        },
        '->',
        {
            text: 'close',
            ui: 'action',
            // scale: 'small',
            handler: 'onCancelBtnClick',
            name: 'onCancelBtnClick',
            iconCls: 'fa fa-ban',

        }
    ],
});