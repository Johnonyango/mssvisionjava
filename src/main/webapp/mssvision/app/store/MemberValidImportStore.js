  Ext.define('MssPhoenix.store.MemberValidImportStore', {
    extend: 'Ext.data.Store',
    alias: 'store.membervalidimportstore',
    storeId: 'membervalidimportstore',

    fields: ['name', 'email', 'phone'],
      
    proxy: {
        type: 'ajax',
      
        reader: {
            type: 'json',
            rootProperty: 'rows'
        },
     
    },
    
});



