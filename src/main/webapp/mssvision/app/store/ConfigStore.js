Ext.define('MssPhoenix.store.ConfigStore', {
    extend: 'Ext.data.Store',
    alias:'store.configstore',  
    controller:'configscontroller', 
    storeId:'configstore',
    proxy: {
        type: 'ajax',
        url: `${MssPhoenix.model.Session.baseUrl}/api/getAllConfigs`,
        cors: true,
        useDefaultXhrHeader : false,
        reader: {
            type: 'json',
            rootProperty: 'data'
        }

             },
    autoLoad: true,
    pageSize: 2,

});