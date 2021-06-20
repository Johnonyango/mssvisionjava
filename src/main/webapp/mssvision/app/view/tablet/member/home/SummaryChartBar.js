Ext.define('MssPhoenix.view.tablet.member.home.SummaryChartBar', {
    extend: 'MssPhoenix.view.widgets.Module',

    xtype: 'membersummarychartBar',


    layout: 'fit',
    margin: '20 0 0 0',

    // requires: [
    //     'Ext.chart.PolarChart',
    // ],

    listeners: {
        // resize: 'onResize'
    },

    controller: 'membersummarychartcontroller',

    items: [{
        xtype: 'container',
        cls: 'module-body',
        style: {
            'text-align': 'center'
        },
        profiles: {
            classic: {
                width: 650
            },
            neptune: {
                width: 650
            },
            graphite: {
                width: 800
            },
            'classic-material': {
                width: 800
            }
        },
        items: [{
            xtype: 'cartesian',
            reference: 'chart',
            width: '100%',
            height: 400,
            insetPadding: '10 30 10 10',
            flipXY: true,
            colors: [
                '#025b80',
                '#f27f00'
            ],
            captions: {
                // title: 'Balances Summary',
                // credits: 'Source: http://en.wikipedia.org/wiki/List_of_countries_by_GDP_sector_composition'
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
            animation: {
                easing: 'easeOut',
                duration: 500
            },
            store: {
                type: 'membersummarychart'
            },
            axes: [{
                type: 'numeric',
                position: 'bottom',
                fields: 'total',
                grid: false,
                majorTickSteps: 1000,
                title: 'Totals (x1000)',
                renderer: 'onAxisLabelRender',
            }, {
                type: 'category',
                position: 'left',
                fields: 'year',
                title: 'Accounting Period',
                grid: false,
            }],
            series: [{
                type: 'bar',
                xField: 'year',
                yField: 'total',
                style: {
                    // opacity: 0.80,
                    minGapWidth: 10,
                    margin: 20,
                },
                highlightCfg: {
                    strokeStyle: 'black',
                    radius: 10,
                    fillStyle: '#f27f00',
                },
                label: {
                    field: 'year',
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
    }]
});