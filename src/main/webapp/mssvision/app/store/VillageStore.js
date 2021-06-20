Ext.define('MssPhoenix.store.VillageStore', {
    extend: 'Ext.data.Store',
    alias: 'store.villagestore',
    storeId: 'villagestore',
    fields: [
        {name: 'id', type: 'int'},
        {name: 'name'},
        {name: 'code'},
        {name: 'description'},
        {name: 'authority'}

    ],
    proxy: {
        type: 'ajax',
        url: `${MssPhoenix.model.Session.baseUrl}/api/village/${MssPhoenix.model.Session.getDistrictId()}`,
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
});