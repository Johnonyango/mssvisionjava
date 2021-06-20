Ext.define('MssPhoenix.store.SponsorSubmittedDocuments', {
    extend: 'Ext.data.Store',
    
    model:'MssPhoenix.model.SponsorDocuments',

    alias:'store.sponsorsubmitteddocuments',

    proxy: {
        type: 'ajax',
        url: `${MssPhoenix.model.Session.baseUrl}/api/getsubmitteddocuments/${MssPhoenix.model.Session.getUserId()}/${MssPhoenix.model.Session.getSponsorId()}`,
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    autoLoad: true,
    pageSize: 10,
});