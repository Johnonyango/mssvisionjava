Ext.define('MssPhoenix.store.PoScheme', {
    extend: 'Ext.data.Store',
    alias: 'store.poscheme',
    storeId: 'poscheme',

    model: 'MssPhoenix.model.Scheme',

    proxy: {
        type: 'ajax',
        url: `${MssPhoenix.model.Session.baseUrl}/api/getPrincipalOfficerSchemes/${MssPhoenix.model.Session.getUserId()}/${MssPhoenix.model.Session.getMemberId()}`,
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },

    autoLoad:true,
    pageSize:10
});