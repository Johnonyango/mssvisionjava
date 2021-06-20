Ext.define('MssPhoenix.view.tablet.admin.LandingPageContent.UploadFilesController', {
    extend: 'MssPhoenix.view.tablet.member.base.BaseMemberController',
    alias: 'controller.uploadfilescontroller',
    
    onSendBtnClick: function(){
       console.log("Sending");
       let me = this;
       view = me.getView(),
       form = Ext.ComponentQuery.query('uploadfiles #adminuploadsform')[0];
       if (form && form.validate()){
           me.maskView(view, "Submitting...")
           form.submit({
               headers: {
                'Content-Type': 'multipart/form-data'
               },
               url: `http://localhost:8080/mss/FileHandler`,
               method: 'POST',
               success: function (form, action){
                me.unMaskView(view)
                me.showAlert('Success','File uploaded successfully')
               },
               failure: function (form, action) {
                me.unMaskView(view)
                let obj=me.decodeJson(action.responseText)
                me.showAlert('Response',obj.message)
            }
           })
           return;
       }
       me.showToast('Please try again');
    }
});