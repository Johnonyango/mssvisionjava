Ext.define('MssPhoenix.store.UserTicket', {
    extend: 'Ext.data.Store',
    alias:'store.userticket',  
    model: 'MssPhoenix.model.Ticket',  
    storeId:'userticket',
    // pageSize:1,
   
    sorters: [{
        property: 'id',
        direction: 'DESC'
    }],

    proxy: {
        type: 'ajax',
        url: `${MssPhoenix.model.Session.baseUrl}/api/user/${MssPhoenix.model.Session.getUserId()}/ticket/created`,
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
