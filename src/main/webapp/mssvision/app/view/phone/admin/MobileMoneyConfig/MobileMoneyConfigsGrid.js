Ext.define('MssPhoenix.view.phone.admin.MobileMoneyConfig.MobileMoneyConfigsGrid', {
    extend: 'MssPhoenix.view.widgets.Table',
    xtype: 'phonemobilemoneyconfigsgrid',
    title: 'Mobile Money Configs',
    controller: 'mobilemoneyconfigscontroller',
    height: 600,

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
            cls: 'module-head',
            docked: 'top',
            items: [

                {
                    text: 'Create ',
                    scale: 'small',
                    handler: 'createPhoneConfigBtnClick',
                   // id: 'createConfig',
                    ui: 'action'
                }, {
                    text: 'View ',
                    scale: 'small',
                    handler: 'viewPhoneConfigBtnClick',
                   // id: 'viewConfig',
                    ui: 'action'
                }, {
                    text: 'Remove',
                    scale: 'small',
                    handler: 'removeConfigBtnClick',
                   // id: 'removeConfig',
                    ui: 'action'
                },
                

            ]
        },
    ],

    columns: [
        { text: 'Mobile Money Config Id', dataIndex: 'id', flex: 1, hidden: true},
        { text: 'Minimum Amount', dataIndex: 'minAmount', flex: 1, hidden: true},
        { text: 'MpesaPaybill', dataIndex: 'mpesaPaybill', flex: 1 },   
        { text: 'MpesaAppKey', dataIndex: 'mpesaAppKey', flex: 1, hidden: true },
        { text: 'MpesaAppSecret', dataIndex: 'mpesaAppSecret', flex: 1 , hidden: true},  
        { text: 'MpesaPassKey', dataIndex: 'mpesaPassKey', flex: 1, hidden: true }, 
        { text: 'CallbackUrl', dataIndex: 'callbackUrl', flex: 1, hidden: true },
        { text: 'TimeoutUrl', dataIndex: 'timeoutUrl', flex: 1, hidden: true },
        { text: 'AccountReference', dataIndex: 'accountReference', flex: 1, hidden: true },
        { text: 'MobileMoneyProcedure', dataIndex: 'mobileMoneyProcedure', flex: 1, hidden: true },           
        { text: 'StatusConfig', dataIndex: 'status', flex: 1,  },
        
    ]
});