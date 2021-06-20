Ext.define('MssPhoenix.view.tablet.admin.permissions.PermissionsController', {
    extend: 'MssPhoenix.view.tablet.shared.BaseController',
    alias: 'controller.permissionscontroller',
    /**
     * Called when the view is created
     */
    init: function () {
        let me = this;
        me.loadAllPerms();
        me.loadAllDates();
    },

    loadAllPerms: function () {
        let me = this,
            view = me.getView();
        view.mask("please wait...")
        Ext.Ajax.request({
            headers: {
                'Content-Type': 'application/json'
            },
            url: `${MssPhoenix.model.Session.baseUrl}/api/perms`,
            success: function (response, opts) {
                view.unmask()
                let obj = me.decodeJson(response.responseText);
                if (obj.success) {
                    let data = obj.data;
                    //MEMBER FORM
                    let memberpermissionsform = view.lookupReference("memberpermissionsform");
                    if (memberpermissionsform) {
                        memberpermissionsform.setValues(data.MEMBER)
                    }

                    let sponsorpermissionsform = view.lookupReference("sponsorpermissionsform");
                    if (sponsorpermissionsform) {
                        sponsorpermissionsform.setValues(data.SPONSOR)
                    }

                    let pensionerpermissionsform = view.lookupReference("pensionerpermissionsform");
                    if (pensionerpermissionsform) {
                        pensionerpermissionsform.setValues(data.PENSIONER)
                    }

                    let crmpermissionsform = view.lookupReference("crmpermissionsform");
                    if (crmpermissionsform) {
                        crmpermissionsform.setValues(data.CRM)
                    }

                    let claimofficerpermissionsform = view.lookupReference("claimsofficerpermissionsform");
                    if (claimofficerpermissionsform) {
                        claimofficerpermissionsform.setValues(data.CLAIM_OFFICER)
                    }
                    let billingofficerpermissionsform = view.lookupReference("billingofficerpermissionsform");
                    if (billingofficerpermissionsform) {
                        billingofficerpermissionsform.setValues(data.BILLING_OFFICER)
                    }
                    let claimreviewerpermissionsform = view.lookupReference("claimsreviewerpermissionsform");
                    if (claimreviewerpermissionsform) {
                        claimreviewerpermissionsform.setValues(data.CLAIM_REVIEWER)
                    }

                    let popermissionsform = view.lookupReference("popermissionsform");
                    if (popermissionsform) {
                        popermissionsform.setValues(data.PRINCIPAL_OFFICER)
                    }
                }
            },
            failure: function (response, opts) {
                view.unmask()
                me.showAlert('Failed', "PLease try again");
            }
        });
    },

    saveMemberPerms: function () {
        let me = this,
            view = me.getView(),
            form = view.lookupReference("memberpermissionsform");

        if (form && form.validate()) {
            let params = {
                'profileName': "MEMBER",
                "memberVM": form.getValues()
            }
            me.savePerms(form, params)
        }
    },

    saveSponsorPerms: function () {
        let me = this,
            view = me.getView(),
            form = view.lookupReference("sponsorpermissionsform");

        if (form && form.validate()) {
            let params = {
                'profileName': "SPONSOR",
                "sponsorVM": form.getValues()
            }
            me.savePerms(form, params)
        }
    },
    saveBillingOfficerPerms: function () {
        let me = this,
            view = me.getView(),
            form = view.lookupReference("billingofficerpermissionsform");

        if (form && form.validate()) {
            let params = {
                'profileName': "BILLING OFFICER",
                "permissionsBillingOfficerVM": form.getValues()
            }
            me.savePerms(form, params)
        }
    },
    saveClaimsOfficerPerms: function () {
        let me = this,
            view = me.getView(),
            form = view.lookupReference("claimsofficerpermissionsform");

        if (form && form.validate()) {
            let params = {
                'profileName': "CLAIM OFFICER",
                "permissionsClaimsOfficerVM": form.getValues()
            }
            me.savePerms(form, params)
        }
    },
    saveClaimsReviewerPerms: function () {
        let me = this,
            view = me.getView(),
            form = view.lookupReference("claimsreviewerpermissionsform");

        if (form && form.validate()) {
            let params = {
                'profileName': "CLAIM REVIEWER",
                "permissionsClaimReviewerVM": form.getValues()
            }
            me.savePerms(form, params)
        }
    },
    
    savePoPerms: function () {
        let me = this,
            view = me.getView(),
            form = view.lookupReference("popermissionsform");

        if (form && form.validate()) {
            let params = {
                'profileName': "PRINCIPAL OFFICER",
                "poVM": form.getValues()
            }
            me.savePerms(form, params)
        }
    },

    savePensionerPerms: function () {
        let me = this,
            view = me.getView(),
            form = view.lookupReference("pensionerpermissionsform");

        if (form && form.validate()) {
            let params = {
                'profileName': "PENSIONER",
                "pensionerVM": form.getValues()
            }
            me.savePerms(form, params)
        }
    },

    saveCRMPerms: function () {
        let me = this,
            view = me.getView(),
            form = view.lookupReference("crmpermissionsform");

        if (form && form.validate()) {
            let params = {
                'profileName': "CRM",
                "crmVM": form.getValues()
            }
            me.savePerms(form, params)
        }
    },

    saveCREPerms: function () {
        let me = this,
            view = me.getView(),
            form = view.lookupReference("crepermissionsform");

        if (form && form.validate()) {
            let params = {
                'profileName': "CRE",
                "crevm": form.getValues()
            }
            me.savePerms(form, params)
        }
    },

    savePerms: function (view, params) {
        let me = this;
        view.mask('saving...');
        Ext.Ajax.request({
                headers: {
                    'Content-Type': 'application/json'
                },
                url: `${MssPhoenix.model.Session.baseUrl}/api/perms/update`,
                method: 'POST',
                params: Ext.util.JSON.encode(params),
                success: function (response, opts) {
                    view.unmask()
                    me.showAlert('Done', "Permissions set successfully");
                },
                failure: function (response, opts) {
                    view.unmask()
                    me.showAlert('Failed', "Please try again");
                }
            }
        );
    },

    setDefaultsMember: function () {
        let me = this;
        me.setDefaults("MEMBER")
    },

    setDefaultsSponsor: function () {
        let me = this;
        me.setDefaults("SPONSOR")
    },

    setDefaultsPo: function () {
        let me = this;
        me.setDefaults('PRINCIPAL OFFICER')
    },

    setDefaultsBillingOfficer: function () {
        let me = this;
        me.setDefaults('BILLING OFFICER')
    },

    setDefaultsClaimsOfficer: function () {
        let me = this;
        me.setDefaults('CLAIM OFFICER')
    },
    
    setDefaultsClaimsReviewer: function () {
        let me = this;
        me.setDefaults('CLAIM REVIEWER')
    },
    
    setDefaultsPensioner: function () {
        let me = this;
        me.setDefaults("PENSIONER")
    },

    setDefaultsCrm: function () {
        let me = this;
        me.setDefaults("CRM")
    },

    setDefaultsCRE: function () {
        let me = this;
        me.setDefaults("CRE")
    },

    setDefaults: function (profileName) {
        let me = this,
        view = me.getView();
        view.mask("please wait...")
        Ext.Ajax.request({
                headers: {
                    'Content-Type': 'application/json'
                },
                url: `${MssPhoenix.model.Session.baseUrl}/api/perms/defaults/${profileName}`,
                success: function (response, opts) {
                    view.unmask()
                    me.showAlert('Done', "Permissions set to defaults");
                    me.loadAllPerms()
                },
                failure: function (response, opts) {
                    view.unmask()
                    me.showAlert('Failed', "Please try again");
                }
            }
        );
    },

    loadAllDates: function () {
        let me = this,
            view = me.getView();
        view.mask("please wait...")
        Ext.Ajax.request({
            headers: {
                'Content-Type': 'application/json'
            },
            url: `${MssPhoenix.model.Session.baseUrl}/api/dates`,
            success: function (response, opts) {
                view.unmask()
                let obj = me.decodeJson(response.responseText);
                
                if (obj.success) {
                    let data = obj.data;
                    let sponsorbillpermissionform = view.lookupReference("sponsorbillspermissionsformref");

                    if (sponsorbillpermissionform) {
                        sponsorbillpermissionform.setValues(data[0])
                    }
                 
                }
            },
            failure: function (response, opts) {
                view.unmask()
                me.showAlert('Failed', "Please try again");
            }
        });
    },

    savePaymentDate: function () {
        let me = this,
            view = me.getView(),
            form = view.lookupReference("sponsorbillspermissionsformref");

        if (form && form.validate()) {

            let billDate=((form.getFields()).dateNumber).getInputValue();
            me.onChangePaymentDate(form, billDate)
        }
    },

    onChangePaymentDate: function (view, billDate) {
        let me = this;
        view.mask('Saving...');
        Ext.Ajax.request({
                headers: {
                    'Content-Type': 'application/json'
                },
                url: `${MssPhoenix.model.Session.baseUrl}/api/dates/update/${billDate}`,
                method: 'POST',
                // params: Ext.util.JSON.encode(params),
                success: function (response, opts) {
                    view.unmask()
                    me.showAlert('Done', "Date set successfully");
                },
                failure: function (response, opts) {
                    view.unmask()
                    me.showAlert('Failed', "Please try again");
                }
            }
        );
    },

    onCancelBtnClick: function () {
        var me = this;
        me.getView().destroy();
    }
});