Ext.define('MssPhoenix.store.StagedContributions', {
    extend: 'Ext.data.Store',
    alias: 'store.stagedcontributions',

    storeId:'stagedcontributionid',

    model: 'MssPhoenix.model.StagedContribution',
    
    proxy: {
        type: 'ajax',
        url: `${MssPhoenix.model.Session.baseUrl}/api/getStagedContributions/${MssPhoenix.model.Session.getUserId()}`,
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
