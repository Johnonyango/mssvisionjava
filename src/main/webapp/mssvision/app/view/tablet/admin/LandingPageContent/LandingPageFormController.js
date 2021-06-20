Ext.define('MssPhoenix.view.tablet.admin.LandingPageContent.LandingPageFormController', {
    extend: 'MssPhoenix.view.tablet.shared.BaseController',
    alias: 'controller.landingpageformcontroller',

    EditLogoButtonClick:function(){
        let view =  Ext.widget('edits-logo');
        view.show();
        let vm = view.getViewModel();
        vm.set("userId",MssPhoenix.model.Session.getUserId());     

    },
    
    EditPhoneLogoButtonClick:function(){
        let view =  Ext.widget('phone-logo');
        view.show();
        let vm = view.getViewModel();
        vm.set("userId",MssPhoenix.model.Session.getUserId());     

    },
    
    EditPensionerImageButtonClick:function(){        
        let view =  Ext.widget('edits-pensionerimage');
        view.show();
        let vm = view.getViewModel();
        vm.set("userId",MssPhoenix.model.Session.getUserId());
    },

    EditLoginButtonClick:function(){
        let view =  Ext.widget('edits-loginimage');
        view.show();
        let vm = view.getViewModel();
        vm.set("userId",MssPhoenix.model.Session.getUserId());
    },

    EditMbrTabButtonClick:function(){
        let view =  Ext.widget('edits-membertab');
        view.show();
        // let vm = view.getViewModel();
        // vm.set("userId",MssPhoenix.model.Session.getUserId());
       
    },
    EditWelcomeButtonClick:function(){
        let view =  Ext.widget('edits-welcomestatement');
        view.show();
        // let vm = view.getViewModel();
        // vm.set("userId",MssPhoenix.model.Session.getUserId());
    },
    EditPenMsgButtonClick:function(){
        let view =  Ext.widget('edits-whysave');
        view.show();
        // let vm = view.getViewModel();
        // vm.set("userId",MssPhoenix.model.Session.getUserId());
    },
    EditPensionerButtonClick:function(){
        let view =  Ext.widget('edits-pensionertab');
        view.show();
        // let vm = view.getViewModel();
        // vm.set("userId",MssPhoenix.model.Session.getUserId());
    },
    EditAddressButtonClick:function(){
        let view =  Ext.widget('edits-address');
        view.show();
        // let vm = view.getViewModel();
        // vm.set("userId",MssPhoenix.model.Session.getUserId());
    },
    EditMapButtonClick:function(){
        let view =  Ext.widget('edits-maploc');
        view.show();
        // let vm = view.getViewModel();
        // vm.set("userId",MssPhoenix.model.Session.getUserId());
    },

    
    getFilePath: function() {
        var v = this.lookupReference('basicFile').getValue();

        Ext.Msg.alert('Selected File', v && v !== '' ? v : 'None');
    },

    buttonOnlyChange: function(field, value) {
        Ext.toast('<b>Selected:</b> ' + value);
    },

    firstFormSave: function() {
        var form = this.lookupReference('firstForm').getForm();

        if (form.validate()) {
            form.submit({
                url: 'data/form/file-upload.php',
                waitMsg: 'Uploading your photo...',
                success: function(fp, o) {
                    var tpl = new Ext.XTemplate(
                        'File processed on the server.<br />',
                        'Name: {fileName}<br />',
                        'Size: {fileSize:fileSize}'
                    );

                    Ext.Msg.alert('Success', tpl.apply(o.result));
                }
            });
        }
    },

    firstFormReset: function() {
        this.lookupReference('firstForm').getForm().reset();
    },

    secondFormSubmit: function() {
        var form = this.lookupReference('secondForm').getForm();

        if (form.validate()) {
            form.submit({
                url: 'data/form/file-upload.php',
                waitMsg: 'Uploading your photo...',
                success: this.secondFormUploadSuccess,
                failure: this.secondFormUploadFailure
            });
        }
    },

    secondFormReset: function() {
        this.lookupReference('secondForm').getForm().reset();
    },

    secondFormUploadSuccess: function(form, action) {
        Ext.Msg.alert('Success', 'Processed file "' + action.result.file + '" on the server');
    },

    secondFormUploadFailure: function(form, action) {
        Ext.Msg.alert("Error", Ext.JSON.decode(this.response.responseText).message);
    },

    onSubmitBtnClick: function(){
        var me = this;
       
        form = me.lookup('form');
        
        console.log(form.getSubmitValues());
        
        var method = 'POST';
        
        var url = `${MssPhoenix.model.Session.baseUrl}/api/postLandingPageContent`;      
       
        if (form.validate()) {
            form.submit({
                url: url,
                method: method,
                success: function(form, action) {
                    console.log('success********************************')

                   
                       // var store = Ext.ComponentQuery.query('crmticketgrid')[0].getStore();
                        
                      //  store.loadRawData(action.result);
                        
                },
                failure: function(form, action) {
                    console.log('failure********************************')
                    
                }
            });
        }
       // me.getView().close();
    }
});