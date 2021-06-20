Ext.define('MssPhoenix.view.tablet.principalofficer.schemes.PoSchemesController', {
    extend: 'MssPhoenix.view.tablet.principalofficer.PoBaseController',
    alias: 'controller.poschemescontroller',
    /**
     * Called when the view is created
     */
    init: function () {
    },

    reloadPoSchemeGrid: function () {
        let me = this;
        me.reloadGrid('poschemesgrid')
    },


    poViewSponsors: function () {
        let me = this;
        let record = me.getGridSelectedRecord("poschemesgrid")
        if (record) {
            me.viewSponsors(record)
            return;
        }
        me.showToast('Select a record')
    },

    viewSponsors: function (record) {
        let me=this;
        let id = record.id;
        let creSchemeName = record.schemeName;

        me.saveItem('creSchemeId', id)
        me.saveItem('creSchemeName', creSchemeName)
        let xType = 'posponsors';
        me.redirectTo(xType + "/" + id);
    }
});