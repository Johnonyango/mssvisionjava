Ext.define('MssPhoenix.view.tablet.admin.Configs.BusinessImage.BusinessImageController', {
    extend: 'MssPhoenix.view.tablet.shared.BaseController',
    alias: 'controller.businessimagecontroller',

    
    init: function(){
 
    },
    onCancelBtnClick: function(){
        var me = this;
        me.getView().close();
    }, 
    createBusinessImageBtnClick: function () {
        Ext.widget('businessImage').show();
    },
    onSaveBusinessImageBtnClick: function(){
        var me = this;
         let view = me.getView(),
        form = Ext.ComponentQuery.query('businessImage #businessimageform')[0];
 
        if (form && form.validate()) {
            me.maskView(view, "Uploading...")
            form.submit({
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Access-Control-Allow-Origin': '*'
                },
                url: `${MssPhoenix.model.Session.fileUploadPath}/FileHandler`,
                method: 'POST',
                cors: true,
                useDefaultXhrHeader: false,
                success: function (form, action) {
                    me.unMaskView(view)
                    me.showAlert('Success', 'File uploaded successfully')
                },
                failure: function (form, action) {
                    me.unMaskView(view)
                    me.showAlert('Success', 'File uploaded successfully')
                }
            })
            return;
        }
        // me.showToast('Select file to upload');
    },
    // EditButtonClick:function(){
    //     Ext.widget('edits-logo').show();
    // },
    // EditPhoneLogoButtonClick:function(){
    //     Ext.widget('phone-logo').show();
    // },
    
    onPickLogo:function () {
        let me = this,
            view = me.getView(),
            doc = me.getGridSelectedRecord('businessimagegrid')
        if (doc) {
            let documentId= doc.id;
            me.maskView(view, 'submitting...')
            Ext.Ajax.request({
                headers: {
                    'Content-Type': 'application/json'
                },
                url: `${MssPhoenix.model.Session.baseUrl}/api/updateBusinessImage/${documentId}`,
                success: function (response, opts) {
                    me.unMaskView(view)
                    let obj = me.decodeJson(response.responseText);
                    if (obj.success) {
                        view.destroy();
                        me.showAlert('Success', obj.data);
                    }else{
                        me.showToast("Failed, please try again", 3000)
                    }
                },
                failure: function (response, opts) {
                    me.unMaskView(view)
                    let obj = me.decodeJson(response.responseText);
                    if (obj)
                        me.showToast(obj.msg, 3000)
                    me.showToast("Failed, please try again", 3000)
                }
            })
        } else {
            me.showToast("Failed, please try again", 3000)
        }
    },
    onPickPensionerImage:function () {
        let me = this,
            view = me.getView(),
            doc = me.getGridSelectedRecord('pensionerimagegrid')
        if (doc) {
            let documentId= doc.id;
            me.maskView(view, 'submitting...')
            Ext.Ajax.request({
                headers: {
                    'Content-Type': 'application/json'
                },
                url: `${MssPhoenix.model.Session.baseUrl}/api/pensionerImage/${documentId}`,
                success: function (response, opts) {
                    me.unMaskView(view)
                    let obj = me.decodeJson(response.responseText);
                    if (obj.success) {
                        view.destroy();
                        me.showAlert('Success', obj.data);
                    }else{
                        me.showToast("Failed, please try again", 3000)
                    }
                },
                failure: function (response, opts) {
                    me.unMaskView(view)
                    let obj = me.decodeJson(response.responseText);
                    if (obj)
                        me.showToast(obj.msg, 3000)
                    me.showToast("Failed, please try again", 3000)
                }
            })
        } else {
            me.showToast("Failed, please try again", 3000)
        }
    },
    reloadUploadedBImage: function () {
        let me = this;
        me.reloadGrid('businessimagegrid')
    },
  

    
});