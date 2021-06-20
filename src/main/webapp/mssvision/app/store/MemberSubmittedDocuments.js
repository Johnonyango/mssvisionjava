Ext.define('MssPhoenix.store.MemberSubmittedDocuments', {
    extend: 'Ext.data.Store',
    
    model:'MssPhoenix.model.MemberDocuments',

    alias:'store.membersubmitteddocuments',

    proxy: {
        type: 'ajax',
        url: `${MssPhoenix.model.Session.baseUrl}/api/getsubmitteddocuments/${MssPhoenix.model.Session.getUserId()}/${MssPhoenix.model.Session.getMemberId()}`,
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    autoLoad: true,
    pageSize: 10,
});