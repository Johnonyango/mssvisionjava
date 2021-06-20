Ext.define('MssPhoenix.view.tablet.admin.home.AdminHomeController', {
    extend: 'MssPhoenix.view.tablet.shared.BaseController',
    alias: 'controller.adminhomecontroller',


    init: function () {
        let me = this;
        let view = me.getView();

        //check If FirstTime
        me.firstTimeChangePwd(function () {
            me.checkNewMessages();
        })

        me.getCountOfTotalSessions(view, function (data) {
            let view = me.getView();
            let viewModel = me.getViewModel();
            if (viewModel) {
                viewModel.set('sessionCount', data);
            }
        }, function (err) {
        });
        me.getCountOfTotalUsers(view, function (data) {
            let view = me.getView();
            let viewModel = me.getViewModel();
            if (viewModel) {
                viewModel.set('usersCount', data);
            }
        }, function (err) {
        });
    },

    getCountOfTotalSessions: function (view, successCallBack, errorCallBack) {
        let me = this;
        view.mask('Please wait...');
        Ext.Ajax.request({
            url: `${MssPhoenix.model.Session.baseUrl}/api/getSessionCount`,
            success: function (response, opts) {
                view.unmask();
                let obj = Ext.decode(response.responseText);
                successCallBack(obj.data);
            },
            failure: function (response, opts) {
                view.unmask();
                errorCallBack(response.responseText)
            }
        });
    },

    getCountOfTotalUsers: function (view, successCallBack, errorCallBack) {
        let me = this;
        view.mask('Please wait...');
        Ext.Ajax.request({
            url: `${MssPhoenix.model.Session.baseUrl}/api/getAllUsersCount`,
            success: function (response, opts) {
                view.unmask();
                let obj = Ext.decode(response.responseText);
                successCallBack(obj.data);
            },
            failure: function (response, opts) {
                view.unmask();
                errorCallBack(response.responseText)
            }
        });
    },

});