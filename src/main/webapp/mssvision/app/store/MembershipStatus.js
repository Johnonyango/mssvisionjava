Ext.define('MssPhoenix.store.MembershipStatus', {
    extend: 'Ext.data.Store',
    alias: 'store.memberstatus',

    model: 'MssPhoenix.model.MemberStatus',

    data:{items: [
            {id:'1',name:'ACTIVE'},
           
            
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