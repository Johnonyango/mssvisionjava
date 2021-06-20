Ext.define('MssPhoenix.view.tablet.admin.Config.CreateConfigController', {
    extend: 'MssPhoenix.view.tablet.member.base.BaseMemberController',
    alias: 'controller.createconfigcontroller',

    init: function () {

    },
    onCancelViewBtnClick: function () {
        let me = this;
        me.getView().close();
    },
    onCancelBtnClick: function () {
        let me = this;
        me.getView().destroy();
    },
    onSaveConfigBtnClick: function () {
        let me = this,
            view = me.getView(),
            form = me.lookup('form');
        let method = 'POST';
        let url = `${MssPhoenix.model.Session.baseUrl}/api/createConfig`;

        if (form.validate()) {
            me.maskView(view, "Creating Config...")
            form.submit({
                url: url,
                method: method,
                success: function (form, action) {
                    me.unMaskView(view)
                    me.showAlert("Created Config Successfully")
                    let store = Ext.getStore('configstore');
                    store.reload();
                },
                failure: function (form, action) {
                    me.unMaskView(view)
                    me.showAlert("Failed to Create config")
                }
            });
        }
    },

    onEditConfigBtnClick: function () {
        let me = this,
            view = me.getView(),
            form = me.lookup('form');
        let method = 'PUT';
        let url = `${MssPhoenix.model.Session.baseUrl}/api/editConfig`;

        if (form.validate()) {
            me.maskView(view, "Saving Config...")
            form.submit({
                url: url,
                method: method,
                success: function (form, action) {
                    me.unMaskView(view)
                    me.showAlert("Successfully Changed config")
                    let store = Ext.getStore('configstore');
                    store.reload();
                },
                failure: function (form, action) {
                    me.unMaskView(view)
                    me.showAlert("Failed to Change config")
                }
            });
        }
    }
});