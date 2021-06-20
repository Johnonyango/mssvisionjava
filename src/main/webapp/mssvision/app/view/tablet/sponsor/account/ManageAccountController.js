Ext.define('MssPhoenix.view.tablet.sponsor.account.ManageAccountController', {
    extend: 'MssPhoenix.view.tablet.sponsor.baseController.SponsorBaseController',
    alias: 'controller.sponsormanageaccountcontroller',

    init: function () {
        let me = this;
        me.getSponsorInfo();
    },

    getSponsorInfo: function () {
        let me = this;
        let view = me.getView();
        view.mask("loading...")
        me.loadSponsorInfo(function (callBackData) {
            view.unmask();
            me.bindSponsorInfoToView(callBackData);
        },function (res) {
            me.showToast("Please try again")
            view.unmask()
        });
    },


   
    bindSponsorInfoToView: function (data) {
        let me = this;
        let viewModel = me.getViewModel();
        if (viewModel) {
            viewModel.set('userInfo', `<blockquote style="border-left: 1px  #eee;padding-left: 15px;">
        Name: ${data.name}<br/>
        Sponsor No: ${data.employerRefNo}<br/>
     </blockquote>`);
        }
    },

    sponsorSwitchSchemeFunc: function () {
        let me = this;
        Ext.widget('sponsorswitchschemewin').show();
    },
});