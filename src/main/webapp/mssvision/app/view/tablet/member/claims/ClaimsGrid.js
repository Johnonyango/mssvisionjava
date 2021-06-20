Ext.define('MssPhoenix.view.tablet.member.claims.ClaimsGrid', {
    extend: 'MssPhoenix.view.widgets.Table',
    xtype: 'memberclaimsgrid',

    store: {
        type: 'memberclaims'
    },

    minHeight: 200,
    scrollable: 'x',

    columns: [
        {
            text: 'REASON FOR EXIT',
            dataIndex: 'benefitReason',
            flex: 2,
        },
        {
            text: 'PAYMENT OPTION',
            dataIndex: 'isPercentageOrAmount',
            flex: 1,
            hidden: true
        },
        {
            text: 'AMOUNT REQUESTED',
            dataIndex: 'totalAmount',
            flex: 1,
            cell: {
                encodeHtml: false,
                align: 'right'
            },
            align: 'center',
            hidden: true,
            renderer: 'moneyFormatFunc'
        },
        {
            text: 'PERCENTAGE REQUESTED',
            dataIndex: 'amountPercentage',
            flex: 1,
            align: 'center',
            hidden: true,
            renderer: function (value) {
                return `${value}%`;
            }
        },
        {
            text: 'DATE INITIATED',
            dataIndex: 'shortCreatedDate',
            flex: 1
        },
        {
            text: 'STATUS',
            dataIndex: 'status',
            flex: 1,
            renderer: 'formatMemberClaimStatus',
            cell: {
                encodeHtml: false
            },
        },
    ],

    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        displayMsg: 'Display records {0} - {1} of {2}',
        emptyMsg: 'No Record to display'
    },

});