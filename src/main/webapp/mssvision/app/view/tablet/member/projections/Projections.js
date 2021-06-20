Ext.define('MssPhoenix.view.tablet.member.projections.Projections', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',

    controller: 'memberprojectionscontroller',
    viewModel: 'memberprojectionsviewmodel',
    items: [
        {
            xtype: 'container',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            scrollable: true,
            padding: '15px',
            width: '100%',
            defaults: {
                width: '100%'
            },

            items: [
                {
                    xtype: 'tabpanel',
                    minHeight: 500,
                    itemId: 'memberprojectionstab',
                    defaults: {
                        minHeight: 300,
                        scrollable: true
                    },
                    items: [
                        {
                            title: 'Benefits Projection',
                            bind: {
                                style: {
                                    'display': '{allowBenefitCalculator}'
                                }
                            },
                            items: [
                                {
                                    xtype: 'module',
                                    scrollable: true,
                                    items: [
                                        {
                                            xtype: 'component',
                                            cls: 'module-subhead',
                                            html: '<h5>Benefit Projection Calculator</h5>'
                                        },
                                        {
                                            xtype: 'benefitsprojection'
                                        }
                                    ]
                                }

                            ]
                        },
                        {
                            title: 'What If Analysis',
                            bind: {
                                style: {
                                    'display': '{allowWhatIfAnalysis}'
                                }
                            },
                            items: [
                                {
                                    xtype: 'module',
                                    scrollable: true,
                                    items: [
                                        {
                                            xtype: 'component',
                                            cls: 'module-subhead',
                                            html: '<h5>What If Analysis</h5>'
                                        },
                                        {
                                            xtype: 'whatifanalysis',
                                        }
                                    ]
                                }
                            ]
                        },]
                },
            ]
        }
    ]
});