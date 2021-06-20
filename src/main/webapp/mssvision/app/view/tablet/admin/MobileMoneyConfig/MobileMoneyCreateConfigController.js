Ext.define('MssPhoenix.view.tablet.admin.MobileMoneyonfig.MobileMoneyCreateConfigController', {
    extend: 'MssPhoenix.view.tablet.shared.BaseController',
    alias: 'controller.mobilemoneycreateconfigcontroller',

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
        var url =`${MssPhoenix.model.Session.baseUrl}/api/createMobileMoneyConfig`;
     
        if (form.validate()) {
            me.maskView(view, "Creating Mobile Money Config...")
            form.submit({
                url: url,
                method: method,
                success: function (form, action) {
                    me.unMaskView(view)
                    me.showAlert("Created MobileMoney Config Successfully")
                    var store = Ext.getStore('mobilemoneyconfigstore');
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
        var url =`${MssPhoenix.model.Session.baseUrl}/api/editMobileMoneyConfig`;
     
        if (form.validate()) {
            me.maskView(view, "Editing Mobile Money Config...")
            form.submit({
                url: url,
                method: method,
                success: function (form, action) {
                    me.unMaskView(view)
                    me.showAlert("Changed MobileMoney Config Successfully")
                    var store = Ext.getStore('mobilemoneyconfigstore');
                    store.reload();
                },
                failure: function (form, action) { 
                   
                }
            });
        }
        me.getView().close();  
    }
});