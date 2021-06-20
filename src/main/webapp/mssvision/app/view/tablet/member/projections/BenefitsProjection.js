Ext.define('MssPhoenix.view.tablet.member.projections.BenefitsProjection', {
    extend: 'Ext.Container',

    // Uncomment to give this component an xtype 
    xtype: 'benefitsprojection',
    scrollable: true,
    items: [
        {
            xtype: 'container',
            width: '100%',
            layout: {
                type: 'hbox',
                align: 'stretch',
            },
            items: [
                {
                    xtype: 'fieldset',
                    title: 'Fill in details',
                    margin: '0 0 0 0',
                    flex: 1,
                    items: [
                        {
                            xtype: 'container',
                            scrollable: true,
                            height: 350,
                            items: [
                                {
                                    xtype: 'formpanel',
                                    reference:'benefitsprojectionform',
                                    items: [
                                        {
                                            xtype: 'container',
                                            items: [
                                                {
                                                    xtype: 'minumberfield',
                                                    label: 'Age at Exit',
                                                    name: 'age',
                                                    textAlign: 'right',
                                                },
                                                {
                                                    xtype: 'selectbox',
                                                    label: 'Reasons For Exit',
                                                    margin: '0 0 0 0',
                                                    name: 'reasonId',
                                                    store: {
                                                        type: 'memberreasonsforexit'
                                                    },
                                                    displayField: 'reason',
                                                    valueField: 'id',
                                                    allowBlank: false,
                                                    required: true,
                                                },
                                            ]
                                        }
                                    ],
                                    bbar: [
                                        '->',
                                        {
                                            text: 'Show Results',
                                            ui: 'action',
                                            handler: 'calculateBenefitRequests'
                                        }
                                    ]
                                },
                            ]
                        },
                    ]
                },
                {
                    xtype: 'fieldset',
                    title: 'Benefit projection results',
                    margin: '0 0 0 30',
                    flex: 1,
                    items: [
                        {
                            xtype: 'container',
                            scrollable: true,
                            height: 350,
                            items: [
                                {
                                    xtype: 'component',
                                    bind: {
                                        html: '{benefit}'
                                    }
                                },
                            ]
                        },
                    ]
                }

            ]
        }
    ]
});