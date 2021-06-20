Ext.define('MssPhoenix.view.tablet.crm.scheme.CrmSchemeController', {
    extend: 'MssPhoenix.view.tablet.crm.baseController.CrmBaseController',
    alias: 'controller.crmschemecontroller',
    /**
     * Called when the view is created
     */
    init: function () {},

    goBackToSponsor: function () {
        var me = this;
        var xType = 'crmsponsor';
        me.redirectTo(xType);
    },

    reloadSchemeGrid: function () {        
        this.reloadGrid("crmschemegrid");
    }
});