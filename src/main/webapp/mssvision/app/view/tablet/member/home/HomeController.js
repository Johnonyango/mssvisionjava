Ext.define('MssPhoenix.view.tablet.member.home.HomeController', {
    extend: 'MssPhoenix.view.tablet.member.balances.BalancesController',
    alias: 'controller.memberhomecontroller',
    /**
     * Called when the view is created
     *
     * check if member has documents
     * check if member has beneficiaries
     */
    client: null,

    init: function () {
        let me = this;
        let view = me.getView();
        let viewModel = me.getViewModel();

        me.client = MssPhoenix.model.Session.getMssClient();

        let etlClient = me.client === "ETL" ? "block" : "none"
        let otherClients = me.client !== "ETL" ? "block" : "none"

        if (viewModel) {
            viewModel.set("etlClient", etlClient)
            viewModel.set("otherClients", otherClients)
        }

        //check If FirstTime
        me.firstTimeChangePwd(function () {
            me.checkNewMessages();
        })

        me.initPallets();
    },

    initPallets: function () {
        let me = this;
        let view = me.getView();
        let viewModel = me.getViewModel();
        if (viewModel) {
            viewModel.set('currency', me.getCurrencyShortName());
            viewModel.set('summary', {
                'eeReg': 0,
                'erReg': 0,
                'totalBenefits': 0,
                'contributions': 0,
                'returns': 0,
                'balances': 0,
                'withdrawals': 0,
            });
        }

        if (me.client === "ETL")
            me.loadSummaryETL(view, function (dt) {
                me.bindDataToPallets(dt)
            }, function (err) {
                //load user info
                me.loadMemberInformation(function (callBackData) {
                    me.bindMemberInfo(callBackData)
                }, function (err) {
                    // console.log(err)
                });
            });
        else
            me.loadSummary(view, function (dt) {
                me.bindDataToPallets(dt)
            }, function (err) {
                //load user info
                me.loadMemberInformation(function (callBackData) {
                    me.bindMemberInfo(callBackData)
                }, function (err) {
                    // console.log(err)
                });
            });
    },


    showRequestStatementWin: function () {
        let me = this;

        if (MssPhoenix.model.Session.getMssClient() === 'ETL') {
            if (MssPhoenix.profile.Phone.isPhone()) {
                Ext.widget('memberrequeststatementetlphone').show();
                return;
            }
            Ext.widget('memberrequeststatementetl').show();
        } else {
            if (MssPhoenix.profile.Phone.isPhone()) {
                Ext.widget('memberphone-requeststatement').show();
                return;
            }
            Ext.widget('memberrequeststatement').show();
        }
    },

    viewStatementWin: function () {
        Ext.widget('viewmemberstatementetl').show();
    },

    contributionsHistory: function () {
        let me = this;
        let logiUrl = `${MssPhoenix.model.Session.getReportServerUrl()}/Member Contributions.cls&jrs.catalog=/Xe/Fundmaster.cat&jrs.result_type=2&jrs.auth_uid=admin&jrs.auth_pwd=admin&jrs.param$p_memberId=${MssPhoenix.model.Session.getMemberId()}`;
        me.displayReport(logiUrl, "Contributions History")
    },


    bindDataToPallets: function (data) {
        let me = this;
        let view = me.getView();
        let viewModel = me.getViewModel();
        if (viewModel) {
            viewModel.set('currency', me.getCurrencyShortName());
            viewModel.set('summary', data);
            viewModel.set('isRequestStatement', me.getItem("isRequestStatement") === "true" ? "block" : "none");
            viewModel.set('canViewContributions', me.getItem("canViewContributions") === "true" ? "block" : "none");
            /**
             * DO NOT REMOVE, USED BY PROJECTIONS
             */
            if (me.client === "ETL")
                me.saveItem('totalBenefits', data.balances);
            else
                me.saveItem('totalBenefits', data.totalBenefits);
        }

        //load user info
        me.loadMemberInformation(function (callBackData) {
            // console.log(callBackData)
            me.bindMemberInfo(callBackData)

            me.checkIfCanAddBeneficiaries();
        }, function (err) {
        });
    },

    checkIfCanAddBeneficiaries: function () {
        let me = this,
            view = me.getView(),
            content = ``;
        me.memberCheckIfCanAddBeneficiaries(function (obj) {
            if (obj != null) {
                if (obj.canAdd) {
                    content += `* Add more  <a href="#membermainpersonalinfo">beneficiaries</a> to reach 100% lumpsum entitlements<br>`;
                }
            }
            me.checkMissingDocs(content)
        })
    },

    checkMissingDocs: function (content) {
        let me = this,
            view = me.getView();
        me.memberCheckIfMissingDocs(function (obj) {
            if (obj != null) {
                if (obj.length > 0) {
                    content += `* Upload missing <a href="#membermissingdocuments">documents</a><br>`;
                }
            }
        })
        if (me.client === "ETL") {
            me.kycCheck(content);
        } else if (content !== ``) {
            me.showAlert('To Do', content);
        }
    },

    kycCheck: function (content) {
        let me = this,
            view = me.getView();

        me.urlGet(
            `${MssPhoenix.model.Session.baseUrl}/api/memberKYCCheck/${MssPhoenix.model.Session.getMemberId()}/${MssPhoenix.model.Session.getSchemeId()}`,
            function (obj) {
                let data = obj.data;
                if (data.isDueForKYC === "YES") {
                    content += `* Dear Member, Your details are due for KYC update, <a href="#allmemberdetails">please confirm your details</a> and click on save button<br>`;
                    me.redirectTo('allmemberdetails');
                }
                me.dobCheck(content);
            }, function (err) {
                me.dobCheck(content);
            }
        );
    },

    dobCheck: function (content) {
        let me = this,
            view = me.getView();

        me.urlGet(
            `${MssPhoenix.model.Session.baseUrl}/api/checkIfMemberHasGenericDoB/${MssPhoenix.model.Session.getMemberId()}`,
            function (obj) {
                let data = obj.data;
                if (data.isDobGeneric === "YES") {
                    content += `* Your Date of Birth is Generic.Please Update your <a href="#membermainpersonalinfo">date of birth</a><br>`;
                }
                if (content !== ``) {
                    me.showAlert('To Do', content);
                }
            }, function (err) {
                if (content !== ``) {
                    me.showAlert('To Do', content);
                }
            }
        );
    }
});