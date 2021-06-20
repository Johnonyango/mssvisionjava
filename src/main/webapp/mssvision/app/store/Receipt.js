Ext.define('MssPhoenix.store.Receipt', {
    extend: 'Ext.data.Store',

    alias: 'store.sponsorreceipt',
    storeId: 'sponsorreceipt',

    model: 'MssPhoenix.model.Receipt',

    proxy: {
        type: 'ajax',
        url: `${MssPhoenix.model.Session.baseUrl}/api/get-sponsor-contributions-receipts/${MssPhoenix.model.Session.getUserId()}/${MssPhoenix.model.Session.getSchemeId()}/${MssPhoenix.model.Session.getSponsorIdField()}`,
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
