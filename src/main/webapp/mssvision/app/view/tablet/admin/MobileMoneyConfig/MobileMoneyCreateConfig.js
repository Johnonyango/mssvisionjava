Ext.define('MssPhoenix.view.tablet.admin.MobileMoneyConfig.MobileMoneyCreateConfig', {
    extend: 'MssPhoenix.view.widgets.Window',

    xtype: 'mobilemoneycreateconfig',
    controller: 'mobilemoneycreateconfigcontroller',
    width: 600,
    height: 600,
    padding: 15,
    defaults: {

        scrollable: true
    },
    items: [
        {
            height: 550,
            flex: 1,
            xtype: 'module',

            items: [{
                xtype: 'formpanel',
                reference: 'form',
                jsonSubmit: true,
                items: [
                    {
                        cls: 'module-head',
                        xtype: 'component',
                        html: `<h3>Create Config</h3>`,
                    },
                    {
                        cls: 'module-body',
                        xtype: 'container',
                        layout: {
                            type: 'vbox',
                            align: 'stretch',
                        },
                        items: [

                            {
                                flex: 1,
                                xtype: 'mitextfield',
                                label: 'Minimum Amount',
                                labelTextAlign: 'left',
                                name: 'minAmount',

                            },
                            {
                                flex: 1,
                                xtype: 'mitextfield',
                                label: 'Mpesa Paybill',
                                labelTextAlign: 'left',
                                name: 'mpesaPaybill',
                                margin: '0 0 0 5',

                            },
                            {
                                flex: 1,
                                xtype: 'mitextfield',
                                label: 'MpesaAppKey',
                                labelTextAlign: 'left',
                                name: 'mpesaAppKey',
                                margin: '0 0 0 5',

                            },
                            {
                                flex: 1,
                                xtype: 'mitextfield',
                                label: 'MpesaAppSecret',
                                labelTextAlign: 'left',
                                name: 'mpesaAppSecret',
                                margin: '0 0 0 5',

                            },
                            {
                                flex: 1,
                                xtype: 'mitextfield',
                                label: 'MpesaPassKey',
                                labelTextAlign: 'left',
                                name: 'mpesaPassKey',
                                margin: '0 0 0 5',

                            },
                            {
                                flex: 1,
                                xtype: 'mitextfield',
                                label: 'CallbackUrl',
                                labelTextAlign: 'left',
                                name: 'callbackUrl',
                                margin: '0 0 0 5',

                            },
                            {
                                flex: 1,
                                xtype: 'mitextfield',
                                label: 'TimeoutUrl',
                                labelTextAlign: 'left',
                                name: 'timeoutUrl',
                                margin: '0 0 0 5',

                            },
                            {
                                flex: 1,
                                xtype: 'mitextfield',
                                label: 'AccountReference',
                                labelTextAlign: 'left',
                                name: 'accountReference',
                                margin: '0 0 0 5',

                            },
                            {
                                flex: 1,
                                xtype: 'mitextfield',
                                label: 'MobileMoneyProcedure',
                                labelTextAlign: 'left',
                                name: 'mobileMoneyProcedure',
                                margin: '0 0 0 5',

                            },
                            {
                                xtype: 'selectbox',
                                label: 'isLive',
                                margin: '0 0 0 6',
                                name: 'isLive',
                                store: {
                                    fields: ['value', 'name'],
                                    data: [
                                        {"value": "true", "name": "true"},
                                        {"value": "false", "name": "false"},

                                    ]
                                },
                                displayField: 'name',
                                valueField: 'value',
                            },
                            {
                                xtype: 'selectbox',
                                label: 'StatusConfig',
                                margin: '0 0 0 6',
                                name: 'status',
                                store: {
                                    fields: ['value', 'name'],
                                    data: [
                                        {"value": "ACTIVE", "name": "ACTIVE"},
                                        {"value": "INACTIVE", "name": "INACTIVE"},

                                    ]
                                },
                                displayField: 'name',
                                valueField: 'value',
                            },

                            {
                                xtype: 'selectbox',
                                label: 'Production Environment',
                                name: 'live',
                                store: {
                                    type: 'yesno'
                                },
                                displayField: 'name',
                                valueField: 'value',
                                editable: false
                            }
                        ],
                    }
                ],
                bbar: [
                    '->',
                    {
                        minWidth: 200,
                        iconCls: 'fa fa-save',
                        text: 'Save',
                        ui: 'action',
                        id: 'saveCreateConfig',
                        handler: 'onSaveConfigBtnClick'


                    }, {
                        minWidth: 200,
                        iconCls: 'fa fa-ban',
                        text: 'close',
                        ui: 'action',
                        id: 'closeCreateConfig',
                        handler: 'onCancelBtnClick'
                    }
                ]
            }],

        }

    ]

});