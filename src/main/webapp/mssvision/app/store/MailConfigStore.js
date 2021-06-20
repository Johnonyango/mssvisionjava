Ext.define('MssPhoenix.store.MailConfigStore', {
    extend: 'Ext.data.Store',    
    alias:'store.mailconfigstore',  
    controller:'mailconfigscontroller', 
    storeId:'mailconfigstore',
    proxy: {
        type: 'ajax',
        url: `${MssPhoenix.model.Session.baseUrl}/api/getAllMailConfigs`,
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