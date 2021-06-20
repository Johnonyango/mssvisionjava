Ext.define('MssPhoenix.store.PensionerImageStore', {
    extend: 'Ext.data.Store',
    alias: 'store.pensionerimagestore',
    fields: [
        {
            name: 'id',
        },

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
        url: `${MssPhoenix.model.Session.baseUrl}/api/documents/uploaded/${MssPhoenix.model.Session.getUserId()}`,
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },

    autoLoad: true,
    pageSize: 10
});