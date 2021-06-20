Ext.define('MssPhoenix.store.BroadCastMessagesOutbox', {
    extend: 'Ext.data.Store',
    alias: 'store.broadcastmessagesoutbox',

    fields: [
        {name: 'subject', mapping:'messages.subject'},
        {name: 'shortCreatedAt', mapping:'messages.shortCreatedAt'},
        {name: 'toProfileName', mapping:'messages.toProfileName'},
        {name: 'receiversOutbox', mapping:'messages.receiversOutbox'},
        {name: 'documents', mapping:'messages.documents'},
        {name: 'message', mapping:'messages.message'},
    ],

    proxy: {
        type: 'ajax',
        url: `${MssPhoenix.model.Session.baseUrl}/api/getOutboxMessagesForUser/${MssPhoenix.model.Session.getUserId()}`,
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    autoLoad: true,
    pageSize: 100,
});