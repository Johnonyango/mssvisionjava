Ext.define('MssPhoenix.store.activityLog', {
    extend: 'Ext.data.Store',

    alias: 'store.activitylog',

    model: 'MssPhoenix.model.activityLog',


    proxy: {
        type: 'ajax',
        url: `${MssPhoenix.model.Session.baseUrl}/api/activityTrail/${MssPhoenix.model.Session.getUserId()}`,
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
    pageSize: 10,
});


