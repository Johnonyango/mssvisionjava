Ext.define('MssPhoenix.store.SponsorDetails', {
    extend: 'Ext.data.Store',
    alias: 'store.sponsordetails',
    storeId:'sponsordetailsid',
    model: 'MssPhoenix.model.SponsorDetails',
    proxy: {
        type: 'ajax',
        url:`${MssPhoenix.model.Session.baseUrl}/api/get-sponsor-details/${MssPhoenix.model.Session.getUserId()}/${MssPhoenix.model.Session.getSponsorId()}`,
        cors:true,
        useDefaultXhrHeader : false,
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
});