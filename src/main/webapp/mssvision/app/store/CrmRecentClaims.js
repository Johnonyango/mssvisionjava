Ext.define('MssPhoenix.store.CrmRecentClaims', {
    extend: 'Ext.data.Store',

    model:'MssPhoenix.model.CrmClaims',

    alias:'store.crmrecentclaims',
    storeId:'crmrecentclaims',

    proxy: {
        type: 'ajax',
        url:`${MssPhoenix.model.Session.baseUrl}/api/benefitRequest/getRecentClaims/0/5`,
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    autoLoad: true,

});