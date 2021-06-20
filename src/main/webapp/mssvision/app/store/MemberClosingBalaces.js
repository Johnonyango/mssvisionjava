Ext.define('MssPhoenix.store.MemberClosingBalaces', {
    extend: 'Ext.data.Store',

    alias: 'store.memberclosingbalances',
    model: 'MssPhoenix.model.MemberBalances',
    proxy: {
        type: 'ajax',
        url: `${MssPhoenix.model.Session.baseUrl}/api/getBalances/${MssPhoenix.model.Session.getUserId()}/${MssPhoenix.model.Session.getMemberId()}/5`,
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },

    autoLoad: true,
    pageSize: 5,

    // model: 'MssPhoenix.model.MemberClosingBalances',
    // proxy: {
    //     type: 'ajax',
    //     url: `${MssPhoenix.model.Session.baseUrl}/api/getClosingBalances/${MssPhoenix.model.Session.getMemberId()}`,
    //     reader: {
    //         type: 'json',
    //         rootProperty: 'data'
    //     }
    // },

    // autoLoad: true,
    // pageSize: 10,
});