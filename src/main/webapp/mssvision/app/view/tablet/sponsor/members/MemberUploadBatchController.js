Ext.define('MssPhoenix.view.tablet.sponsor.members.MemberUploadBatchController', {
    extend: 'MssPhoenix.view.tablet.shared.BaseController',
    alias: 'controller.memberuploadbatchcontroller',
    /**
     * Called when the view is created
     */
    init: function() {},

    OnMemberAddBatchSubmit: function() {
        let me = this,
            view = me.getView(),
            form = Ext.ComponentQuery.query('sponsormemberuploadbatch #uploadmemberform')[0];
        if (form && form.validate()) {
            me.maskView(view, "Submitting...")
            form.submit({
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                url: `${MssPhoenix.model.Session.baseUrl}/api/upload/${MssPhoenix.model.Session.getUserId()}`,
                cors:true,
                // useDefaultXhrHeader : false,
                method: 'POST',
                success: function(form, action) {
                    console.log(action);
                    me.unMaskView(view)
                    me.showAlert('Success', 'File uploaded successfully')
                },
                failure: function(form, action) {
                    console.log(action);
                    me.unMaskView(view)
                    let obj = me.decodeJson(action.responseText)
                    me.showAlert('Response', obj.message)
                }
            })
            return;
        }
        me.showToast('Please try again');
    },

    onCancelBtnClick: function() {
        var me = this;
        me.getView().destroy();
    }

});