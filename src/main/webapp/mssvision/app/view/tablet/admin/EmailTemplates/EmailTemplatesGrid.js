Ext.define('MssPhoenix.view.tablet.admin.EmailTemplates.EmailTemplatesGrid', {
    extend: 'MssPhoenix.view.widgets.Table',

    xtype: 'emailtemplatesgrid',

    store: {
        type: 'emailtemplates'
    },

    minHeight: 300,

    columns: [
        {text: 'ID', dataIndex: 'id'},
        {text: 'TYPE', dataIndex: 'templatesTypeString'},
        {text: 'SUBJECT', dataIndex: 'title', flex: 1,},
        {text: 'SPECIAL WORDS', dataIndex: 'namedKeys', flex: 1,},
        {text: 'TEMPLATE', dataIndex: 'template', flex: 3,}
    ],

    listeners: {
        click: {
            element: 'element',
            fn: 'openTemplates'
        },
    }

});