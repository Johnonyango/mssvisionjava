Ext.define('MssPhoenix.view.tablet.admin.LandingPageContent.LandingPageController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.tab-view',

    onTabChange: function(tabs, newTab, oldTab) {
        Ext.suspendLayouts();
        newTab.setTitle('Active Tab');
        oldTab.setTitle('Inactive Tab');
        Ext.resumeLayouts(true);
    }
});