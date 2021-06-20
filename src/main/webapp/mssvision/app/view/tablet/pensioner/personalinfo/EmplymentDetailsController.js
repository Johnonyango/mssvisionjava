Ext.define('MssPhoenix.view.tablet.pensioner.personalinfo.EmplymentDetailsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.pensioneremplymentdetailscontroller',
    /**
     * Called when the view is created
     */
    init: function () {},

    onCancelBtnClick: function () {
        var me = this;
        me.getView().destroy();
    }
});