Ext.define('MssPhoenix.view.tablet.pensioner.deductions.DeductionsGrid', {
    extend: 'MssPhoenix.view.widgets.Table',
    controller: "pensionerdeductionsgridcontroller",

    xtype: 'pensionerdeductionsgrid',
    height: 456,
    scrollable: true,


    store: {
        type: 'pensionerdeductions'
    },



    columns: [
        { text: 'ID', dataIndex: 'id', flex: 1 , hidden: true},
        { text: 'type', dataIndex: 'typeName', flex: 2},
        { text: 'StartDate', dataIndex: 'startDate', flex: 1 },
        {
            text: 'StopDate',
            dataIndex: 'stopDate',
            renderer: 'formatPensionerDeductionEndDate',
            cell: {
                encodeHtml: false,
                align: 'right'
            },
            align: 'center',
            flex: 1
        },
        {
            text: 'Amount',
            dataIndex: 'amount',
            renderer:'moneyFormatFunc', 
            cell: {
                // encodeHtml: false,
                align: 'right'
            },
            align: 'center',
            align: 'center',
            flex: 1
        },
        { text: 'Stopped', dataIndex: 'stopped', flex: 1 },
    ],

    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        displayMsg: 'Display records {0} - {1} of {2}',
        emptyMsg: 'No Record to display'
    },
});