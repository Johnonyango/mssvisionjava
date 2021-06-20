Ext.define('MssPhoenix.store.pensioner.PayrollDeductions', {
    extend: 'Ext.data.Store',

    alias: 'store.pensionerdeductions',

    model: 'MssPhoenix.model.pensioner.PayrollDeductions',

    proxy: {
        type: 'ajax',
        url:`${MssPhoenix.model.Session.baseUrl}/api/getPensionerDeductions/${MssPhoenix.model.Session.getPensionerNo()}/${MssPhoenix.model.Session.getSchemeId()}`,
        cors: true,
        useDefaultXhrHeader : false,
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    autoLoad: true,
    pageSize: 10,
});