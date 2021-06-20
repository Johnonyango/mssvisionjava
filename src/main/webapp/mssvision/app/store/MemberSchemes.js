Ext.define('MssPhoenix.store.MemberSchemes', {
    extend: 'Ext.data.Store',
    alias: 'store.memberschemes',
    fields: [
        {
            name: 'schemeName'
        },
        {
            name: 'id'
        },
        {
            name: 'email'
        },
        {
            name: 'cellphone'
        },
    ],

    proxy: {
        type: 'ajax',
        url:
            `${MssPhoenix.model.Session.baseUrl}/api/getmemberschemes/${MssPhoenix.model.Session.getUserId()}/EMAIL/${MssPhoenix.model.Session.getUserEmail()}/${MssPhoenix.model.Session.getUserRole()}`,
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    autoLoad: true,
    pageSize: 10,
});