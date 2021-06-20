Ext.define('MssPhoenix.view.phone.crm.claims.CrmClaims', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',
    controller: 'crmclaimsgridcontroller',
    
    
    viewmodel: {
        data: {
            iconInfo: `<i class="fa fa-info-circle" style="color: #f27f00"></i>`
        },
    },
    items: [
        {
            xtype: 'container',
            padding: '15px',
            items: [
                {
                    xtype: 'container',
                    layout: 'vbox',
                    items: [
                        {
                            xtype: 'searchfield',
                            reference: 'searchClaimId',
                            placeholder: 'claim id to search',
                            margin: '0 0 0 10',
                            width: 200,
                            listeners: {
                                specialkey: 'onIdSearchEnterKey'
                            }

                        },
                        {
                            xtype: 'searchfield',
                            reference: 'searchMemberNo',
                            placeholder: 'MemberNo to search',
                            margin: '0 0 0 10',
                            width: 200,
                            listeners: {
                                specialkey: 'onMemberNoSearchEnterKey'
                            }

                        },
                        {
                            xtype: 'button',
                            ui: 'action',
                            text: 'reset search',
                            handler: 'resetSearch'
                        },
                        {
                            xtype: 'button',
                            ui: 'action',
                            iconCls:'fa fa-redo',
                            handler: 'reloadClaimsGrid'
                        }
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
                                type: 'crmclaims'
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
                                select: 'onPhoneViewClaimButtonClick'
                            }
                        }
                    ]
                },
            ]
        }
    ]
});