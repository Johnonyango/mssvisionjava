Ext.define('MssPhoenix.store.Pensioner.Certificate', {
    extend: 'Ext.data.Store',

    model: 'MssPhoenix.model.pensioner.Certificate',

    alias: 'store.pensionercertificate',

    proxy: {
        type: 'ajax',
        url: `${MssPhoenix.model.Session.baseUrl}/api/getPensionerCOE/${MssPhoenix.model.Session.getUserId()}/${MssPhoenix.model.Session.getPensionerNo()}`,

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