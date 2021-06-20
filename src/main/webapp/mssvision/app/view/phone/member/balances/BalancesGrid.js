Ext.define('MssPhoenix.view.phone.member.balances.BalancesGrid', {
    extend: 'MssPhoenix.view.widgets.Table',

    xtype: 'memberphone-balancesgrid',

    minHeight: 200,

    columns: [{
            text: 'As At',
            dataIndex: 'yearEnding',
            flex: 2
        },
        {
            text: 'EE',
            dataIndex: 'employeebal',
            flex: 1,
            renderer: 'moneyFormatFunc',
            hidden: true
        },
        {
            text: 'EE AVC',
            dataIndex: 'avcbal',
            flex: 1,
            renderer: 'moneyFormatFunc',
            hidden: true
        },
        {
            text: 'ER',
            dataIndex: 'employerbal',
            flex: 1,
            renderer: 'moneyFormatFunc',
            hidden: true
        },
        {
            text: 'ER AVC',
            dataIndex: 'avcerbal',
            flex: 1,
            renderer: 'moneyFormatFunc',
            hidden: true
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
            text: 'Status',
            dataIndex: 'status',
            flex: 1,
            hidden: true
        },
    ],

    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        displayMsg: 'Display records {0} - {1} of {2}',
        emptyMsg: 'No Record to display'
    },
});