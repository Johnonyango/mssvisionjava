Ext.define('MssPhoenix.store.SponsorSchemeApproval', {
    extend: 'Ext.data.Store',
    alias:'store.sponsorapproval',
    storeId:'sponsorapprovalid',
    fields: [
        {
            name: 'id',
        }, 
        {name: 'documentId.id', mapping: 'documentId.id'},
        {
            name: 'docName',
            type: 'string'
        }, {
            name: 'docNum',
            type: 'string'
        }, {
            name: 'memberId',
            type: 'string'
        }
    ],



    proxy: {
        type: 'ajax',
        url:`${MssPhoenix.model.Session.baseUrl}/api/documents/getDocumentsForApproval`,
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },

    autoLoad: true,
    pageSize: 10
});