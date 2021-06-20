Ext.define('MssPhoenix.view.tablet.admin.permissions.SponsorBillPermissionsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.sponsorbillpermissionscontroller',
    /**
     * Called when the view is created
     */
    init: function () {
        let me = this;
        // me.loadAllDates();
    },

    savePaymentDate: function () {
        let me = this,
            view = me.getView(),
            form = view.lookupReference("sponsorbillspermissionsformref");

        if (form && form.validate()) {
            let params = {
                "dateValueVm": form.getValues()
            }
            me.onChangePaymentDate(form, params)
        }
    },
    onChangePaymentDate: function (view, params) {
        let me = this;
        view.mask('Saving...');
        Ext.Ajax.request({
                headers: {
                    'Content-Type': 'application/json'
                },
                url: `${MssPhoenix.model.Session.baseUrl}/api/dates/update`,
                method: 'POST',
                params: Ext.util.JSON.encode(params),
                success: function (response, opts) {
                    view.unmask()
                    me.showAlert('Done', "Date set successfully");
                },
                failure: function (response, opts) {
                    view.unmask()
                    me.showAlert('Failed', "Please try again");
                }
            }
        );
    },
    onCancelBtnClick: function () {
        var me = this;
        me.getView().destroy();
    }
});