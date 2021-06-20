Ext.define('MssPhoenix.view.tablet.admin.MobileMoneyConfig.MobileMoneyConfigsGrid', {
    extend: 'MssPhoenix.view.widgets.Table',
    xtype: 'mobilemoneyconfigsgrid',

    controller: 'mobilemoneyconfigscontroller',
    minHeight: 300,
    store: {
        type: 'mobilemoneyconfigstore'
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
                    text: 'Create Mobile Config',
                    scale: 'small',
                    handler: 'createConfigBtnClick',
                    // id: 'createConfig',
                    ui: 'action'
                }, {
                    text: 'View Config',
                    scale: 'small',
                    handler: 'viewConfigBtnClick',
                    // id: 'viewConfig',
                    ui: 'action'
                }, {
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
        {text: 'Mobile Money Config Id', dataIndex: 'id', flex: 1, hidden: true},
        {text: 'Minimum Amount', dataIndex: 'minAmount', flex: 1,},
        {text: 'MpesaPaybill', dataIndex: 'mpesaPaybill', flex: 1},
        {text: 'MpesaAppKey', dataIndex: 'mpesaAppKey', flex: 1, hidden: true},
        {text: 'MpesaAppSecret', dataIndex: 'mpesaAppSecret', flex: 1, hidden: true},
        {text: 'MpesaPassKey', dataIndex: 'mpesaPassKey', flex: 1, hidden: true},
        {text: 'CallbackUrl', dataIndex: 'callbackUrl', flex: 1, hidden: true},
        {text: 'TimeoutUrl', dataIndex: 'timeoutUrl', flex: 1, hidden: true},
        {text: 'AccountReference', dataIndex: 'accountReference', flex: 1, hidden: true},
        {text: 'MobileMoneyProcedure', dataIndex: 'mobileMoneyProcedure', flex: 1},
        {text: 'StatusConfig', dataIndex: 'status', flex: 1,},

    ]
});