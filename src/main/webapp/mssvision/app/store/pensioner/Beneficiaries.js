Ext.define('MssPhoenix.store.pensioner.Beneficiaries', {
    extend: 'Ext.data.Store',

    model:'MssPhoenix.model.pensioner.Beneficiaries',
    
    alias:'store.pensionerbeneficiary',
    storeId:'pensionerbeneficiary',    

    proxy: {
        type: 'ajax',       
         url: `${MssPhoenix.model.Session.baseUrl}/api/getBeneficiaries/${MssPhoenix.model.Session.getUserId()}/${MssPhoenix.model.Session.getPensionerId()}`,
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