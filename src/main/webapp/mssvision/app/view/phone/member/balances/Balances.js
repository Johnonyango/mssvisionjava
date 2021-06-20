Ext.define('MssPhoenix.view.phone.member.balances.Balances', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',

    controller: 'memberbalancescontroller',
    items: [
        {
            xtype: 'container',
            padding: '15px',
            scrollable: true,
            layout: {
                type: 'vbox'
            },

            defaults: {
                width: '100%'
            },

            items: [
                {
                    xtype: 'toolbar',
                    items: [
                        {
                            xtype: 'label',
                            margin: '0 0 0 20',
                            maxWidth:'45%',
                            html: '<span style="color: #002c65; font-weight: 700">A record of balances for different accounting periods.</span>'
                        },
                        '->',
                        {
                            iconCls: 'fa fa-redo',
                            handler: 'reloadBalancesGrid',
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
                            xtype: 'memberphone-balancesgrid',
                            margin: '10 0 0 0',
                            store: {
                                type: 'memberbalances'
                            },
                        }
                    ]
                },
            ]
        }
    ]
});