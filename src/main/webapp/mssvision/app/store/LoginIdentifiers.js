Ext.define('MssPhoenix.store.LoginIdentifiers', {
    extend: 'Ext.data.Store',
    alias: 'store.LoginIdentifiers',

    fields: [
        {name: 'name'},
        {name: 'loginIdentifierName'},
    ],

    data: [
        {name: 'PHONE', loginIdentifierName: 'Phone'},
        {name: 'EMAIL', loginIdentifierName: 'Email'},
        {name: 'MEMBER_NO', loginIdentifierName: 'Member Number'},
        {name: 'STAFF_NO', loginIdentifierName: 'Staff Number'},
        {name: 'SPONSOR_NO', loginIdentifierName: 'Sponsor Number'},
        {name: 'ID_NO', loginIdentifierName: 'National Number'},
        {name: 'NSSN', loginIdentifierName: 'NSSN'},
    ]
});