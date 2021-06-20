Ext.define('MssPhoenix.store.CrmRecentSupportTicket', {
    extend: 'Ext.data.Store',
    alias:'store.crmrecentsupportticket',  
    model: 'MssPhoenix.model.Ticket',  
    storeId:'crmrecentsupportticket',
    // pageSize:1,
   
    

    proxy: {
        type: 'ajax',
        url: `${MssPhoenix.model.Session.baseUrl}/api/ticket/getRecentTickets/${MssPhoenix.model.Session.getUserRole()}/0/5/`,
        cors: true,
        useDefaultXhrHeader : false,
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },

    autoLoad:true,
});