Ext.define('MssPhoenix.view.tablet.sponsor.members.UpdateMembersBatchBatchController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.updatemembersbatchcontroller',
    /**
     * Called when the view is created
     */
    init: function () {},

    onCancelBtnClick: function () {
        var me = this;
        me.getView().destroy();
    }
    

});