Ext.define('MssPhoenix.store.MemberProducts', {
    extend: 'Ext.data.Store',


    alias: 'store.memberproducts',

    proxy: {
        type: 'ajax',
        url: `${MssPhoenix.model.Session.baseUrl}/api/getMemberProducts/${MssPhoenix.model.Session.getUserLogin()}/${MssPhoenix.model.Session.getSchemeId()}`,
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },

    storeId:'memberproducts',
    autoLoad: true,
    pageSize: 10,
});