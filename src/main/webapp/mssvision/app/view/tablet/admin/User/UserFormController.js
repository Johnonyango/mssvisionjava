Ext.define('MssPhoenix.view.tablet.admin.User.UserFormController', {
    extend: 'MssPhoenix.view.tablet.shared.BaseController',
    alias: 'controller.adminuserformcontroller',

    mixins: [
        'MssPhoenix.view.tablet.crm.mixins.GridMixin'
    ],

    init: function () {
        let me = this;
    },

    onCancelBtnClick: function () {
        let me = this;
        me.getView().destroy();
    },


    onSaveBtnClick: function () {
        let me = this,
            view = me.getView(),
            form = me.lookup('form');

        let url = `${MssPhoenix.model.Session.baseUrl}/api/registerUserAccount`;
        if (form.validate()) {
            me.maskView(view, "Registering User...")
            form.submit({
                url: url,
                method: "POST",
                success: function (form, action) {
                    me.unMaskView(view)
                    me.showAlert("success", "Registered User Successfully")
                    var store = Ext.getStore('userstore');
                    store.reload();
                },
                failure: function (form, action) {
                    me.showAlert("Failure", "Please try again")
                }
            });
        }
        me.getView().close();
    },

    onRegisterMembersBtnClick: function () {
        let me = this,
            view = me.getView(),
            form = Ext.ComponentQuery.query('batchmemberregistrationtomss #uploadfileform')[0];

            let successfulRegistrationGridStore =Ext.getStore('validbillimportstore');
            let UnsuccessfulRegistrationGridStore = Ext.getStore('exceptionbillimportstore');
            successfulRegistrationGridStore.removeAll();
            UnsuccessfulRegistrationGridStore.removeAll();

        if (form && form.validate()) {
            me.maskView(view, "Registering Members...")
            form.submit({
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                url: `${MssPhoenix.model.Session.baseUrl}/api/registerMembersInBatch/${MssPhoenix.model.Session.getUserId()}`,
                cors: true,
                // useDefaultXhrHeader : false,
                method: 'POST',
                success: function (form, action) {
                    me.successfulRegistrationGridStore.loadRawData(action.data.successfulRegistration);
                    me.UnsuccessfulRegistrationGridStore.loadRawData(action.data.unsuccessfulRegistration);

                    me.unMaskView(view);
                },
                failure: function (form, action) {
                    me.unMaskView(view)
                    let obj = me.decodeJson(action.responseText)
                    me.showAlert('Response', obj.message)
                }
            })
            return;
        }
        me.showToast('Please try again');
    }
});