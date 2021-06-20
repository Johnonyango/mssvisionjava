Ext.define('MssPhoenix.store.SponsorSchemes', {
    extend: 'Ext.data.Store',
    alias:'store.sponsorschemes',
    fields: [{
            name: 'schemeName'
        },
        {
            name: 'id'
        },
        {
            name: 'email'
        },
        {
            name: 'cellphone'
        },
    ],

    proxy: {
        type: 'ajax',
        url:
            `${MssPhoenix.model.Session.baseUrl}/api/sponsor/schemes/${MssPhoenix.model.Session.getSponsorIdField()}`,
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    autoLoad: true,
    pageSize: 10,
});