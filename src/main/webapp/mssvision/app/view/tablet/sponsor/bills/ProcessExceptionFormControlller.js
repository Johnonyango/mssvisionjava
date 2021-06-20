Ext.define('MssPhoenix.view.tablet.sponsor.bills.ProcessExceptionFormControlller', {
    extend: 'MssPhoenix.view.tablet.sponsor.baseController.SponsorBaseController',
    alias: 'controller.processexceptionformcontrolller',

    mixins: [
        'MssPhoenix.view.tablet.sponsor.mixins.GridMixin'
    ],

    init: function () {
        var me = this;
        me.billvalidimportgridStore = me.getView().lookupReference('billvalidimportgrid').getStore();
        me.billimportexceptiongridStore = me.getView().lookupReference('billimportexceptiongrid').getStore();
        me.billvalidimportgridStore.removeAll();
        me.billimportexceptiongridStore.removeAll();
    },

    onCloseBtnClick: function () {
        var me = this;
        me.getView().destroy();
    },
    billvalidimportgridStore: null,
    billimportexceptiongridStore: null,

    onUploadBtnClick: function () {
        let me = this,
            view = me.getView(),
            form = Ext.ComponentQuery.query('billbatchupload #uploadexceptionform')[0];
        if (form && form.validate()) {
            me.maskView(view, "Submitting...")
            form.submit({
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                url: `${MssPhoenix.model.Session.baseUrl}/api/processException/${MssPhoenix.model.Session.getUserId()}`,
                cors: true,
                // useDefaultXhrHeader : false,
                method: 'POST',
                success: function (form, action) {
                    console.log("Action Data Logged:"+action.data)
                    me.billvalidimportgridStore.loadRawData(action.data.validImports);
                    me.billimportexceptiongridStore.loadRawData(action.data.invalidImports);

                    if (me.billvalidimportgridStore.getCount() > 0 && me.billimportexceptiongridStore.getCount() <= 0) {
                        me.getView().lookupReference('savebtn').enable();

                    }
                    me.unMaskView(view)
                    //me.showAlert('Success', 'File uploaded successfully')
                },
                failure: function (form, action) {
                    me.unMaskView(view)
                    let obj = me.decodeJson(action.responseText)
                    me.showAlert('Response', obj.message)
                }
            })
            return;
        }
        me.showToast('Please try again');

    },
    onSaveBtnClick: function () {
        let me = this,
            view = me.getView(),
            form = Ext.ComponentQuery.query('billbatchupload #saveexceptionform')[0];
        if (form && form.validate()) {
            me.maskView(view, "Submitting...")
            let validImportData = me.billvalidimportgridStore.getData().items;
            //let invalidImportData = me.memberimportexceptiongridStore.getData().items;
            let rows = [];

            validImportData.forEach(item => rows.push(item.data));

            let dataE = JSON.stringify(rows);

            let finaldecodedData = Ext.decode(dataE);
            let batch = me.getItem("batch");
            let params = {
                "batch": batch,
                "json": me.encodeJson(finaldecodedData)
            }

            Ext.Ajax.request({
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                url: `${MssPhoenix.model.Session.baseUrl}/api/saveBill/${MssPhoenix.model.Session.getUserId()}/${MssPhoenix.model.Session.getSchemeId()}/${MssPhoenix.model.Session.getSponsorIdField()}`,
                cors: true,
                // jsonData: finaldecodedData,
                params: me.encodeJson(params),
                success: function (response, eOpts) {
                    me.unMaskView(view)
                    me.getView().close();
                    let obj = Ext.util.JSON.decode(response.responseText);
                    Ext.Msg.alert('Success', obj.msg);
                    var store = Ext.getStore('validbillimportstore');
                    store.reload();
                },
                failure: function (response, eOpts) {
                    me.unMaskView(view)
                    let obj = Ext.util.JSON.decode(response.responseText);
                    Ext.Msg.alert('Failure', obj.msg);
                }

            })
            return;
        }
        me.showToast('Please try again');
    },


});