Ext.define('MssPhoenix.view.tablet.admin.Session.SessionsController', {
    extend: 'MssPhoenix.view.tablet.shared.BaseController',
    alias: 'controller.sessionsController',
    mixins: [
        'MssPhoenix.view.tablet.crm.mixins.GridMixin'
    ],
    
    init: function () {},
   
    viewSessionBtnClick:function(){
        var me = this;
        var record = me.getGridSelectedRecord('sessionsgrid');
        if (record) {
            console.log(record);
            var windowContainer = Ext.widget('viewsession').show();
            // console.log(windowContainer);
            windowContainer.lookupReference('form').setValues(record);
        }
        
    },
    viewPhoneSessionBtnClick:function(){
        var me = this;
        var record = me.getGridSelectedRecord('phonesessionsgrid');
        if (record) {
            console.log(record);
            var windowContainer = Ext.widget('phoneviewsession').show();
            // console.log(windowContainer);
            windowContainer.lookupReference('form').setValues(record);
        }
        
    },
    
    onCancelBtnClick: function(){
        var me = this;
        me.getView().destroy();
    }, 
    onSaveBtnClick: function(){
        var me = this;
        me.getView().close();
    },
    
    onCancelViewBtnClick: function () {
        var me = this;
        me.getView().close();  
    }
});