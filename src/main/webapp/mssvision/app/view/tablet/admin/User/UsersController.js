Ext.define('MssPhoenix.view.tablet.admin.User.UsersController', {
    extend: 'MssPhoenix.view.tablet.shared.BaseController',
    alias: 'controller.userscontroller',

    mixins: [
        'MssPhoenix.view.tablet.crm.mixins.GridMixin'
    ],

    init: function () {
        let me = this;
        let view = me.getView();
        me.getCountOfTotalUsers(view, function (data) {
            let view = me.getView();
            let viewModel = me.getViewModel();
            if (viewModel) {
                viewModel.set('usersCount', data);
            }
        }, function (err) {

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

    viewUserBtnClick: function () {
        let me = this;
        let record = me.getGridSelectedRecord('usersgrid');
        if (record) {
            console.log(record);
            let windowContainer = Ext.widget('viewuser').show();
            // console.log(windowContainer);
            windowContainer.lookupReference('form').setValues(record);
        }

    },

    viewPhoneUserBtnClick: function () {
        let me = this;
        let record = me.getGridSelectedRecord('phoneusersgrid');
        if (record) {
            console.log(record);
            let windowContainer = Ext.widget('phoneviewuser').show();
            // console.log(windowContainer);
            windowContainer.lookupReference('form').setValues(record);
        }

    },

    onCancelBtnClick: function () {
        let me = this;
        me.getView().destroy();
    },

    onCancelViewBtnClick: function () {
        let me = this;
        me.getView().close();
    },

    onSaveBtnClick: function () {
        let me = this;
        me.getView().close();
    },

    dropUserBtnClick: function () {
        let me = this;
        let record = me.getSelectedRecord();
        if (record) {
            let id = record.get('id');
            let method = 'DELETE';
            let url = `${MssPhoenix.model.Session.baseUrl}/api/dropUser/` + id;

            Ext.Ajax.request({
                cors: true,
                useDefaultXhrHeader: false,

                url: url,
                method: method,
                success: function (response, opts) {
                    let store = Ext.getStore('userstore');
                    store.reload()
                },
                failure: function (response, opts) {
                    console.log("Failure");
                }
            });
        }
    },

    onEditUserBtnClick: function () {
        let me = this;
        form = me.lookup('form');
        let method = 'PUT';
        let url = `${MssPhoenix.model.Session.baseUrl}/api/editUser`;

        if (form.validate()) {
            form.submit({
                url: url,
                method: method,
                success: function (form, action) {

                    let store = Ext.getStore('userstore');
                    store.reload();
                },
                failure: function (form, action) {

                }
            });
        }
        me.getView().close();
    },

    ResetPasswordActionBtnClick: function () {
        let me = this;
        view = me.getView();
        let record = me.getSelectedRecord();
        if (record) {
            let id = record.get('id');
            let method = 'PUT';
            let url = `${MssPhoenix.model.Session.baseUrl}/api/resetUser/` + id;
            me.maskView(view, "Resetting User Credentials...")
            Ext.Ajax.request({
                url: url,
                method: method,

                success: function (response, opts) {
                    me.unMaskView(view)
                    me.showAlert("success", "Reset User Credentials Successfully. ")
                    let store = Ext.getStore('userstore');
                    store.reload()
                },
                failure: function (response, opts) {
                    console.log("Failure");
                }
            });
        }

    },

    LockUserBtnClick: function () {
        let me = this;
        view = me.getView();
        let record = me.getSelectedRecord();
        if (record) {
            let id = record.get('id');
            let method = 'PUT';
            let url = `${MssPhoenix.model.Session.baseUrl}/api/lockAccount/` + id;
            me.maskView(view, "Locking Account...")
            Ext.Ajax.request({
                cors: true,
                useDefaultXhrHeader: false,

                url: url,
                method: method,
                success: function (response, opts) {
                    me.unMaskView(view)
                    me.showAlert("success", "Locked Account Successfully")
                    let store = Ext.getStore('adminstore');
                    store.reload()
                },
                failure: function (response, opts) {
                    console.log("Failure", "Error processing request");
                }
            });
        }

    },

    AddUserBtnClick: function () {
        Ext.widget('adminuserform').show();
    },

    registerMembersInBatch: function () {
        Ext.widget('batchmemberregistrationtomss').show();
    },

    onReportsSelected: function (v, newValue, eOpts) {
        let me = this;
            id = v.getValue();
        if (id) {
            switch (id) {
                case 1:
                    Ext.widget('newuserofdayinprofile').show();
                    break;
                case 2:
                    Ext.widget('newuserofdayacrossprofiles').show();
                    break;
                case 3:
                    Ext.widget('allusersofprofile').show();
                    break;
                case 4:
                    let UsersReportApiParams = "getAllUsers";
                    me.saveItem("UsersReportApiParams", UsersReportApiParams);
                    me.adminReports(`${MssPhoenix.model.Session.fileUploadPath}/reports/members.html`, 'All Mss Users');
                    break;
                default:
            }
        }
    },
    viewreportOfUserInDayinProfile: function () {
        let me = this;
        let view = me.getView(),
            form = Ext.ComponentQuery.query('newuserofdayinprofile #form')[0];
        if (form && form.validate()) {
            let asAt = ((form.getFields()).asAt).getInputValue();
            let asTo = ((form.getFields()).asTo).getInputValue();
            let profileName = ((form.getFields()).profileName).getInputValue();
            view.destroy();
            let UsersReportApiParams = `user/getUsersRegisteredBetween/${MssPhoenix.model.Session.getUserId()}/${profileName}/${asAt}/${asTo}`;
            me.saveItem("UsersReportApiParams", UsersReportApiParams);
            me.adminReports(`${MssPhoenix.model.Session.fileUploadPath}/reports/members.html`, 'New Registered Users '+profileName+'s profile');
            return;
        }

        me.showToast("Provide all fields", 3000);
    },
    viewreportofallusersinProfile: function () {
        let me = this;
        let view = me.getView(),
            form = Ext.ComponentQuery.query('allusersofprofile #form')[0];
        if (form && form.validate()) {
            let profileName = ((form.getFields()).profileName).getInputValue();
            view.destroy();
            let UsersReportApiParams = `user/getUserByProfile/${MssPhoenix.model.Session.getUserId()}/${profileName}`;
            me.saveItem("UsersReportApiParams", UsersReportApiParams);
            me.adminReports(`${MssPhoenix.model.Session.fileUploadPath}/reports/members.html`, 'All Users in '+profileName+'s profile');
            return;
        }

        me.showToast("Provide all fields", 3000);
    },
    viewreportOfUserInDayAcrossProfile: function () {
        let me = this;
        let view = me.getView(),
            form = Ext.ComponentQuery.query('newuserofdayacrossprofiles #form')[0];
        if (form && form.validate()) {
            let asAt = ((form.getFields()).asAt).getInputValue();
            let asTo = ((form.getFields()).asTo).getInputValue();
            view.destroy();
            let UsersReportApiParams = `user/getUsersRegisteredBetween/${MssPhoenix.model.Session.getUserId()}/${asAt}/${asTo}`;
            me.saveItem("UsersReportApiParams", UsersReportApiParams);
            me.adminReports(`${MssPhoenix.model.Session.fileUploadPath}/reports/members.html`, 'New Registered Users');
            return;
        }

        me.showToast("Provide all fields", 3000);
    }

});