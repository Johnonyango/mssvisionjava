Ext.define('MssPhoenix.store.Scheme', {
    extend: 'Ext.data.Store',
    alias: 'store.crmscheme',

    model: 'MssPhoenix.model.CrmScheme',

    data:{items: [
            {schemeId:'s001',name:'SYSTECH PENSION SCHEME'},
            {schemeId:'s002',name:'EMMA ENERGY SCHEME'},
            {schemeId:'s004',name:'KPA SCHEME'},
            {schemeId:'s004',name:'TEST SCHEME'}
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