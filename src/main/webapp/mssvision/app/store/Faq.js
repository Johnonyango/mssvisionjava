Ext.define('MssPhoenix.store.Faq', {
    extend: 'Ext.data.Store',

    alias: 'store.faq',
    storeId: 'faq',

    fields: [
        {name: 'id'},
        {name: 'title'},
        {name: 'subtitle'},
        {name: 'body'},
        {name: 'idProfile'},
        {name: 'profileName'},
        {name: 'shortDate'},
    ],

    proxy: {
        type: 'ajax',
        url: `${MssPhoenix.model.Session.baseUrl}/api/faq/getAll`,
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    autoLoad: true,
    pageSize: 100,
});