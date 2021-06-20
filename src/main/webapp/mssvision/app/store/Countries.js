Ext.define('MssPhoenix.store.Countries', {
    extend: 'Ext.data.Store',

    alias:'store.countries',
    storeId:'countries',

    fields: [
        {name: 'name'},
    ],

    proxy: {
        type: 'ajax',
        url:`${MssPhoenix.model.Session.baseUrl}/api/countries`,
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    autoLoad: true,
    pageSize:10
});