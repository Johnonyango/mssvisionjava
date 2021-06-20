Ext.define('MssPhoenix.view.tablet.admin.Configs.ConfigsController', {
    extend: 'MssPhoenix.view.tablet.shared.BaseController',
    alias: 'controller.configscontroller',
    mixins: [
        'MssPhoenix.view.tablet.crm.mixins.GridMixin'
    ],

    init: function () {
        // this.getView().getStore().load();
    },

    createConfigBtnClick: function () {
        Ext.widget('createconfig').show();
    },

    createPhoneConfigBtnClick: function () {
        Ext.widget('phonecreateconfig').show();
    },

    createBusinessImageBtnClick: function () {
        Ext.widget('businessImage').show();
    },

    viewConfigBtnClick: function () {
        let me = this;
        let record = me.getGridSelectedRecord('configsgrid');
        if (record) {
            console.log(record);
            let windowContainer = Ext.widget('viewconfig').show();
            // console.log(windowContainer);
            windowContainer.lookupReference('form').setValues(record);
        }

    },

    viewPhoneConfigBtnClick: function () {
        let me = this;
        let record = me.getGridSelectedRecord('phoneconfigsgrid');
        if (record) {
            console.log(record);
            let windowContainer = Ext.widget('phoneviewconfig').show();
            // console.log(windowContainer);
            windowContainer.lookupReference('form').setValues(record);
        }
    },

    removeConfigBtnClick: function () {
        let me = this,
            view = me.getView();
        let record = me.getSelectedRecord();
        if (record) {
            let id = record.get('id');
            let method = 'DELETE';
            let url = `${MssPhoenix.model.Session.baseUrl}/api/deleteConfig/` + id;
            me.maskView(view, "Removing Config...")
            Ext.Ajax.request({
                cors: true,
                useDefaultXhrHeader: false,
                url: url,
                method: method,
                success: function (response, opts) {
                    me.unMaskView(view)
                    me.showAlert("Removed Config Successfully")
                    let store = Ext.getStore('configstore');
                    store.reload()
                },
                failure: function (response, opts) {
                    console.log("Failure");
                    me.unMaskView(view)
                }
            });
        }
    },


    onCancelViewBtnClick: function () {
        let me = this;
        me.getView().close();
    }

});