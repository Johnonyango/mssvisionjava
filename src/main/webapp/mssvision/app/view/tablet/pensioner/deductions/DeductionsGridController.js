Ext.define('MssPhoenix.view.tablet.pensioner.deductions.DeductionsGridController', {
    extend: 'MssPhoenix.view.tablet.member.base.BaseMemberController',

    alias: 'controller.pensionerdeductionsgridcontroller',
    /**
     * Called when the view is created
     */


    init: function () {
        var me=this;
        let viewModel = me.getViewModel();
        if (viewModel) {
            viewModel.set('currency', me.getCurrencyShortName());
        }
    },
});