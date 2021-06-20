Ext.define('MssPhoenix.store.SponsorClaim', {
    extend: 'Ext.data.Store',

    alias: 'store.sponsorclaim',
    
    storeId:'sponsorclaim',



    model: 'MssPhoenix.model.SponsorClaim',

    proxy: {
        type: 'ajax',
        url:`${MssPhoenix.model.Session.baseUrl}/api/benefitRequest/getBenefitsBySchemeId/${MssPhoenix.model.Session.getUserId()}/${MssPhoenix.model.Session.getSchemeId()}`,
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },

    sorters:[
        {
        property:'id',
        direction:'DESC'
        }
    ],
    autoLoad: true,

    pageSize: 25,
});
