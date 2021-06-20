Ext.define('MssPhoenix.store.MobileMoneyConfigStore', {
    extend: 'Ext.data.Store',
    alias:'store.mobilemoneyconfigstore',  
    controller:'mobilemoneyconfigscontroller', 
    storeId:'mobilemoneyconfigstore',
    proxy: {
        type: 'ajax',
        url: `${MssPhoenix.model.Session.baseUrl}/api/getAllMobileMoneyConfigs`,
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