Ext.define('MssPhoenix.view.tablet.principalofficer.dashboard.memberdetails.PoMemberDetailsController', {
    extend: 'MssPhoenix.view.tablet.shared.BaseController',
    alias: 'controller.pomemberdetailscontroller',
    /**
     * Called when the view is created
     */
    memberId: null,
    init: function () {

        let me = this;
        me.memberId = me.getItem('memberId');
        //claims
        me.loadClaims(function () {
            me.loadBeneficiaries(function () {
                me.loadContributions()
            })
        })
    },

    loadClaims: function (callBack) {
        let me = this;
        let claimsStore = Ext.getStore('memberclaims');
        claimsStore.reload()
        if (callBack != null)
            callBack()
    },

    loadBalances: function () {

    },

    loadContributions: function () {
        let me = this,
            url = `${MssPhoenix.model.Session.baseUrl}/api/filterContributions/${MssPhoenix.model.Session.getUserId()}/${me.memberId}/01%2F01%2F2010/today`,
            store = Ext.getStore('membercontributions');
        if (store) {
            store.getProxy().url = url;
            store.reload()
        }
    },

    loadBeneficiaries: function (callBack) {
        let me = this,
            memberbeneficiarychart = Ext.getStore('memberbeneficiarychart');
        if (memberbeneficiarychart) {
            memberbeneficiarychart.getProxy().url = `${MssPhoenix.model.Session.baseUrl}/api/getBeneficiariesChart/${MssPhoenix.model.Session.getUserId()}/${me.memberId}`;
            memberbeneficiarychart.reload()
        }
        if (callBack != null)
            callBack()
    },

    showRequestStatementWin: function () {
        let me = this;
        if (MssPhoenix.profile.Phone.isPhone()) {
            Ext.widget('memberphone-requeststatement').show();
            return;
        }
        Ext.widget('memberrequeststatement').show();
    },

    showMemberContributionReport: function () {
        let me = this,
            logiUrl = `${MssPhoenix.model.Session.getReportServerUrl()}/Member Contributions.cls&jrs.catalog=/Xe/Fundmaster.cat&jrs.result_type=2&jrs.auth_uid=admin&jrs.auth_pwd=admin&jrs.param$p_memberId=${MssPhoenix.model.Session.getMemberId()}`;
        me.displayReport(logiUrl,'Contribution History')
    },

    showMemberBalancesReport: function () {
        let me = this,
            logiUrl = `${MssPhoenix.model.Session.getReportServerUrl()}/Member Balances History.cls&jrs.catalog=/Xe/Fundmaster.cat&jrs.result_type=2&jrs.auth_uid=admin&jrs.auth_pwd=admin&jrs.param$p_memberId=${MssPhoenix.model.Session.getMemberId()}`;
        me.displayReport(logiUrl,'Balances History')
    }

});