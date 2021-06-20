Ext.define('MssPhoenix.view.tablet.cre.home.CreHomeController', {
    extend: 'MssPhoenix.view.tablet.cre.scheme.CreSchemeController',
    alias: 'controller.crehomecontroller',

    init: function () {
        let me=this;
        //check If FirstTime
        me.firstTimeChangePwd(function () {
            me.checkNewMessages();
        })
    }
});