Ext.define('MssPhoenix.view.forgotpwd.ResetPasswordController', {
    extend: 'MssPhoenix.view.tablet.shared.BaseController',
    alias: 'controller.resetpasswordcontroller',

    init: function() {
        let me=this;
        me.callParent(arguments);
        me.getActiveConfig();
    },

    onResetPasswordTap: function() {
        let me = this,
            form = me.lookup('form'),
            values = form.getValues();

        form.clearErrors();
        me.maskView(form,"Please wait...")

    }
});