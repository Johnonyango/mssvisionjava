Ext.define('MssPhoenix.store.SponsorContributionChart', {
    extend: 'Ext.data.Store',
    alias: 'store.sponsorcontributionchart',
    
    model: 'MssPhoenix.model.SponsorChart',
    

    proxy: {
        type: 'ajax',
        url: `${MssPhoenix.model.Session.baseUrl}/api/get-contribution-bills-per-sponsor/${MssPhoenix.model.Session.getUserId()}/${MssPhoenix.model.Session.getSchemeId()}/${MssPhoenix.model.Session.getSponsorIdField()}`,
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