Ext.define('MssPhoenix.store.CrmSponsor', {
    extend: 'Ext.data.Store',
    alias: 'store.crmsponsor',
    storeId: 'crmsponsor',

    model: 'MssPhoenix.model.CrmSponsor',

    proxy: {
        type: 'ajax',
        url: `${MssPhoenix.model.Session.baseUrl}/api/sponsor/getSponsorsByCrmId/${MssPhoenix.model.Session.getMemberId()}`,
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },

    autoLoad:true,
    pageSize:10
});