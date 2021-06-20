Ext.define('MssPhoenix.view.tablet.cre.home.CreRecentClaimsGrid', {
    extend: 'MssPhoenix.view.widgets.Table',

    xtype: 'crerecentclaimssgrid',
    id: 'crerecentclaimssgrid',
    store: {
        type: 'crmrecentclaims'
    },
    minHeight: 200,
    columns: [
        { text: 'Member No', dataIndex: 'memberNo', flex: 1 },
        { text: 'Member Name', dataIndex: 'memberName', flex: 2 },
        { text: 'Reason for exit', dataIndex: 'benefitReason', flex: 3 },
        { text: 'Amount/Amount Percentage', dataIndex: 'displayAmountOrPercentage',align: 'center', flex: 2 },
        {
            text: 'Approved',
            dataIndex: 'approvedStatus',             
            renderer: 'formatYesOrNoDisplay', 
            cell: {
                encodeHtml: false
            },
            flex: 1
        },
        { 
            text: 'Certified', 
            dataIndex: 'certifiedStatus',  
            renderer: 'formatYesOrNoDisplay', 
            cell: {
                encodeHtml: false
            },
            flex: 1 
        },
        { 
            text: 'Authorized', 
            dataIndex: 'authorizedStatus', 
            renderer: 'formatYesOrNoDisplay', 
            cell: {
                encodeHtml: false
            }, 
            flex: 1 
        },
        { text: 'Status', dataIndex: 'displayStatus', flex: 2 },
    ]
});