Ext.define('MssPhoenix.store.Status', {
    extend: 'Ext.data.Store',
    alias: 'store.status',

    fields: ['status'],
    data: [
        { status: "Death in Service"},
        { status: 'Active'},
        { status: 'Deferred'},
    
     
    ]

});
