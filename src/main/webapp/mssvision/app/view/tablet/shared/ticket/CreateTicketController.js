Ext.define('MssPhoenix.view.tablet.shared.ticket.CreateTicketController', {
    extend: 'MssPhoenix.view.tablet.shared.BaseController',
    alias: 'controller.createticketcontroller',

    init: function () {

    },
    onCancelBtnClick: function () {
        var me = this;
        me.getView().close();
    },
    onSaveTicketBtnClick: function () {
        var me = this,
        form = me.lookup('form');

        let view = me.getView();
        view.mask('Please wait...');
        var method = 'POST';
        var url = `${MssPhoenix.model.Session.baseUrl}/api/ticket`;
        if (form.validate()) {
            form.submit({
                url: url,
                method: method,
                success: function (form, action) {

                    var store = Ext.getStore('userticket');
                    store.reload();
                    view.unmask();
                    Ext.Msg.alert('Success', action.msg);
                },
                failure: function (form, action) { }
            });
        }
        me.getView().close();
    }
});