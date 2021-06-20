Ext.define('MssPhoenix.view.tablet.principalofficer.PoBaseController', {
    extend: 'MssPhoenix.view.tablet.shared.BaseController',
    alias: 'controller.pobasecontroller',
    /**
     * Called when the view is created
     */
    init: function () {},


    loadPersonalInfo: function (callBack,errCallBack) {
        Ext.Ajax.request({
            url:`${MssPhoenix.model.Session.baseUrl}/api/getPrincipalOfficerDetails/${MssPhoenix.model.Session.getUserId()}/${MssPhoenix.model.Session.getMemberId()}`,
            success: function (response, opts) {
                let obj = Ext.decode(response.responseText);
                callBack((obj.data));
            },
            failure: function (response, opts) {
                errCallBack()
            }
        });
    }
});