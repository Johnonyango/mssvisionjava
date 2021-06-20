Ext.define('MssPhoenix.view.tablet.sponsor.user.UserFormController', {
    extend: 'MssPhoenix.view.tablet.sponsor.baseController.SponsorBaseController',
    alias: 'controller.userformcontroller',
    /**
     * Called when the view is created
     */
    mixins: [
        'MssPhoenix.view.tablet.sponsor.mixins.GridMixin'
    ],

    init: function () {
        var me = this;
        me.loadSponsorInfo();
     },

    onSaveBtnClick: function () {
        var me = this;
        let view=me.getView();
        let form=view.lookupReference("form");
        let fields=form.getFields();
        let email=(fields.email).getValue();
        if (me.isBlank(email)){
            me.showToast('Email is required')
            return;
        }
        let firstName=(fields.firstName).getValue();
        if (me.isBlank(firstName)){
            me.showToast('Username is required')
            return;
        }
        let profileName=(fields.profileName).getValue();
        if (me.isBlank(profileName)){
            me.showToast('Please Enter Profile Role')
            return;
        }

        var method = 'POST';
       
        var url =`${MssPhoenix.model.Session.baseUrl}/api/sponsorUserAdd`;
        let id =(fields.id).getValue();
        if (id) {
            method = 'PUT';
            url = url
        }
        if (form.validate()) {
            form.submit({
                url: url,
                method: method,     
                success: function (form, action) {
                    me.showAlert("Added/Updated the User Successfully")
                    var store = Ext.getStore('sponsoruser');
                    store.reload();
                },
                failure: function (form, action) { 
                    me.showAlert("Failed to add or update the User")
                }
            });
        }
        me.getView().close();  
    },


    onCancelBtnClick: function () {
        var me = this;
        me.getView().destroy();
    },

    loadSponsorId:function (view,successCallBack, errorCallBack) {
        let me = this;
       view.mask('Please wait...');
        Ext.Ajax.request({
            url: `${MssPhoenix.model.Session.baseUrl}/api/get-sponsor-details/${MssPhoenix.model.Session.getUserId()}/${MssPhoenix.model.Session.getSponsorId()}`,
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

    
});