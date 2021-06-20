Ext.define('MssPhoenix.store.TruevFalseStore', {
    extend: 'Ext.data.Store',
    alias: 'truevfalsestore',
    model:'MssPhoenix.model.TruevFalseModel',
   data : [
        {name: 'True'},
        {name: 'False'},
        
    ]
    
});