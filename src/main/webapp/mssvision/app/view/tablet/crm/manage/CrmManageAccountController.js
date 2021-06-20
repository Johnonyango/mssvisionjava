Ext.define('MssPhoenix.view.tablet.crm.manage.CrmManageAccountController', {
    extend: 'MssPhoenix.view.tablet.crm.baseController.CrmBaseController',
    alias: 'controller.crmmanageaccountcontroller',
    init: function () {
        let me = this;
        let view = me.getView();
        // view.loadmask(view,"loading...")
        me.loadAccountInfo(view, function (data) {
            me.bindMemberInfoToView(data)
        }, function (err) {

        });

    },

    bindMemberInfoToView: function (data) {
        let me = this;
        let viewModel = me.getViewModel();
        if (viewModel) {
            viewModel.set('userInfo', `<blockquote style="border-left: 3px solid #eee;padding-left: 15px;">
        <h3> ${data.name} </h3>
        Email: <strong>${data.email}</strong><br/>
        Phone Number: <strong>${data.phoneNumber}</strong><br/>
        ID Number: <b>${data.id}</b> <a href="#" style="margin-left:10px"></a><br/>
     </blockquote>`);
            viewModel.set('email', data.email);
        }
    },
    loadAccountInfo: function (view, successCallBack, errorCallBack) {
        let me = this;
        view.mask('Please wait...');
        Ext.Ajax.request({
            url: `${MssPhoenix.model.Session.baseUrl}/api/getFmUserDetailsById/${MssPhoenix.model.Session.getMemberId()}`,
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

});