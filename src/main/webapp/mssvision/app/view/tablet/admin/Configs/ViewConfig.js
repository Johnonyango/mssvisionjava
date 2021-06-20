Ext.define('MssPhoenix.view.tablet.admin.Configs.ViewConfig', {
    extend: 'MssPhoenix.view.widgets.Window',
    xtype: 'viewconfig',
    controller: 'createconfigcontroller',
    height: 556,
    title: 'Configs',
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
                        name: 'shortDate',
                        label: 'Date Created',
                        readOnly: true,
                    },
                    {
                        name: 'country',
                        label: 'Country',
                        //    readOnly:true,
                    },
                    {
                        name: 'countryCode',
                        label: 'CountryCode',
                        //    readOnly:true,
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
                        //  readOnly:true,
                    },
                    {
                        name: 'emailHost',
                        label: 'Email Host',
                        //   readOnly:true,
                    }, {
                    name: 'emailPassword',
                    label: 'Email Password',
                    //  readOnly:true,
                }, {
                    name: 'emailPort',
                    label: 'Email Port',
                    //  readOnly:true,
                }, {
                    name: 'emailUsername',
                    label: 'Email Username',
                    //  readOnly:true,
                }, {
                    name: 'fmBasePath',
                    label: 'Fm BasePath',
                    //  readOnly:true,
                }, {
                    name: 'fmPassword',
                    label: 'Fm Password',
                    //  readOnly:true,
                }, {
                    name: 'fmUsername',
                    label: 'Fm Username',
                    //   readOnly:true,
                },
                    //   {
                    //     xtype: 'selectbox',
                    //     label: 'InitiateExitWithdrawal',
                    //     margin: '0 0 0 6',
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
                    }, {
                    name: 'middlewareUsername',
                    label: 'Middleware Username',
                    //  readOnly:true,
                },
                    {
                        name: 'mpesaMiddleWarePath',
                        label: 'MobileMoneyMiddlewarePath',
                        //  readOnly:true,
                    },
                    {
                        name: 'numTrials',
                        label: 'NumberOfTrials',
                        //  readOnly:true,
                    },
                    {
                        name: 'businessName',
                        label: 'BusinessName',
                        //  readOnly:true,
                    },
                    {
                        name: 'registrationDeclaration',
                        label: 'RegistrationDeclaration',
                        //  readOnly:true,
                    },
                    // {
                    //   name: 'client',
                    //   label: 'Client',
                    //   //  readOnly:true,
                    // },
                    {
                        name: 'reportServerUrl',
                        label: 'ReportServerUrl',
                        //  readOnly:true,
                    },
                    {
                        xtype: 'selectbox',
                        label: 'Client',
                        margin: '0 0 0 6',
                        name: 'client',
                        store: {
                            fields: ['value', 'name'],
                            data: [
                                {"value": "ETL", "name": "ETL"},
                                {"value": "OTHERS", "name": "OTHERS"},

                            ]
                        },
                        displayField: 'name',
                        valueField: 'value',
                    },


                    {
                        xtype: 'selectbox',
                        label: 'StatusConfig',
                        margin: '0 0 0 6',
                        name: 'statusConfig',
                        store: {
                            fields: ['value', 'name'],
                            data: [
                                {"value": "ACTIVE", "name": "ACTIVE"},
                                {"value": "INACTIVE", "name": "INACTIVE"},

                            ]
                        },
                        displayField: 'name',
                        valueField: 'value',
                    },


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