Ext.define('MssPhoenix.view.phone.sponsor.claims.ClaimsGrid', {
    extend: 'MssPhoenix.view.widgets.Table',
    xtype: 'sponsorclaimsgridphone',
    controller: 'sponsorclaimsgridcontroller',
    store: {
        type: 'sponsorclaim'
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
    height:500,
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
                text: 'View',
                ui: 'action',
                handler: 'onViewClaimButtonClick'
            }, {
                xtype: 'searchfield',
                reference: 'searchId',
                emptyText: 'name to search',
                width: 120,
                listeners: {
                    specialkey: 'onIdSearchEnterKey'
                }
            },  '->',
            {
                iconCls:'fa fa-redo',
                handler: 'reloadClaimsGrid',
                ui: 'action'
            },  
            ],
        }
    ],
    columns: [
        { text: 'Member No', dataIndex: 'memberNo', flex: 1, hidden: true },
        { text: 'Member Name', dataIndex: 'memberName', flex: 2 },
        { text: 'Reason for exit', dataIndex: 'benefitReason', flex: 3},
        { text: 'Amount/Amount Percentage', dataIndex: 'displayAmountOrPercentage', flex: 2, hidden: true },
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
