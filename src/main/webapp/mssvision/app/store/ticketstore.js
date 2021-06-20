Ext.define('MssPhoenix.store.ticketstore',  {
    extend: 'Ext.data.Store',    
    alias:'store.ticketstore',    
   
    // data: [
    //     { TicketId: 'L001', Name: 'Lisa',Status: 'Open',Date: '2021-02-9 T 09:51:30' },
    //     { TicketId: 'L002', Name: 'John',Status: 'Closed',Date: '2021-02-9 T 09:51:30' },
    //     { TicketId: 'L003', Name: 'Mary',Status: 'Open',Date: '2021-02-9 T 09:51:30' },
    //     { TicketId: 'L004', Name: 'Tom',Status: 'Open',Date: '2021-02-9 T 09:51:30' },
    //     { TicketId: 'L005', Name: 'Eliza',Status: 'Closed',Date: '2021-02-9 T 09:51:30' },
    //     { TicketId: 'L006', Name: 'Martha',Status: 'Open',Date: '2021-02-9 T 09:51:30' },
    //     { TicketId: 'L007', Name: 'Bob',Status: 'Closed',Date: '2021-02-9 T 09:51:30' },
    //     { TicketId: 'L008', Name: 'June',Status: 'Open',Date: '2021-02-9 T 09:51:30' },
    //     { TicketId: 'L009', Name: 'Cena',Status: 'Closed',Date: '2021-02-9 T 09:51:30' },
    //     { TicketId: 'L010', Name: 'Lisa',Status: 'Open',Date: '2021-02-9 T 09:51:30' },
    //     { TicketId: 'L011', Name: 'Tim',Status: 'Closed',Date: '2021-02-9 T 09:51:30' },
    //     { TicketId: 'L012', Name: 'Tabs',Status: 'Closed',Date: '2021-02-9 T 09:51:30' },
       
        
    // ],
    

    // proxy: {
    //     type:'memory',
    //     reader: {
    //         type: 'json',
    //         rootProperty: 'tickets'
    //     }

    //          },
    // autoLoad: true,
    // pageSize: 2,

    proxy: {
        type: 'ajax',
        url: `${MssPhoenix.model.Session.baseUrl}/api/ticket`,
        cors: true,
        useDefaultXhrHeader: false,
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    },
    autoLoad: true,
    pageSize: 10,
});