Ext.define('MssPhoenix.store.YesNo', {
    extend: 'Ext.data.Store',
    alias:'store.yesno',
    fields:['name','value'],
    data : [
        {name: 'Yes',    value: true},
        {name: 'No',    value: false},
    ]
});