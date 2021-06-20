Ext.define('MssPhoenix.view.tablet.admin.MailConfigs.MailConfigsController', {
    extend: 'MssPhoenix.view.tablet.shared.BaseController',
    alias: 'controller.mailconfigscontroller',
    mixins: [
        'MssPhoenix.view.tablet.crm.mixins.GridMixin'
    ],

    init: function () {
        // this.getView().getStore().load();
    },


    createConfigBtnClick: function () {
        Ext.widget('mailcreateconfig').show();
    },
    createPhoneConfigBtnClick: function () {
        Ext.widget('phonecreateconfig').show();
    },
    
    viewConfigBtnClick: function () {

        var me = this;
        var record = me.getGridSelectedRecord('mailconfigsgrid');
        if (record) {
            console.log(record);
            var windowContainer = Ext.widget('mailviewconfig').show();
            // console.log(windowContainer);
            windowContainer.lookupReference('form').setValues(record);
        }

    },
    viewPhoneConfigBtnClick: function () {

        var me = this;
        var record = me.getGridSelectedRecord('phonemailconfigsgrid');
        if (record) {
            console.log(record);
            var windowContainer = Ext.widget('phonemailviewconfig').show();
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
            var url = `${MssPhoenix.model.Session.baseUrl}/api/deleteMailConfig/` + id;
            me.maskView(view, "Removing Config...")
            Ext.Ajax.request({
                cors: true,
                useDefaultXhrHeader: false,

                url: url,
                method: method,
                success: function (response, opts) {
                    me.unMaskView(view)
                    me.showAlert("Removed Mail Config Successfully")
                    var store = Ext.getStore('mailconfigstore');
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