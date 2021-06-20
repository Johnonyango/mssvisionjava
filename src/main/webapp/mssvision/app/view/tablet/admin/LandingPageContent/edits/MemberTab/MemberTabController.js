Ext.define('MssPhoenix.view.tablet.admin.LandingPageContent.edits.MemberTab.MemberTabController', {
    extend: 'MssPhoenix.view.tablet.shared.BaseController',
    alias: 'controller.membertabcontroller',
   

    
    init: function(){
 
    },
    onCancelBtnClick: function(){
        var me = this;
        me.getView().close();
    }, 
    onSaveBtnClick: function(){
        var me = this,
        form = me.lookupReference('edits-membertabform');       
        var method = 'POST';        
        var url =`${MssPhoenix.model.Session.baseUrl}/api/memberMessage`;
        me.maskView(form,'saving')
        if (form.validate()) {
            form.submit({
                url: url,
                method: method,
                success: function (form, action) {   
                    me.unMaskView(form)                
                    me.showAlert('Hello','Saved Member Message successfully');
                   
                },
                failure: function (form, action) {
                    me.unMaskView(form)  
                    me.showAlert('Sorry','Failed to save Member Message');
                }
            });
        }
        
        
    }, 
});