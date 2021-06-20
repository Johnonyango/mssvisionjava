Ext.define('MssPhoenix.view.phone.member.claims.Claims', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',

    viewModel: {
        type: 'memberclaimsvmodel'
    },

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

                    viewModel: {
                        type: 'memberclaimsvmodel'
                    },

                    controller: 'memberclaimscontroller',

                    items: [
                        {
                            xtype: 'label',
                            maxWidth: '85%',
                            margin: '0 0 0 20',
                            html: '<span style="color: #002c65; font-weight: 700">Initiate claim (pre-exit withdrawal) process enables you make a request for benefit request withdrawal.</span>'
                        },
                        {
                            xtype: 'toolbar',
                            // cls: 'module-head',
                            items: [
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
                                    ui: 'action'
                                },
                                {
                                    iconCls: 'fa fa-redo',
                                    handler: 'reloadClaimsGrid',
                                    ui: 'action'
                                },
                                {
                                    text: '',
                                    iconCls: 'x-fa fa-print',
                                    scale: 'small',
                                    ui: 'action',
                                    hidden: true
                                },
                            ]
                        },

                        {
                            xtype: 'container',
                            cls: 'module-body',
                            items: [
                                {
                                    xtype: 'memberphone-claimsgrid',
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