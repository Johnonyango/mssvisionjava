Ext.define('MssPhoenix.view.phone.member.projections.Projections', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',

    controller: 'memberprojectionscontroller',
    viewModel: 'memberprojectionsviewmodel',
    items: [{
        xtype: 'container',
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        padding: '15px',
        width: '100%',
        scrollable: true,
        defaults: {
            width: '100%'
        },

        items: [
            {
                bind: {
                    style: {
                        'display': '{allowBenefitCalculator}'
                    }
                },
                xtype: 'button',
                text: 'Make Benefits Projections',
                width: '100%',
                handler: 'showBenefitsWindow'
            },
            {
                margin: '30 0 0 0',
                xtype: 'label',
                html: '<h3><span style="color: #002c65; font-weight: 700;">WHAT-IF ANALYSIS</span></h3>'
            },
            {
                bind: {
                    style: {
                        'display': '{allowWhatIfAnalysis}'
                    }
                },
                xtype: 'container',
                cls: 'module-body',
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                },
                items: [
                    {
                        xtype: 'fieldset',
                        title: ' Member Details ',
                        flex: 1,
                        items: [
                            {
                                xtype: 'memberphone-projectionsuserdetailsform'
                            }
                        ]
                    },
                    {
                        xtype: 'fieldset',
                        title: 'Financial Assumptions',
                        flex: 1,
                        items: [
                            {
                                xtype: 'memberphone-projectform',
                                width: '100%',
                            }
                        ]
                    }]
            }
        ]
    }]
});