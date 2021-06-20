Ext.define('MssPhoenix.view.tablet.sponsor.members.MemberExceptionUpdateGrid', {
    extend: 'MssPhoenix.view.widgets.Table',
    xtype: 'memberexceptionupdategrid',
    reference: 'memberexceptionupdategrid',

    store: {
        type: 'memberexceptionupdatestore'
    },
    columns: [
        { text: 'Surname',  dataIndex: 'surname', flex:1},
    
    ],
});