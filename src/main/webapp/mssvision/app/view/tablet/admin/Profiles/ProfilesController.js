Ext.define('MssPhoenix.view.tablet.admin.Profiles.ProfilesController', {
    extend: 'MssPhoenix.view.tablet.shared.BaseController',
    alias: 'controller.profilescontroller',
    /**
     * Called when the view is created
     */
    init: function () {
    },

    saveProfile: function () {
        let me = this,
            view = me.getView(),
            form = view.lookupReference('adminprofilesform');
        if (form && form.validate()) {
            me.maskView(form, "saving...");
            form.submit({
                headers: {
                    'Content-Type': 'application/json'
                },
                url: `${MssPhoenix.model.Session.baseUrl}/api/profiles/edit/${MssPhoenix.model.Session.getUserId()}`,
                method: 'POST',
                success: function (form, action) {
                    me.unMaskView(form);
                    me.showToast("Saved")
                    Ext.getStore("profile").reload()
                },
                failure: function (form, action) {
                    me.unMaskView(form);
                    let msg = me.decodeFormSubmitError(action)
                    me.showToast(msg)
                }
            })
        }
    }
});