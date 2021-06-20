Ext.define('MssPhoenix.store.UserUploadedDocs', {
    extend: 'Ext.data.Store',
    alias:'store.useruploadeddocs',
    storeId:'useruploadeddocs',
    fields: [
        {
            name: 'id',
        },
        // {
        //     name: 'toUserId',
        //     type: 'string'
        // },
        // // {
        // //     name: 'filePriority',
        // //     type: 'string'
        // // },
        // {
        //     name: 'comments',
        //     type: 'string'
        // },
        {
            name: 'fileName',
            type: 'string'
        }, {
            name: 'originalFileName',
            type: 'string'
        }, {
            name: 'filePath',
            type: 'string'
        }, {
            name: 'fromUserFullName',
            type: 'string'
        }, {
            name: 'shortDate',
            type: 'string'
        }
    ],

    proxy: {
        type: 'ajax',
        url:`${MssPhoenix.model.Session.baseUrl}/api/documents/uploaded/${MssPhoenix.model.Session.getUserId()}`,
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },

    autoLoad: true,
    pageSize: 10
});