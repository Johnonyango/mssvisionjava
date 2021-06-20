Ext.define('MssPhoenix.view.tablet.shared.ticket.CreateTicketIssueController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.createticketissuecontroller',

    init: function () {

    },
    onCancelBtnClick: function () {
        var me = this;
        me.getView().close();
    },
    onSaveTicketIssueBtnClick: function () {
        var me = this,
        form = me.lookup('form');
        var method = 'POST';
        var url = `${MssPhoenix.model.Session.baseUrl}/api/ticket/issues`;
        if (form.validate()) {
            form.submit({
                url: url,
                method: method,
                success: function (form, action) {
                    var store = Ext.getStore('ticketissue');
                    store.reload();
                },
                failure: function (form, action) { }
            });
        }
        me.getView().close();   
    }
});