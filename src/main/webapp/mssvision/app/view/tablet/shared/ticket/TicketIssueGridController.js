Ext.define('MssPhoenix.view.tablet.shared.ticket.TicketIssueGridController', {
    extend: 'MssPhoenix.view.tablet.shared.BaseController',
    alias: 'controller.ticketissuegridcontroller',
    mixins: [
        'MssPhoenix.view.tablet.crm.mixins.GridMixin'
    ],
    isPhone: false,
    init: function () {
        let me = this;
        me.isPhone = MssPhoenix.profile.Phone.isPhone();

    },
    addTicketIssueButtonClick: function () {
        if (MssPhoenix.profile.Phone.isPhone()) {
            Ext.widget('phonecreateticketissue').show();
        } else {
            Ext.widget('createticketissue').show();
        }
    },
    deleteTicketIssueButtonClick: function () {
        var me = this;
        let view = me.getView();
        me.maskView(view, "Deleting Ticket...");
        var record = me.getSelectedRecord();
        if (record) {
            var id = record.get('id');
            var method = 'DELETE';
            var url = `${MssPhoenix.model.Session.baseUrl}/api/ticket/issues/` + id;
            //ajax request
            Ext.Ajax.request({
                url: url,
                method: method,
                success: function (response, opts) {
                    let obj = Ext.util.JSON.decode(response.responseText);
                    me.unMaskView(view);
                    Ext.Msg.alert('Success', obj.msg);
                    var store = Ext.getStore('ticketissue');
                    store.reload()
                },
                failure: function (response, opts) {
                    let obj = Ext.util.JSON.decode(response.responseText);
                    me.unMaskView(view);
                    Ext.Msg.alert('Failure', obj.msg);
                }
            });
        }
    },
    reloadTicketIssueGrid: function () {
        var me = this;
        // let grid = Ext.ComponentQuery.query(me.isPhone ? 'phoneticketissuegrid' : 'ticketissuegrid')[0];
        // if (grid) {
            me.reloadGrid(me.isPhone ? 'phoneticketissuegrid' : 'ticketissuegrid');
        // }
    },
    onIdSearchEnterKey: function () {
        var me = this;
        var searchId = me.getView().lookupReference('searchId').getValue();
        let grid = Ext.ComponentQuery.query(me.isPhone ? 'phoneticketissuegrid' : 'ticketissuegrid')[0];
        if (grid) {
            let store = grid.getStore();
            if (store) {
                let proxy = store.getProxy();
                if (proxy) {
                    proxy.setUrl(`${MssPhoenix.model.Session.baseUrl}/api/ticket/issues/${searchId}`);
                    store.setProxy(proxy)
                    store.reload();
                }
            }
        }
    }
});