Ext.define('MssPhoenix.store.Tpfa', {
    extend: 'Ext.data.Store',

    alias: 'store.sponsormembertpfa',
    storeId: 'sponsormembertpfa',

    model: 'MssPhoenix.model.Tpfa',
 
    proxy: {
        type: 'ajax',
        url: `${MssPhoenix.model.Session.baseUrl}/api/getMemberTpfa/${MssPhoenix.model.Session.getSchemeId()}/${MssPhoenix.model.Session.getSponsorIdField()}/ALL`,
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