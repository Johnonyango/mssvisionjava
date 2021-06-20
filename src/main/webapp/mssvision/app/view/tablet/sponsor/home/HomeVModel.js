Ext.define('MssPhoenix.view.tablet.sponsor.home.HomeVModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.sponsorhomevmodel',
    data: {
        sponsorMemberCount:null,
        currentYear:null,
        sponsorMemberandPensionerCounts:null,
        sponsorDashboard:null,
        etlClient:"none",
        otherClients:"none"
     }
     
});