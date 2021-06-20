Ext.define('MssPhoenix.view.phone.member.contributions.ContributionsGrid', {
    extend: 'MssPhoenix.view.widgets.Table',

    xtype: 'memberphone-contributionsgrid',


    store: {
        type: 'membercontributions'
    },

    minHeight: 200,

    columns: [{
            text: 'DATE',
            dataIndex: 'datePaid',
            flex: 1,
            hidden: true,
        },
        {
            text: 'MONTH',
            dataIndex: 'month',
            flex: 1,
        },
        {
            text: 'YEAR',
            dataIndex: 'year',
            flex: 1
        },
        {
            text: 'EE',
            dataIndex: 'ee',
            renderer: 'moneyFormatFunc',
            flex: 1,
            hidden: true,
        },
        {
            text: 'ER',
            dataIndex: 'er',
            renderer: 'moneyFormatFunc',
            flex: 1,
            hidden: true,
        },
        {
            text: 'AVC',
            dataIndex: 'avc',
            renderer: 'moneyFormatFunc',
            flex: 1,
            hidden: true,
        },
        {
            text: 'AVCER',
            dataIndex: 'avcer',
            renderer: 'moneyFormatFunc',
            hidden: true,
            flex: 1
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
            flex: 1,
            hidden: true,
        },
        {
            text: 'STATUS',
            dataIndex: 'status',
            hidden: true,
            flex: 1
        }
    ],

    loadMask: true,

});