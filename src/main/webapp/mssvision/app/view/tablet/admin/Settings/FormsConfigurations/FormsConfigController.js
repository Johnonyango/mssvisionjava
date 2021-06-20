Ext.define('MssPhoenix.view.tablet.admin.Settings.FormsConfigurations.FormsConfigController', {
    extend: 'MssPhoenix.view.tablet.shared.BaseController',
    alias: 'controller.formsconfigcontroller',

    init: function () {
        let me = this;
        me.loadAllConfigs();
    },
    saveBeneficiaryConfig: function () {
        let me = this,
            view = me.getView(),
            form = view.lookupReference("beneficiaryform");

        if (form && form.validate()) {
            let params = {
                'configFormName': "BENEFICIARY",
                "beneficiaryFormConfig": form.getValues()
            }
            me.saveConfigs(view, params)
        }
    },
    setDefaultsBeneficiary: function () {
        let me = this;
        me.setDefaults("BENEFICIARY")
    },
    saveMemberConfig: function () {
        let me = this,
            view = me.getView(),
            form = view.lookupReference("memberform");

        if (form && form.validate()) {
            let params = {
                'configFormName': "MEMBER",
                "memberFormConfigs": form.getValues()
            }
            me.saveConfigs(view, params)
        }
    },
    setDefaultsMember: function () {
        let me = this;
        me.setDefaults("MEMBER")
    },
    loadAllConfigs: function () {
        let me = this,
            view = me.getView();
        view.mask("please wait...")
        Ext.Ajax.request({
            headers: {
                'Content-Type': 'application/json'
            },
            url: `${MssPhoenix.model.Session.baseUrl}/api/config`,
            success: function (response, opts) {
                view.unmask()
                let obj = me.decodeJson(response.responseText);
                if (obj.success) {
                    let data = obj.data;
                    //MEMBER FORM
                    let memberpermissionsform = view.lookupReference("memberform");
                    if (memberpermissionsform) {
                        memberpermissionsform.setValues(data.MEMBER)
                    }

                    let sponsorpermissionsform = view.lookupReference("beneficiaryform");
                    if (sponsorpermissionsform) {
                        sponsorpermissionsform.setValues(data.BENEFICIARY)
                    }
                }
            },
            failure: function (response, opts) {
                view.unmask()
                me.showAlert('Failed', "PLease try again");
            }
        });
    },

    setDefaults: function (formName) {
        let me = this,
            view = me.getView();
        view.mask("please wait...")
        Ext.Ajax.request({
            headers: {
                'Content-Type': 'application/json'
            },
            url: `${MssPhoenix.model.Session.baseUrl}/api/config/defaults/${formName}`,
            success: function (response, opts) {
                view.unmask()
                me.showAlert('Done', "Configuration set to defaults");
                me.loadAllPerms()
            },
            failure: function (response, opts) {
                view.unmask()
                me.showAlert('Failed', "PLease try again");
            }
        }
        );
    },

    saveConfigs: function (view, params) {
        let me = this;
        view.mask('saving...');
        Ext.Ajax.request({
            headers: {
                'Content-Type': 'application/json'
            },
            url: `${MssPhoenix.model.Session.baseUrl}/api/config/update`,
            method: 'POST',
            params: Ext.util.JSON.encode(params),
            success: function (response, opts) {
                view.unmask()
                me.showAlert('Done', "Configuration set successfully");
            },
            failure: function (response, opts) {
                view.unmask()
                me.showAlert('Failed', "PLease try again");
            }
        }
        );
    },

});