Ext.define('MssPhoenix.store.AccountingPeriods', {
    extend: 'Ext.data.Store',

    fields:['id','name'],
    alias: 'store.accountingperiods',
    proxy: {
        type: 'ajax',
        url: `${MssPhoenix.model.Session.baseUrl}/api/getAllAccountingPeriods/${MssPhoenix.model.Session.getUserId()}/${MssPhoenix.model.Session.getSchemeId()}`,
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    autoLoad: true,
    pageSize: 30,
});