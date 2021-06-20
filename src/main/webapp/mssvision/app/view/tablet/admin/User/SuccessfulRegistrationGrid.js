Ext.define('MssPhoenix.view.tablet.admin.User.SuccessfulRegistrationGrid', {
    extend: 'MssPhoenix.view.widgets.Table',
    xtype: 'successfulregistrationgrid',
    reference: 'successfulregistrationgrid',

    height:300,

    store: {
        type: 'validbillimportstore'
    },
    columns: [
        { text: 'Identifier',  dataIndex: 'identifier', flex: 1},
        { text: 'Message',  dataIndex: 'message',flex:2,}    
    ],
});