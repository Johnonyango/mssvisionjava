Ext.define('MssPhoenix.view.tablet.member.contributions.RequestStatementController', {
    extend: 'MssPhoenix.view.tablet.member.base.BaseMemberController',
    alias: 'controller.memberrequeststatementcontroller',
    /**
     * Called when the view is created
     */
    isPhone: false,
    init: function () {
        let me = this;
        me.isPhone = MssPhoenix.profile.Phone.isPhone();
    },

    onCancelBtnClick: function () {
        let me = this;
        me.getView().destroy();
    },

    requestStatementBtnClick: function () {
        let me = this;
        let view = me.getView(),
            form = Ext.ComponentQuery.query('memberrequeststatement #memberrequeststatementform')[0];

        let memberId = MssPhoenix.model.Session.getMemberId();
        let schemeId = MssPhoenix.model.Session.getSchemeId();
        if (form && form.validate()) {
            let accountingPeriod = ((form.getFields()).accountingPeriod).getValue();
            view.destroy();
            let logiUrl = `${MssPhoenix.model.Session.getReportServerUrl()}/Individual Member Statement Per Period_absolute.cls&jrs.catalog=/Xe/Fundmaster.cat&jrs.result_type=2&jrs.auth_uid=admin&jrs.auth_pwd=admin&jrs.param$p_memberId=${memberId}&jrs.param$p_apId=${accountingPeriod}`;
            me.displayReport(logiUrl, "Member Statement");
            return;
        }

        me.showToast("Provide all fields", 3000);
    },

    requestStatementBtnClickEtl: function () {
        let me = this;
        let view = me.getView(),
            form = Ext.ComponentQuery.query('memberrequeststatementetl #memberrequeststatementformetl')[0];
        if (form && form.validate()) {
            me.maskView(view, 'Sending request...');
            let memberId = MssPhoenix.model.Session.getMemberId();
            let schemeId = MssPhoenix.model.Session.getSchemeId();

            // me.saveItem("fromDate", fromDate)
            // me.saveItem("toDate", toDate)

            // REQUEST STATEMENT TO BE SENT VIA EMAIL THEN OPEN LOGI URL
            let fromDate = ((form.getFields()).fromDate).getInputValue();
            let toDate = ((form.getFields()).toDate).getInputValue();

            if (fromDate && toDate) {
                let fDate = (fromDate.replaceAll("/", "-")); //MM-dd-yyyy
                // fromDate = (fromDate.replaceAll("/", "%2F"));
                // toDate = (toDate.replaceAll("/", "%2F"));
                Ext.Ajax.request({
                    url: `${MssPhoenix.model.Session.baseUrl}/api/sendMemberStatement/${MssPhoenix.model.Session.getUserId()}/${memberId}/${schemeId}/${fDate}`,
                    success: function (response, opts) {
                        me.unMaskView(view);
                        view.destroy();
                        // let canViewContributions = me.getItem("canViewContributions") === "true";
                        // if (canViewContributions)
                        //     window.open("../statement.html", "_blank")
                        me.showAlert("Hello", "Statement request received and is being processed kindly check your email after a few minutes.");
                    },
                    failure: function (response, opts) {
                        me.unMaskView(view);
                        view.destroy();
                        me.showAlert("Sorry", "Please try again");
                    }
                })
                return;
            }
            me.showAlert("Sorry", "Kindly provide appropriate dates");
            return;
        }

        me.showToast("Provide all fields", 3000);
    },

    viewStatementBtnClick: function () {
        let me = this;
        let view = me.getView(),
            form = Ext.ComponentQuery.query('viewmemberstatementetl #viewmemberrequeststatementformetl')[0];
        if (form && form.validate()) {
            me.maskView(view, 'Sending request...');
            var memberId ;
            var schemeId ;
            if (MssPhoenix.model.Session.getUserRole() === "MEMBER") {
                memberId = MssPhoenix.model.Session.getMemberId();
                schemeId = MssPhoenix.model.Session.getMemberId();
            }
            else {
                memberId = me.getItem("memberIdForReport");
                schemeId = me.getItem("schemeIdForReport");
            }
            let asAt = ((form.getFields()).asAt).getInputValue();
            view.destroy();
            let logiUrl = `https://thestable.enterprisegroup.net.gh:8081/fundmaster/rdPage.aspx?rdReport=unitizedStatement&asAT=%27${asAt}%27&member_id=${memberId}&schemeId=${schemeId}`;
            console.log("url:"+logiUrl);
            me.displayReport(logiUrl, "Member Statement as at " + asAt);
            return;
        }

        me.showToast("Provide all fields", 3000);
    },
});