Ext.define('MssPhoenix.view.tablet.sponsor.members.MemberBatchUploadController', {
    extend: 'MssPhoenix.view.tablet.shared.BaseController',
    alias: 'controller.memberbatchuploadcontroller',
    /**
     * Called when the view is created
     */
    init: function() {
        var me = this;
        me.membervalidimportgridStore = me.getView().lookupReference('membervalidimportgrid').getStore();
        me.memberimportexceptiongridStore = me.getView().lookupReference('memberimportexceptiongrid').getStore();
        me.membervalidimportgridStore.removeAll();
        me.memberimportexceptiongridStore.removeAll();
    },
    onCloseBtnClick: function() {
        var me = this;
        me.getView().destroy();
    },

    membervalidimportgridStore: null,
    memberimportexceptiongridStore: null,
    
    
    onFileFormUploadButtonClick: function() {
        let me = this,
        view = me.getView(),
        form = Ext.ComponentQuery.query('memberbatchupload #uploadmemberform')[0];
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
                console.log("Data Of Impport: " +action.data);
                me.membervalidimportgridStore.loadRawData(action.data.validImports);
                me.memberimportexceptiongridStore.loadRawData(action.data.inValidImports);

                if(me.membervalidimportgridStore.getCount()>0 && me.memberimportexceptiongridStore.getCount()<=0){
                    me.getView().lookupReference('savebtn').enable();

                }
               
                me.unMaskView(view)
                //me.showAlert('Success', 'File uploaded successfully')
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

    onSaveBtnClick:function(){
    let me = this,
        view = me.getView(),

        form = Ext.ComponentQuery.query('memberbatchupload #savememberform')[0];
        if (form && form.validate()) {
        me.maskView(view, "Submitting...")
        let validImportData = me.membervalidimportgridStore.getData().items;
        let invalidImportData = me.memberimportexceptiongridStore.getData().items;
        let rows = [];
        
        validImportData.forEach(item=>rows.push(item.data));
        invalidImportData.forEach(item=>rows.push(item.data));
        console.log(rows);
        let dataE = Ext.JSON.encode(rows);
        console.log(dataE);
       
        me.maskView(view, 'Loading...')
        Ext.Ajax.request({
            headers: {
                'Content-Type': 'application/json'
            },
            method:'POST',
            url:`${MssPhoenix.model.Session.baseUrl}/api/save/${MssPhoenix.model.Session.getUserId()}`,
            cors:true,
            jsonData:{
                rows
                
            },
            success: function(response, eOpts) {
                me.unMaskView(view)
                me.getView().close();
                me.showAlert('Success', 'Member uploaded successfully to FundMaster')
            },
            failure: function(response, eOpts) {
                me.unMaskView(view)
                let obj = me.decodeJson(response.responseText)
                me.showAlert('Response', obj.message)
            }

        })
        
     }
    },

 
});