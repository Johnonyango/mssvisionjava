Ext.define('MssPhoenix.store.MemberMissingDocuments', {
    extend: 'Ext.data.Store',

    model:'MssPhoenix.model.MemberDocuments',
    alias:'store.membermissingdocuments',

    proxy: {
        type: 'ajax',
        url: `${MssPhoenix.model.Session.baseUrl}/api/getmissingdocuments/${MssPhoenix.model.Session.getUserId()}/${MssPhoenix.model.Session.getMemberId()}`,
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    autoLoad: true,
    pageSize: 10,

});