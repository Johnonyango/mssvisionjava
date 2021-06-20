Ext.define('MssPhoenix.store.AdminUploadedDocuments', {
    
        extend: 'Ext.data.Store',

        alias:'store.adminuploadeddocs',
        fields: [
            {
                name: 'id',
            },
            {
                name: 'sendTo',
                type: 'string'
            },
            {
                name: 'filePriority',
                type: 'string'
            },
            {
                name: 'Description',
                type: 'string'
            },{
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