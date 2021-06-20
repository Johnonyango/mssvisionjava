Ext.define('MssPhoenix.store.TraditionalAuthorityStore', {
    extend: 'Ext.data.Store',
    alias: 'store.traditionalauthoritystore',
    storeId: 'traditionalauthoritystore',
    fields: [
        { name: 'id', type: 'int' },
        { name: 'name' },
        { name: 'code' },
        { name: 'description'}
    ],
    proxy: {
        type: 'ajax',
        url: `${MssPhoenix.model.Session.baseUrl}/api/traditionalAuthority/${MssPhoenix.model.Session.getDistrictId()}`,
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});