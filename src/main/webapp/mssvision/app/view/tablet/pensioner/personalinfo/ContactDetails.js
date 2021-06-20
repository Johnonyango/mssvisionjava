Ext.define('MssPhoenix.view.tablet.pensioner.personalinfo.ContactDetails', {
    extend: 'MssPhoenix.view.widgets.Module',

    xtype: 'pensionercontactdetails',

    controller: 'pensionerdetailscontroller',


    // width: '100%',

    items: [
        {
            cls: 'module-head',
            xtype: 'component',
            html: `<h3>Other Details</h3>`,
        },
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
                margin:'5 0',
            },
            items: [
                {
                    items: [{
                        xtype: 'mitextfield',
                        label: 'email',
                        name: 'EMAIL',
                        vtype: 'email',
                        readOnly: true,
                        bind: {
                            value: '{user.more.email}',
                        }
                    },]
                },
                {
                    items: [
                        {
                            xtype: 'mitextfield',
                            label: 'Primary Phone No.',
                            name: 'cellPhone',
                            readOnly: true,
                            bind: {
                                value: '{cellPhone}',
                            }
                        },
                        {
                            xtype: 'mitextfield',
                            label: 'Secondary Phone No.',
                            margin: '0 0 0 6',
                            name: 'fixedPhone',
                            readOnly: true,
                            bind: {
                                value: '{fixedPhone}',
                            }
                        }
                    ]
                },

                {
                    items: [
                        {
                            xtype: 'mitextfield',
                            label: 'BANK',
                            name: 'bankName',
                            readOnly: true,
                            bind: {
                                value: '{bankName}'
                            }
                        } ,
                        {
                            xtype: 'mitextfield',
                            label: 'BANK BRANCH',
                            margin: '0 0 0 6',
                            name: 'branch',
                            readOnly: true,
                            bind: {
                                value: '{branch}'
                            }
                        }
                    ]
                },

                {
                    items: [
                        {
                            xtype: 'mitextfield',
                            label: 'ACCOUNT NAME',
                            name: 'accountName',
                            readOnly: true,
                            bind: {
                                value: '{accountName}'
                            }
                        },
                        {
                            xtype: 'mitextfield',
                            label: 'ACCOUNT NUMBER',
                            margin: '0 0 0 6',
                            name: 'accountNo',
                            readOnly: true,
                            bind: {
                                value: '{accountNo}'
                            }
                        }
                    ]
                }

            ],
        }
    ]

});