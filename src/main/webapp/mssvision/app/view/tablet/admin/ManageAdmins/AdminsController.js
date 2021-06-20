Ext.define('MssPhoenix.view.tablet.admin.ManageAdmin.AdminsController', {
    extend: 'MssPhoenix.view.tablet.shared.BaseController',
    alias: 'controller.adminscontroller',
    mixins: [
        'MssPhoenix.view.tablet.crm.mixins.GridMixin'
    ],

    init: function () {
        // this.getView().getStore().load();
    },

    createAdminBtnClick: function () {
        Ext.widget('createadmin').show();
    },

    viewAdminBtnClick: function () {

        let me = this;
        let record = me.getGridSelectedRecord('adminsgrid');
        if (record) {
            console.log(record);
            let windowContainer = Ext.widget('viewform').show();
            // console.log(windowContainer);
            windowContainer.lookupReference('form').setValues(record);
        }

    },

    createPhoneAdminBtnClick: function () {
        Ext.widget('phonecreateadmin').show();
    },

    viewPhoneAdminBtnClick: function () {

        let me = this;
        let record = me.getGridSelectedRecord('phoneadminsgrid');
        if (record) {
            console.log(record);
            let windowContainer = Ext.widget('phoneviewform').show();
            // console.log(windowContainer);
            windowContainer.lookupReference('form').setValues(record);
        }

    },

    removeAdminBtnClick: function () {
        let me = this,
            view = me.getView();
        let record = me.getSelectedRecord();
        if (record) {
            let id = record.get('id');
            let method = 'PUT';
            let url = `${MssPhoenix.model.Session.baseUrl}/api/lockAccount/` + id;
            me.maskView(view, "Locking Admin...")
            Ext.Ajax.request({
                cors: true,
                useDefaultXhrHeader: false,

                url: url,
                method: method,
                success: function (response, opts) {
                    me.unMaskView(view)
                    me.showAlert("success", "Locked Admin Successfully")
                    let store = Ext.getStore('adminstore');
                    store.reload()
                },
                failure: function (response, opts) {
                    console.log("Failure");
                }
            });
        }
    },
    // onSaveViewBtnClick: function () {
    //     let me = this;
    //     me.getView().close();  
    // },

    onCancelViewBtnClick: function () {
        let me = this;
        me.getView().close();
    },

    reloadAdmins: function () {
        let me = this;
        // let grid = Ext.ComponentQuery.query('adminsgrid')[0];
        // if (grid) {
        me.reloadGrid('adminsgrid');
        // }
    }

});