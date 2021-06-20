Ext.define('MssPhoenix.store.SupportTicket', {
    extend: 'Ext.data.Store',
    alias:'store.supportticket',  
    model: 'MssPhoenix.model.Ticket',  
    storeId:'supportticket',
    // pageSize:1,
   
    sorters: [{
        property: 'id',
        direction: 'DESC'
    }],
    

    proxy: {
        type: 'ajax',
        url: `${MssPhoenix.model.Session.baseUrl}/api/ticket/getTicketByRecipientProfile/${MssPhoenix.model.Session.getUserRole()}?schemeId=${MssPhoenix.model.Session.getSchemeId()}`,
        cors: true,
        useDefaultXhrHeader : false,
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },

    autoLoad:true,
    pageSize:10
});