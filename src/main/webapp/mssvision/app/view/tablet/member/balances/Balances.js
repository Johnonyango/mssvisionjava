Ext.define('MssPhoenix.view.tablet.member.balances.Balances', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',

    xtype: 'memberbalances',

    controller: 'memberbalancescontroller',

    items: [
        {
            xtype: 'container',
            padding: '30px',
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
                            xtype: 'component',
                            maxWidth: 256,
                            margin: '0 0 0 20',
                            bind: {
                                html: '{iconInfo} <span style="color: #002c65; font-weight: 700">A record of balances for different accounting periods.</span>'
                            }
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
                        // ''
                    ]
                },

                {
                    xtype: 'container',
                    cls: 'module-body',
                    items: [
                        {
                            xtype: 'memberbalancesgrid',
                            margin: '10 0 0 0',
                            // store: {
                            //     type: 'memberbalances'
                            // },
                        }
                    ]
                },
            ]
        }
    ]
});