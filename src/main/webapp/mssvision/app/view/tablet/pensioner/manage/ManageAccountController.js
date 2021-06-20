Ext.define('MssPhoenix.view.tablet.pensioner.manage.ManageAccountController', {
    extend: 'MssPhoenix.view.tablet.member.base.BaseMemberController',
    alias: 'controller.pensionermanageaccountcontroller',

    init: function () {
        let me = this;
        let view = me.getView();
        // view.loadmask(view,"loading...")
        me.loadAccountInfo(view, function (data) {
            me.bindMemberInfoToView(data)
        }, function (err) {

        });

    },

    loadAccountInfo: function (view, successCallBack, errorCallBack) {
        let me = this;
        view.mask('Please wait...');
        Ext.Ajax.request({
            url: `${MssPhoenix.model.Session.baseUrl}/api/getpensionerdetails/${MssPhoenix.model.Session.getMemberId()}`,
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

    bindMemberInfoToView: function (data) {
        let me = this;
        let viewModel = me.getViewModel();
        if (viewModel) {
            viewModel.set('userInfo', `<blockquote style="color:#ffffff;border-left: 3px solid #eee;padding-left: 15px;">
        <h3> ${data.name} </h3>
        Pension Status: <strong>${data.pensionStatus}</strong><br/>
        Pension Type: <strong>${data.pensionerType}</strong><br/>
        Member No: <strong>${data.id}</strong><br/>
        Membership Status: <strong>${data.isMember}</strong><br/>
        NSSN NO: <b>${data.pensionerNo}</b><br/>
     </blockquote>`);
        }
    },

    pensionerSwitchSchemeFunc: function () {
        let me = this;
        Ext.widget('pensionerswitchschemewin').show();
    },
});