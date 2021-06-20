Ext.define('MssPhoenix.view.tablet.member.claims.InitaitePreExitWithdrawalController', {
    extend: 'MssPhoenix.view.tablet.member.claims.ClaimsController',
    alias: 'controller.memberinitaitepreexitwithdrawalcontroller',
    /**
     * Called when the view is created
     * 1.    Personal Details
     * 2.    Ground Of benefits
     * 3.    Documents
     * 4.    Payment Options
     * 5.    Vesting and Liabilities
     * 6.    Bank Details 
     */
    init: function () {},

    onCancelBtnClick: function () {
        let me = this;
        me.getView().destroy();
    },
});