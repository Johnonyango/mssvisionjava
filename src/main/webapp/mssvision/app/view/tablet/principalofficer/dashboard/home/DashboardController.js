Ext.define('MssPhoenix.view.tablet.principalofficer.dashboard.home.DashboardController', {
    extend: 'MssPhoenix.view.tablet.principalofficer.schemes.PoSchemesController',
    alias: 'controller.poDashboardcontroller',
    /**
     * Called when the view is created
     */
    sponsorId: null,
    schemeId: null,
    sponsorRefNo: null,
    init: function () {
        let me = this,
            view = me.getView(),
            viewModel = me.getViewModel();

        me.sponsorRefNo = me.getItem('sponsorRefNo');
        me.sponsorId = me.getItem('sponsorId');
        me.schemeId = me.getItem('schemeId');
        me.maskView(view, "Loading...");

        let vmData = {
            'newMembers': 0,
            'dueForRetirement': 0,
            'pensioners': 0,
            'leavers': 0
        };
        if (viewModel) {
            viewModel.set('sponsorMemberandPensionerCounts', vmData);
            let d = new Date(),
                n = d.getFullYear();
            viewModel.set('currentYear', n);
        }

        me.initPerms(viewModel)
        me.loadPersonalInfo(me.sponsorRefNo, function () {
            me.loadCountOfSponsorMembers(view, function (dt) {
                if (viewModel) {
                    viewModel.set('sponsorMemberCount', dt.count);
                }
                me.loadMemberandPensionerCount(view, function (data) {
                    if (viewModel) {
                        viewModel.set('sponsorMemberandPensionerCounts', data);
                    }
                }, function (err) {
                });
            }, function (err) {
            });
        })
    },

    initPerms: function (vm) {
        let me = this;
        let perms = me.decodePermissions();
        if (perms) {
            vm.set('billsMenuActivated', me.permSetDisplayBlockOrNone(perms.billsMenuActivated))
            vm.set('receiptsMenuActivated', me.permSetDisplayBlockOrNone(perms.receiptsMenuActivated))
            vm.set('membersMenuActivated', me.permSetDisplayBlockOrNone(perms.membersMenuActivated))
            vm.set('claimsMenuActivated', me.permSetDisplayBlockOrNone(perms.claimsMenuActivated))
        }
    },

    loadDataToForm: function (data, callBack) {
        let me = this,
            form = (me.getView()).lookupReference('sponsorform');
        if (form) {
            form.setValues(data)
        }

        callBack()
    },

    loadPersonalInfo: function (sponsorId, callBack) {
        let me = this;
        me.getView().mask('Please wait...');
        Ext.Ajax.request({
            url: `${MssPhoenix.model.Session.baseUrl}/api/get-sponsor-details/${MssPhoenix.model.Session.getUserId()}/${sponsorId}`,
            success: function (response, opts) {
                me.getView().unmask();
                let obj = Ext.decode(response.responseText);
                me.loadDataToForm(obj.data, callBack)
            },
            failure: function (response, opts) {
                me.getView().unmask();
            }
        });
    },

    loadCountOfSponsorMembers: function (view, successCallBack, errorCallBack) {
        let me = this;
        view.mask('Please wait...');
        Ext.Ajax.request({
            url: `${MssPhoenix.model.Session.baseUrl}/api/get-sponsor-member-listing-count/${me.sponsorId}/SPONSOR/${me.schemeId}`,
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

    loadMemberandPensionerCount: function (view, successCallBack, errorCallBack) {
        let me = this;
        view.mask('Please wait...');
        Ext.Ajax.request({
            url: `${MssPhoenix.model.Session.baseUrl}/api/sponsor/getSponsorMemberAndPensionerCount/${me.sponsorRefNo}`,
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

    poViewBilling: function () {
        let me = this;
        let sponsorId = me.getItem('sponsorId');
        let schemeId = me.getItem('schemeId');
        let id = sponsorId + "/" + schemeId;
        let xType = 'sponsorbills';
        me.redirectTo(xType + "/" + id);

    },

    poViewMembers: function () {
        let me = this,
            sponsorId = me.getItem('sponsorId'),
            schemeId = me.getItem('schemeId');
        let id = sponsorId + "/SPONSOR/" + schemeId;
        let xType = 'sponsormembers';
        me.redirectTo(xType + "/" + id);

    },

    poViewReceipts: function () {
        let me = this;
        let sponsorId = me.getItem('sponsorId');
        let schemeId = me.getItem('schemeId');
        let id = sponsorId + "/" + schemeId;
        let xType = 'sponsorreceipts';
        me.redirectTo(xType + "/" + id);
    },

    poViewPaidClaims: function () {
        let me = this;
        let sponsorId = me.getItem('sponsorId');
        let schemeId = me.getItem('schemeId');
        let id = sponsorId + "/" + schemeId;
        let xType = 'paidclaims';
        me.redirectTo(xType + "/" + id);
    },

    poViewAllClaims: function () {
        let me = this;
        let sponsorId = me.getItem('sponsorId');
        let schemeId = me.getItem('schemeId');
        let id = sponsorId + "/" + schemeId;
        let xType = 'allclaims';
        me.redirectTo(xType + "/" + id);

    },

    onReportsSelected: function (v, newValue, eOpts) {
        let me = this,
            id = v.getValue();
        if (id) {
            // {name: 'Members List', id: 0},
            // {name: 'Claims Paid', id: 1},
            // {name: 'Contributions Paid', id: 2},
            // {name: 'Members Due', id: 3},
            // {name: 'Members above retirement age', id: 4}
            let logiUrl = null;
            switch (id) {
                case 1:
                    Ext.widget('reportswithdateclaim').show();
                    break;
                case 2:
                    Ext.widget('reportswithdatecontributions').show();
                    break;
                case 3:
                    Ext.widget('reportswithdatemembersretiree').show();
                    break;
                case 4:
                    logiUrl = `${MssPhoenix.model.Session.getReportServerUrl()}/Principal Officer Members Above Retirement Age.cls&jrs.catalog=/Xe/Fundmaster.cat&jrs.result_type=2&jrs.auth_uid=admin&jrs.auth_pwd=admin&jrs.param$p_poId=${MssPhoenix.model.Session.getMemberId()}`;
                    me.displayReport(logiUrl, "Member Above retirement age");
                    break;
                case 5:
                    logiUrl = `${MssPhoenix.model.Session.getReportServerUrl()}/Principal Officers Members Listing.cls&jrs.catalog=/Xe/Fundmaster.cat&jrs.result_type=2&jrs.auth_uid=admin&jrs.auth_pwd=admin&jrs.param$p_poId=${MssPhoenix.model.Session.getMemberId()}`;
                    me.displayReport(logiUrl, "Member Listing")
                    break;
                default:
            }
        }
    },

    viewClaims: function () {
        let me = this;
        let view = me.getView(),
            form = Ext.ComponentQuery.query('#viewClaims')[0];
        if (form && form.validate()) {
            let fromDate = ((form.getFields()).fromDate).getInputValue();
            let toDate = ((form.getFields()).toDate).getInputValue();

            if (fromDate && toDate) {

                let fDate = (fromDate.replaceAll("/", "-")); //MM-dd-yyyy
                // fromDate = (fromDate.replaceAll("/", "%2F"));
                // toDate = (toDate.replaceAll("/", "%2F"));
                view.destroy()
                let logiUrl = `${MssPhoenix.model.Session.getReportServerUrl()}/Principal Officer Claims List.cls&jrs.catalog=/Xe/Fundmaster.cat&jrs.result_type=2&jrs.auth_uid=admin&jrs.auth_pwd=admin&jrs.param$p_fromDate=${fromDate}&jrs.param$p_toDate=${toDate}&jrs.param$p_poId=${MssPhoenix.model.Session.getMemberId()}`;
                me.displayReport(logiUrl, "Benefits")
            }
        }
    },

    viewContributions: function () {
        let me = this;
        let view = me.getView(),
            form = Ext.ComponentQuery.query('#viewContributions')[0];
        if (form && form.validate()) {
            let fromDate = ((form.getFields()).fromDate).getInputValue();
            let toDate = ((form.getFields()).toDate).getInputValue();

            if (fromDate && toDate) {

                let fDate = (fromDate.replaceAll("/", "-")); //MM-dd-yyyy
                // fromDate = (fromDate.replaceAll("/", "%2F"));
                // toDate = (toDate.replaceAll("/", "%2F"));
                view.destroy()
                let logiUrl = `${MssPhoenix.model.Session.getReportServerUrl()}/Principal Officer Batch Contributions.cls&jrs.catalog=/Xe/Fundmaster.cat&jrs.result_type=2&jrs.auth_uid=admin&jrs.auth_pwd=admin&jrs.param$p_fromDate=${fromDate}&jrs.param$p_toDate=${toDate}&jrs.param$p_poId=${MssPhoenix.model.Session.getMemberId()}`;
                me.displayReport(logiUrl, "Members Contributions")
            }
        }

    },

    membersToretire: function () {
        let me = this;
        let view = me.getView(),
            form = Ext.ComponentQuery.query('#membersToretire')[0];
        if (form && form.validate()) {
            let fromDate = ((form.getFields()).fromDate).getInputValue();
            let toDate = ((form.getFields()).toDate).getInputValue();

            if (fromDate && toDate) {

                let fDate = (fromDate.replaceAll("/", "-")); //MM-dd-yyyy
                // fromDate = (fromDate.replaceAll("/", "%2F"));
                // toDate = (toDate.replaceAll("/", "%2F"));
                view.destroy()
                let logiUrl = `${MssPhoenix.model.Session.getReportServerUrl()}/Principal Officer Members Due to Retire.cls&jrs.catalog=/Xe/Fundmaster.cat&jrs.result_type=2&jrs.auth_uid=admin&jrs.auth_pwd=admin&jrs.param$p_fromDate=${fromDate}&jrs.param$p_toDate=${toDate}&jrs.param$p_poId=${MssPhoenix.model.Session.getMemberId()}`;
                me.displayReport(logiUrl, "Member due to retire")
            }
        }
    }

});