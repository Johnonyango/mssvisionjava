Ext.define('MssPhoenix.view.tablet.crm.home.CrmHomeController', {
    extend: 'MssPhoenix.view.tablet.shared.BaseController',
    alias: 'controller.crmhomecontroller',
    init: function () {
        let me = this;
        let view = me.getView();
        let viewModel = me.getViewModel(); 


        var client = MssPhoenix.model.Session.getMssClient();
    
        let otherClients = client !== "ETL" ? false : true;

        if(viewModel){
            viewModel.set("otherClients", otherClients)
            viewModel.set('sponsorMemberSummary', {
                'sponsorsCount': 0,
                'membersCount': 0,
            });
        }

        //check If FirstTime
        me.firstTimeChangePwd(function () {
            me.checkNewMessages();
        })

        me.maskView(view,"Loading...");
        me.loadCountOfPendingClaims(view, function (dt) {
            let view = me.getView();
            let viewModel = me.getViewModel();
            if (viewModel) {
                viewModel.set('pendingClaims', dt.count);
            }
        }, function (err) {
            
        });
        me.loadCountOfOpenTickets(view, function (data) {  
            let view = me.getView();
            let viewModel = me.getViewModel();
            if (viewModel) {
                viewModel.set('openTickets', data.count);
            }
        }, function (err) {

        });
        me.getCountOfSponsorsAndMembers(view, function (data) {  
            let view = me.getView();
            let viewModel = me.getViewModel();
            if (viewModel) {
                viewModel.set('sponsorMemberSummary', data);
            }
        }, function (err) {

        });
        me.unMaskView(view);
        
        // me.bindDataToPallets(pendingClaims,openTickets);
    },
    loadCountOfPendingClaims:function (view,successCallBack, errorCallBack) {
        let me = this;
       view.mask('Please wait...');
        Ext.Ajax.request({
            url: `${MssPhoenix.model.Session.baseUrl}/api/benefitRequest/getCountOfPendingClaims`,
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
    loadCountOfOpenTickets:function (view,successCallBack, errorCallBack) {
        let me = this;
       view.mask('Please wait...');
        Ext.Ajax.request({
            url: `${MssPhoenix.model.Session.baseUrl}/api/ticket/getCountOfOpenSupportTicket/${MssPhoenix.model.Session.getUserRole()}`,
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
    getCountOfSponsorsAndMembers:function (view,successCallBack, errorCallBack) {
        let me = this;
       view.mask('Please wait...');
        Ext.Ajax.request({
            url: `${MssPhoenix.model.Session.baseUrl}/api/sponsor/getCountOfSponsorsAndMembers/${MssPhoenix.model.Session.getMemberId()}`,
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
    reloadClaimsGrid:function () {
        this.reloadGrid("crmrecentclaimssgrid");
    },
    reloadTicketsGrid:function () {
        this.reloadGrid("crmrecentsupportticketsgrid");
    },
});