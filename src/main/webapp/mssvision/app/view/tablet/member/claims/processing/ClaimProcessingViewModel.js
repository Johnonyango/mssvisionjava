Ext.define('MssPhoenix.view.tablet.member.claims.processing.ClaimProcessingViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.claimprocessingviewmodel',

    data: {
        memberName: '',
        memberNo: '',
        dob: '',
        memberEmail: '',
        schemeId: '',
        sponsorId: 0,
        currentCreditFund: 0.00,
        width: 600,
        height: 480,
    },
});