Ext.define('MssPhoenix.view.tablet.admin.MailConfigs.MailViewConfig', {
    extend: 'MssPhoenix.view.widgets.Window',
    xtype: 'mailviewconfig',
    controller: 'mailcreateconfigcontroller',
    height: 556,
    title: 'Mail Configs',
    autoShow: true,
    width: 600,
    padding: 15,
    items: [

        {
            xtype: 'formpanel',
            layout: 'form',
            reference: 'form',
            jsonSubmit: true,
            defaults: {
                xtype: 'mitextfield',
                allowBlank: false,
                scrollable: true
            },

            items:
                [
                    {
                        xtype: 'numberfield',
                        name: 'id',
                        hidden: true,
                        allowBlank: true,
                        label: 'Config Id',
                        //  readOnly:true,

                    },

                    {
                        name: 'host',
                        label: 'Host',
                        //  readOnly:true,
                    },
                    {
                        name: 'port',
                        label: 'Port',
                        // readOnly:true,
                    },
                    {
                        name: 'username',
                        label: 'Username',
                        // readOnly:true,
                    },
                    {
                        name: 'password',
                        label: 'Password',
                        // readOnly:true,
                    },
                    {
                        name: 'from',
                        label: 'Email From',
                        validators: 'email',
                        // readOnly:true,
                    },
                    {
                        name: 'baseUrl',
                        label: 'BaseUrl',
                        // readOnly:true,
                    },

                    {
                        name: 'supportEmail',
                        label: 'SupportEmail',
                        validators: 'email',
                        // readOnly:true,
                    },
                    {
                        xtype: 'selectbox',
                        label: 'Enabled',
                        margin: '0 0 0 6',
                        name: 'enabled',
                        store: {
                            fields: ['value', 'name'],
                            data: [
                                {"value": "true", "name": "true"},
                                {"value": "false", "name": "false"},

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