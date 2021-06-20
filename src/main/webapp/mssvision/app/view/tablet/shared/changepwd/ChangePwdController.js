Ext.define('MssPhoenix.view.tablet.shared.changepwd.ChangePwdController', {
    extend: 'MssPhoenix.view.tablet.shared.BaseController',
    alias: 'controller.changepwdcontroller',


    isPhone: false,
    init: function () {
        let me = this,
            view = me.getView(),
            vm = view.getViewModel();

        if (vm) {
            vm.set('userId', MssPhoenix.model.Session.getUserId());
        }

        me.isPhone = MssPhoenix.profile.Phone.isPhone();
    },

    changeAccountPwd: function () {
        let me = this;
        let view = me.getView();
        let form = view.lookupReference("changepwdform");
        // console.log(form.getSubmitValues);

        let fields = form.getFields();
        let currentPassword = (fields.newPassword).getValue();
        if (me.isBlank(currentPassword)) {
            me.showToast('Current password required')
            return;
        }
        let newPassword = (fields.newPassword).getValue();
        if (me.isBlank(newPassword)) {
            me.showToast('New password required')
            return;
        }


        if (form && form.validate()) {
            let confirmPassword = (fields.confirmPassword).getValue();
            if (newPassword !== confirmPassword) {
                me.showToast('Passwords DONT match')
                return;
            }
            me.maskView(view, 'submitting...')
            form.submit({
                clientValidation: true,
                withCredentials: false,
                url: `${MssPhoenix.model.Session.baseUrl}/api/account/change-password`,
                success: function (form, action) {
                    me.unMaskView(view)
                    if (action.success) {
                        me.showAlert("Successful", "Password changed");
                        if (me.isPhone) {
                            view.destroy()
                        }
                    } else {
                        me.showAlert("Failed", "please try again")
                    }
                },
                failure: function (form, action) {
                    me.unMaskView(view)
                    me.showAlert("Failed", "please try again")
                },
            });
        }
    },

    changePwdNoCurrentPwd: function () {
        let me = this,
            view = me.getView(),
            form = view.lookupReference("changepwddialogform");
        if (form && form.validate()) {
            let fields = form.getFields();
            let newPassword = (fields.newPassword).getValue(),
                confirmPassword = (fields.confirmPassword).getValue();
            if (newPassword !== confirmPassword) {
                me.showToast(`Passwords DON'T match`)
                return;
            }
            me.maskView(view, 'submitting...')
            form.submit({
                clientValidation: true,
                withCredentials: false,
                url: `${MssPhoenix.model.Session.baseUrl}/api/account/change-password-ncp`,
                success: function (form, action) {
                    me.unMaskView(view)
                    me.saveItem('flg_firstTime', true)
                    me.showAlert("Successful", "Password changed");
                    view.destroy()
                },
                failure: function (form, action) {
                    me.unMaskView(view)
                    me.showAlert("Failed", me.decodeFormSubmitError(action));
                },
            });
        }
    },

    closeDg: function () {
        let me = this;
        me.getView().destroy();
    }
});