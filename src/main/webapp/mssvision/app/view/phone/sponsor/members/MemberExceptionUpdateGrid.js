Ext.define('MssPhoenix.view.phone.sponsor.members.MemberExceptionUpdateGrid', {
    extend: 'MssPhoenix.view.widgets.Table',
    xtype: 'memberexceptionupdategridphone',
    reference: 'memberexceptionupdategrid',

    store: {
        type: 'memberexceptionupdatestore'
    },
    columns: [
        { text: 'Surname',  dataIndex: 'surname', flex:1},
    
    ],
});