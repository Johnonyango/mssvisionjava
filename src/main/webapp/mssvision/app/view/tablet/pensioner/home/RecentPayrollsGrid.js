Ext.define('MssPhoenix.view.tablet.pensioner.home.RecentPayrollsGrid', {
    extend: 'Ext.Container',
    // extend: 'Ext.Container',
    extend: 'MssPhoenix.view.widgets.Table',
    controller: "pensionerpayrollgridcontroller",
    xtype: 'recentpayrollsgrid',

    height: 300,
    scrollable: true,
    layout: 'fit',

    store: {
        type: 'pensionerpayrolls'
    },


    columns: [
        { text: 'Month', dataIndex: 'month', flex: 1 },
        { text: 'Year', dataIndex: 'year', flex: 1 },
        { text: 'Gross', dataIndex: 'gross', renderer: 'moneyFormatFunc', flex: 1 },
        {
            text: 'Deductions',
            dataIndex: 'deds',
            renderer: 'formatDeductions',
            cell: {
                encodeHtml: false
            },
            align: 'center',
            flex: 1
        },
        { text: 'Tax', dataIndex: 'tax', cell: { encodeHtml: false }, renderer: 'formatDeductions', align: 'center', flex: 1 },
        { text: 'NetPension', dataIndex: 'net', flex: 1, cell: { encodeHtml: false }, renderer: 'formatMoneyBlue', align: 'center', },
        { text: 'Arrears', dataIndex: 'arreas', renderer: 'moneyFormatFunc', align: 'center', flex: 1 },
        { text: 'TaxOnArrears', dataIndex: 'tax', renderer: 'moneyFormatFunc', align: 'center', flex: 1 },
        { text: 'PaidPension', dataIndex: 'net', cell: { encodeHtml: false }, renderer: 'formatMoneyGreen', align: 'center', flex: 1 },


    ],

    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        displayMsg: 'Display records {0} - {1} of {2}',
        emptyMsg: 'No Record to display'
    },
});