Ext.define('MssPhoenix.view.tablet.member.contributions.ContributionsGrid', {
    extend: 'MssPhoenix.view.widgets.Table',

    xtype: 'membercontributionsgrid',


    store: {
        type: 'membercontributions'
    },

    minHeight: 200,

    // layout: 'fit',

    // selModel: {
    //     injectCheckbox: 'first',
    //     checkOnly: false,
    //     model: 'MULTI',
    //     type: 'checkboxmodel',
    // },


    // "savingEe": "",
    // "datePaid": "Jun 30, 2020",
    // "year": 2020,
    // "penalty": "",
    // "apId": "-",
    // "adminFee": "",
    // "brokerFee": "",
    // "units": "",
    // "type": "Normal Contributions",
    // "batchId": "",
    // "salary": "",
    // "groupLife": "",
    // "avc": 1500,
    // "total": 10500,
    // "eeTaxFree": 0,
    // "premium": "",
    // "member": "",
    // "erTaxFree": 0,
    // "deficit": "",
    // "seq": 0,
    // "ee": 3000,
    // "unitPrice": "",
    // "transientMemberNo": "",
    // "retirementMedSavinger": "",
    // "salaryType": "",
    // "transferdefamount": "",
    // "er": 6000,
    // "deficitPenalty": "",
    // "ap": "-",
    // "memberNo": "",
    // "retirementMedSavingee": "",
    // "month": "May",
    // "avcer": "",
    // "response": "",
    // "groupAssurance": "",
    // "savingEr": "",
    // "status": ""

    columns: [{
        text: 'DATE',
        dataIndex: 'datePaid',
        flex: 1
    },
        {
            text: 'MONTH',
            dataIndex: 'month',
            flex: 1
        },
        {
            text: 'YEAR',
            dataIndex: 'year',
            align: 'center'
        },
        {
            text: 'EMPLOYEE',
            dataIndex: 'ee',
            renderer: 'moneyFormatFunc',
            flex: 1,
            cell: {
                encodeHtml: false,
                align: 'right'
            },
            align: 'center'
        },
        {
            text: 'EMPLOYER',
            dataIndex: 'er',
            renderer: 'moneyFormatFunc',
            flex: 1,
            cell: {
                encodeHtml: false,
                align: 'right'
            },
            align: 'center'
        },
        {
            text: 'AVC',
            dataIndex: 'avc',
            renderer: 'moneyFormatFunc',
            flex: 1,
            cell: {
                encodeHtml: false,
                align: 'right'
            },
            align: 'center'
        },
        {
            text: 'AVCER',
            dataIndex: 'avcer',
            renderer: 'moneyFormatFunc',
            hidden: true,
            flex: 1,
            cell: {
                encodeHtml: false,
                align: 'right'
            },
            align: 'center'
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
            align: 'center'
        },
        {
            text: 'STATUS',
            dataIndex: 'status',
            flex: 1,
            hidden: true,
        }
    ],

    loadMask: true,

});