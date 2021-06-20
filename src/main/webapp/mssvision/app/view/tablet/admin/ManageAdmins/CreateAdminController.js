Ext.define('MssPhoenix.view.tablet.admin.ManageAdmin.CreateAdminController', {
    extend: 'MssPhoenix.view.tablet.shared.BaseController',
    alias: 'controller.createadmincontroller',

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
    onSaveBtnClick: function(){
        let me = this;
        view = me.getView(),
        form = me.lookup('form');
        
        var method = 'POST';
         //var url = 'http://localhost:8080/mss/resources/api/createAdmin';
        var url =`${MssPhoenix.model.Session.baseUrl}/api/createAdmin`;
     
        if (form.validate()) {
            me.maskView(view, "Creating Admin...")
            form.submit({
                url: url,
                method: method,
                success: function (form, action) {
                    me.unMaskView(view)
                    me.showAlert("success","Created Admin Successfully")
                    var store = Ext.getStore('adminstore');
                    store.reload();
                },
                failure: function (form, action) { 
                   me.showAlert("Failure",action.msg)
                }
            });
        }
        me.getView().close();  
    }
});