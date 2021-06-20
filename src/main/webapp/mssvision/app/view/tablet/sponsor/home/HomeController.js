Ext.define('MssPhoenix.view.tablet.sponsor.home.HomeController', {
    extend: 'MssPhoenix.view.tablet.sponsor.baseController.SponsorBaseController',
    alias: 'controller.sponsorhomecontroller',

    client:null,

    init: function () {
        let me = this;
        let view = me.getView();   
        let viewModel = me.getViewModel(); 

        me.client = MssPhoenix.model.Session.getMssClient();

        let etlClient = me.client === "ETL" ? "block" : "none"
        let otherClients = me.client !== "ETL" ? "block" : "none"

        if(viewModel){
            viewModel.set("etlClient", etlClient)
            viewModel.set("otherClients", otherClients)
            viewModel.set('sponsorDashboard', {
                'active': 0,
                'inactive': 0,
                'notified': 0,
                'exited': 0,
                'dueforRetirement': 0,
                'tpfaReceived': 0,
                'tpfaRequested': 0,
                'tpfaNotQualified': 0,
                'newMembersInCurrYear': 0,
            });

        }

        //check If FirstTime
        me.firstTimeChangePwd(function () {
            me.checkNewMessages();
        })

        me.maskView(view, "Loading...");

        me.loadYear();

        me.loadStatisticsOfSponsorDashboard(view, function (data) {
            if (viewModel) {
                viewModel.set('sponsorDashboard', data[0]);

            }
        }, function (err) {

        });

        me.loadCountOfSponsorMembers(view, function (dt) {
            if (viewModel) {
                viewModel.set('sponsorMemberCount', dt.count);

            }
        }, function (err) {

        });

        me.loadMemberandPensionerCount(view, function (data) {
      
            if (viewModel) {

                viewModel.set('sponsorMemberandPensionerCounts', data);
            }
        }, function (err) {

        });
    },

    loadCountOfSponsorMembers: function (view, successCallBack, errorCallBack) {
        let me = this;
        view.mask('Please wait...');
        Ext.Ajax.request({
            url: `${MssPhoenix.model.Session.baseUrl}/api/get-sponsor-member-listing-count/${MssPhoenix.model.Session.getSponsorIdField()}/${MssPhoenix.model.Session.getUserRole()}/${MssPhoenix.model.Session.getSchemeId()}`,
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



    loadStatisticsOfSponsorDashboard: function (view, successCallBack, errorCallBack) {
        let me = this;
        view.mask('Please wait...');
        Ext.Ajax.request({
            url: `${MssPhoenix.model.Session.baseUrl}/api/sponsor/dashboard/${MssPhoenix.model.Session.getSponsorIdField()}`,
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
        view.mask('Please wait...');
        Ext.Ajax.request({
            url: `${MssPhoenix.model.Session.baseUrl}/api/sponsor/getSponsorMemberAndPensionerCount/${MssPhoenix.model.Session.getSponsorId()}`,
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

    loadYear: function () {
        var me = this;
        var now = new Date();
        var currentYear = now.getFullYear();
        let viewModel = me.getViewModel();
        if (viewModel) {
            viewModel.set('currentYear', currentYear);
        }
    }
});

