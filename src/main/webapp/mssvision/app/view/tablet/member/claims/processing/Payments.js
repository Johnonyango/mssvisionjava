Ext.define('MssPhoenix.view.tablet.member.claims.processing.Payments', {
    extend: 'MssPhoenix.view.tablet.member.claims.processing.BaseClaimWin',

    xtype: 'memberclaimpayments',
    padding: 15,

    items: [
        {
            xtype: 'formpanel',
            reference: 'memberclaimpaymentsform',
            defaults: {
                width: '100%'
            },

            items: [

                {
                    xtype: 'component',
                    cls: 'module-head',
                    html: `<h3>Payment Options</h3>`
                },

                {
                    xtype: 'selectbox',
                    label: 'Payment Option',
                    margin: '0 0 0 0',
                    name: 'paymentOption',
                    store: {
                        fields: ['value', 'name'],
                        data: [
                            {"value": "totalAmount", "name": "Total Amount"},
                            {"value": "amountPercentage", "name": "Percentage"},
                        ]
                    },
                    displayField: 'name',
                    valueField: 'value',
                    required: true
                },

                {
                    xtype: 'mitextfield',
                    label: 'Current Credit Fund',
                    readOnly: true,
                    name: 'currentCreditFund',
                    bind: {
                        value: '{currentCreditFund}',
                    },
                    textAlign: 'right',
                    listeners: {
                        change: 'textFieldTextChanged'
                    },
                    required: true
                },

                {
                    xtype: 'minumberfield',
                    label: 'Amount You Require',
                    value: 0,
                    minValue: 0,
                    name: 'amountRequested',
                    inputType: 'number',
                    bind: {
                        maxValue: '{currentCreditFund}'
                    },
                    textAlign: 'right',
                    required: true
                },
            ],
        }
    ],
    bbar: [
        {
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
            iconAlign: 'right',
            iconCls: 'x-fa fa-angle-right',
            text: 'Next',
            formBind: true,
            handler: 'validateStepFour',
            ui: 'action',
            id: 'btnValidateStepFour'
        }
    ]
});