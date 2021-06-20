Ext.define('MssPhoenix.view.phone.member.claims.InitiateWithdraw', {
    extend: 'MssPhoenix.view.widgets.Window',
    // Uncomment to give this component an xtype 
    xtype: 'memberphone-initiateclaim',
    width: 320,
    height: 300,
    closable: true,
    controller: 'memberclaimprocessingcontroller',
    padding: 15,
    title: 'Initiate Claim',
    items: [{
        xtype: 'module',
        items: [{
                xtype: 'label',
                cls: 'module-body',
                html: 'Welcome to <span style="color:#f27f00"><b>Member Self Service</b></span> claim initiation. Complete the requirements in this wizard to enable processing of your request'
            }
        ]
    }],
    bbar: [
        '->',
        {
            text: 'Proceed',
            // id: 'btnProeedInitiateClaim',
            formBind: true,
            handler: 'showStepOneForm',
            ui: 'action'
        }
    ]
});