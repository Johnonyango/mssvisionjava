Ext.define('MssPhoenix.view.tablet.sponsor.personalinfo.PersonalDetails', {
    extend: 'MssPhoenix.view.widgets.Module',

    xtype: 'sponsorpersonaldetails',

    controller: 'sponsordetailscontroller',
    // width:'100%',
    
    items: [{
        xtype: 'panel',
        items: [{
            xtype: 'module',
            items: [
                {
                    xtype: 'component',
                    cls: 'module-head',
                    html: `<h3>Sponsor Details</h3>`
                },
                {
                    xtype: 'formpanel',
                    cls: 'module-body',
                    reference:'sponsorform',
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
                        items: [{
                            xtype: 'mitextfield',
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
                            items: [{
                                xtype: 'mitextfield',
                                label: 'CRM Name',
                                name: 'crm',
                                readOnly: true,
                                bind: {
                                    value: '{crm}'
                                }
                            },
                                {
                                    xtype: 'mitextfield',
                                    label: 'CRM Email',
                                    margin: '0 0 0 6',
                                    name: 'crmEmail',
                                    readOnly: true,
                                    bind: {
                                        value: '{crmEmail}'
                                    }
                                }
                            ]
                        },
                    ],
                }
            ]
        }],

    }],
});