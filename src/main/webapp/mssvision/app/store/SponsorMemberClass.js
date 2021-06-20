var sponsorId=0;
var role = MssPhoenix.model.Session.getUserRole()
if (role === "PRINCIPAL OFFICER") {
    sponsorId=MssPhoenix.model.Session.getItemFromStorage('sponsorId');
} else {
    sponsorId=MssPhoenix.model.Session.getSponsorIdField();
}
Ext.define('MssPhoenix.store.SponsorMemberClass', {
    extend: 'Ext.data.Store',
    alias:'store.memberclass',
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
            `${MssPhoenix.model.Session.baseUrl}/api/get-sponsor-member-classes/${sponsorId}`,
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    autoLoad: true,
    pageSize: 10,
});