Ext.define('MssPhoenix.store.MemberRecentContributions', {
    extend: 'Ext.data.Store',
    alias: 'store.memberrecentcontributions',
    model: 'MssPhoenix.model.MemberContributions',

    proxy: {
        type: 'ajax',
        url: `${MssPhoenix.model.Session.baseUrl}/api/getRecentContributions/${MssPhoenix.model.Session.getUserId()}/${MssPhoenix.model.Session.getMemberId()}/${MssPhoenix.model.Session.getSchemeId()}`,
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },

    autoLoad: true,
    pageSize: 10
});