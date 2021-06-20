Ext.define('MssPhoenix.store.MaritalStatus', {
    extend: 'Ext.data.Store',
    alias: 'store.maritalstatus',

    model: 'MssPhoenix.model.MaritalStatus',

    data:{items: [
            {id:'M',name:'Married'},
            {id:'S',name:'Single'},
            {id:'D',name:'Divorced'},
            {id:'W',name:'Widow'}
        ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    },
    //for remote data loading

    // proxy: {
    //     type: 'ajax',
    //     url: 'data/form/states_remote.php',
    //     reader: {
    //         type: 'array',
    //         rootProperty: 'data'
    //     }
    // }
});