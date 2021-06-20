Ext.define('MssPhoenix.view.phone.sponsor.claims.Claims', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',

    // xtype:'crmclaims',
  
    layout: 'vbox',
    defaults: {
        width: '100%'
    },
    viewModel: {
        type: 'sponsorclaimsvmodel'
    },
    controller:'sponsorclaimsgridcontroller',
    padding: '15px',
    height: 456,
    items: [
        {
            xtype: 'toolbar',
            cls: 'module-head',
            items: [
                {
                    xtype: 'component',
                    bind:{
                        html: '<h3>Claims</h3>'
                    }
                },
            ]
        },
        {
            xtype: 'container',
            cls: 'module-body',
            scrollable: false,
            height: "95%",
            items: [
                {
                    xtype: 'label',
                    margin: '0 0 0 0',
                    html: '<span style="color: #002c65; font-weight: 700">A record of active deductions.</span>'
                },
                {
                    xtype: 'list',
                    grouped: false,
                    emptyText: 'loading...',
                    height: "95%",
                    scrollable: true,
                    store: {
                        type: 'sponsorclaim'
                    },
                    itemTpl: [
                        '<div><b>Claim Id : </b><span>{id}</span></div>',
                        '<div><b>Member No : </b><span>{memberNo}</span></div>',
                        '<div><b>Member Name : </b><span>{memberName}</span></div>',
                        '<div><b>Benefit reason : </b><span>{benefitReason}</span></div>',
                        '<div><b>Amount/ Percentage : </b><span>{displayAmountOrPercentage}</span></div>',
                        '<div><b>Authorized : </b><span>{authorizedStatus}</span></div>',
                        '<div><b>Status : </b><span>{displayStatus}</span></div>',
                    ],

                    listeners: {
                        select: 'onPhoneViewClaimBtnClick'
                    }
                }
            ]
        }
    ],

});