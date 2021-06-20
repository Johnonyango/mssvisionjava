Ext.define('MssPhoenix.view.tablet.admin.LandingPageContent.edits.WelcomeMessage.WelcomeMessageController', {
    extend: 'MssPhoenix.view.tablet.shared.BaseController',
    alias: 'controller.welcomemessagecontroller',

   
    init: function(){
 
    },
    onCancelBtnClick: function(){
        var me = this;
        me.getView().close();
    }, 
    onSaveBtnClick: function(){
        var me = this,
        form = me.lookupReference('edits-welcomestatementform');       
        var method = 'POST';        
        var url =`${MssPhoenix.model.Session.baseUrl}/api/welcomeStatement`;
        me.maskView(form,'saving')
        if (form.validate()) {
            form.submit({
                url: url,
                method: method,
                success: function (form, action) {   
                    me.unMaskView(form)                
                    me.showAlert('Hello','Saved Welcome Statement successfully');
                   
                },
                failure: function (form, action) {
                    me.unMaskView(form)  
                    me.showAlert('Sorry','Failed to save welcome statement');
                }
            });
        }
        
        
    }, 
});