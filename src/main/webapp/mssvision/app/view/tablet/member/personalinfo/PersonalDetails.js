Ext.define('MssPhoenix.view.tablet.member.personalinfo.PersonalDetails', {
    extend: 'MssPhoenix.view.widgets.Module',

    xtype: 'memberpersonaldetails',
    // width:'100%',

    items: [
        {
            cls: 'module-head',
            xtype: 'component',
            html: `<h3>Personal Information</h3>`,
        },
        {
            cls: 'module-body',
            xtype: 'container',
            layout: {
                type: 'vbox',
                align: 'stretch',
            },
            defaults: {
                width: '100%',
                margin: '5 0',
                xtype: 'container',
                layout: {
                    type: 'hbox',
                    align: 'stretch',
                }
            },
            items: [
                {
                    items: [{
                        xtype: 'mitextfield',
                        label: 'First Name',
                        name: 'firstname',
                        readOnly: true,
                    },
                        {
                            xtype: 'mitextfield',
                            label: 'Surname',
                            name: 'surname',
                            readOnly: true,
                            margin: '0 0 0 6',
                        },]
                },

                {
                    items: [
                        {
                            xtype: 'mitextfield',
                            label: 'Other Names',
                            name: 'othernames',
                            readOnly: true,
                        },
                        {
                            xtype: 'mitextfield',
                            label: 'Status',
                            margin: '0 0 0 6',
                            name: 'mbshipStatus',
                            readOnly: true
                        }
                    ]
                },

                {
                    items: [
                        {
                            xtype: 'selectbox',
                            label: 'Marital Status',
                            name: 'maritalStatusName',
                            store: {
                                type: 'maritalStatuses'
                            },
                            displayField: 'name',
                            valueField: 'value',
                            editable: false
                        },
                        {
                            xtype: 'mitextfield',
                            label: 'ID/Passport NO.',
                            margin: '0 0 0 6',
                            name: 'idNo',
                            readOnly: true
                        }
                    ]
                },
            ],
        }
    ]

});