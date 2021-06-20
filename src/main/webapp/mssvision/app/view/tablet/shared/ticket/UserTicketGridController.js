Ext.define('MssPhoenix.view.tablet.shared.ticket.UserTicketGridController', {
    extend: 'MssPhoenix.view.tablet.shared.BaseController',

    alias: 'controller.userticketgridcontroller',
    mixins: [
        'MssPhoenix.view.tablet.crm.mixins.GridMixin'
    ],
    isPhone: false,
    init: function () {
        let me = this;
        me.isPhone = MssPhoenix.profile.Phone.isPhone();
        me.reloadGrid('userticketgrid')
    },

    onAddTicketButtonClick: function () {
        if (MssPhoenix.profile.Phone.isPhone()) {
            Ext.widget('phonecreateticket').show();
        } else {
            Ext.widget('createticket').show();
        }
    },

    onViewTicketButtonClick: function () {
        var me = this;
        var record = me.getSelectedRecord();
        if (record) {
            
            var id = record.get('id');
            if (localStorage.getItem('TicketId')) {
                localStorage.removeItem('TicketId');
            }
            localStorage.setItem('TicketId', id);
            let main = Ext.ComponentQuery.query('main')[0];
            if (main) {
                let mainViewModel = main.getViewModel();
                if (mainViewModel) {
                    mainViewModel.set('TicketId', id);
                    mainViewModel.set('TicketStatus', record.get('status'));
                    mainViewModel.set('TicketSubject', record.get('subject'));
                    mainViewModel.set('TicketBody', record.get('body'));
                }
            }

            let ticketDetails = {
                'TicketId':id,
                'TicketStatus':record.get('status'),
                'TicketSubject':record.get('subject'),
                'TicketBody':record.get('body')
            }

            me.saveItem('ticketDetails',me.encodeJson(ticketDetails))

            var xType = 'userticketmessage';
            me.redirectTo(xType+"/"+id);
        }
    },
    reloadUserTicketGrid: function () {
        var me = this;
        // let grid = Ext.ComponentQuery.query(me.isPhone ? 'phoneuserticketgrid' : 'userticketgrid')[0];
        // if (grid) {
            me.reloadGrid(me.isPhone ? 'phoneuserticketgrid' : 'userticketgrid');
        // }
    },
    onIdSearchEnterKey:function(){
        var me=this;
        var searchId = me.getView().lookupReference('searchId').getValue();
        let grid = Ext.ComponentQuery.query(me.isPhone ? 'phoneuserticketgrid' : 'userticketgrid')[0];
                if (grid) {
                    let store = grid.getStore();
                    if (store) {
                        let proxy = store.getProxy();
                        if (proxy){
                            proxy.setUrl(`${MssPhoenix.model.Session.baseUrl}/api/ticket/${searchId}`);
                            store.setProxy(proxy)
                            store.reload();
                        }
                    }
                }
    }
});
