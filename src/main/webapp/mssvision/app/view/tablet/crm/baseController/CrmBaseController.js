Ext.define('MssPhoenix.view.tablet.crm.baseController.CrmBaseController', {
    extend: 'MssPhoenix.view.tablet.shared.BaseController',
    alias: 'controller.crmbasecontroller',


    init: function () { },

    loadClaimDetails: function (id, view, successCallBack, errorCallBack) {
        let me = this;
        var url = `${MssPhoenix.model.Session.baseUrl}/api/benefitRequest/` + id;
        view.mask('Please wait...');
        Ext.Ajax.request({
            url: url,
            success: function (response, opts) {
                view.unmask();
                let obj = Ext.decode(response.responseText);
                successCallBack(obj.data);
            },
            failure: function (response, opts) {
                view.unmask();
                let obj = Ext.decode(response.responseText);
                errorCallBack(obj)
            }
        });
    }
    
});