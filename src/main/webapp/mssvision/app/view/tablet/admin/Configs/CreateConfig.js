Ext.define('MssPhoenix.view.tablet.admin.Config.CreateConfig', {
    extend: 'MssPhoenix.view.widgets.Window',

    xtype: 'createconfig',
    controller: 'createconfigcontroller',
    width: 600,
    height: 600,
    padding: 15,
    defaults: {

        scrollable: true
    },
    items: [
        // {
        //     xtype: 'formpanel',
        //     scrollable: true,
        //     defaults: {
        //         xtype: 'mitextfield',
        //         readOnly: false,
        //         width: '100%',
        //     }
        // },

        {
            height: 550,
            flex: 1,
            xtype: 'module',

            items: [{
                xtype: 'formpanel',
                reference: 'form',
                jsonSubmit: true,
                items: [
                    {
                        cls: 'module-head',
                        xtype: 'component',
                        html: `<h3>Create Config</h3>`,
                    },
                    {
                        cls: 'module-body',
                        xtype: 'container',
                        layout: {
                            type: 'vbox',
                            align: 'stretch',
                        },
                        items: [
                            {
                                flex: 1,
                                xtype: 'mitextfield',
                                label: 'Country',
                                labelTextAlign: 'left',
                                name: 'country',
                                margin: '0 0 0 5',

                            },
                            {
                                flex: 1,
                                xtype: 'mitextfield',
                                label: 'CountryCode',
                                labelTextAlign: 'left',
                                name: 'countryCode',
                                margin: '0 0 0 5',

                            },
                            {
                                flex: 1,
                                xtype: 'mitextfield',
                                label: 'Currency Name',
                                labelTextAlign: 'left',
                                name: 'currencyName',
                                margin: '0 0 0 5',

                            },
                            {
                                flex: 1,
                                xtype: 'mitextfield',
                                label: 'Currency Short Name',
                                labelTextAlign: 'left',
                                name: 'currencyShortName',
                                margin: '0 0 0 5',

                            },

                            {
                                flex: 1,
                                xtype: 'mitextfield',
                                label: 'Email From',
                                labelTextAlign: 'left',
                                name: 'emailFrom',
                                validators: 'email'

                            },
                            {
                                flex: 1,
                                xtype: 'mitextfield',
                                label: 'Email Host',
                                labelTextAlign: 'left',
                                name: 'emailHost',
                                margin: '0 0 0 5',


                            },
                            {
                                flex: 1,
                                xtype: 'mitextfield',
                                label: 'Email Password',
                                labelTextAlign: 'left',
                                name: 'emailPassword',
                                margin: '0 0 0 5',

                            },

                            {
                                flex: 1,
                                xtype: 'mitextfield',
                                label: 'Email Port',
                                labelTextAlign: 'left',
                                name: 'emailPort',

                            },
                            {
                                flex: 1,
                                xtype: 'mitextfield',
                                label: 'Email Username',
                                labelTextAlign: 'left',
                                name: 'emailUsername',
                                margin: '0 0 0 5',

                            },

                            {
                                flex: 1,
                                xtype: 'mitextfield',
                                label: 'Fm BasePath',
                                labelTextAlign: 'left',
                                name: 'fmBasePath',

                            },
                            {
                                flex: 1,
                                xtype: 'mitextfield',
                                label: 'Fm Password',
                                labelTextAlign: 'left',
                                name: 'fmPassword',
                                margin: '0 0 0 5',

                            },
                            {
                                flex: 1,
                                xtype: 'mitextfield',
                                label: 'Fm Username',
                                labelTextAlign: 'left',
                                name: 'fmUsername',
                                margin: '0 0 0 5',

                            },
                            // {
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
                                flex: 1,
                                xtype: 'mitextfield',
                                label: 'Middleware Password',
                                labelTextAlign: 'left',
                                name: 'middlewarePassword',
                                margin: '0 0 0 5',

                            },
                            {
                                flex: 1,
                                xtype: 'mitextfield',
                                label: 'Middleware Username',
                                labelTextAlign: 'left',
                                name: 'middlewareUsername',
                                margin: '0 0 0 5',

                            },

                            {
                                flex: 1,
                                xtype: 'mitextfield',
                                label: 'MobileMoneyMiddlewarePath',
                                labelTextAlign: 'left',
                                name: 'mpesaMiddleWarePath',

                            },
                            {
                                flex: 1,
                                xtype: 'minumberfield',
                                label: 'Number Of login Trials',
                                name: 'numTrials',
                            },
                            {
                                flex: 1,
                                xtype: 'mitextfield',
                                label: 'BusinessName',
                                labelTextAlign: 'left',
                                name: 'businessName',

                            },
                            {
                                flex: 1,
                                xtype: 'mitextfield',
                                label: 'RegistrationDeclaration',
                                labelTextAlign: 'left',
                                name: 'registrationDeclaration',

                            },
                            {
                                flex: 1,
                                xtype: 'mitextfield',
                                label: 'ReportServerUrl',
                                labelTextAlign: 'left',
                                name: 'reportServerUrl',

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
                    }
                ],
                bbar: [
                    '->',
                    {
                        minWidth: 200,
                        iconCls: 'fa fa-save',
                        text: 'Save',
                        ui: 'action',
                        id: 'saveCreateConfig',
                        handler: 'onSaveConfigBtnClick'


                    }, {
                        minWidth: 200,
                        iconCls: 'fa fa-ban',
                        text: 'close',
                        ui: 'action',
                        id: 'closeCreateConfig',
                        handler: 'onCancelBtnClick'
                    }
                ]
            }],

        }

    ]

});