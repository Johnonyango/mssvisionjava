Ext.define('MssPhoenix.store.AdminSentDocumentsStore', {
    extend: 'Ext.data.Store',
       
    alias:'store.adminsentdocumentsstore',    
    //fields:[ 'name', 'email', 'phone'],
    data: [
        { viewedBy: 'CRM', sentTo: 'Sponsor',filePriority: 'informative',descriptions: 'Happy Holidays' },
       
        
    ],
   

    proxy: {
        type:'memory',
        reader: {
            type: 'json',
            rootProperty: 'users'
        }

             },
    autoLoad: true,
    pageSize: 2,
});