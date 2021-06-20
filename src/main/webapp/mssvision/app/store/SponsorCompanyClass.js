var sponsorId;
var role = MssPhoenix.model.Session.getUserRole();
if (role === "PRINCIPAL OFFICER") {
    sponsorId=MssPhoenix.model.Session.getItemFromStorage('sponsorId');
} else {
    sponsorId=MssPhoenix.model.Session.getSponsorIdField();
}
Ext.define('MssPhoenix.store.SponsorCompanyClass', {
    extend: 'Ext.data.Store',
    alias:'store.companyclass',
    fields: [{
            name: 'name'
        },
        {
            name: 'id'
        },
        {
            name: 'code'
        },
     
    ],

    proxy: {
        type: 'ajax',
        url:
            `${MssPhoenix.model.Session.baseUrl}/api/get-sponsor-company-cost-centres/${sponsorId}`,
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    autoLoad: true,
    pageSize: 10,
});