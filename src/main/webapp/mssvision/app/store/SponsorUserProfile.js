Ext.define('MssPhoenix.store.SponsorUserProfile', {
    extend: 'Ext.data.Store',
    alias: 'store.permissions',

    model: 'MssPhoenix.model.SponsorUserProfile',
    
    proxy: {
        type: 'ajax',
        url: `${MssPhoenix.model.Session.baseUrl}/api/profiles`,
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    autoLoad: true,

    pageSize: 25,
});
