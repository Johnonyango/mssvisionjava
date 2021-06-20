Ext.define('MssPhoenix.view.tablet.crm.member.CrmMemberDetailsController', {
    extend: 'MssPhoenix.view.tablet.shared.BaseController',
    alias: 'controller.crmmemberdetailscontroller',
    /**
     * Called when the view is created
     */
    init: function () {
        var me = this;
        let viewModel = me.getViewModel();
        if (viewModel) {
            viewModel.set('currency', me.getCurrencyShortName());
        }
    },
    goBackToMembers: function () {
        var me = this;
        me.getView().destroy();
        if (MssPhoenix.model.Session.getUserRole() === 'SPONSOR') {
            me.redirectTo('sponsormembers')
        }
        else {
            if (MssPhoenix.profile.Phone.isPhone()) {
                var xType = 'crmphonemembers';
                me.redirectTo(xType);
            } else {
                var xType = 'crmmembers';
                me.redirectTo(xType);
            }
        }
    },

    showMemberEmploymentDetailsWin: function () {
        var me = this;
        if (MssPhoenix.profile.Phone.isPhone()) {
            var winContainer = Ext.widget('crmphonememberemploymentdetails');
            winContainer.show();
            let data = localStorage.getItem("crmmemberInfo");
            winContainer.lookupReference('employeeForm').setValues(me.decodeJson(data));
        }
        else {
            var winContainer = Ext.widget('crmmemberemploymentdetails');
            winContainer.show();
            let data = localStorage.getItem("crmmemberInfo");
            winContainer.lookupReference('form').setValues(me.decodeJson(data));
        }

    },

    viewMemberCert: function () {
        let me = this;
        let memberIdForReport=me.getItem("memberIdForReport");
        console.log(memberIdForReport);
        let schemeIdForReport=me.getItem("schemeIdForReport");
        Ext.Msg.confirm('View report Confirmation', 'Are you sure you want to view Member certificate?',
            function (answer) {
                if (answer === "yes") {
                    var logiUrl;
                    if (MssPhoenix.model.Session.getMssClient() === 'ETL') {
                        logiUrl=`https://thestable.enterprisegroup.net.gh:8081/fundmaster/rdPage.aspx?rdReport=Individual_MemberShip_Certificate&member_id=${memberIdForReport}&schemeId=${schemeIdForReport}&user_id=${MssPhoenix.model.Session.getMemberId()}`
                        console.log("url:"+logiUrl);
                    }
                    else{
                        logiUrl = `${MssPhoenix.model.Session.getReportServerUrl()}/NICO Members Certificate.cls&jrs.catalog=/Xe/Fundmaster.cat&jrs.result_type=2&jrs.auth_uid=admin&jrs.auth_pwd=admin&jrs.param$p_memberId=${memberIdForReport}`;
                    }
                    me.displayReport(logiUrl, "Membership Certificate");
                }
            });
    },

    viewMemberStatement: function () {
        Ext.widget('viewmemberstatementetl').show();
    }

});