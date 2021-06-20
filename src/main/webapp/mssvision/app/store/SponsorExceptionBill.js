Ext.define('MssPhoenix.store.SponsorExceptionBill', {
    extend: 'Ext.data.Store',

    alias: 'store.exceptionbillimportstore',
    storeId: 'exceptionbillimportstore',

    proxy: {
        type: 'ajax',
      
        reader: {
            type: 'json',
            rootProperty: 'rows'
        },
     
    },
});