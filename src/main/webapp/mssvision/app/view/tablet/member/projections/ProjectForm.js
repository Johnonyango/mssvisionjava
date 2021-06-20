Ext.define('MssPhoenix.view.tablet.member.projections.ProjectForm', {
    extend: 'Ext.Container',

    xtype: 'memberprojectform',
    items: [
        {
            xtype: 'formpanel',
            reference: 'memberprojectform',
            items: [
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
                            items: [
                                {
                                    xtype: 'minumberfield',
                                    label: 'Future investment return per annum (%)',
                                    name: 'returnRate',
                                    maxValue: 100,
                                    minValue: 0,
                                    textAlign: 'right',
                                    allowBlank: false,
                                    required: true
                                },
                                {
                                    xtype: 'minumberfield',
                                    label: 'Future inflation per annum (%)',
                                    name: 'inflationRate',
                                    margin: '0 0 0 6',
                                    maxValue: 100,
                                    minValue: 0,
                                    textAlign: 'right',
                                    allowBlank: false,
                                    required: true
                                },]
                        },

                        {
                            items: [
                                {
                                    xtype: 'minumberfield',
                                    label: 'Future Salary Increases Per Annum (%)',
                                    name: 'salaryEscalationRate',
                                    maxValue: 100,
                                    minValue: 0,
                                    textAlign: 'right',
                                    allowBlank: false,
                                    required: true
                                },
                                {
                                    xtype: 'minumberfield',
                                    label: 'Projected Age of Exit',
                                    margin: '0 0 0 6',
                                    name: 'ageAtExit',
                                    maxValue: 110,
                                    minValue: 25,
                                    textAlign: 'right',
                                    allowBlank: false,
                                    required: true
                                }
                            ]
                        },
                        {
                            items: [
                                {
                                    xtype: 'minumberfield',
                                    label: 'AVC Amount',
                                    name: 'projectedAvc',
                                    minValue: 0,
                                    textAlign: 'right',
                                    allowBlank: false,
                                    maxValue: 100000000,
                                },
                                {
                                    xtype: 'mitextfield',
                                    label: 'Monthly Target Pension',
                                    name: 'targetMonthlyPension',
                                    margin: '0 0 0 6',
                                    minValue: 0,
                                    textAlign: 'right',
                                    allowBlank: false,
                                    maxValue: 100000000,
                                },
                            ]
                        },
                    ]
                }
            ],
            bbar: [
                '->',
                {
                    text: 'calculate',
                    id: 'memberCalculateProjection',
                    ui: 'action',
                    handler: 'calculateProjection',
                    formBind: true
                }
            ]
        },
    ]
});