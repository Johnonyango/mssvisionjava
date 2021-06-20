Ext.define('MssPhoenix.view.tablet.member.home.Home', {
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
                xtype: 'membersummary'
            },

            //button
            {
                margin: '10 0 0 0',
                xtype: 'toolbar',
                cls: 'module-head',
                style: {
                    'background-color': 'transparent',
                },
                items: [
                    '->',
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
                        // bind: {
                        //     style: {
                        //         'display': '{canViewContributions}'
                        //     },
                        // },
                        text: 'View Contributions History',
                        ui: 'action',
                        handler: 'contributionsHistory',
                    },
                ]
            },

            {
                xtype: 'container',
                items: [{
                    xtype: 'component',
                    bind: {
                        html: '<center><h3>Recent Closing Balances ({currency})</h3></center>',
                    },
                    cls: 'module-head',
                },

                    {
                        xtype: 'container',
                        layout: {
                            type: 'hbox',
                            align: 'stretch'
                        },
                        items: [{
                            margin: '0 0 0 0',
                            flex: 1,
                            xtype: 'module',
                            scrollable: 'y',
                            height: 435,
                            items: [{
                                cls: 'module-body',
                                xtype: 'container',
                                items: [{
                                    // xtype: 'memberclosingbalancesgrid'
                                    xtype: 'memberbalancesgrid',
                                    margin: '10 0 0 0',
                                    plugins: {
                                        gridpagingtoolbar: false,
                                    },
                                }]
                            }]
                        },

                            //bar chart
                            {
                                xtype: 'membersummarychart',
                                flex: 1,
                                margin: '0 0 0 20',
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
                        xtype: 'component',
                        bind: {
                            html: '<h3>Recent Contributions ({currency})</h3>',
                        },
                        cls: 'module-head'
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
                                columns: [{
                                    text: 'DATE',
                                    dataIndex: 'datePaid',
                                    flex: 1,
                                    cell: {
                                        encodeHtml: false,
                                        align: 'left'
                                    },
                                },
                                    {
                                        text: 'MONTH',
                                        dataIndex: 'month',
                                        flex: 1,
                                        cell: {
                                            encodeHtml: false,
                                            align: 'left'
                                        },
                                    },
                                    {
                                        text: 'YEAR',
                                        dataIndex: 'year',
                                        cell: {
                                            encodeHtml: false,
                                            align: 'center'
                                        },
                                        align: 'center'
                                    },
                                    {
                                        text: 'EMPLOYEE',
                                        dataIndex: 'ee',
                                        renderer: 'moneyFormatFunc',
                                        flex: 1,
                                        cell: {
                                            encodeHtml: false,
                                            align: 'right'
                                        },
                                        align: 'center'
                                    },
                                    {
                                        text: 'EMPLOYER',
                                        dataIndex: 'er',
                                        renderer: 'moneyFormatFunc',
                                        flex: 1,
                                        cell: {
                                            encodeHtml: false,
                                            align: 'right'
                                        },
                                        align: 'center'
                                    },
                                    {
                                        text: 'AVC',
                                        dataIndex: 'avc',
                                        renderer: 'moneyFormatFunc',
                                        flex: 1,
                                        cell: {
                                            encodeHtml: false,
                                            align: 'right'
                                        },
                                        align: 'center',
                                        hidden: true
                                    },
                                    {
                                        text: 'AVCER',
                                        dataIndex: 'avcer',
                                        renderer: 'moneyFormatFunc',
                                        hidden: true,
                                        flex: 1,
                                        cell: {
                                            encodeHtml: false,
                                            align: 'right'
                                        },
                                        align: 'center'
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
                                        cell: {
                                            encodeHtml: false,
                                        },
                                        align: 'center'
                                    },
                                    {
                                        text: 'STATUS',
                                        dataIndex: 'status',
                                        flex: 1,
                                        cell: {
                                            encodeHtml: false,
                                        },
                                        align: 'center',
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