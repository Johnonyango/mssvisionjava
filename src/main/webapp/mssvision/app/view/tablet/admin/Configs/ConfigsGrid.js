Ext.define('MssPhoenix.view.tablet.admin.Configs.ConfigsGrid', {
    extend: 'MssPhoenix.view.widgets.Table',
    xtype: 'configsgrid',
    controller: 'configscontroller',
    minHeight: 300,

    store: {
        type: 'configstore'
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
                    text: 'Create A Config',
                    scale: 'small',
                    handler: 'createConfigBtnClick',
                    //  id: 'createConfig',
                    ui: 'action'
                },
                {
                    text: 'View Config',
                    scale: 'small',
                    handler: 'viewConfigBtnClick',
                    //    id: 'viewConfig',
                    ui: 'action'
                },
                {
                    text: 'Remove Config',
                    scale: 'small',
                    handler: 'removeConfigBtnClick',
                    //  id: 'removeConfig',
                    ui: 'action'
                },
                // {
                //     text: 'Upload Business Image',
                //     scale: 'small',
                //     handler: 'createBusinessImageBtnClick',
                //   //  id: 'removeConfig',
                //     ui: 'action'
                // },

            ]
        },
    ],

    columns: [
        {text: 'Config Id', dataIndex: 'id', flex: 1, hidden: true},
        {text: 'Date Created', dataIndex: 'shortDate', flex: 1},
        {text: 'Currency Name', dataIndex: 'currencyName', flex: 1},
        {text: 'Currency Short Name', dataIndex: 'currencyShortName', flex: 1, hidden: true},
        {text: 'Fm BasePath', dataIndex: 'fmBasePath', flex: 1},
        {text: 'Email From', dataIndex: 'emailFrom', flex: 1, hidden: true},
        {text: 'Email Host', dataIndex: 'emailHost', flex: 1},
        {text: 'Email Password', dataIndex: 'emailPassword', flex: 1, hidden: true},
        {text: 'Email Port', dataIndex: 'emailPort', flex: 1, hidden: true},
        {text: 'Email Username', dataIndex: 'emailUsername', flex: 1, hidden: true},
        {text: 'Fm Password', dataIndex: 'fmPassword', flex: 1, hidden: true},
        {text: 'Fm Username', dataIndex: 'fmUsername', flex: 1, hidden: true},
        {text: 'Middleware Password', dataIndex: 'middlewarePassword', flex: 1, hidden: true},
        {text: 'Middleware Username', dataIndex: 'middlewareUsername', flex: 1, hidden: true},
        {text: 'Country', dataIndex: 'country', flex: 1, hidden: true},
        {text: 'CountryCode', dataIndex: 'countryCode', flex: 1, hidden: true},
        {text: 'NumberOfTrials', dataIndex: 'numTrials', flex: 1, hidden: true},
        {text: 'BusinessName', dataIndex: 'businessName', flex: 1, hidden: true},
        {text: 'registrationDeclaration', dataIndex: 'registrationDeclaration', flex: 1, hidden: true},
        {text: 'client', dataIndex: 'client', flex: 1, hidden: true},
        {text: 'reportServerUrl', dataIndex: 'reportServerUrl', flex: 1, hidden: true},

        {text: 'StatusConfig', dataIndex: 'statusConfig', flex: 1, hidden: true},
    ]
});