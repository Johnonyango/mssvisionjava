Ext.define('MssPhoenix.view.tablet.crm.claims.SubmittedDocumentController', {
    extend: 'MssPhoenix.view.tablet.shared.BaseController',
    alias: 'controller.crmsubmittedDocumentController',
    
    init: function () {
    },

    onCancelBtnClick:function(){
        var me = this;
        me.getView().destroy();
    }
});