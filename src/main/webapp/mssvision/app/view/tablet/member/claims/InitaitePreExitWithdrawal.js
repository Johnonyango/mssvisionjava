Ext.define('MssPhoenix.view.tablet.member.claims.InitaitePreExitWithdrawal', {
    extend: 'MssPhoenix.view.widgets.Window',

    xtype: 'memberinitaitepreexitwithdrawal',
    width: 320,
    height: 476,
    // title: 'Iniate pre-exit withdrawal',

    controller: 'memberinitaitepreexitwithdrawalcontroller',
    padding: 15,
    items: 
    [{
        xtype: 'formpanel',
        defaults: {
            xtype: 'mitextfield',
            readOnly: true,
            width: '100%'
        },
        items: [{
                xtype: 'component',
                cls: 'module-head',
                html: `<h3>Initiate claim</h3>`
            },
            {
                label: 'E.E',
                value: '1500.00',
                inputType: 'number'
            },
            {
                label: 'E.R',
                value: '4300.00',
                inputType: 'number'
            },
            {
                label: 'Total Balances',
                value: '5800.00',
                inputType: 'number'
            },

            {
                margin: '10 0 0 0',
                xtype: 'fieldset',
                title: 'Enter Amount',
                items: [{
                    xtype: 'mitextfield',
                    inputType: 'number',
                    width: '100%',
                    formBind: true,
                    placeholder: 'Amount'
                }]
            }
        ],
        bbar: [
            '->',
            {
                text: 'Cancel',
                handler: 'onCancelBtnClick',
                ui:'action'
            },
            {
                iconCls: 'fa fa-save',
                text: 'Send',
                formBind: true,
                ui:'action'
            }
        ]
    }]
});