Ext.define('MssPhoenix.view.tablet.member.claims.processing.preexit.InitiatePreexitWithdraw', {
    extend: 'MssPhoenix.view.widgets.Window',
    
    xtype : 'initiatepreexitwithdraw', 
    width: 320,
    maxHeight: "80%",
    closable: true,

    controller: 'preexitcontroller',
    padding: 15,
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
                html: 'Welcome to <span style="color:#f27f00"><b>Member Self Service</b></span> pre-exit withdrawal. Complete the requirements in this wizard to enable processing of your request'
            }
        ]
    }],
    bbar: [
        '->',
        {
            text: 'Proceed',
            formBind: true,
            handler: 'showStepOneForm',
            ui: 'action'
        }
    ]
});