Ext.define('MssPhoenix.store.MemberImportExceptionStore', {
    extend: 'Ext.data.Store',
    alias: 'store.memberimportexceptionstore',
    storeId: 'memberimportexceptionstore',
    fields: ['exception'],
      
    proxy: {
        type: 'ajax',
        reader: {
            type: 'json',
            rootProperty: 'rows'
        }
    },
    
});

