Ext.define('MssPhoenix.view.tablet.sponsor.baseController.SponsorBaseController', {
    extend: 'MssPhoenix.view.tablet.shared.BaseController',
    alias: 'controller.sponsorbasecontroller',
    /**
     * Called when the view is created
     */
    init: function () {},

    bindSponsorInfo:function(data){
        let me=this;
        let main = Ext.ComponentQuery.query('main')[0];
        if (main){
            let mainViewModel=main.getViewModel();
            if (mainViewModel){
                // me.saveItem('sponsorId',data.id);
                // me.saveItem('employerNo',data.employerRefNo)
                mainViewModel.set('sponsorInfo',data);
            }
        }
    },
    
    loadClaimDetails: function (id, view, successCallBack, errorCallBack) {
        let me = this;
        var url =`${MssPhoenix.model.Session.baseUrl}/api/benefitRequest/`+ id;
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
    },
       
    loadDocumentDetails: function (id, view, successCallBack, errorCallBack) {
        let me = this;
        var url =`${MssPhoenix.model.Session.baseUrl}/api/documents/getDocumentsForApproval`;
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
    },

      
    loadSponsorUserDetails: function (id, view, successCallBack, errorCallBack) {
        let me = this;
        var url =`${MssPhoenix.model.Session.baseUrl}/api/getUser/`+ id;
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
    },  

    loadAccountInfo: function (view, successCallBack, errorCallBack) {
        let me = this;
        view.mask('Please wait...');
        Ext.Ajax.request({
            url: `${MssPhoenix.model.Session.baseUrl}/api/getFmUserDetailsById/${MssPhoenix.model.Session.getUserId()}`,
            success: function (response, opts) {
                view.unmask();
                let obj = Ext.decode(response.responseText);
                successCallBack(obj.data);
            },
            failure: function (response, opts) {
                view.unmask();
                errorCallBack(response.responseText)
            }
        });
    },

    loadSponsorInfo: function (successCallBack,errorCallBack) {
        let me = this;
        Ext.Ajax.request({
            url: `${MssPhoenix.model.Session.baseUrl}/api/get-sponsor-details/${MssPhoenix.model.Session.getUserId()}/${MssPhoenix.model.Session.getSponsorId()}`,
            success: function (response, opts) {
                let obj = Ext.decode(response.responseText);
                successCallBack(obj.data)
            },
            failure: function (response, opts) {
                errorCallBack(response.responseText)
            }
        });
    },
  
});