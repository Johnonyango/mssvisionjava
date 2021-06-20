Ext.define('MssPhoenix.view.tablet.admin.LandingPageContent.edits.Address.AddressController', {
    extend: 'MssPhoenix.view.tablet.shared.BaseController',
    alias: 'controller.addresscontroller',
   

    
    init: function(){
 
    },
    onCancelBtnClick: function(){
        var me = this;
        me.getView().close();
    }, 
    onSaveBtnClick: function(){
        var me = this,
        form = me.lookupReference('edits-addressform');       
        var method = 'POST';        
        var url =`${MssPhoenix.model.Session.baseUrl}/api/updateaddress`;
        me.maskView(form,'saving')
        if (form.validate()) {
            form.submit({
                url: url,
                method: method,
                success: function (form, action) {   
                    me.unMaskView(form)                
                    me.showAlert('Hello','Saved Address successfully');
                   
                },
                failure: function (form, action) {
                    me.unMaskView(form)  
                    me.showAlert('Sorry','Failed to save Address');
                }
            });
        }
        
        
    },  
});