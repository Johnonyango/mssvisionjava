Ext.define('MssPhoenix.view.tablet.crm.member.CrmEmploymentDetailsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.crmmemberemploymentdetailscontroller',
    /**
     * Called when the view is created
     */
    init: function () {},

    onCloseButtonClick: function () {
        var me = this;
        me.getView().close();
    }
});