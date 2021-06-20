Ext.define('MssPhoenix.view.tablet.admin.EmailTemplates.EmailTemplatesController', {
    extend: 'MssPhoenix.view.tablet.shared.BaseController',
    alias: 'controller.emailtemplatescontroller',

    /**
     * Called when the view is created
     */
    init: function () {},

    openTemplates: function () {
        window.open("../email-templates.html", "_blank");
    }
});