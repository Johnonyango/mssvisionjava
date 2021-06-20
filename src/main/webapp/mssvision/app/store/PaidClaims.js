Ext.define('MssPhoenix.store.PaidClaims', {
    extend: 'Ext.data.Store',

    model: 'MssPhoenix.model.PoClaims',

    alias: 'store.paidclaims',
    storeId: 'paidclaims',

    sorters: [{
        property: 'id',
        direction: 'DESC'
    }],

    proxy: {
        type: 'ajax',
        url: `${MssPhoenix.model.Session.baseUrl}/api/getPaidClaims/${MssPhoenix.model.Session.getUserId()}6603/6607?start=0&size=10`,
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    autoLoad: true,
    pageSize: 10

});