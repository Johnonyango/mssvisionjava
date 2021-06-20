Ext.define('MssPhoenix.view.tablet.admin.MobileMoneyConfig.MobileMoneyConfigsController', {
    extend: 'MssPhoenix.view.tablet.shared.BaseController',
    alias: 'controller.mobilemoneyconfigscontroller',
    mixins: [
        'MssPhoenix.view.tablet.crm.mixins.GridMixin'
    ],

    init: function () {
        // this.getView().getStore().load();
    },


    createConfigBtnClick: function () {
        Ext.widget('mobilemoneycreateconfig').show();
    },
    createPhoneConfigBtnClick: function () {
        Ext.widget('phonemobilemoneycreateconfig').show();
    },
    
    viewConfigBtnClick: function () {

        var me = this;
        var record = me.getGridSelectedRecord('mobilemoneyconfigsgrid');
        if (record) {
            // console.log(record);
            var windowContainer = Ext.widget('mobilemoneyviewconfig').show();
            // console.log(windowContainer);
            windowContainer.lookupReference('form').setValues(record);
        }

    },
    viewPhoneConfigBtnClick: function () {

        var me = this;
        var record = me.getGridSelectedRecord('phonemobilemoneyconfigsgrid');
        if (record) {
            console.log(record);
            var windowContainer = Ext.widget('phonemobilemoneyviewconfig').show();
            // console.log(windowContainer);
            windowContainer.lookupReference('form').setValues(record);
        }

    },
    removeConfigBtnClick: function () {
        let me = this;
        view = me.getView();
        var record = me.getSelectedRecord();
        if (record) {
            var id = record.get('id');
            var method = 'DELETE';
            var url = `${MssPhoenix.model.Session.baseUrl}/api/deleteMobileMoneyConfig/` + id;
            me.maskView(view, "Removing Mobile Money Config...")
            Ext.Ajax.request({
                cors: true,
                useDefaultXhrHeader: false,

                url: url,
                method: method,
                success: function (response, opts) {
                    me.unMaskView(view)
                    me.showAlert("Removed Mobile Money Config Successfully")

                    var store = Ext.getStore('mobilemoneyconfigstore');
                    store.reload()
                },
                failure: function (response, opts) {
                    console.log("Failure");
                }
            });
        }
    },
    

    onCancelViewBtnClick: function () {
        var me = this;
        me.getView().close();  
    }

});