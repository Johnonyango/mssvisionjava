Ext.define('MssPhoenix.store.MemberClaims', {
    extend: 'Ext.data.Store',
    model: 'MssPhoenix.model.MemberClaims',

    alias: 'store.memberclaims',

    proxy: {
        type: 'ajax',
        url: `${MssPhoenix.model.Session.baseUrl}/api/benefitRequest/getMemberBenefitRequests/${MssPhoenix.model.Session.getUserId()}/${MssPhoenix.model.Session.getMemberId()}`,
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },

    storeId: 'memberclaims',
    autoLoad: true,
    pageSize: 10,
});