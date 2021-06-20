Ext.define('MssPhoenix.store.SponsorUser', {
    extend: 'Ext.data.Store',

    storeId:'sponsoruser',

    alias: 'store.sponsoruser',

    model: 'MssPhoenix.model.SponsorUser',

   
    proxy: {
        type: 'ajax',
        url: `${MssPhoenix.model.Session.baseUrl}/api/getAllUsers/${MssPhoenix.model.Session.getUserId()}/${MssPhoenix.model.Session.getSponsorIdField()}`,
        cors:true,
        useDefaultXhrHeader : false,
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    autoLoad: true,
    pageSize: 5,
    
});
