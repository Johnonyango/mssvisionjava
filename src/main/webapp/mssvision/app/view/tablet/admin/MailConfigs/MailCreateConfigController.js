Ext.define('MssPhoenix.view.tablet.admin.MailConfigs.MailCreateConfigController', {
    extend: 'MssPhoenix.view.tablet.shared.BaseController',
    alias: 'controller.mailcreateconfigcontroller',

    init: function(){

    },
    onCancelViewBtnClick: function () {
        var me = this;
        me.getView().close();  
    },
    onCancelBtnClick: function(){
        var me = this;
        me.getView().destroy();
    }, 
    onSaveConfigBtnClick: function(){
        let me = this;
        view = me.getView(),
        form = me.lookup('form');        
        var method = 'POST';
        var url =`${MssPhoenix.model.Session.baseUrl}/api/createMailConfig`;
     
        if (form.validate()) {
            me.maskView(view, "Creating Mail Config...")
            form.submit({
                url: url,
                method: method,
                success: function (form, action) {
                    me.unMaskView(view)
                   me.showAlert("Created Mail Config Successfully")
                   
                    var store = Ext.getStore('mailconfigstore');
                    store.reload();
                },
                failure: function (form, action) { 
                   
                }
            });
        }
        me.getView().close();  

    },

    onEditConfigBtnClick: function(){
        let me = this;
        view = me.getView(),
        form = me.lookup('form');
        var method = 'PUT';
        var url =`${MssPhoenix.model.Session.baseUrl}/api/editMailConfig`;
     
        if (form.validate()) {
            me.maskView(view, "Saving Config...")
            form.submit({
                url: url,
                method: method,
                success: function (form, action) {
                    me.unMaskView(view)
                    me.showAlert("Successfully Changed config")
                    var store = Ext.getStore('mailconfigstore');
                    store.reload();
                },
                failure: function (form, action) { 
                   
                }
            });
        }
        me.getView().close();  
    }
});