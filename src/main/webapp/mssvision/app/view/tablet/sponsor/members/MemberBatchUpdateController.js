Ext.define('MssPhoenix.view.tablet.sponsor.members.MemberBatchUpdateController', {
    extend: 'MssPhoenix.view.tablet.shared.BaseController',
    alias: 'controller.memberbatchupdatecontroller',
    /**
     * Called when the view is created
     */
    init: function() {
        var me = this;
        me.membervalidupdategridStore = me.getView().lookupReference('membervalidupdategrid').getStore();
        me.memberupdateexceptiongridStore = me.getView().lookupReference('memberexceptionupdategrid').getStore();
        me.membervalidupdategridStore.removeAll();
        me.memberupdateexceptiongridStore.removeAll();
    },
    membervalidupdategridStore: null,
    memberupdateexceptiongridStore: null,

    onFileFormUpdateButtonClick: function() {
        let me = this,
        view = me.getView(),
        form = Ext.ComponentQuery.query('sponsormemberupdatebatchfinish #updatememberform')[0];
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
                me.membervalidupdategridStore.loadRawData(action.data.validImports);
                me.memberupdateexceptiongridStore.loadRawData(action.data.invalidImports);
                if(me.membervalidupdategridStore.getCount()>0 && me.memberupdateexceptiongridStore.getCount()<=0){
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
    onSaveBtnClick: function() {
        let me = this,
        view = me.getView(),

        form = Ext.ComponentQuery.query('sponsormemberupdatebatchfinish #saveupdatememberform')[0];
        if (form && form.validate()) {
        me.maskView(view, "Submitting...")
        let validImportData = me.membervalidupdategridStore.getData().items;
        let rows = [];
        
        validImportData.forEach(item=>rows.push(item.data));
        console.log(rows);
        let dataE = Ext.JSON.encode(rows);
        console.log(dataE);
       
        // let params = {
        //    "data":dataArray
        // }
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
                me.showAlert('Success', 'Member updated successfully to FundMaster')
            },
            failure: function(response, eOpts) {
                me.unMaskView(view)
                let obj = me.decodeJson(response.responseText)
                me.showAlert('Response', obj.message)
            }

        })
    
     }
    },
    onCloseBtnClick: function() {
        var me = this;
        me.getView().destroy();
    }
});