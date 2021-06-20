Ext.define('MssPhoenix.store.EmailTemplates', {
    extend: 'Ext.data.Store',
    alias: 'store.emailtemplates',

    fields: [
        {name: 'id'},
        {name: 'title'},
        {name: 'templatesType'},
        {name: 'templatesTypeString'},
        {name: 'namedKeys'},
        {name: 'template'},
    ],

    proxy: {
        type: 'ajax',
        url: `${MssPhoenix.model.Session.baseUrl}/api/emailTemplate/getAll`,
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },

    autoLoad: true,
    pageSize: 100,

});