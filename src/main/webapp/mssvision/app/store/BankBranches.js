Ext.define('MssPhoenix.store.BankBranches', {
    extend: 'Ext.data.Store',
    alias: 'store.bankbranches',
    storeId: 'bankbranches',
    fields: [
        {
            name: 'id'
        },
        {
            name: 'name'
        },
        {
            name: 'code'
        },
    ],

    proxy: {
        type: 'ajax',
        url: `${MssPhoenix.model.Session.baseUrl}/api/schemes/getBankBranches/${MssPhoenix.model.Session.getBankBranch()}`,
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },

    autoLoad: true,
    pageSize: 100,
});