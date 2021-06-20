Ext.define('MssPhoenix.view.phone.admin.Configs.ConfigsGrid', {
    extend: 'MssPhoenix.view.widgets.Table',
    xtype: 'phoneconfigsgrid',
    title: 'create a config',
    controller: 'configscontroller',
    height: 600,

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
            
            cls: 'module-head',
            docked: 'top',
            items: [

                {
                    text: 'Create',
                    scale: 'small',
                    handler: 'createPhoneConfigBtnClick',
                    ui: 'action'
                }, {
                    text: 'View ',
                    scale: 'small',
                    handler: 'viewPhoneConfigBtnClick',
                    ui: 'action'
                }, {
                    text: 'Remove',
                    scale: 'small',
                    handler: 'removeConfigBtnClick',
                    ui: 'action'
                },
                // {
                //     xtype: 'textfield',
                //     reference: 'searchId',
                //     emptyText: 'Search By Name',
                //     width: 500,
                //     listeners: {
                //         specialkey: 'onIdSearchEnterKey'
                //     }
                // },
                // {
                //     xtype: 'button',
                //     text: 'Search ',
                //     handler: 'onSearchButtonClick',
                //     ui: 'action',
                // },

            ]
        },
    ],

    columns: [
        { text: 'Config Id', dataIndex: 'id', flex: 1, hidden: true},
        { text: 'Contributions', dataIndex: 'contributions', flex: 1, hidden: true },
        { text: 'Date Created', dataIndex: 'shortDate', flex: 1, },
        { text: 'Currency Name', dataIndex: 'currencyName', flex: 1 },
        { text: 'Currency Short Name', dataIndex: 'currencyShortName', flex: 1, hidden: true },
        { text: 'Fm BasePath', dataIndex: 'fmBasePath', flex: 1 },
        { text: 'Email From', dataIndex: 'emailFrom', flex: 1, hidden: true },
        { text: 'Email Host', dataIndex: 'emailHost', flex: 1, hidden:true},
        { text: 'Email Password', dataIndex: 'emailPassword', flex: 1, hidden: true },
        { text: 'Email Port', dataIndex: 'emailPort', flex: 1, hidden: true },
        { text: 'Email Username', dataIndex: 'emailUsername', flex: 1, hidden: true },       
        { text: 'Fm Password', dataIndex: 'fmPassword', flex: 1, hidden: true },
        { text: 'Fm Username', dataIndex: 'fmUsername', flex: 1 , hidden: true},
        { text: 'InitiateExitWithdrawal', dataIndex: 'initiateExitWithdrawal', flex: 1, hidden: true },
        { text: 'Middleware Password', dataIndex: 'middlewarePassword', flex: 1, hidden: true },
        { text: 'Middleware Username', dataIndex: 'middlewareUsername', flex: 1, hidden: true },
        { text: 'MobileMoneyMiddlewarePath', dataIndex: 'mpesaMiddleWarePath', flex: 1, hidden:true },
        { text: 'Mobile Money Procedure', dataIndex: 'mobileMoneyProcedure', flex: 1, hidden:true },
        { text: 'Mpesa Paybill', dataIndex: 'mpesaPaybill', flex: 1, hidden: true },
        { text: 'StatusConfig', dataIndex: 'statusConfig', flex: 1, hidden: true },
        { text: 'StkPush', dataIndex: 'stkPush', flex: 1, hidden: true },
    ]
});