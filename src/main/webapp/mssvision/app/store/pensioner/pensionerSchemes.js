Ext.define('MssPhoenix.store.pensioner.pensionerSchemes', {
    extend: 'Ext.data.Store',
    model: 'MssPhoenix.model.pensioner.PensionerScheme',
    alias: "store.pensionerschemes",
    storeId: "pensionerschemes",

    proxy: {
        type: 'ajax',
        url:
            `${MssPhoenix.model.Session.baseUrl}/api/getmemberschemes/${MssPhoenix.model.Session.getUserId()}/EMAIL/${MssPhoenix.model.Session.getUserEmail()}/PENSIONER`,
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    autoLoad: true,
    pageSize: 10,

});