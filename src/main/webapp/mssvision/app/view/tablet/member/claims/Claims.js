Ext.define('MssPhoenix.view.tablet.member.claims.Claims', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',

    xtype: 'memberclaims',
    viewModel: {
        type: 'memberclaimsvmodel'
    },
    controller: 'memberclaimscontroller',
    items: [
        {
            xtype: 'container',
            padding: '15px',
            scrollable: true,
            items: [
                {
                    xtype: 'module',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },

                    defaults: {
                        width: '100%'
                    },

                    items: [
                        {
                            xtype: 'toolbar',
                            // cls: 'module-head',
                            items: [
                                {
                                    xtype: 'component',
                                    maxWidth: 456,
                                    margin: '0 0 0 20',
                                    bind: {
                                        html: '{iconInfo} <span style="color: #002c65; font-weight: 700">Initiate claim (pre-exit withdrawal) process enables you make a request for benefit request withdrawal.</span>'
                                    }
                                },
                                '->',
                                {
                                    bind: {
                                        style: {
                                            'display': '{isInitiateClaim}'
                                        }
                                    },
                                    text: 'Initiate claim',
                                    scale: 'small',
                                    handler: 'initiateClaimBtnClick',
                                    itemId:'btnInitiateClaim',
                                    ui: 'action'
                                },
                                {
                                    iconCls: 'fa fa-redo',
                                    handler: 'reloadClaimsGrid',
                                    itemId:'btnReloadClaimsGrid',
                                    ui: 'action'
                                },
                                {
                                    text: '',
                                    iconCls: 'x-fa fa-print',
                                    scale: 'small',
                                    ui: 'action',
                                    hidden: true
                                },
                                // ''
                            ]
                        },

                        {
                            xtype: 'container',
                            cls: 'module-body',
                            items: [
                                {
                                    xtype: 'memberclaimsgrid',
                                    margin: '10 0 0 0'
                                }
                            ]
                        },
                    ]
                }
            ]
        }
    ]
});