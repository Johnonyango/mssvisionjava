Ext.define('MssPhoenix.store.RegisteredMembers', {
    extend: 'Ext.data.Store',
    model: 'MssPhoenix.model.RegisteredMembers',

    alias: 'store.registeredmembers',
    storeId: 'registeredmembers',

    proxy: {
        type: 'ajax',
        url: `${MssPhoenix.model.Session.baseUrl}/api/register/members`,
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    autoLoad: true,
    pageSize: 100
});