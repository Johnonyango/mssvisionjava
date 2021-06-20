Ext.define('MssPhoenix.model.TicketMessage', {
    extend: 'MssPhoenix.model.Base',
    fields: [
        'id',
        'message',
        'created_by_id',
        'ticket_id',
        'created_date',
        'ownerName',
        'profileName',
        'shortDate',
        'shortDateTime'

    ] 
});