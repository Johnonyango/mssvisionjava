Ext.define('MssPhoenix.store.Scheme', {
    extend: 'Ext.data.Store',
    alias: 'store.scheme',
    storeId: 'scheme',

    model: 'MssPhoenix.model.Scheme',

    proxy: {
        type: 'ajax',
        url: `${MssPhoenix.model.Session.baseUrl}/api/scheme/getAllSchemes/${MssPhoenix.model.Session.getUserId()}`,
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },

    autoLoad:true,
    pageSize:10
});