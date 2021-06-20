Ext.define('MssPhoenix.store.CrmContributionSummary', {
    extend: 'Ext.data.Store',
    alias: 'store.crmcontributionsummary',
    storeId: 'crmcontributionsummary',

    model: 'MssPhoenix.model.CrmContributionSummary',
   
    proxy: {
        type: 'ajax',
        url: `${MssPhoenix.model.Session.baseUrl}/api/getMemberCumulativeStatement/0/0`,
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },

    // autoLoad:true,
    pageSize:10
});