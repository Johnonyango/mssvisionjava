Ext.define('MssPhoenix.store.SponsorValidBill', {
    extend: 'Ext.data.Store',

    alias: 'store.validbillimportstore',
    storeId: 'validbillimportstore',

    proxy: {
        type: 'ajax',
      
        reader: {
            type: 'json',
            rootProperty: 'rows'
        },
     
    },
});