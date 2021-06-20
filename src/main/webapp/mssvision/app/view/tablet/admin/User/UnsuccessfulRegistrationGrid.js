Ext.define('MssPhoenix.view.tablet.admin.User.UnsuccessfulRegistrationGrid', {
    extend: 'MssPhoenix.view.widgets.Table',
    xtype: 'unsuccessfulregistrationgrid',
    reference: 'unsuccessfulregistrationgrid',

    height:700,

    store: {
        type: 'exceptionbillimportstore'
    },
    columns: [
        { text: 'Identifier',  dataIndex: 'identifier', flex: 1},
        { text: 'Exception',  dataIndex: 'message',flex:2,}
    ],
});