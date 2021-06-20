Ext.define('MssPhoenix.view.phone.member.claims.ClaimsGrid', {
    extend: 'MssPhoenix.view.widgets.Table',
    xtype: 'memberphone-claimsgrid',

    store: {
        type: 'memberclaims'
    },

    minHeight: 200,
    scrollable: 'x',
    columns: [
        {
            text: 'REASON FOR EXIT',
            dataIndex: 'benefitReason',
            flex: 1,
        }, {
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
            renderer: 'moneyFormatFunc',
            hidden: true
        },
        {
            text: 'PERCENTAGE REQUESTED',
            dataIndex: 'amountPercentage',
            flex: 1,
            align: 'center',
            renderer: function (value) {
                return `${value}%`;
            },
            hidden: true
        },
        {
            text: 'DATE REQUESTED',
            dataIndex: 'shortCreatedDate',
            flex: 1,
            hidden: true
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