Ext.define('MssPhoenix.view.tablet.admin.MobileMoneyConfig.MobileMoneyViewConfig', {
    extend: 'MssPhoenix.view.widgets.Window',
    xtype: 'mobilemoneyviewconfig',
    controller: 'mobilemoneycreateconfigcontroller',
    height: 556,
    title: 'Mobile Money Configs',
    autoShow: true,
    width: 600,
    padding: 15,
    items: [

        {
            xtype: 'formpanel',
            layout: 'form',
            reference: 'form',
            jsonSubmit: true,
            defaults: {
                xtype: 'mitextfield',
                allowBlank: false,
                scrollable: true
            },

            items:[
                    {
                        xtype: 'numberfield',
                        name: 'id',
                        hidden: true,
                        allowBlank: true,
                        label: 'Config Id',
                        readOnly: true,
                    },

                    {
                        name: 'minAmount',
                        label: 'MinAmount',
                        //  readOnly:true,
                    },
                    {
                        name: 'mpesaPaybill',
                        label: 'Mpesa Paybill',
                        // readOnly:true,
                    },
                    {
                        name: 'mpesaAppKey',
                        label: 'Mpesa Appkey',
                        // readOnly:true,
                    },
                    {
                        name: 'mpesaAppSecret',
                        label: 'MpesaAppSecret',
                        // readOnly:true,
                    },
                    {
                        name: 'mpesaPassKey',
                        label: 'Mpesa Passkey',
                        // readOnly:true,
                    },
                    {
                        name: 'callbackUrl',
                        label: 'CallbackUrl',
                        // readOnly:true,
                    },
                    {
                        name: 'timeoutUrl',
                        label: 'TimeoutUrl',
                        // readOnly:true,
                    },
                    {
                        name: 'accountReference',
                        label: 'AccountReference',
                        // readOnly:true,
                    },
                    {
                        name: 'mobileMoneyProcedure',
                        label: 'Mobile Money Procedure',
                        xtype: 'mitextarea'
                        // readOnly:true,
                    },
                    {
                        xtype: 'selectbox',
                        label: 'Is Live',
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
                        hidden: true
                    },
                    {
                        xtype: 'selectbox',
                        label: 'Status',
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
            buttons: [
                {
                    text: 'Save',
                    formBind: true,
                    ui: 'action',
                    id: 'saveViewConfig',
                    handler: 'onEditConfigBtnClick'
                },
                {
                    text: 'Close',
                    ui: 'action',
                    id: 'closeViewConfig',
                    handler: 'onCancelViewBtnClick'
                }
            ]
        }]
});