Ext.define('MssPhoenix.view.phone.member.personalinfo.PersonalDetails', {
    extend: 'MssPhoenix.view.widgets.Module',

    xtype: 'memberphone-personaldetails',
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
                margin:'5 0',
                xtype: 'container',
                layout:{
                    type:'vbox',
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
                        margin: '0 0 0 0',
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
                            margin: '0 0 0 0',
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
                            name: 'maritalStatus',
                            store: {
                                fields: ['value', 'name'],
                                data: [
                                    { "value": "0", "name": "Married" },
                                    { "value": "1", "name": "Single" },
                                    { "value": "2", "name": "Divorced" },
                                    { "value": "3", "name": "Widow" },
                                ]
                            },
                            displayField: 'name',
                            valueField: 'value',
                        },
                        {
                            xtype: 'mitextfield',
                            label: 'ID/Passport NO.',
                            margin: '0 0 0 0',
                            name: 'idNo',
                            readOnly: true
                        }
                    ]
                },
            ],
        }
    ]

});