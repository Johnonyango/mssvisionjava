Ext.define('MssPhoenix.view.tablet.sponsor.receipt.ReceiptsGridController', {
    extend: 'MssPhoenix.view.tablet.shared.BaseController',
    alias: 'controller.receiptsgridcontroller',
    /**
     * Called when the view is created
     */
    init: function () {},

    reloadReceiptsGrid: function () {
        var me = this;
        if (MssPhoenix.profile.Phone.isPhone()) {
            me.reloadGrid("sponsorreceiptgridphone");
        } else {
            me.reloadGrid("sponsorreceiptgrid");
        }
   
    }
});