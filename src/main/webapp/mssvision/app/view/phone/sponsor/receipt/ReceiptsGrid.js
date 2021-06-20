Ext.define('MssPhoenix.view.phone.sponsor.receipt.ReceiptsGrid', {
    extend: 'MssPhoenix.view.widgets.Table',

    xtype: 'sponsorreceiptgridphone',
    height:500,
    
    controller:'receiptsgridcontroller',
  
    selModel: {
        injectCheckbox: 'first',
        checkOnly: false,
        model: 'MULTI',
        type: 'checkboxmodel',
    },

    store: {
        type: 'sponsorreceipt'
    },
    requires: [
        'Ext.grid.plugin.PagingToolbar'
    ],
    plugins: {
        gridpagingtoolbar: true
    },
    

    items:[  {
        xtype: 'toolbar',
        docked:'top',
        items: [
            {
                iconCls:'fa fa-redo',
                handler: 'reloadReceiptsGrid',
                ui: 'action'
            }, 
            '->',
            {
                text: '',
                iconCls: 'x-fa fa-print',
                scale: 'small',
                ui:'action'
            },
         
        ]
    }],
 
    columns: [
        { text: 'Date',  dataIndex: 'date' , flex:1,hidden:true},
        { text: 'Bill Reference Number',  dataIndex: 'billRefNo', flex:1,hidden:true},
        { text: 'Period',  dataIndex: 'period', flex:1,hidden:true },
        { text: 'Receipt Reference No',  dataIndex: 'receiptRefNo', flex:1},
        { text: 'Amount', dataIndex: 'amount', flex:1,hidden:true},
        { text: 'Status', dataIndex: 'status', flex:1}
        

    ],
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        displayMsg: 'Display records {0} - {1} of {2}',
        emptyMsg: 'No Record to display'
    },

    listeners: {
        select: 'onItemSelected'
    }
});
