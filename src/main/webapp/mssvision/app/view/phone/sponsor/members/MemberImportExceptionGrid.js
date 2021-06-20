Ext.define('MssPhoenix.view.phone.sponsor.members.MemberImportExceptionGrid', {
    extend: 'MssPhoenix.view.widgets.Table',
    xtype: 'memberimportexceptiongridphone',
    reference: 'memberimportexceptiongrid',
    height:300,
    store: {
        type: 'memberimportexceptionstore'
    },
    columns: [
    { text: 'Title',  dataIndex: 'title'},
    { text: 'Surname',  dataIndex: 'surname'},
    { text: 'First Name',  dataIndex: 'firstname'},
    { text: 'Other Names',  dataIndex: 'othernames' ,flex:1},
    {text: 'Reason', dataIndex: 'exception',flex:3},
    ]
});