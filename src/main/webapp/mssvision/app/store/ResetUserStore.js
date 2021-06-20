Ext.define('MssPhoenix.store.ResetUserStore',  {
    extend: 'Ext.data.Store',    
    alias:'store.resetuserstore',      
    controller:'userscontroller', 
    storeId:'resetuserstore',    


    proxy: {
        type: 'ajax',
        url: `${MssPhoenix.model.Session.baseUrl}/api/resetUser`,
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