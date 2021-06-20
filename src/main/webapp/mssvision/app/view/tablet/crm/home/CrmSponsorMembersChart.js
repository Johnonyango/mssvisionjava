Ext.define('MssPhoenix.view.tablet.crm.home.CrmSponsorMembersChart', {
    extend: 'MssPhoenix.view.widgets.Module',
    xtype: 'crm-sponsormemberschart',
    controller: 'crm-sponsormemberschartcontroller',

    requires: [
        'Ext.chart.theme.Muted'
    ],

    width: 650,

    layout: 'vbox',

    profiles: {
        classic: {
            width: 650
        },
        neptune: {
            width: 650
        },
        graphite: {
            width: 850
        },
        'classic-material': {
            width: 850
        }
    },
    items: [
        {
            xtype: 'component',
            cls: 'module-head',
            // html: '<h3>Members count per sponsor</h3>'
        },

        {
            xtype: 'container',
            cls: 'module-body',
            style: {
                'text-align': 'center'
            },
            items: [
                {
                    padding: '10 10 10 10',
                    insetPadding: '10 30 10 10',
                    xtype: 'cartesian',
                    flipXY: true,
                    colors: [
                        '#002c65',
                        '#f27f00'
                    ],
                    reference: 'chart',
                    width: '100%',
                    height: 300,
                    captions: {
                        title: 'Members per sponsor'
                        // credits: {
                        //     text: 'Source: http://en.wikipedia.org/wiki/List_of_countries_by_GDP_sector_composition',
                        //     align: 'left'
                        // }
                    },
                    intertablet: {
                        type: 'itemedit',
                        style: {
                            lineWidth: 2
                        },
                        tooltip: {
                            renderer: 'onItemEditTooltipRender'
                        }
                    },
                    innerPadding: '3 0 0 0',
                    theme: {
                        type: 'muted'
                    },
                    store: {
                        type: 'crmsponsormember'
                    },
                    animation: {
                        easing: 'easeOut',
                        duration: 500
                    },
                    interactions: ['itemhighlight'],
                    axes: [{
                        type: 'numeric',
                        position: 'bottom',
                        fields: 'count',
                        // maximum: 500,
                        majorTickSteps: 10,
                        renderer: 'onAxisLabelRender',
                        title: 'NUmber of members',
                        grid: {
                            odd: {
                                fillStyle: 'rgba(245, 245, 245, 1.0)'
                            },
                            even: {
                                fillStyle: 'rgba(255, 255, 255, 1.0)'
                            }
                        }
                    },
                    {
                        type: 'category',
                        position: 'left',
                        fields: 'name',
                        label: {
                            textAlign: 'center'
                        },
                        grid: true
                    }],
                    series: [{
                        type: 'bar',
                        xField: 'name',
                        yField: 'count',
                        style: {
                            minGapWidth: 10
                        },
                        highlight: true,
                        label: {
                            field: 'count',
                            display: 'insideEnd',
                            renderer: 'onSeriesLabelRender'
                        },
                        tooltip: {
                            trackMouse: true,
                            renderer: 'onSeriesTooltipRender'
                        }
                    }]
                },

            ]
        }
    ]

});