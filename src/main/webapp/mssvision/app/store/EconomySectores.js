Ext.define('MssPhoenix.store.EconomySectores', {
    extend: 'Ext.data.Store',
    alias: 'store.economy-sectors',
    model: 'MssPhoenix.model.AdminHomeChart',

    // fields: ['Day', 'ind',],
    // data: [
    //     { Day: 'Monday', ind: 'count', },
    //     { Day: 'Tuesday', ind: 361, },
    //     { Day: 'Wednesday', ind: 727, },
    //     { Day: 'Thursday', ind: 512, },
    //     { Day: 'Friday', ind: 164, }
    // ],


    proxy: {
        type: 'ajax',
        url: `${MssPhoenix.model.Session.baseUrl}/api/getSessionCountInAWeek`,
        cors:true,
        useDefaultXhrHeader : false,
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    autoLoad: true,
    pageSize: 5,



});