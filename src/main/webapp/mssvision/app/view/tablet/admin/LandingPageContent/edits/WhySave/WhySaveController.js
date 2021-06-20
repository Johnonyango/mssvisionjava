Ext.define('MssPhoenix.view.tablet.admin.LandingPageContent.edits.WhySave.WhySaveController', {
    extend: 'MssPhoenix.view.tablet.shared.BaseController',
    alias: 'controller.whysavecontroller',
   


    init: function(){
 
    },
    onCancelBtnClick: function(){
        var me = this;
        me.getView().close();
    }, 
    onSaveBtnClick: function(){
        var me = this,
        form = me.lookupReference('edits-whysaveform');       
        var method = 'POST';        
        var url =`${MssPhoenix.model.Session.baseUrl}/api/whySaveMessage`;
        me.maskView(form,'saving')
        if (form.validate()) {
            form.submit({
                url: url,
                method: method,
                success: function (form, action) {   
                    me.unMaskView(form)                
                    me.showAlert('Hello','Saved WhySave Message successfully');
                   
                },
                failure: function (form, action) {
                    me.unMaskView(form)  
                    me.showAlert('Sorry','Failed to save WhySave Message');
                }
            });
        }
        
        
    }, 
});