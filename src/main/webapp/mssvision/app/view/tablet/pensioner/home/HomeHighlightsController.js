Ext.define('MssPhoenix.view.tablet.pensioner.home.HomeHighlightsController', {
    extend: 'MssPhoenix.view.tablet.shared.BaseController',
    alias: "controller.homehighlightscontroller",

    init: function () {
        let me = this;
        //check If FirstTime
        me.firstTimeChangePwd(function () {
            me.checkNewMessages();
        })

        me.loadPayrolls()
        me.loadTickets()

    },

    loadPayrolls: function () {
        let me = this;
        let view=me.getView();
        view.mask('Please wait...');
        Ext.Ajax.request({
            url:`${MssPhoenix.model.Session.baseUrl}/api/getLastPayrollByPensioner/${MssPhoenix.model.Session.getPensionerNo()}/${MssPhoenix.model.Session.getSchemeId()}`,
            // P111467/388291
            success: function (response, opts) {
                view.unmask();
                let obj = Ext.decode(response.responseText);
                var payrolls = obj.data.length
                // console.dir(payrolls);
                
                // console.dir(obj.data[0].net)
                let sum = 0
                for(var i = 0; i<payrolls; i++){
                    sum+=obj.data[i].net
                }
                var totalPay = sum;
                // console.log(totalPay)
                let summary={
                    "payrolls":payrolls,
                    "totaPay":totalPay,
                    // "openTickets":openTickets,
                    // "pendingCOE":pendingCOE,
                }

                let vm=view.getViewModel();
                if(vm){
                    vm.set('homeSummary',summary);
                }
                // me.loadDataToForm(obj.data)
            },
            failure: function (response, opts) {
                view.unmask();
                console.log('server-side failure with status code ' + response.status);
            }
        });
    },

    loadTickets: function () {
        let me = this;
        let view=me.getView();
        me.getView().mask('Please wait...');
        Ext.Ajax.request({
            url: `${MssPhoenix.model.Session.baseUrl}/api/user/${MssPhoenix.model.Session.getUserId()}/ticket/created`,

            success: function (response, opts) {
                me.getView().unmask();
                let obj = Ext.decode(response.responseText);
                var openTickets = obj.data.length
                console.dir(openTickets);

                let ticketsummary={
                    "openTickets":openTickets,
                    // "openTickets":openTickets,
                    // "pendingCOE":pendingCOE,
                }

                let vm=view.getViewModel();
                if(vm){
                    vm.set('openTickets',openTickets);
                    
                }
                // me.loadDataToForm(obj.data)
            },
            failure: function (response, opts) {
                me.getView().unmask();
                console.log('server-side failure with status code ' + response.status);
            }
        });
    }
});



