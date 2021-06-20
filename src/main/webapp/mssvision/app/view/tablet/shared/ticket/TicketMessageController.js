Ext.define('MssPhoenix.view.tablet.shared.ticket.TicketMessageController', {
    extend: 'MssPhoenix.view.tablet.shared.BaseController',
    alias: 'controller.ticketmessagecontroller',

    isPhone: false,
    init: function () {
        let me = this;
        me.isPhone = MssPhoenix.profile.Phone.isPhone();
        var store = Ext.getStore('ticketmessage');
        store.reload();

        if (me.isPhone) {
            let ticketDetails = me.getItem('ticketDetails');
            if (ticketDetails) {
                ticketDetails = me.decodeJson(ticketDetails);
                let main = (me.getView());
                // console.log(ticketDetails)
                if (main) {
                    let mainViewModel = main.getViewModel();
                    if (mainViewModel) {
                        mainViewModel.set('TicketId', ticketDetails.TicketId);
                        mainViewModel.set('TicketStatus', ticketDetails.TicketStatus);
                        mainViewModel.set('TicketSubject', ticketDetails.TicketSubject);
                        mainViewModel.set('TicketBody', ticketDetails.TicketBody);
                    }
                }
            }
        }
    },
    goBackToTickets: function () {
        this.redirectPage();
    },
    closeTicket: function () {
        var me = this;
        let view = me.getView();
        me.maskView(view, "Closing Ticket...");
        let main = Ext.ComponentQuery.query('main')[0];
        if (main) {
            let mainViewModel = main.getViewModel();
            if (mainViewModel) {
                var id = mainViewModel.get("TicketId");
                var method = 'PUT';
                var url = `${MssPhoenix.model.Session.baseUrl}/api/ticket/` + id + `/close`;

                //ajax request
                Ext.Ajax.request({
                    url: url,
                    method: method,
                    success: function (response, opts) {
                        let obj = Ext.util.JSON.decode(response.responseText);
                        me.unMaskView(me.getView());
                        Ext.Msg.alert('Success', obj.msg);
                        me.redirectPage();
                        view.destroy();
                    },
                    failure: function (response, opts) {
                        let obj = Ext.util.JSON.decode(response.responseText);
                        me.unMaskView(view);
                        Ext.Msg.alert('Failure', obj.msg);
                    }
                });
            }
        }

    },
    openTicket: function () {
        var me = this;
        let view = me.getView();
        me.maskView(view, "Opening Ticket...");
        let main = Ext.ComponentQuery.query('main')[0];
        if (main) {
            let mainViewModel = main.getViewModel();
            if (mainViewModel) {
                var id = mainViewModel.get("TicketId");
                var method = 'PUT';
                var url = `${MssPhoenix.model.Session.baseUrl}/api/ticket/` + id + `/open`;

                //ajax request
                Ext.Ajax.request({
                    url: url,
                    method: method,
                    success: function (response, opts) {
                        let obj = Ext.util.JSON.decode(response.responseText);
                        me.unMaskView(me.getView());
                        Ext.Msg.alert('Success', obj.msg);
                        me.redirectPage();
                        view.destroy();
                    },
                    failure: function (response, opts) {
                        let obj = Ext.util.JSON.decode(response.responseText);
                        me.unMaskView(me.getView());
                        Ext.Msg.alert('Failure', obj.msg);
                    }
                });
            }
        }

    },
    onSaveReplyBtnClick: function () {
        var me = this;
        let view = me.getView();
        me.maskView(view, "Saving...");
        var form = me.lookup('form');
        var tId = ((form.getFields()).ticket_id).getValue();
        var method = 'POST';
        var url = `${MssPhoenix.model.Session.baseUrl}/api/ticket/message`;
        if (form.validate()) {
            form.submit({
                url: url,
                method: method,
                success: function (form, action) {
                    var store = Ext.getStore('ticketmessage');
                    store.getProxy().url = `${MssPhoenix.model.Session.baseUrl}/api/ticket/${tId}/message/reload`;
                    store.reload();
                    me.unMaskView(view);
                    Ext.Msg.alert('Success', action.msg);
                    form.reset();
                    let main = Ext.ComponentQuery.query('main')[0];
                    if (main) {
                        let mainViewModel = main.getViewModel();
                        if (mainViewModel) {
                            mainViewModel.set('TicketId', tId);
                        }
                    }
                },
                failure: function (form, action) {
                    me.unMaskView(view);
                    Ext.Msg.alert('Failure', action.msg);
                }
            });
        }
    },
    redirectPage: function () {
        var me = this;
        var role = `${MssPhoenix.model.Session.getUserRole()}`
        if (role == "MEMBER" || role == "PENSIONER") {
            var xType = 'userticket';
            me.redirectTo(xType);
            var store = Ext.getStore('userticket');
            store.reload();
        } else if (role == "ADMIN") {
            var xType = 'adminmainticket';
            me.redirectTo(xType);
            var store = Ext.getStore('userticket');
            store.reload()
            var store1 = Ext.getStore('supportticket');
            store1.reload()
        } else {
            var xType = 'mainticket';
            me.redirectTo(xType);
            var store = Ext.getStore('userticket');
            store.reload()
            var store1 = Ext.getStore('supportticket');
            store1.reload()
        }
    }
});