Ext.define('MssPhoenix.view.main.MenuController', {
    extend: 'MssPhoenix.view.tablet.shared.BaseController',
    alias: 'controller.mainmenu',

    collapse: function () {
        this.getView().setExpanded(false);
    },

    onTriggerTap: function () {
        var view = this.getView();
        view.setExpanded(!view.getExpanded());
    },

    onMenuChildTap: function (menu, location) {
        let me = this,
            record = location.record;
        if (record) {
            let id = record.getId();
            me.saveItem('dataRoute', id);
            this.redirectTo(id);
            this.collapse();
        }
    },

    onProfileTap: function () {
        this.redirectTo(this.getViewModel().get('admin-manageaccount'));
        this.collapse();
    },
    onLogoutTap: function () {
        var me = this;
        Ext.Msg.confirm('Logout Confirmation', 'Are you sure you want to Logout?',
            function (answer) {
                if (answer == "yes") {
                    if (me.fireEvent('logout')) {
                        me.collapse();
                    }

                }

            });
    }

});