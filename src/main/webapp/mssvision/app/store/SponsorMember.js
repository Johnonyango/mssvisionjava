Ext.define('MssPhoenix.store.SponsorMember', {
    extend: 'Ext.data.Store',

    alias: 'store.sponsormember',

    storeId:'sponsormemberid',

    model: 'MssPhoenix.model.SponsorMember',

    proxy: {
        
        type: 'ajax',
        url: `${MssPhoenix.model.Session.baseUrl}/api/get-sponsor-member-listing/${MssPhoenix.model.Session.getUserId()}/${MssPhoenix.model.Session.getSponsorIdField()}/${MssPhoenix.model.Session.getUserRole()}/${MssPhoenix.model.Session.getSchemeId()}`,
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
