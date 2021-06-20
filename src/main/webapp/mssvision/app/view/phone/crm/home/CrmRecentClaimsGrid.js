Ext.define('MssPhoenix.view.phone.crm.home.CrmRecentClaimsGrid', {
    extend: 'MssPhoenix.view.widgets.Table',

    xtype: 'crmphonerecentclaimssgrid',
    id: 'crmrecentclaimssgrid',

    store: {
        type: 'crmrecentclaims'
    },
    controller: 'crmclaimsgridcontroller',
    minHeight: 200,
    columns: [
        { text: 'Member No', dataIndex: 'memberNo', flex: 1,hidden: true},
        { text: 'Member Name', dataIndex: 'memberName', flex: 2 },
        { text: 'Reason for exit', dataIndex: 'benefitReason', flex: 3 },
        { text: 'Amount/Amount Percentage', dataIndex: 'displayAmountOrPercentage',align: 'center', flex: 2, hidden:true},
        {
            text: 'Approved',
            dataIndex: 'approvedStatus',             
            renderer: 'formatYesOrNoDisplay', 
            cell: {
                encodeHtml: false
            },
            flex: 1,
            hidden: true
        },
        { 
            text: 'Certified', 
            dataIndex: 'certifiedStatus',  
            renderer: 'formatYesOrNoDisplay', 
            cell: {
                encodeHtml: false
            },
            flex: 1 ,
            hidden: true
        },
        { 
            text: 'Authorized', 
            dataIndex: 'authorizedStatus', 
            renderer: 'formatYesOrNoDisplay', 
            cell: {
                encodeHtml: false
            }, 
            flex: 1 ,
            hidden: true
        },
        { text: 'Status', dataIndex: 'displayStatus', flex: 2 },
    ]
});