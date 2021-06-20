Ext.define('MssPhoenix.store.Gender', {
    extend: 'Ext.data.Store',
    alias: 'store.gender',

    model: 'MssPhoenix.model.Gender',

    data:{items: [
            {id:'M',name:'MALE'},
            {id:'F',name:'FEMALE'},
            {id:'O',name:'OTHER'}
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