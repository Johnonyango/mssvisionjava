Ext.define('MssPhoenix.view.tablet.sponsor.bills.BillExceptionGrid', {
    extend: 'MssPhoenix.view.widgets.Table',
    xtype: 'billimportexceptiongrid',
    reference: 'billimportexceptiongrid',

    height:300,

    store: {
        type: 'exceptionbillimportstore'
    },
    columns: [
        { text: 'Member Number',  dataIndex: 'memberNo'},
        { text: 'Member Name',  dataIndex: 'memberName'},
        { text: 'Exception',  dataIndex: 'exception',flex:3,},
      
        
    ],
});