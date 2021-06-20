Ext.define('MssPhoenix.store.MemberContributions', {
    extend: 'Ext.data.Store',
    alias: 'store.membercontributions',
    model: 'MssPhoenix.model.MemberContributions',
    storeId: 'membercontributions',
    proxy: {
        type: 'ajax',
        // url: `${MssPhoenix.model.Session.baseUrl}/api/getContributions/${MssPhoenix.model.Session.getUserId()}/${MssPhoenix.model.Session.getMemberId()}/${MssPhoenix.model.Session.getSchemeId()}`,
        url: `${MssPhoenix.model.Session.baseUrl}/api/filterContributions/${MssPhoenix.model.Session.getUserId()}/${MssPhoenix.model.Session.getMemberId()}/01%2F01%2F2010/today`,
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    autoLoad: true,
    pageSize: 10,
});