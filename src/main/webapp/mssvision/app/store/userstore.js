Ext.define('MssPhoenix.store.userstore',  {
    extend: 'Ext.data.Store',    
    alias:'store.userstore',      
    controller:'userscontroller', 
    storeId:'userstore',    


    proxy: {
        type: 'ajax',
        url: `${MssPhoenix.model.Session.baseUrl}/api/getAllUsers`,
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