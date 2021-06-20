Ext.define('MssPhoenix.store.StagedBeneficiaries', {
    extend: 'Ext.data.Store',

    alias: 'store.stagedbeneficiaries',
    storeId: 'stagedbeneficiaries',

    fields: [
        {name: 'id'},
        {name: 'name', mapping: 'details.name'},
        {name: 'benMemberId', mapping: 'details.benMemberId'},
        {name: 'memberNo', mapping: 'details.memberNo'},
        {name: 'benRelationshipType', mapping: 'details.benRelationshipType'},
        {name: 'benLumpsumEntitlement', mapping: 'details.benLumpsumEntitlement'},
        {name: 'shortCreatedAt'},
    ],

    proxy: {
        type: 'ajax',
        url: `${MssPhoenix.model.Session.baseUrl}/api/getStagedBeneficiaries/${MssPhoenix.model.Session.getUserId()}`,
        cors: true,
        useDefaultXhrHeader: false,
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    autoLoad: true,
    pageSize: 5,

});