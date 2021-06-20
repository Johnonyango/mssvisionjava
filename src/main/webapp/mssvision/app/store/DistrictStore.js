Ext.define('MssPhoenix.store.DistrictStore', {
    extend: 'Ext.data.Store',
    alias: 'store.districtstore',
    storeId: 'districtstore',

    fields: [
        {name: 'id', type: 'int'},
        {name: 'name'},
        {name: 'code'},
        {name: 'description'}

    ],
    proxy: {
        type: 'ajax',
        url: `${MssPhoenix.model.Session.baseUrl}/api/district`,
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});