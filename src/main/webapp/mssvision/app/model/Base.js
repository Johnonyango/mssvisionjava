Ext.define('MssPhoenix.model.Base', {
    extend: 'Ext.data.Model',
 
    schema: {
        namespace: 'MssPhoenix.model',
        urlPrefix: 'resources',
        proxy: {
        }
    },
    type: 'ajax',
    api: {
        read: '{prefix}{entityName:lowercase}.json', //#4
    },
    reader: {
        type: 'json',
        rootProperty: 'data'
    },
    writer: {
        type: 'json',
        writeAllFields: true,
        encode: true,
        rootProperty: 'data',
        allowSingle: false
    },
    listeners: { //#6
        exception: function(proxy, response, operation) {
            console.log(response.responseText);
        }
    }
});