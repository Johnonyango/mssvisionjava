Ext.define('MssPhoenix.view.tablet.cre.scheme.CreSchemeController', {
    extend: 'MssPhoenix.view.tablet.shared.BaseController',
    alias: 'controller.creschemecontroller',

    init: function () {
    },

    onViewSponsorsButtonClick: function () {
        let me = this;
        let record = me.getGridSelectedRecord("creschemegrid")
        if (record) {
            let id = record.id;
            let creSchemeName = record.schemeName;

            me.saveItem('creSchemeId', id)
            me.saveItem('creSchemeName', creSchemeName)
            let xType = 'cresponsor';
            me.redirectTo(xType + "/" + id);
            // window.location.reload()
        }
    },

    reloadSchemeGridCRE: function () {
        this.reloadGrid("creschemegrid");
    }
});