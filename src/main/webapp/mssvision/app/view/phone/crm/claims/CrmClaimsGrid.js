Ext.define('MssPhoenix.view.phone.crm.claims.CrmClaimsGrid', {
    extend: 'MssPhoenix.view.widgets.Table',
    xtype: 'phonecrmclaimsgrid',
    controller: 'crmclaimsgridcontroller',
    store: {
        type: 'crmclaims'
    },
    layout: 'fit',
    // scrollable:true,
    plugins: {
        gridpagingtoolbar: true
    },
    selectable: {
        // Disables sorting by header click, though it will be still available via menu
        columns: true,
        cells: true,
        checkbox: true,
        drag: true,
        mode: 'single',
        extensible: 'y'
    },
    height: 456,
    scrollable: true,
    constrain: true,


    items: [
        {
            xtype: 'toolbar',
            docked: 'top',
            default: {
                ui: 'action'
            },

            items: [{
                xtype: 'button',
                text: 'View Claim',
                ui: 'action',
                handler: 'onViewClaimButtonClick'
            },
            {
                xtype: 'searchfield',
                reference: 'searchClaimId',
                placeholder: 'claim id to search',
                width: 80,
                listeners: {
                    specialkey: 'onIdSearchEnterKey'
                }

            },
            {
                xtype: 'searchfield',
                reference: 'searchMemberNo',
                placeholder: 'MemberNo to search',
                width: 80,
                listeners: {
                    specialkey: 'onMemberNoSearchEnterKey'
                }

            },
            {
                xtype: 'button',
                ui: 'action',
                text: 'reset search',
                handler: 'resetSearch'
            }
            ],
        }
    ],
    columns: [
        { text: 'Id', dataIndex: 'id', flex: 1,hidden: true},
        { text: 'Member No', dataIndex: 'memberNo', flex: 1,hidden: true},
        { text: 'Member Name', dataIndex: 'memberName', flex: 2 },
        { text: 'Reason for exit', dataIndex: 'benefitReason', flex: 3 },
        { text: 'Amount/Amount Percentage', dataIndex: 'displayAmountOrPercentage',align: 'center', flex: 2,hidden: true},
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
            flex: 1,
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