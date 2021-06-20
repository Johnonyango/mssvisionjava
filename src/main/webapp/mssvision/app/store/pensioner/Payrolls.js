Ext.define('MssPhoenix.store.pensioner.Payrolls', {
    extend: 'Ext.data.Store',

    model: 'MssPhoenix.model.pensioner.Payrolls',

    alias: 'store.pensionerpayrolls',


    proxy: {
        type: 'ajax',
        url:`${MssPhoenix.model.Session.baseUrl}/api/getLastPayrollByPensioner/${MssPhoenix.model.Session.getPensionerNo()}/${MssPhoenix.model.Session.getSchemeId()}`,
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