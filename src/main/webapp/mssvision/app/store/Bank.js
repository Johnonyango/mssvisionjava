Ext.define('MssPhoenix.store.Bank', {
    extend: 'Ext.data.Store',

    alias: 'store.bank',

    fields: [
        {
            name: 'id'
        },
        {
            name: 'name'
        },
        {
            name: 'code'
        },
    ],

    proxy: {
        type: 'ajax',
        url: `${MssPhoenix.model.Session.baseUrl}/api/schemes/getAllBanks`,
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    autoLoad: true,
    pageSize: 100,
});