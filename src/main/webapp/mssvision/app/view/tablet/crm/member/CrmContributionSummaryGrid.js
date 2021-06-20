Ext.define('MssPhoenix.view.tablet.crm.member.CrmContributionSummaryGrid', {
    extend: 'MssPhoenix.view.widgets.Table',

    xtype: 'crmmembercontributionsummarygrid',
    controller:'basecontroller',

    // width: '65%',
    height:'150',

    store: {
        type: 'crmcontributionsummary'
    },

    columns: [{
        flex: 1,
        text: 'Opening Balances',
        columns: [ 
                    { text: 'Employee', dataIndex: 'ob_ee_reg',renderer:'moneyFormatFunc',align: 'center', flex: 1 },
                    { text: 'Employer', dataIndex: 'ob_er_reg',renderer:'moneyFormatFunc',align: 'center', flex: 1 },
                    { text: 'AVC', dataIndex: 'ob_avc_reg',renderer:'moneyFormatFunc',align: 'center', flex: 1 },
                ]
    },{
        flex: 1,
        text: 'Contributions',
        columns: [ 
                    { text: 'Employee', dataIndex: 'cont_ee_reg',renderer:'moneyFormatFunc',align: 'center', flex: 1 },
                    { text: 'Employer', dataIndex: 'cont_er_reg',renderer:'moneyFormatFunc',align: 'center', flex: 1 },
                    { text: 'AVC', dataIndex: 'cont_avc_reg',renderer:'moneyFormatFunc',align: 'center', flex: 1 }
                ]
    },{
        flex: 1,
        text: 'Interests',
        columns: [            
            { text: 'Employee', dataIndex: 'cont_ee_reg',renderer:'moneyFormatFunc',align: 'center', flex: 1 },
            { text: 'Employer', dataIndex: 'cont_er_reg',renderer:'moneyFormatFunc',align: 'center', flex: 1 },
            { text: 'AVC', dataIndex: 'cont_avc_reg',renderer:'moneyFormatFunc',align: 'center', flex: 1 }
        ]
    },{
        flex: 1,
        columns: [            
            { text: 'Grand Total', dataIndex: 'grand_total',cell: {encodeHtml: false},renderer:'formatMoneyGreen',align: 'center', flex: 1 }
        ]
    }
       
    ]
});