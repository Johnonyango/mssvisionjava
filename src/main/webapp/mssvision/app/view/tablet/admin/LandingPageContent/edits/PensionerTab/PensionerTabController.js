Ext.define('MssPhoenix.view.tablet.admin.LandingPageContent.edits.PensionerTab.PensionerTabController', {
    extend: 'MssPhoenix.view.tablet.shared.BaseController',
    alias: 'controller.pensionertabcontroller',
    

    
    init: function(){
 
    },
    onCancelBtnClick: function(){
        var me = this;
        me.getView().close();
    }, 
    onSaveBtnClick: function(){
        var me = this,
        form = me.lookupReference('edits-pensionertabform');       
        var method = 'POST';        
        var url =`${MssPhoenix.model.Session.baseUrl}/api/pensionerMessage`;
        me.maskView(form,'saving')
        if (form.validate()) {
            form.submit({
                url: url,
                method: method,
                success: function (form, action) {   
                    me.unMaskView(form)                
                    me.showAlert('Hello','Saved Pensioner Message successfully');
                   
                },
                failure: function (form, action) {
                    me.unMaskView(form)  
                    me.showAlert('Sorry','Failed to save pensioner Message');
                }
            });
        }
        
        
    }, 
});