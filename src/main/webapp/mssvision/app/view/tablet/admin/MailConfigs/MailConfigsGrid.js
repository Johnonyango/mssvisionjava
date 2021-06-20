Ext.define('MssPhoenix.view.tablet.admin.MailConfigs.MailConfigsGrid', {
    extend: 'MssPhoenix.view.widgets.Table',
    xtype: 'mailconfigsgrid',

    controller: 'mailconfigscontroller',
    minHeight: 300,
    store: {
        type: 'mailconfigstore'
    },
    defaults: {

        scrollable: true
    },

    layout: 'fit',

    selectable: {
        // Disables sorting by header click, though it will be still available via menu
        columns: true,
        cells: true,
        checkbox: true,
        drag: true,
        mode: 'single',
        extensible: 'y'
    },


    items: [
        {
            xtype: 'toolbar',
            docked: 'top',
            items: [
                {
                    text: 'Create Mail Config',
                    scale: 'small',
                    handler: 'createConfigBtnClick',
                    // id: 'createConfig',
                    ui: 'action'
                },
                {
                    text: 'View Config',
                    scale: 'small',
                    handler: 'viewConfigBtnClick',
                    // id: 'viewConfig',
                    ui: 'action'
                },
                {
                    text: 'Remove Config',
                    scale: 'small',
                    handler: 'removeConfigBtnClick',
                    // id: 'removeConfig',
                    ui: 'action'
                },

            ]
        },
    ],

    columns: [
        {text: 'Mail Config Id', dataIndex: 'id', flex: 1, hidden: true},
        {text: 'Host', dataIndex: 'host', flex: 1,},
        {text: 'Port', dataIndex: 'port', flex: 1, hidden: true},
        {text: 'Username', dataIndex: 'username', flex: 1},
        {text: 'Password', dataIndex: 'password', flex: 1, hidden: true},
        {text: 'Email From', dataIndex: 'from', flex: 1},
        {text: 'BaseUrl', dataIndex: 'baseUrl', flex: 1, hidden: true},
        {text: 'SupportEmail', dataIndex: 'supportEmail', flex: 1, hidden: true},
        {text: 'Enabled', dataIndex: 'enabled', flex: 1,},

    ]
});