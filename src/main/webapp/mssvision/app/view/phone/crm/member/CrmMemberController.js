Ext.define('MssPhoenix.view.phone.crm.member.CrmMemberController', {
    extend: 'MssPhoenix.view.tablet.crm.baseController.CrmBaseController',
    alias: 'controller.crmphonemembercontroller',
    /**
     * Called when the view is created
     */
    init: function () {
    },

    goBackToSponsors: function () {
        var me = this;
        var xType = 'crmsponsor';
        me.redirectTo(xType);
    },

    reloadMembersGrid: function () {
        this.reloadGrid("crmphonemembersgrid");
    },
});