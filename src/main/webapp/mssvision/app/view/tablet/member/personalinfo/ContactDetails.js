Ext.define('MssPhoenix.view.tablet.member.personalinfo.ContactDetails', {
    extend: 'MssPhoenix.view.widgets.Module',

    xtype: 'membercontactdetails',

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
                    },]
                },
                {
                    items: [
                        {
                            xtype: 'mitextfield',
                            label: 'Primary Phone No.',
                            name: 'fixedPhone',
                            readOnly: true,
                        },
                        {
                            xtype: 'mitextfield',
                            label: 'Secondary Phone No.',
                            margin: '0 0 0 6',
                            name: 'secondaryPhone',
                            readOnly: true,
                        }
                    ]
                },

                {
                    items: [
                        {
                            xtype: 'mitextfield',
                            label: 'City',
                            name: 'town',
                            readOnly: true,
                        },
                        {
                            xtype: 'mitextfield',
                            label: 'County',
                            margin: '0 0 0 6',
                            name: 'subregion',
                            readOnly: true,
                        },
                        {
                            xtype: 'selectbox',
                            label: 'Country',
                            margin: '0 0 0 6',
                            name: 'country',
                            store: {
                                fields: ['value', 'name'],
                                data: [
                                    { "value": "Kenya", "name": "Kenya" },
                                    { "value": "Uganda", "name": "Uganda" },
                                    { "value": "Tanzania", "name": "Tanzania" },
                                ]
                            },
                            displayField: 'name',
                            valueField: 'value',
                            editable:false
                        }
                    ]
                },

                {
                    items: [
                        {
                            xtype: 'mitextfield',
                            label: 'Address',
                            name: 'postalAddress',
                            readOnly: true,
                        },
                        {
                            xtype: 'mitextfield',
                            margin: '0 0 0 6',
                            label: 'Region',
                            name: 'region',
                            readOnly: true,
                        },
                        {
                            xtype: 'minumberfield',
                            label: 'Station',
                            margin: '0 0 0 6',
                            name: 'depot',
                            readOnly: true
                        }
                    ]
                },

            ],
        }
    ]

});