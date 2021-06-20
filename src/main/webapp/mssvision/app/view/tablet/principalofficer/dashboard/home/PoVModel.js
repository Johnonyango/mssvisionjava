Ext.define('MssPhoenix.view.tablet.principalofficer.dashboard.home.PoVModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.povmodel',
    data: {
        sponsorMemberCount: 0,
        currentYear: 2021,
        sponsorMemberandPensionerCounts: 0,
        leavers: 0,
        billsMenuActivated: "block",
        receiptsMenuActivated: "block",
        membersMenuActivated: "block",
        claimsMenuActivated: "block"
    }
});