Ext.define('MssPhoenix.store.TrueFalse', {
    extend: 'Ext.data.Store',
    alias: 'store.truefalse',
    fields: ['name', 'value'],
    data: [
        {name: 'True', value: true},
        {name: 'False', value: false},
    ]
});