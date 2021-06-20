let email =MssPhoenix.model.Session.getUserEmail();
let identifier = "EMAIL";
if(email === "" || email === null){
    identifier = "PHONE";
    email = MssPhoenix.model.Session.getCellPhone();
}
Ext.define('MssPhoenix.store.SponsorSchemesEtl', {
    extend: 'Ext.data.Store',
    alias: 'store.sponsorschemesetl',
    fields: [
        {
            name: 'schemeName'
        },
        {
            name: 'sponsorId'
        },
        {
            name: 'sponsorName'
        },
        {
            name: 'sponsorProdNo'
        },
        {
            name: 'sponsorNo'
        },
        {
            name: 'sponsorProfile'
        },
        {
            name: 'billingEmail'
        },
        {
            name: 'claimsEmail'
        },
        {
            name: 'phoneNo'
        },
        {
            name: 'status'
        },
        {
            name: 'ssnitNo'
        },
    ],

    proxy: {
        type: 'ajax',
        url:
            `${MssPhoenix.model.Session.baseUrl}/api/getSponsorDetailsByIdentifier/0/${identifier}/${email}`,
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    autoLoad: true,
    pageSize: 10,
});