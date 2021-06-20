Ext.define('MssPhoenix.view.tablet.member.contributions.MakeContributionWinController', {
    extend: 'MssPhoenix.view.tablet.member.base.BaseMemberController',
    alias: 'controller.membermakecontributionwincontroller',
    /**
     * Called when the view is created
     */
    init: function () {
        let me = this,
            view = me.getView(),
            vm = me.getViewModel();
        if (vm) {
            vm.set('allowStkPush', me.isStkPush() == "true" ? 'block' : 'none');
        }
    },

    onCancelBtnClick: function () {
        let me = this;
        me.getView().close();
    },

    initiatePaymentBtnClick: function () {
        let me = this,
            view = me.getView(),
            form = view.lookupReference('membermakecontributionwinform');
        if (form && form.validate()) {
            me.maskView(view, "Please wait...");
            form.submit({
                url: `${MssPhoenix.model.Session.baseUrl}/api/makeContribution/${MssPhoenix.model.Session.getUserId()}`,
                success: function (form, action) {
                    me.unMaskView(view)
                    // if (action.success)
                    me.showAlert("Successful", action.data);
                    view.destroy()
                },
                failure: function (form, action) {
                    me.unMaskView(view)
                    me.showAlert('Failed', 'Please try again')
                }
            })
        }
    }

});