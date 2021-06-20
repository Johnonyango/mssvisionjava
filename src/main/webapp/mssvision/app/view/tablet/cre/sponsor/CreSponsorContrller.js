Ext.define('MssPhoenix.view.tablet.cre.sponsor.CreSponsorContrller', {
    extend: 'MssPhoenix.view.tablet.shared.BaseController',
    alias: 'controller.cresponsorcontrller',

    init: function () {
        let me = this,
            view = me.getView(),
            vm = view.getViewModel();
        let schemeId = me.getItem('creSchemeId');
        let creSchemeName = me.getItem('creSchemeName');
        if (vm) {
            vm.set("schemeName", creSchemeName)
        }
    },

    reloadSponsorGrid: function () {
        let me = this;
        me.reloadGrid("table");
    },

    creViewMembersButtonClick: function () {
        let me = this;
        let record = me.getGridSelectedRecord("#cresponsortb")
        if (record) {
            let sponsorId = record.id;
            let sponsorName = record.name;
            let schemedId = record.schemeId;
            me.saveItem('sponsorId', sponsorId);
            me.saveItem('sponsorName', sponsorName);
            let id = sponsorId + "/SPONSOR/" + schemedId;
            let xType = 'cremembers';
            me.redirectTo(xType + "/" + id);
            // window.location.reload()
        }
    },

});