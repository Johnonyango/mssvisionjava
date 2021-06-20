Ext.define('MssPhoenix.view.tablet.member.home.ClosingBalancesGrid', {
    extend: 'MssPhoenix.view.widgets.Table',

    xtype: 'memberclosingbalancesgrid',
    id: 'memberclosingbalancesgrid',

    store: {
        type: 'memberclosingbalances'
    },

    minHeight: 200,

    columns: [
        {
            text: 'YEAR',
            dataIndex: 'asAt',
            flex: 1
        },
        {
            text: 'EMPLOYEE',
            dataIndex: 'openingEe',
            flex: 1, renderer: 'moneyFormatFunc'
        },
        {
            text: 'EMPLOYER',
            dataIndex: 'openingEr',
            flex: 1, renderer: 'moneyFormatFunc'
        },
        {
            text: 'AVC',
            dataIndex: 'openingAVC',
            flex: 1,
            renderer: 'moneyFormatFunc'
        },
        // {
        //     text: 'AVCER',
        //     dataIndex: 'AVCER',
        //     flex: 1
        // },
        {
            text: 'TOTAL',
            dataIndex: 'openingTotals',
            flex: 1, renderer: 'moneyFormatFunc'
        },
        // {
        //     text: 'TYPE',
        //     dataIndex: 'Type',
        //     flex: 1
        // },
        // {
        //     text: 'STATUS',
        //     dataIndex: 'Status',
        //     flex: 1
        // },
    ],

    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        displayMsg: 'Display records {0} - {1} of {2}',
        emptyMsg: 'No Record to display'
    },
});