Ext.define('MssPhoenix.store.Profile', {
    extend: 'Ext.data.Store',
    alias:'store.profile',
    storeId:'profile',
    model: 'MssPhoenix.model.Profile',

    proxy: {
        type: 'ajax',
        url: `${MssPhoenix.model.Session.baseUrl}/api/profiles`,
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    autoLoad: true,
});