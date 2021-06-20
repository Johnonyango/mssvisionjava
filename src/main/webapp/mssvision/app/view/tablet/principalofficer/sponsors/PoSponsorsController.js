Ext.define('MssPhoenix.view.tablet.principalofficer.sponsors.PoSponsorsController', {
    extend: 'MssPhoenix.view.tablet.principalofficer.PoBaseController',
    alias: 'controller.posponsorscontroller',
    /**
     * Called when the view is created
     */
    init: function () {
    },

    reloadPoSponsorGrid: function () {
        let me = this;
        me.reloadGrid('posponsorsgrid')
    },

    poShowDashboard: function () {
        let me = this;
        let record = me.getGridSelectedRecord("posponsorsgrid")
        if (record) {
            let sponsorRefNo = record.employerRefNo;
            let sponsorId = record.id;
            let schemeId = record.schemeId;
            me.saveItem('sponsorRefNo',sponsorRefNo);
            me.saveItem('sponsorId', sponsorId);
            me.saveItem('schemeId', schemeId);
            let id = sponsorId + "/" + schemeId;
            let xType = 'podashboard';
            me.redirectTo(xType + "/" + id);
        }
    }
});