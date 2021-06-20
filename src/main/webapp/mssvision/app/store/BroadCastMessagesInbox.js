Ext.define('MssPhoenix.store.BroadCastMessagesInbox', {
    extend: 'Ext.data.Store',
    alias: 'store.broadcastmessagesinbox',

// {
//     "id": 1,
//     "messages": {
//     "toId": 1,
//         "toName": "DR Yonathaniel Mbogo Kilei",
//         "login": "me",
//         "fromId": 1336,
//         "fromName": "mssuser mssuser",
//         "documents": "[{\"originalFileName\":\"IN16_20203_14.pdf\",\"fileName\":\"File_1623039468789IN16_20203_14.pdf\",\"size\":0,\"filePath\":\"/root/mssuploads/File_1623039468789IN16_20203_14.pdf\"}]",
//         "subject": "Test",
//         "message": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//         "receiversOutbox": "ALL",
//         "updatedAt": 1623039604000,
//         "createdAt": 1623039604000,
//         "shortUpdatedAt": "Jun 07, 2021",
//         "shortCreatedAt": "Jun 07, 2021",
//         "fromProfileName": "ADMIN",
//         "toProfileName": null,
//         "read": false,
//         "toProfile": null,
//         "fromProfile": null
// }
// }
    fields: [
        {name: 'fromName', mapping:'messages.fromName'},
        {name: 'documents', mapping:'messages.documents'},
        {name: 'subject', mapping:'messages.subject'},
        {name: 'shortCreatedAt', mapping:'messages.shortCreatedAt'},
        {name: 'fromProfileName', mapping:'messages.fromProfileName'},
        {name: 'message', mapping:'messages.message'},
        {name: 'read', mapping:'messages.read'},
    ],

    proxy: {
        type: 'ajax',
        url: `${MssPhoenix.model.Session.baseUrl}/api/getInboxMessagesForUser/${MssPhoenix.model.Session.getUserId()}`,
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    autoLoad: true,
    pageSize: 100,
});