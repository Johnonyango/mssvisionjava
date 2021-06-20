Ext.define('MssPhoenix.view.tablet.member.claims.processing.VestingAndLiabilities', {
    extend: 'MssPhoenix.view.tablet.member.claims.processing.BaseClaimWin',

    xtype: 'memberclaimvestingandliabilities',
    padding: 15,

    viewModel: {
        data: {
            htmlText: '',
            nxtBtnDisplay: 'none'
        }
    },

    items: [
        {
            xtype: 'formpanel',
            defaults: {
                width: '100%'
            },
            items: [
                {
                    xtype: 'component',
                    cls: 'module-head',
                    html: `<h3>Vesting and Liabilities</h3>`
                },
                {
                    xtype: 'component',
                    cls: 'module-body',
                    bind: {
                        html: '{htmlText}'
                    }
                }
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
            handler: 'showStepFourForm',
            ui: 'action'
        },
        {
            iconCls: 'fa fa-save',
            text: 'Next',
            formBind: true,
            handler: 'showStepSixForm',
            bind: {
                style: {
                    'display': '{nxtBtnDisplay}'
                }
            },
            ui: 'action',
            id: 'btnShowStepSixForm'
        }
    ]
});