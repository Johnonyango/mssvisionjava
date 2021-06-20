Ext.define('MssPhoenix.view.phone.sponsor.bills.BillExceptionGrid', {
    extend: 'MssPhoenix.view.widgets.Table',
    xtype: 'billphoneimportexceptiongrid',
    reference: 'billphoneimportexceptiongrid',

    height:300,

    store: {
        type: 'exceptionbillimportstore'
    },
    columns: [
        { text: 'Bill Id',  dataIndex: 'billId'},
        { text: 'Exception',  dataIndex: 'exception',flex:1, renderer: 'moneyFormatFunc',},
      
        
    ],
});