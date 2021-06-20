Ext.define('MssPhoenix.store.SponsorBillChartSummary', {
    extend: 'Ext.data.Store',
    alias: 'store.sponsorcontributionchartsummary',
    
    model: 'MssPhoenix.model.SponsorChart',
    

    proxy: {
        type: 'ajax',
        url: `${MssPhoenix.model.Session.baseUrl}/api/get-contribution-bills-summary/${MssPhoenix.model.Session.getUserId()}/${MssPhoenix.model.Session.getSchemeId()}/${MssPhoenix.model.Session.getSponsorIdField()}`,
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