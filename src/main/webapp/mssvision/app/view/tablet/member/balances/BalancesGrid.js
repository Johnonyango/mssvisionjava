Ext.define('MssPhoenix.view.tablet.member.balances.BalancesGrid', {
    extend: 'MssPhoenix.view.widgets.Table',

    xtype: 'memberbalancesgrid',

    controller: 'memberbalancescontroller',
    
    minHeight: 200,

    columns: [{
            text: 'AS AT',
            dataIndex: 'yearEnding',
            flex: 1
        },
        {
            text: 'TOTAL OPENING BALANCES',
            dataIndex: 'totalOpeningBalances',
            flex: 1,
            cell: {
                encodeHtml: false,
                align: 'right'
            },
            align: 'center',
            renderer: 'moneyFormatFunc',
            hidden: true
        },
        {
            text: 'INTEREST ON OPENING BALANCES (EMPLOYEE)',
            dataIndex: 'prevEEIntr',
            flex: 1,
            cell: {
                encodeHtml: false,
                align: 'right'
            },
            align: 'center',
            renderer: 'moneyFormatFunc',
            hidden: true
        },
        {
            text: 'INTEREST ON OPENING BALANCES (EMPLOYER)',
            dataIndex: 'prevERIntr',
            flex: 1,
            cell: {
                encodeHtml: false,
                align: 'right'
            },
            align: 'center',
            renderer: 'moneyFormatFunc',
            hidden: true
        },
        {
            text: 'EMPLOYEE',
            dataIndex: 'totalEE',
            flex: 1,
            cell: {
                encodeHtml: false,
                align: 'right'
            },
            align: 'center',
            renderer: 'moneyFormatFunc'
        },
        {
            text: 'EMPLOYEE INTR',
            dataIndex: 'eeIntr',
            flex: 1,
            cell: {
                encodeHtml: false,
                align: 'right'
            },
            align: 'center',
            renderer: 'moneyFormatFunc',
            hidden: true
        },
        {
            text: 'EE AVC',
            dataIndex: 'avcbal',
            flex: 1,
            cell: {
                encodeHtml: false,
                align: 'right'
            },
            align: 'center',
            renderer: 'moneyFormatFunc',
            hidden: true
        },
        {
            text: 'EMPLOYER',
            dataIndex: 'totalER',
            flex: 1,
            cell: {
                encodeHtml: false,
                align: 'right'
            },
            align: 'center',
            renderer: 'moneyFormatFunc'
        },

        {
            text: 'EMPLOYER INTR',
            dataIndex: 'erIntr',
            flex: 1,
            cell: {
                encodeHtml: false,
                align: 'right'
            },
            align: 'center',
            renderer: 'moneyFormatFunc',
            hidden: true
        },
        {
            text: 'ER AVC',
            dataIndex: 'avcerbal',
            flex: 1,
            cell: {
                encodeHtml: false,
                align: 'right'
            },
            align: 'center',
            renderer: 'moneyFormatFunc',
            hidden: true
        },
        {
            text: 'TOTAL INTEREST',
            dataIndex: 'totalInterest',
            flex: 1,
            cell: {
                encodeHtml: false,
                align: 'right'
            },
            align: 'center',
            renderer: 'moneyFormatFunc',
        },

        {
            text: 'TOTAL',
            dataIndex: 'total',
            flex: 1,
            cell: {
                encodeHtml: false,
                align: 'right'
            },
            align: 'center',
            renderer: 'renderMoneyColumnBold',
        },
        {
            text: 'Status',
            dataIndex: 'status',
            flex: 1,
            hidden: true
        },
    ],

    store: {
        type: 'memberbalances'
    },

    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        displayMsg: 'Display records {0} - {1} of {2}',
        emptyMsg: 'No Record to display'
    },
});