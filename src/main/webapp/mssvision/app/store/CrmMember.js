Ext.define('MssPhoenix.store.CrmMember', {
    extend: 'Ext.data.Store',

    alias: 'store.crmmember',
    storeId: 'crmmember',

    model: 'MssPhoenix.model.CrmMember',

    proxy: {
        type: 'ajax',
        url: `${MssPhoenix.model.Session.baseUrl}/api/sponsor/getMemberListing/0/SPONSOR/0`,
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },

    // autoLoad:true,
    pageSize:10
});
