Ext.define('MssPhoenix.view.tablet.admin.LandingPageContent.edits.mapLoc.MapLocController', {
    extend: 'MssPhoenix.view.tablet.shared.BaseController',
    alias: 'controller.maploccontroller',

   
    init: function(){
 
    },
    onCancelBtnClick: function(){
        var me = this;
        me.getView().close();
    }, 
    onSaveBtnClick: function(){
        var me = this,
        form = me.lookupReference('edits-maplocform');       
        var method = 'POST';        
        var url =`${MssPhoenix.model.Session.baseUrl}/api/mapLoc`;
        me.maskView(form,'saving')
        if (form.validate()) {
            form.submit({
                url: url,
                method: method,
                success: function (form, action) {   
                    me.unMaskView(form)                
                    me.showAlert('Hello','Saved map location successfully');
                   
                },
                failure: function (form, action) {
                    me.unMaskView(form)  
                    me.showAlert('Sorry','Failed to save  map location ');
                }
            });
        }
        
        
    }, 
});