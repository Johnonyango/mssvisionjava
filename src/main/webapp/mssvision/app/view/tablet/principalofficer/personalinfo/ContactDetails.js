Ext.define('MssPhoenix.view.tablet.principalofficer.personalinfo.ContactDetails', {
    extend: 'MssPhoenix.view.widgets.Module',

    xtype: 'pocontactdetails',

    controller: 'podetailscontroller',


    // width: '100%',

    items: [
        {
            cls: 'module-head',
            xtype: 'component',
            html: `<h3>Contact Details</h3>`,
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
                            name: 'cellPhone',
                            readOnly: true,
                            bind: {
                                value: '{cellPhone}'
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
                            name: 'country',
                            readOnly: true,
                            bind: {
                                value: '{country}'
                            }
                        },
                      
                        {
                            xtype: 'mitextfield',
                            label: 'Town',
                            margin: '0 0 0 6',
                            name: 'town',
                            readOnly: true,
                            bind: {
                                value: '{town}'
                            }
                        }
                    ]
                }

            ],
        }
    ]

});