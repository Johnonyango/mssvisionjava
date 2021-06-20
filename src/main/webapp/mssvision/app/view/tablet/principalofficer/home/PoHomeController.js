Ext.define('MssPhoenix.view.tablet.principalofficer.home.PoHomeController', {
    extend: 'MssPhoenix.view.tablet.principalofficer.schemes.PoSchemesController',
    alias: 'controller.pohomecontroller',
    /**
     * Called when the view is created
     */
    init: function () {
        let me = this;
        //check If FirstTime
        me.firstTimeChangePwd(function () {
            me.checkNewMessages();
        })
    },

    poViewSponsorsHome: function () {
        let me = this;
        let record = me.getGridSelectedRecord("#mitablepo")
        if (record) {
            me.viewSponsors(record)
            return;
        }
        me.showToast('Select a record')
    },
});