Ext.define('MssPhoenix.view.tablet.pensioner.payrolls.PayrollGrid', {
    // extend: 'Ext.Container',
    extend: 'MssPhoenix.view.widgets.Table',
    xtype: 'pensionerpayrollgrid',
    controller: "pensionerpayrollgridcontroller",

    height: 456,
    layout: 'fit',
    scrollable: true,

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
                encodeHtml: false,
                align: 'right'
            },
            align: 'center',
            flex: 1
        },
        { text: 'Tax', dataIndex: 'tax', cell: {encodeHtml: false},renderer:'formatDeductions',align:'center', flex: 1 },
        { text: 'NetPension', dataIndex: 'net', flex: 1, cell: {encodeHtml: false},renderer:'formatMoneyBlue', align:'center',},
        { text: 'Arrears', dataIndex: 'arreas', renderer: 'moneyFormatFunc', align:'center', flex: 1 },
        { text: 'TaxOnArrears', dataIndex: 'arreas', renderer: 'moneyFormatFunc', align:'center', flex: 1 },
        { text: 'PaidPension', dataIndex: 'totPen', cell: {encodeHtml: false},renderer:'formatMoneyGreen', align:'center',flex: 1 },
        { text: 'Paid', dataIndex: 'paid',flex: 1 },


    ],

    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        displayMsg: 'Display records {0} - {1} of {2}',
        emptyMsg: 'No Record to display'
    },
});