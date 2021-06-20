Ext.define('MssPhoenix.view.tablet.principalofficer.costcenters.CostCentersController', {
    extend: 'MssPhoenix.view.tablet.principalofficer.PoBaseController',
    alias: 'controller.costcentersorscontroller',
    /**
     * Called when the view is created
     */
    init: function () {
    },

    reloadCostCentersGrid: function () {
        let me = this;
        me.reloadGrid('costcentersgrid')
    },

    poShowDashboard: function () {
        let me = this;
        let record = me.getGridSelectedRecord("costcentersgrid")
        if (record) {
            let sponsorRefNo = record.refNo;
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