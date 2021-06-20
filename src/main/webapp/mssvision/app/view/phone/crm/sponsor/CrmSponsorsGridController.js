Ext.define('MssPhoenix.view.phone.crm.sponsor.CrmSponsorsGridController', {
    extend: 'MssPhoenix.view.tablet.crm.baseController.CrmBaseController',
    alias: 'controller.crmphonesponsorsgridcontroller',
    mixins: [
        'MssPhoenix.view.tablet.crm.mixins.GridMixin'
    ],

    init: function () {
        let me = this
        let role = MssPhoenix.model.Session.getUserRole();
    },

    onViewPhoneMembersButtonClick: function () {
        let me = this;
        let record = me.getSelectedRecord();
        if (record) {
            let sponsorId = record.get("id");
            let schemedId = record.get("schemeId");
            MssPhoenix.model.Session.setItemToStorage('memberSponsorId', sponsorId);
            MssPhoenix.model.Session.setItemToStorage('memberSchemeId', schemedId);
            let id = sponsorId + "/SPONSOR/" + schemedId;
            let xType = 'crmphonemembers';
            me.redirectTo(xType + "/" + id);
        }
    },

    reloadSponsorGrid: function () {
        this.reloadGrid("crmphonesponsorgrid");
    },
});