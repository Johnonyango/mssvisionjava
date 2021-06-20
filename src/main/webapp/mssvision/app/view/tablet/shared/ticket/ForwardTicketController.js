Ext.define('MssPhoenix.view.tablet.shared.ticket.ForwardTicketController', {
    extend: 'MssPhoenix.view.tablet.shared.BaseController',

    alias: 'controller.forwardticketcontroller',

    init: function () { 
        let me=this;
        me.reloadGrid('supportticketgrid')
    },

    onSubmitBtnClick: function () {
        var me = this,
        form = me.lookup('form');
        var method = 'POST';
        var url = `${MssPhoenix.model.Session.baseUrl}/api/ticket/forwardTicket`;
        if (form.validate()) {
            form.submit({
                url: url,
                method: method,
                success: function (form, action) {
                    
                    var store = Ext.getStore('supportticket');
                    store.reload();
                },
                failure: function (form, action) { }
            });
        }
        me.getView().close();   
    },

    onCancelBtnClick: function(){
        var me = this;
        me.getView().close();
    }

});
