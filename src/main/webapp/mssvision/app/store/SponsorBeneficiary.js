Ext.define('MssPhoenix.store.SponsorBeneficiary', {
    extend: 'Ext.data.Store',

    alias:'store.sponsormemberbeneficiary',
    fields: [
        { name: 'Name', type: 'string' },
        { name: 'Relationship', type: 'string' },
        { name: 'Entitlement', type: 'string' },
    ],

    data: [
        { Name: 'Tony Ngeno', Relationship: 'Brother', Entitlement: '20%' },
        { Name: 'Simon Kimathi', Relationship: 'Sister', Entitlement: '50%' },
        { Name: 'Remy Boys', Relationship: 'Uncle', Entitlement: '30%' }
    ],

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'beneficiaries'
        }
    },
});