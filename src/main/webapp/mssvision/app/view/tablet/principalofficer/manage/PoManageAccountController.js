Ext.define('MssPhoenix.view.tablet.principalofficer.manage.PoManageAccountController', {
    extend: 'MssPhoenix.view.tablet.principalofficer.PoBaseController',
    alias: 'controller.pomanageaccountcontroller',
    init: function () {
        let me = this,
            view = me.getView();
        view.mask('Please wait...');
        me.loadPersonalInfo(function (data) {
            me.unMaskView(view)
            me.bindMemberInfoToView(data[0])
        }, function () {
            me.unMaskView(view)
        });
    },

    bindMemberInfoToView: function (data) {
        let me = this;
        let viewModel = me.getViewModel();
        if (viewModel) {
            viewModel.set('userInfo', `<blockquote style="border-left: 3px solid #eee;padding-left: 15px;">
        <h3> ${data.name} </h3>
        <strong>${data.email}</strong><br/>
        Phone Number: <b>${data.cellPhone}</b> <a href="#" style="margin-left:10px"></a><br/>
        Reference Number: <b>${MssPhoenix.model.Session.getMemberId()}</b> <a href="#" style="margin-left:10px"></a><br/>
     </blockquote>`);
            viewModel.set('email', `${MssPhoenix.model.Session.getSponsorEmail()}`);
        }
    }
});