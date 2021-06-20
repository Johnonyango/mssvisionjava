Ext.define('MssPhoenix.view.phone.admin.Configs.ViewConfig', {
    extend: 'MssPhoenix.view.widgets.Window',

    xtype: 'phoneviewconfig',

    controller: 'createconfigcontroller',
    height: 556,
    title: 'Configs',
    autoShow: true,
    modal: true,
    shadow: true,
    width: 500,
    padding: 25,
    readOnly: true,
    items: [

        {
            xtype: 'formpanel',
            layout: 'form',
            reference: 'form',
            width: 550,
            // padding: 25,
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
            
          //   {
          //     xtype: 'selectbox',
          //     label: 'Allow Make Contributions',
          //     // margin: '0 0 0 0',
          //     name: 'contributions',
          //     store: {
          //         fields: ['value', 'name'],
          //         data: [
          //             { "value": 1, "name": "True" },
          //             { "value": 0, "name": "False" },
                      
          //         ]
          //     },
          //     displayField: 'name',
          //     valueField: 'value',
          // },
            {
                name: 'shortDate',
                label: 'Date Created',
                readOnly:true,
            },
            {
                name: 'currencyName',
                label: 'Currency Name',
            //    readOnly:true,
            },
            {
                name: 'currencyShortName',
                label: 'Currency Short Name',
            //    readOnly:true,
            },
            {
                name: 'emailFrom',
                label: 'Email From',
                validators:'email',
              //  readOnly:true,
            },
            {
                name: 'emailHost',
                label: 'Email Host',
             //   readOnly:true,
            },{
                name: 'emailPassword',
                label: 'Email Password',
              //  readOnly:true,
            },{
                name: 'emailPort',
                label: 'Email Port',
              //  readOnly:true,
            },{
                name: 'emailUsername',
                label: 'Email Username',
              //  readOnly:true,
            },{
                name: 'fmBasePath',
                label: 'Fm BasePath',
              //  readOnly:true,
            },{
                name: 'fmPassword',
                label: 'Fm Password',
              //  readOnly:true,
            },{
                name: 'fmUsername',
                label: 'Fm Username',
             //   readOnly:true,
            },
          //   {
          //     xtype: 'selectbox',
          //     label: 'InitiateExitWithdrawal',
          //     margin: '0 0 0 -50',
          //     name: 'initiateExitWithdrawal',
          //     store: {
          //         fields: ['value', 'name'],
          //         data: [
          //             { "value": 1, "name": "True" },
          //             { "value": 0, "name": "False" },
                      
          //         ]
          //     },
          //     displayField: 'name',
          //     valueField: 'value',
          // },

            {
                name: 'middlewarePassword',
                label: 'Middleware Password',
               // readOnly:true,
            },{
                name: 'middlewareUsername',
                label: 'Middleware Username',
              //  readOnly:true,
            },{
                name: 'mpesaMiddleWarePath',
                label: 'MobileMoneyMiddlewarePath',
              //  readOnly:true,
            },
            // {
            //     name: 'mpesaPaybill',
            //     label: 'Mpesa Paybill',
            //    // readOnly:true,
            // },
          //   {
          //     name: 'mobileMoneyProcedure',
          //     label: 'Mobile Money Procedure',
          //    // readOnly:true,
          // },
          {
            xtype: 'selectbox',
            label: 'StatusConfig',
            //placeholder: 'StatusConfig',
            margin: '0 0 0 0',
            name: 'statusConfig',
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
          //   {
          //     xtype: 'selectbox',
          //     label: 'StkPush',
          //     margin: '0 0 0 0',
          //     name: 'stkPush',
          //     store: {
          //         fields: ['value', 'name'],
          //         data: [
          //             { "value": 1, "name": "True" },
          //             { "value": 0, "name": "False" },
                      
          //         ]  
          //     },
          //     displayField: 'name',
          //     valueField: 'value',
          // },
            
            
            
            

            ],
            buttons: [
                {
                text: 'Save',
                formBind: true,
                ui: 'action',
                handler: 'onEditConfigBtnClick'
            },
            {
                text: 'Close',
                ui: 'action',
                handler: 'onCancelViewBtnClick'

            }
            ]
        }]
});