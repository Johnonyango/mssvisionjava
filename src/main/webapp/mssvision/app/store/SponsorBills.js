Ext.define('MssPhoenix.store.SponsorBills', {
    extend: 'Ext.data.Store',
   
    alias: 'store.sponsorbills',

    storeId:'sponsorbillsid',

    model: 'MssPhoenix.model.SponsorBill',
    
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
    sorters:[
        {
        property:'id',
        direction:'DESC'
        }
    ],
    autoLoad: true,
    pageSize: 5,
    
});
