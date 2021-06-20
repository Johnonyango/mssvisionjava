Ext.define('MssPhoenix.store.admin.adminstore',  {
    extend: 'Ext.data.Store',    
    alias:'store.adminstore',  
    controller:'adminscontroller', 
    storeId:'adminstore',
    
   

    proxy: {
        type: 'ajax',
        url: `${MssPhoenix.model.Session.baseUrl}/api/getAdminDetailsAll`,
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