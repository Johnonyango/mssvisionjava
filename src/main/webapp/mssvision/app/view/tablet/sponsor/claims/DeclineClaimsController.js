Ext.define('MssPhoenix.view.tablet.sponsor.claims.DeclineClaimsController', {
    extend: 'MssPhoenix.view.tablet.sponsor.baseController.SponsorBaseController',
    alias: 'controller.sponsorclaimsdeclinecontroller',

    init: function () { },

    onSubmitBtnClick: function () {
        var me = this,
        form = me.lookup('form');
        console.log(form.getValues());
        var method = 'POST';
        var url =`${MssPhoenix.model.Session.baseUrl}/api/benefitRequest/sponsorDeclineBenefits`;
       
        if (form.validate()) {
            me.maskView(me.getView(),"Saving...");
            form.submit({
                url: url,
                method: method,
                success: function (form, action) {                                                                   
                    me.unMaskView(me.getView());
                    me.getView().destroy()
                    me.showAlert('Message', action.msg);
                    // me.redirectTo("sponsorclaim");      
					var store = Ext.getStore('sponsorclaim');
                    store.reload() ; 
                },
                failure: function (form, action) {                                                   
                    me.unMaskView(me.getView());
                    me.showToast("Please try again");
                }
            });
        }
    }
    ,
    onCancelBtnClick:function(params) {
        this.getView().close();
    }
});