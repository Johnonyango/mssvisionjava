Ext.define('MssPhoenix.view.tablet.sponsor.claims.ClaimsGrid', {
    extend: 'MssPhoenix.view.widgets.Table',
    xtype: 'sponsorclaimsgrid',
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
        extensible: 'y',
        mode: 'single',
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
            }, 
            {
                xtype: 'formpanel',
                reference:'searchclaims',
                itemId: 'searchclaims',
                fieldDefaults: {
                    labelWidth: 30
                },
                layout: {
                    type: 'hbox'
                },
                items: [    
                    {
                        xtype: 'mitextfield',
                        name: 'searchValue',
                        placeholder: 'Enter search key',
                        tooltip: 'Enter search key',
                        allowBlank: false,
                    },
                    {
                        xtype: 'button',
                        scale: 'small',
                        iconCls: 'x-fa fa-search',
                        ui: 'action',
                        handler: 'searchClaims'
                    },
     
                ]
            },
            
            '->',
            
            {
                iconCls:'fa fa-redo',
                handler: 'reloadClaimsGrid',
                ui: 'action'
            },  
            ],
        }
    ],
    columns: [
        { text: 'Id', dataIndex: 'id', flex: 1,hidden: true},
        { text: 'Member No', dataIndex: 'memberNo', flex: 1 },
        { text: 'Member Name', dataIndex: 'memberName', flex: 2 },
        { text: 'Reason for exit', dataIndex: 'benefitReason', flex: 3 },
        { text: 'Date Initiated', dataIndex: 'doe', flex: 3 },
        // { text: 'Amount/Amount Percentage', dataIndex: 'displayAmountOrPercentage', flex: 2 },
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
            text: 'Approved',
            dataIndex: 'approvedStatus',             
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
