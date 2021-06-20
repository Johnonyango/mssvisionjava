Ext.define('MssPhoenix.view.phone.shared.ticket.TicketVM', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.ticketvm',

    data: {
        TicketId:null,
        TicketStatus:null,
        TicketSubject:null,
        TicketBody:null,
    },
    formulas: {
        hideReply: function (get) {
            var status=get('TicketStatus');
            if(status=== "CLOSED"){
                return 'none';
            }
            return 'block';
        },
        hideClosed: function (get) {
            var status=get('TicketStatus');
            if(status=== "CLOSED"){
                return 'block';
            }
            return 'none';
        }
    }
});