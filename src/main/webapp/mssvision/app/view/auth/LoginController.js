Ext.define('MssPhoenix.view.auth.LoginController', {
    extend: 'MssPhoenix.view.tablet.shared.BaseController',
    alias: 'controller.authlogin',

    init: function() {
        let me=this;
        me.callParent(arguments);
        // this.lookup('form').setValues({
        //     username: 'user',
        //     password: 'user'
        // });
        me.getActiveConfig();

        // me.loadFormConfigs();
    },

    onLoginTap: function() {
        let me = this,
            form = me.lookup('form'),
            values = form.getValues();

        form.clearErrors();

        Ext.Viewport.setMasked({ xtype: 'loadmask' });

        MssPhoenix.model.Session.login(form)
            .then(function(session) {
                me.fireEvent('login', session);
            })
            .catch(function(errors) {
                Ext.Viewport.setMasked(false);
                // console.log(errors);
            })
            .then(function(session) {
                Ext.Viewport.setMasked(false);
            });
    }
});