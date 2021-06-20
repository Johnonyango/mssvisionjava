Ext.define('MssPhoenix.view.tablet.member.personalinfo.EmplymentDetailsController', {
    extend: 'MssPhoenix.view.tablet.member.base.BaseMemberController',
    alias: 'controller.memberemplymentdetailscontroller',
    /**
     * Called when the view is created
     */
    init: function () {},

    onCancelBtnClick: function () {
        let me = this;
        me.getView().close();
    }
});