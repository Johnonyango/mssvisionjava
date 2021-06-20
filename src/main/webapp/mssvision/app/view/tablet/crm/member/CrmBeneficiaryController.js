Ext.define('MssPhoenix.view.tablet.crm.member.CrmBeneficiaryController', {
    extend: 'MssPhoenix.view.tablet.shared.BaseController',
    alias: 'controller.crmbeneficiarycontroller',
    /**
     * Called when the view is created
     */
    init: function () {
        var me = this;
        let id;
        id=localStorage.getItem("memberId");
        var messageStore = Ext.getStore('crmmemberbeneficiaries');
        messageStore.getProxy().url = `${MssPhoenix.model.Session.baseUrl}/api/getBeneficiaries/${MssPhoenix.model.Session.getUserId()}/${id}`;
        messageStore.reload()
    }
});