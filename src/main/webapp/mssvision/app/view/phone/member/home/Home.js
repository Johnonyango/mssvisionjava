Ext.define('MssPhoenix.view.phone.member.home.Home', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',

    controller: 'memberhomecontroller',

    viewModel: 'memberhomeviewmodel',

    items: [{
        xtype: 'container',
        padding: '15px',
        scrollable: true,
        width: '100%',

        defaults: {
            width: '100%'
        },
        layout: {
            type: 'vbox',
            align: 'stretch'
        },

        items: [
            //widgets here
            {
                xtype: 'memberphone-summary'
            },

            //button
            {
                margin: '10 0 0 0',
                xtype: 'toolbar',
                cls: 'module-head',
                style: {
                    'background-color': 'transparent'
                },
                items: [
                    {
                        bind: {
                            style: {
                                'display': '{isRequestStatement}'
                            },
                        },
                        text: 'Request Statement',
                        ui: 'action',
                        handler: 'showRequestStatementWin'
                    },
                    {
                        bind: {
                            style: {
                                'display': '{canViewContributions}'
                            },
                        },
                        text: 'Contributions History',
                        ui: 'action',
                        handler: 'contributionsHistory',
                    },
                ]
            },

            {
                margin: '20 0 0 0',
                xtype: 'module',
                items: [{
                    xtype: 'component',
                    html: '<h3>Recent Closing Balances</h3>',
                    cls: 'module-subhead',
                },

                    {
                        xtype: 'container',
                        layout: {
                            type: 'vbox',
                            align: 'stretch'
                        },
                        items: [

                            //bar chart
                            {
                                xtype: 'membersummarychart',
                            },
                            {
                                margin: '20 0 0 0',
                                xtype: 'module',
                                scrollable: 'y',
                                items: [{
                                    cls: 'module-body',
                                    xtype: 'container',
                                    items: [{
                                        xtype: 'memberphone-balancesgrid',
                                        store: {
                                            type: 'memberbalances'
                                        },
                                        plugins: {
                                            gridpagingtoolbar: false,
                                        },
                                    }]
                                }]
                            },

                        ]
                    },

                ]
            },

            {
                margin: '20 0 0 0',
                xtype: 'module',
                bind: {
                    style: {
                        'display': '{canViewContributions}'
                    }
                },
                items: [
                    {
                        xtype: 'label',
                        html: '<h3>Recent Contributions</h3>',
                        cls: 'module-subhead'
                    },
                    {
                        cls: 'module-body',
                        xtype: 'container',
                        items: [
                            {
                                xtype: 'table',
                                store: {
                                    type: 'memberrecentcontributions'
                                },
                                plugins: {
                                    gridpagingtoolbar: false,
                                },
                                minHeight: 300,
                                columns: [
                                    {
                                        text: 'DATE',
                                        dataIndex: 'datePaid',
                                        flex: 1
                                    },
                                    {
                                        text: 'MONTH',
                                        dataIndex: 'month',
                                        flex: 1,
                                        hidden: true
                                    },
                                    {
                                        text: 'YEAR',
                                        dataIndex: 'year',
                                        flex: 1,
                                        hidden: true
                                    },
                                    {
                                        text: 'EE',
                                        dataIndex: 'ee',
                                        renderer: 'moneyFormatFunc',
                                        flex: 1,
                                        hidden: true
                                    },
                                    {
                                        text: 'ER',
                                        dataIndex: 'er',
                                        renderer: 'moneyFormatFunc',
                                        flex: 1,
                                        hidden: true
                                    },
                                    {
                                        text: 'AVC',
                                        dataIndex: 'avc',
                                        renderer: 'moneyFormatFunc',
                                        flex: 1,
                                        hidden: true
                                    },
                                    {
                                        text: 'AVCER',
                                        dataIndex: 'avcer',
                                        renderer: 'moneyFormatFunc',
                                        hidden: true,
                                        flex: 1
                                    },
                                    {
                                        text: 'TOTAL',
                                        dataIndex: 'total',
                                        renderer: 'renderMoneyColumnBold',
                                        flex: 1,
                                        cell: {
                                            encodeHtml: false,
                                            align: 'right'
                                        },
                                        align: 'center'
                                    },
                                    {
                                        text: 'TYPE',
                                        dataIndex: 'type',
                                        flex: 1,
                                        hidden: true
                                    },
                                    {
                                        text: 'STATUS',
                                        dataIndex: 'status',
                                        flex: 1,
                                        hidden: true
                                    }
                                ],
                            }]
                    }
                ]
            },

        ]
    }]
});