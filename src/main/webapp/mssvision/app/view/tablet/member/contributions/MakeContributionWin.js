Ext.define('MssPhoenix.view.tablet.member.contributions.MakeContributionWin', {
    extend: 'MssPhoenix.view.widgets.Window',

    xtype: 'membermakecontributionwin',

    width: 600,
    // height: 330,
    // title: 'Make Contribution',
    padding: 15,
    closable: false,

    controller: 'membermakecontributionwincontroller',

    viewModel: {
        data: {
            businessNo: '',
            mobileMoneyProcedure: '',
            memberId: '',
            schemeId: '',
            allowStkPush: 'none'
        }
    },

    items: [{
        xtype: 'component',
        cls: 'module-head',
        html: `<h3><i class="x-fa x-plus"></i> Make Contribution</h3>`
    },
        {
            xtype: 'panel',
            items: [
                {
                    xtype: 'container',
                    layout: {
                        type: 'hbox',
                        align: 'stretch',
                    },

                    defaults: {
                        xtype: 'module',
                        layout: 'fit',
                    },

                    items: [

                        //left column
                        {
                            bind: {
                                style: {
                                    'display': '{allowStkPush}'
                                },
                            },
                            flex: 1,
                            items: [{
                                xtype: 'container',
                                // cls: 'module-body',
                                items: [
                                    {

                                        xtype: 'fieldset',
                                        title: 'Method 1. STK Push',
                                        items: [
                                            {
                                                xtype: 'formpanel',
                                                reference: 'membermakecontributionwinform',
                                                jsonSubmit: true,
                                                items: [
                                                    {
                                                        xtype: 'mitextfield',
                                                        hidden: true,
                                                        name: 'schemeId',
                                                        bind: {
                                                            value: '{schemeId}'
                                                        }
                                                    }, {
                                                        xtype: 'mitextfield',
                                                        hidden: true,
                                                        name: 'memberId',
                                                        bind: {
                                                            value: '{memberId}'
                                                        }
                                                    }, {
                                                        xtype: 'mitextfield',
                                                        hidden: true,
                                                        name: 'paybill',
                                                        bind: {
                                                            value: '{businessNo}'
                                                        }
                                                    }, {
                                                        xtype: 'mitextfield',
                                                        placeholder: '254700000000',
                                                        tooltip: 'Phone Number',
                                                        name: 'phone',
                                                        maxLength: 13,
                                                        label: 'Phone Number',
                                                        inputType: 'tel'
                                                    },
                                                    {
                                                        xtype: 'minumberfield',
                                                        width: '100%',
                                                        label: 'Amount',
                                                        placeholder: 'Enter Amount',
                                                        tooltip: 'Enter Amount',
                                                        name: 'amount',
                                                        minValue: 1,
                                                        maxValue: 300000,
                                                    },
                                                ],
                                                bbar: [
                                                    '->',
                                                    {
                                                        text: 'Make Payment',
                                                        ui: 'action',
                                                        handler: 'initiatePaymentBtnClick'
                                                    }]

                                            }
                                        ]
                                    },
                                ]
                            }]
                        },

                        //Right column
                        {
                            // columnWidth: 0.5,

                            flex: 1,
                            margin: '0 0 0 20',
                            items: [{
                                xtype: 'container',
                                // cls: 'module-body',
                                items: [
                                    {
                                        xtype: 'fieldset',
                                        title: 'Method 2: Pay via Paybill',
                                        items: [
                                            {
                                                xtype: 'component',
                                                bind: {
                                                    html: `{mobileMoneyProcedure}`
                                                }
                                            },
                                        ]
                                    },
                                ]
                            }]
                        }
                    ]
                }
            ],
            bbar: [
                '->',
                {
                    xtype: 'button',
                    text: 'Close',
                    ui: 'action',
                    iconCls: 'fa fa-window-close',
                    handler: 'onCancelBtnClick'
                },
            ]
        }
    ]
});