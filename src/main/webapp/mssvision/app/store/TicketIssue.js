Ext.define('MssPhoenix.store.TicketIssue', {
    extend: 'Ext.data.Store',
    alias:'store.ticketissue',  
    storeId:'ticketissue',
    model: 'MssPhoenix.model.TicketIssue',
    
    sorters: [{
        property: 'id',
        direction: 'DESC'
    }],

    proxy: {
        type: 'ajax',
        url: `${MssPhoenix.model.Session.baseUrl}/api/ticket/issues`,
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    autoLoad: true,
});