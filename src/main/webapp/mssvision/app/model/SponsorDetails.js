Ext.define('MssPhoenix.model.SponsorDetails', {
    extend: 'MssPhoenix.model.Base',

    fields: [
        { name: 'id', type: 'integer' },
        { name: 'name', type: 'string' },
        { name: 'employerRefNo', type: 'string' },
        { name: 'postalAddress', type: 'string' },
        { name: 'schemeName', type: 'string' },
        { name: 'email', type: 'string' },
        { name: 'phone', type: 'string'},
        { name: 'crm', type: 'string'},
        { name: 'crmemail', type: 'string'},
        { name: 'country', type: 'string'},
        { name: 'region', type: 'string'},
        { name: 'product', type: 'string'},
        
        
        ]
});