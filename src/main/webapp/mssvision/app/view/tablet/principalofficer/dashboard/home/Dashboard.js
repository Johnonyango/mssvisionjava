Ext.define('MssPhoenix.view.tablet.principalofficer.dashboard.home.Dashboard', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',

    xtype: 'podashboard',
    controller: 'poDashboardcontroller',

    viewModel: 'povmodel',
    items: [
        {
            xtype: 'container',
            padding: '15px',
            scrollable: true,

            items: [
                {
                    xtype: 'postatustiles'
                },
                {
                    margin: '20 0 0 0',
                    xtype: 'container',
                    layout: {
                        type: 'hbox'
                    },
                    items: [

                        {
                            width: '75%',
                            xtype: 'module',
                            items: [
                                {
                                    xtype: 'component',
                                    cls: 'module-head',
                                    html: 'Sponsor Details'
                                },
                                {
                                    xtype: 'formpanel',
                                    layout: {
                                        type: 'hbox'
                                    },
                                    reference: 'sponsorform',
                                    defaults: {
                                        flex: 1
                                    },
                                    items: [
                                        {
                                            xtype: 'fieldset',
                                            title: 'Personal Info',
                                            items: [
                                                {
                                                    xtype: 'module',
                                                    items: [
                                                        {
                                                            xtype: 'container',
                                                            cls: 'module-body',
                                                            layout: {
                                                                type: 'vbox',
                                                                align: 'stretch',
                                                            },
                                                            defaults: {
                                                                width: '100%',
                                                                xtype: 'container',
                                                                layout: {
                                                                    type: 'hbox',
                                                                    align: 'stretch',
                                                                },
                                                                margin: '5 0',
                                                            },
                                                            items: [

                                                                {
                                                                    items: [{
                                                                        xtype: 'mitextfield',
                                                                        label: 'Name',
                                                                        name: 'name',
                                                                        readOnly: true,
                                                                        bind: {
                                                                            value: '{name}'
                                                                        }
                                                                    },
                                                                    ]
                                                                },
                                                                {
                                                                    items: [
                                                                        {
                                                                            xtype: 'minumberfield',
                                                                            label: 'Sponsor Number',
                                                                            name: 'employerRefNo',
                                                                            readOnly: true,
                                                                            margin: '0 0 0 6',
                                                                            bind: {
                                                                                value: '{employerRefNo}'
                                                                            }
                                                                        },
                                                                    ]
                                                                },

                                                                {
                                                                    items: [{
                                                                        xtype: 'mitextfield',
                                                                        label: 'Scheme Name',
                                                                        name: 'schemeName',
                                                                        readOnly: true,
                                                                        bind: {
                                                                            value: '{schemeName}'
                                                                        }
                                                                    },
                                                                    ]
                                                                },

                                                                {
                                                                    items: [
                                                                        {
                                                                            flex: 1,
                                                                            xtype: 'fieldset',
                                                                            title: 'Client Relationship Manager',
                                                                            items: [
                                                                                {
                                                                                    xtype: 'container',
                                                                                    layout: {
                                                                                        type: 'hbox',
                                                                                        align: 'stretch',
                                                                                    },
                                                                                    items: [
                                                                                        {
                                                                                            xtype: 'mitextfield',
                                                                                            label: 'Name',
                                                                                            name: 'crm',
                                                                                            readOnly: true,
                                                                                            bind: {
                                                                                                value: '{crm}'
                                                                                            }
                                                                                        },
                                                                                        {
                                                                                            xtype: 'mitextfield',
                                                                                            label: 'Email',
                                                                                            margin: '0 0 0 6',
                                                                                            name: 'crmEmail',
                                                                                            readOnly: true,
                                                                                            bind: {
                                                                                                value: '{crmEmail}'
                                                                                            }
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                            ],
                                                        }
                                                    ]
                                                },
                                            ]
                                        },
                                        {
                                            xtype: 'fieldset',
                                            title: 'Contact Info',
                                            items: [
                                                {
                                                    cls: 'module-body',
                                                    xtype: 'container',
                                                    layout: {
                                                        type: 'vbox',
                                                        align: 'stretch'
                                                    },
                                                    defaults: {
                                                        width: '100%',
                                                        xtype: 'container',
                                                        layout: {
                                                            type: 'hbox',
                                                            align: 'stretch',
                                                            flex: 1,
                                                        },
                                                        margin: '5 0',
                                                    },
                                                    items: [
                                                        {
                                                            items: [{
                                                                xtype: 'mitextfield',
                                                                label: 'Email',
                                                                name: 'email',
                                                                vtype: 'email',
                                                                readOnly: true,
                                                                bind: {
                                                                    value: '{email}',
                                                                }
                                                            },]
                                                        },


                                                        {
                                                            items: [
                                                                {
                                                                    xtype: 'mitextfield',
                                                                    label: 'Phone',
                                                                    name: 'phone',
                                                                    readOnly: true,
                                                                    bind: {
                                                                        value: '{phone}'
                                                                    }
                                                                },
                                                                {
                                                                    xtype: 'mitextfield',
                                                                    label: 'Address',
                                                                    name: 'postalAddress',
                                                                    margin: '0 0 0 6',
                                                                    readOnly: true,
                                                                    bind: {
                                                                        value: '{postalAddress}',
                                                                    }
                                                                },
                                                            ]
                                                        },


                                                        {
                                                            items: [

                                                                {
                                                                    xtype: 'mitextfield',
                                                                    label: 'Country',
                                                                    margin: '0 0 0 6',
                                                                    name: 'country',
                                                                    readOnly: true,
                                                                    bind: {
                                                                        value: '{country}'
                                                                    }
                                                                }
                                                            ]
                                                        }

                                                    ],
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },

                        {
                            width: '20%',
                            xtype: 'module',
                            margin: '0 0 0 20',
                            items: [
                                {
                                    xtype: 'component',
                                    cls: 'module-head',
                                    html: 'Menu'
                                },
                                {
                                    xtype: 'pomenus'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
});