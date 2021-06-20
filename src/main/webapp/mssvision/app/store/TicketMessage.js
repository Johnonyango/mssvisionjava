Ext.define('MssPhoenix.store.TicketMessage', {
    extend: 'Ext.data.Store',
    alias:'store.ticketmessage',  
    storeId:'ticketmessage',
    model: 'MssPhoenix.model.TicketMessage',
    
    sorters: [{
        property: 'id',
        direction: 'DESC'
    }],

    proxy: {
        type: 'ajax',
        url: `${MssPhoenix.model.Session.baseUrl}/api/ticket/${MssPhoenix.model.Session.getTicketId()}/message`,
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },

    // autoLoad:true,
});