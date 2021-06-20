Ext.define('MssPhoenix.store.sessionstore',  {
    extend: 'Ext.data.Store',    
    alias:'store.sessionstore',    
  
    

    proxy: {
        type: 'ajax',
        url: `${MssPhoenix.model.Session.baseUrl}/api/getAllSessions`,
        cors: true,
        useDefaultXhrHeader: false,
        reader: {
            type: 'json',
            rootProperty: 'data',
        }

             },
    autoLoad: true,
    pageSize: 2,
});