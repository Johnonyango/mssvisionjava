Ext.define('MssPhoenix.store.pensioner.BeneficiaresChart', {
    extend: 'Ext.data.Store',

    model:'MssPhoenix.model.pensioner.Beneficiaries',

    alias: 'store.pensionerbeneficiarychart',


    proxy: {
        type: 'ajax',

        url: `${MssPhoenix.model.Session.baseUrl}/api/getPensionerBeneficiaries/${MssPhoenix.model.Session.getPensionerId()}`,
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    autoLoad: true,
    pageSize: 10,

});

