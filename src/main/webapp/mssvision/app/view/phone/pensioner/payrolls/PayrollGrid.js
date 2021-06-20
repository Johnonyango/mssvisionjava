Ext.define('MssPhoenix.view.phone.pensioner.payrolls.PayrollGrid', {
    // extend: 'Ext.Container',
    extend: 'MssPhoenix.view.widgets.Table',
    xtype: 'phonepensionerpayrollgrid',
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
        { text: 'Gross', dataIndex: 'gross', renderer: 'moneyFormatFunc', flex: 1, hidden: true},
        {
            text: 'Deductions',
            dataIndex: 'deds',
            renderer: 'formatDeductions',
            cell: {
                encodeHtml: false,
                align: 'right'
            },
            align: 'center',
            flex: 1,
            hidden: true
        },
        { text: 'Tax', dataIndex: 'tax', cell: {encodeHtml: false},renderer:'formatDeductions',align:'center', flex: 1, hidden: true},
        { text: 'NetPension', dataIndex: 'net', flex: 1, cell: {encodeHtml: false},renderer:'formatMoneyBlue', align:'center',hidden: true},
        { text: 'Arrears', dataIndex: 'arreas', renderer: 'moneyFormatFunc', align:'center', flex: 1 ,hidden: true},
        { text: 'TaxOnArrears', dataIndex: 'tax', renderer: 'moneyFormatFunc', align:'center', flex: 1, hidden: true},
        { text: 'PaidPension', dataIndex: 'net', cell: {encodeHtml: false},renderer:'formatMoneyGreen', align:'center',flex: 1},


    ],

    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        displayMsg: 'Display records {0} - {1} of {2}',
        emptyMsg: 'No Record to display'
    },
});
