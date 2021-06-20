Ext.define('MssPhoenix.view.tablet.crm.sponsor.CrmSponsorsGridController', {
    extend: 'MssPhoenix.view.tablet.crm.baseController.CrmBaseController',
    alias: 'controller.crmsponsorsgridcontroller',
    mixins: [
        'MssPhoenix.view.tablet.crm.mixins.GridMixin'
    ],

    init: function () {
        let me = this
        let role = MssPhoenix.model.Session.getUserRole();
    },

    onViewMembersButtonClick: function () {
        let me = this;
        let record = me.getSelectedRecord();
        if (record) {
            let sponsorId = record.get("id");
            let schemedId = record.get("schemeId");
            MssPhoenix.model.Session.setItemToStorage('memberSponsorId', sponsorId);
            MssPhoenix.model.Session.setItemToStorage('memberSchemeId', schemedId);
            let id = sponsorId + "/SPONSOR/" + schemedId;
            let xType = 'crmmembers';
            me.redirectTo(xType + "/" + id);
        }
    },
    onViewMembersClick: function () {
        let me = this;
        let record = me.getGridSelectedRecord("crmsponsorgrid")
        if (record) {
            let sponsorId = record.id;
            let schemeId = record.schemeId;
            MssPhoenix.model.Session.setItemToStorage('memberSponsorId', sponsorId);
            MssPhoenix.model.Session.setItemToStorage('memberSchemeId', schemeId);
            let id = sponsorId + "/SPONSOR/" + schemeId;
            let xType = 'crmmembers';
            me.redirectTo(xType + "/" + id);
        }
    },

    reloadSponsorGrid: function () {
        this.reloadGrid("crmsponsorgrid");
    },
});