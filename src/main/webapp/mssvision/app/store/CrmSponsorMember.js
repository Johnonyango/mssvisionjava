Ext.define('MssPhoenix.store.CrmSponsorMember', {
    extend: 'Ext.data.Store',
    alias: 'store.crmsponsormember',
    storeId: 'crmsponsormember',
    model: 'MssPhoenix.model.CrmSponsorMember',

    proxy: {
        type: 'ajax',
        url: `${MssPhoenix.model.Session.baseUrl}/api/sponsor/getCountOfMembers/${MssPhoenix.model.Session.getMemberId()}`,
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },

    autoLoad:true,

});