Ext.define('MssPhoenix.store.CrmClaims', {
    extend: 'Ext.data.Store',

    model:'MssPhoenix.model.CrmClaims',

    alias:'store.crmclaims',
    storeId:'crmclaims',

    sorters: [{
        property: 'id',
        direction: 'DESC'
    }],

    proxy: {
        type: 'ajax',
        url:`${MssPhoenix.model.Session.baseUrl}/api/benefitRequest/getAllUnAuthorizedBenefits/${MssPhoenix.model.Session.getUserId()}`,
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    autoLoad: true,
    pageSize:10

});