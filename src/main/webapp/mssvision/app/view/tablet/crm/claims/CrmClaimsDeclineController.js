Ext.define('MssPhoenix.view.tablet.crm.claims.CrmClaimsDeclineController', {
    extend: 'MssPhoenix.view.tablet.crm.baseController.CrmBaseController',
    alias: 'controller.crmclaimsdeclinecontroller',

    init: function () { },

    onSubmitBtnClick: function () {
        var me = this,
        form = me.lookup('form');
        var method = 'POST';
        var url = `${MssPhoenix.model.Session.baseUrl}/api/benefitRequest/CRMDeclineBenefits`;
        var view=me.getView();
        me.maskView(view,"Saving...");
        if (form.validate()) {
            form.submit({
                url: url,
                method: method,
                success: function (form, action) {                                                                   
                    me.unMaskView(view);
                    Ext.Msg.alert('Success', action.msg);
                    me.redirectTo("crmclaims");      
					var store = Ext.getStore('crmclaims');
                    store.reload() ; 
                },
                failure: function (form, action) {                                                   
                    me.unMaskView(view);
                    Ext.Msg.alert('Failure', action.msg);
                }
            });
        }
        me.getView().close();
    }
    ,
    onCancelBtnClick:function(params) {
        this.getView().close();
    }
});