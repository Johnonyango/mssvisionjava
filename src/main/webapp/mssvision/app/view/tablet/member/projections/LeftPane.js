Ext.define('MssPhoenix.view.tablet.member.projections.LeftPane', {
    extend: 'Ext.Container',

    xtype: 'p-leftpane',

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
        }
    },
    items: [

        {
            xtype: 'component',
            html: '<h4></h4>'
        },

        {

            items: [{
                    xtype: 'midatefield',
                    fieldLabel: 'Date of Birth',
                    name: 'DOB',
                    value: new Date(1980, 01, 01),
                },
                {
                    xtype: 'selectbox',
                    fieldLabel: 'Gender',
                    margin: '0 0 0 6',
                    name: 'GENDER',
                    store: {
                        fields: ['value', 'name'],
                        data: [{
                                "value": "Male",
                                "name": "Male"
                            },
                            {
                                "value": "Female",
                                "name": "Female"
                            },
                        ]
                    },
                    value: 'Female',
                    displayField: 'name',
                    valueField: 'value',
                }
            ]
        },

        {
            items: [{
                    xtype: 'midatefield',
                    fieldLabel: 'Calculation Date',
                    name: 'CALCULATIONDATE',
                    value: new Date()
                },
                {
                    xtype: 'mitextfield',
                    fieldLabel: 'Age at calculation date*',
                    margin: '0 0 0 6',
                    name: 'AGEATCALCULATIONDATE',
                    value: '50',
                    readOnly: true
                }
            ]
        },

        {
            items: [{
                    xtype: 'mitextfield',
                    fieldLabel: 'Accumulated capital at date*',
                    name: 'ACCUMULATEDCAPITALATDATE',
                    value: '100000.00'
                },
                {
                    xtype: 'mitextfield',
                    fieldLabel: 'Annual Salary',
                    margin: '0 0 0 6',
                    name: 'ANNUALSALARY',
                    value: '120000.00'
                }
            ]
        },

        {
            items: [{
                    xtype: 'mitextfield',
                    fieldLabel: 'Contribution rate',
                    name: 'CONTRIBUTIONRATE',
                    width: '50%',
                    value: '15%',
                    flex: 0
                },

            ]
        },
    ],
});