Ext.define('MssPhoenix.view.tablet.member.manage.ManageAccountController', {
    extend: 'MssPhoenix.view.tablet.member.base.BaseMemberController',
    alias: 'controller.membermanageaccountcontroller',

    client: null,
    init: function () {
        let me = this,
            view = me.getView(),
            vm = view.getViewModel();
        me.getMemberInfo();
        me.client = MssPhoenix.model.Session.getMssClient();
        if (me.client === 'ETL') {
            vm.set('hidePreserveAccount', 'block');
        }
    },

    getMemberInfo: function () {
        let me = this;
        let view = me.getView();
        view.mask("loading...")
        me.loadMemberInformation(function (callBackData) {
            view.unmask();
            me.bindMemberInfoToView(callBackData);
        }, function (res) {
            me.showToast("Please try again")
            view.unmask()
        });
    },

    bindMemberInfoToView: function (data) {
        let me = this;
        let viewModel = me.getViewModel();
        me.client = MssPhoenix.model.Session.getMssClient();
        if (viewModel) {
           
            let nssn = me.truncateDecimals(data.nationalPenNo);
            viewModel.set('userInfo', `<blockquote style="color:#ffffff;border-left: 3px solid #eee;padding-left: 15px;">
        <h3>${data.surname} ${data.firstname} </h3>
        Member since: <strong>${data.dateJoinedScheme}</strong><br/>
        Member No: <strong>${data.memberNo}</strong><br/>
        Membership Status: <strong>${data.mbshipStatus}</strong><br/>
        NSSN NO: <b>${data.nationalPenNo}</b><br/>
     </blockquote>`);
        }
    },

    memberSwitchSchemeFunc: function () {
        let me = this;
        Ext.widget('memberswitchschemewin').show();
    },

    switchproductswin: function () {
        let me = this;
        Ext.widget('switchproductswin').show();
    },

    viewMemberCertificate: function () {
        let me = this;
        Ext.Msg.confirm('View report Confirmation', 'Are you sure you want to view Member certificate?',
            function (answer) {
                if (answer === "yes") {
                    let memberId = MssPhoenix.model.Session.getMemberId();
                    var logiUrl;
                    if (MssPhoenix.model.Session.getMssClient() === 'ETL') {
                        let schemeId = MssPhoenix.model.Session.getSchemeId();
                        logiUrl=`https://thestable.enterprisegroup.net.gh:8081/fundmaster/rdPage.aspx?rdReport=Individual_MemberShip_Certificate&member_id=${memberId}&schemeId=${schemeId}&user_id=${memberId}`
                    }
                    else{
                        logiUrl = `${MssPhoenix.model.Session.getReportServerUrl()}/NICO Members Certificate.cls&jrs.catalog=/Xe/Fundmaster.cat&jrs.result_type=2&jrs.auth_uid=admin&jrs.auth_pwd=admin&jrs.param$p_memberId=${memberId}`;
                    }
                    me.displayReport(logiUrl, "Membership Certificate")
                }
            });
    },

    onPreserveAccountClick: function () {
        let me = this,
            userId = MssPhoenix.model.Session.getUserId(),
            memberId = MssPhoenix.model.Session.getMemberId(),
            schemeId = MssPhoenix.model.Session.getSchemeId(),
            view = me.getView();
        me.maskView(view, 'Please wait...');
        me.loadMemberInformation(function (obj) {
            let mbshipStatus = obj.mbshipStatus;
            switch (mbshipStatus) {
                case 'INACTIVE':
                case 'DORMANT':
                    me.urlGet(
                        `${MssPhoenix.model.Session.baseUrl}/api/preserveAccount/${userId}/${memberId}/${schemeId}`,
                        function (obj) {
                            me.unMaskView(view);
                            me.showAlert('Hello', 'Successfully updated membership status!');
                        },
                        function (err) {
                            me.unMaskView(view);
                        }
                    );
                    break;
                default:
                    me.unMaskView(view);
                    me.showAlert('Hello', 'This operation can only be performed on INACTIVE Members Only!');
            }
        }, function (err) {
            me.unMaskView(view);
            me.showAlert('Sorry', 'Please try again')
        })
    }
});