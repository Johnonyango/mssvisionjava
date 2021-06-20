Ext.define('MssPhoenix.view.tablet.member.home.EtlSummaryChart', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',

    xtype: 'etlmembersummarychart',


    controller: 'etlmembersummarychartcontroller',

    requires: [
        'Ext.chart.theme.Muted'
    ],

    width: '100%',

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
   
    items: [{
        xtype: 'container',
        scrollable: true,
        items: [{
                xtype: 'module',
                margin: '10 10 10 10',
                items: [{
                        xtype: 'component',
                        cls: 'module-head',
                        html: '<h3>Contributions Summary Chart</h3>'
                    },
                    {
    
                        cls: 'module-body',
                        items: [{
                            xtype: 'cartesian',
                            reference: 'chart',
                            colors: [
                                '#025b80',
                                '#021c80'
                            ],
                            intertablet: {
                                type: 'itemedit',
                                style: {
                                    lineWidth: 2
                                },
                                tooltip: {
                                    renderer: 'onItemEditTooltipRender'
                                }
                            },
                            width: '100%',
                            height: 400,
                            shadow: 'true',
                            insetPadding: '10 20 10 0',
                            store: {
                                type: 'memberrecentcontributions'
                            },
                            axes: [{
                                type: 'numeric',
                                position: 'left',
                                fields: ['total'],
                                title: {
                                    text: 'Totals',
                                    fontSize: 15
                                },
                                grid: true,
                                minimum: 0
                            }, {
                                type: 'category',
                                position: 'bottom',
                                fields: ['month'],
                                title: {
                                    text: 'Period',
                                    fontSize: 15
                                }
                            }],
                            series: [{
                                type: 'bar',
                                xField: 'month',
                                yField: 'total',
                                style: {
                                    // opacity: 0.80,
                                    minGapWidth: 10,
                                    maxBarWidth: 50,
                                    margin: 20,
                                },
                                highlightCfg: {
                                    strokeStyle: 'black',
                                    radius: 10,
                                    fillStyle: '#f27f00',
                                },
                                label: {
                                    field: 'month',
                                    display: 'outside',
                                    renderer: 'onSeriesLabelRender',
                                    style: {
                                        'margin-right': '20px'
                                    }
                                },
                                tooltip: {
                                    trackMouse: true,
                                    renderer: 'onSeriesTooltipRender'
                                }
                            }]
                        }]
    
                    },
    
                ]
            }, 
        ]
    
    }],
  
});





