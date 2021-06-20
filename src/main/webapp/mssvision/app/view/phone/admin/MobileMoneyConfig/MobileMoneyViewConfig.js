Ext.define('MssPhoenix.view.phone.admin.MobileMoneyConfig.MobileMoneyViewConfig', {
    extend: 'MssPhoenix.view.widgets.Window',

    xtype: 'phonemobilemoneyviewconfig',

    controller: 'mobilemoneycreateconfigcontroller',
    height: 556,
    title: 'Mobile Money Configs',
    autoShow: true,
    modal: true,
    shadow: true,
    width: 600,
    padding: 15,
    readOnly: true,
    items: [

        {
            xtype: 'formpanel',
            layout: 'form',
            reference: 'form',
            jsonSubmit: true,
            defaults: {
                xtype: 'textfield',
                allowBlank: false,
                scrollable: true
            },
           
            items: 
            [{
                xtype: 'numberfield',
                name: 'id',
                //hidden: true,
                allowBlank: true,
                label: 'Config Id',
              //  readOnly:true,

            },        
          
            {
                name: 'minAmount',
                label: 'MinAmount',
              //  readOnly:true,
            },           
            {
                name: 'mpesaPaybill',
                label: 'Mpesa Paybill',
               // readOnly:true,
            },
            {
                name: 'mpesaAppKey',
                label: 'Mpesa Appkey',
               // readOnly:true,
            },
            {
                name: 'mpesaAppSecret',
                label: 'MpesaAppSecret',
               // readOnly:true,
            },
            {
                name: 'mpesaPassKey',
                label: 'Mpesa Passkey',
               // readOnly:true,
            },
            {
                name: 'callbackUrl',
                label: 'CallbackUrl',
               // readOnly:true,
            },
            {
                name: 'timeoutUrl',
                label: 'TimeoutUrl',
               // readOnly:true,
            },
            {
                name: 'accountReference',
                label: 'AccountReference',
               // readOnly:true,
            },        
            {
              name: 'mobileMoneyProcedure',
              label: 'Mobile Money Procedure',
             // readOnly:true,
          },
          {
            xtype: 'selectbox',
            label: 'Status',
            margin: '0 0 0 6',
            name: 'status',
            store: {
                fields: ['value', 'name'],
                data: [
                    { "value": "ACTIVE", "name": "ACTIVE" },
                    { "value": "INACTIVE", "name": "INACTIVE" },
                    
                ]
            },
            displayField: 'name',
            valueField: 'value',
        },
        //     {
        //       xtype: 'selectbox',
        //       label: 'StkPush',
        //       margin: '0 0 0 6',
        //       name: 'stkPush',
        //       store: {
        //           fields: ['value', 'name'],
        //           data: [
        //               { "value": 1, "name": "True" },
        //               { "value": 0, "name": "False" },
                      
        //           ]
        //       },
        //       displayField: 'name',
        //       valueField: 'value',
        //   },
           
            ],
            buttons: [
                {
                text: 'Save',
                formBind: true,
                ui: 'action',
                id: 'saveViewConfig',
                handler: 'onEditConfigBtnClick'
            },
            {
                text: 'Close',
                ui: 'action',
                id: 'closeViewConfig',
                handler: 'onCancelViewBtnClick'

            }
            ]
        }]
});