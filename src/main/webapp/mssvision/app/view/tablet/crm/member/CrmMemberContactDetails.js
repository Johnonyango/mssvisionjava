Ext.define('MssPhoenix.view.tablet.crm.member.CrmMemberContactDetails', {
    extend: 'MssPhoenix.view.widgets.Module',

    xtype: 'crmmembercontactdetails',

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
                layout:{
                    type:'hbox',
                    align: 'stretch',
                }
            },
            items: [
                {
                    items: [{
                        xtype: 'mitextfield',
                        label: 'Email',
                        name: 'email',
                        vtype: 'email',
                        margin: '10 0 0 0',
                        readOnly: true,
                    },]
                },
                {
                    items: [
                        {
                            xtype: 'mitextfield',
                            label: 'Primary Phone No.',
                            name: 'fixedPhone',
                            margin: '10 0 0 0',
                            readOnly: true,
                        },
                        {
                            xtype: 'mitextfield',
                            label: 'Secondary Phone No.',
                            margin: '10 0 0 6',
                            name: 'secondaryPhone',
                            readOnly: true,
                        }
                    ]
                },

                {
                    items: [
                        {
                            xtype: 'mitextfield',
                            label: 'Country',
                            name: 'country',
                            margin: '10 0 0 0',
                            readOnly: true,
                        },
                        {
                            xtype: 'mitextfield',
                            label: 'County',
                            margin: '10 0 0 6',
                            name: 'subregion',
                            readOnly: true,
                        },
                    ]
                },

                {
                    items: [
                        {
                            xtype: 'mitextfield',
                            label: 'Address',
                            name: 'postalAddress',
                            margin: '10 0 0 0',
                            readOnly: true,
                        },
                        {
                            xtype: 'mitextfield',
                            label: 'City',
                            margin: '10 0 0 6',
                            name: 'town',
                            readOnly: true,
                        }
                    ]
                },

                {
                    items: [
                        {
                            xtype: 'mitextfield',
                            label: 'Region',
                            readOnly: true,
                            label: 'Region',
                            margin: '10 0 0 0',
                            name: 'region'
                        },
                        {
                            xtype: 'mitextfield',
                            label: 'Station',
                            margin: '10 0 0 6',
                            name: 'depot',
                            readOnly: true
                        }
                    ]
                },

            ],
        }
    ]

});