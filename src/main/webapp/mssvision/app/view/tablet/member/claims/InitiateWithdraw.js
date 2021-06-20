Ext.define('MssPhoenix.view.tablet.member.claims.InitiateWithdraw', {
    extend: 'MssPhoenix.view.widgets.Window',
    // Uncomment to give this component an xtype 
    xtype: 'memberinitiateclaim',
    width: 480,
    height: 320,
    closable: true,

    controller: 'memberclaimprocessingcontroller',
    // padding: 15,
    items: [{
        xtype: 'module',
        items: [{
                xtype: 'component',
                cls: 'module-head',
                html: '<h3>Initiate Claim</h3>'
            },
            {
                xtype: 'component',
                cls: 'module-body',
                html: 'Welcome to <span style="color:#f27f00"><b>Member Self Service</b></span> claim initiation. Complete the requirements in this wizard to enable processing of your request'
            }
        ]
    }],
    bbar: [
        '->',
        {
            text: 'Proceed',
            id: 'btnProeedInitiateClaim',
            formBind: true,
            handler: 'showStepOneForm',
            ui: 'action'
        }
    ]
});