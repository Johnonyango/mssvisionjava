Ext.define('MssPhoenix.view.tablet.sponsor.receipt.ReceiptsGrid', {
    extend: 'MssPhoenix.view.widgets.Table',

    xtype: 'sponsorreceiptgrid',
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
        { text: 'Date Received',  dataIndex: 'datereceived' , flex:1},
        { text: 'Bill Reference Number',  dataIndex: 'receiptno', flex:1},
        { text: 'Period',  dataIndex: 'particular', flex:1 },
        { text: 'Payee',  dataIndex: 'payee', flex:1},
        { text: 'Amount', dataIndex: 'amount', flex:1,
        cell: {
            encodeHtml: false,
            align: 'right'
        },
        renderer: 'renderMoneyColumnBold'},
        { text: 'Payment Method', dataIndex: 'paymentmethod', flex:1}
        

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
