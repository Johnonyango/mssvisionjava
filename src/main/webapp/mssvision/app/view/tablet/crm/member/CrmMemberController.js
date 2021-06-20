Ext.define('MssPhoenix.view.tablet.crm.member.CrmMemberController', {
    extend: 'MssPhoenix.view.tablet.crm.baseController.CrmBaseController',
    alias: 'controller.crmmembercontroller',
    /**
     * Called when the view is created
     */
    init: function () {
    },

    goBackToScheme: function () {
        var me = this;
        var xType = 'crmsponsor';
        me.redirectTo(xType);
    },

    reloadMembersGrid: function () {
        this.reloadGrid("crmmembersgrid");
    },
    onViewMembersDetailsClick: function () {
        let me = this;
        let record = me.getGridSelectedRecord("crmmembersgrid")
        if (record) {
            let memberID = record.id;
            let schemeId = record.schemeId;
            me.saveItem("memberIdForReport", memberID);
            me.saveItem("schemeIdForReport", schemeId);
            let viewModel = me.getViewModel();
            if (viewModel) {
                viewModel.set('memberId', memberID);
            }
            var xType = 'crmmainmemberdetails';
            let id = memberID + "/" + schemeId;
            me.redirectTo(xType + "/" + id);
        }
    },
});