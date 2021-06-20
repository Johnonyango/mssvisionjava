Ext.define('MssPhoenix.view.phone.sponsor.bills.BillsValidGrid', {
    extend: 'MssPhoenix.view.widgets.Table',
    xtype: 'billvalidimportgrid',
    reference: 'billvalidimportgrid',

    height:700,

    store: {
        type: 'validbillimportstore'
    },
    columns: [
       // { text: 'Bill Id',  dataIndex: 'billId' ,flex:1},
        { text: 'Member Number',  dataIndex: 'memberNo',flex:1},
        { text: 'Member Name',  dataIndex: 'memberName',flex:1},
        { text: 'ER',  dataIndex: 'er',flex:1, renderer: 'moneyFormatFunc',hidden:true},
        { text: 'EE',  dataIndex: 'ee',flex:1, renderer: 'moneyFormatFunc',hidden:true},
        { text: 'Validated EE',  dataIndex: 'eeValidated', flex:1, renderer: 'moneyFormatFunc',},
        { text: 'Validated ER',  dataIndex: 'erValidated',flex:1, renderer: 'moneyFormatFunc',},
        { text: 'Validated AVC',  dataIndex: 'avcValidated',flex:1, renderer: 'moneyFormatFunc',},
        { text: 'Salary',  dataIndex: 'salary',flex:3, renderer: 'moneyFormatFunc',hidden:true},
        { text: 'Salary Validated',  dataIndex: 'salaryValidated',flex:1, renderer: 'moneyFormatFunc',},

        
        
        
    ],
});