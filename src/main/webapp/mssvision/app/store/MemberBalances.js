Ext.define('MssPhoenix.store.MemberBalances', {
    extend: 'Ext.data.Store',

    model: 'MssPhoenix.model.MemberBalances',
    alias: 'store.memberbalances',
    storeId: 'memberbalances',
    proxy: {
        type: 'ajax',
        url: `${MssPhoenix.model.Session.baseUrl}/api/getBalances/${MssPhoenix.model.Session.getUserId()}/${MssPhoenix.model.Session.getMemberId()}/-1`,
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },

    autoLoad: true,
    pageSize: 10,
});