Ext.define('MssPhoenix.view.tablet.member.home.SummaryChart', {
    extend: 'MssPhoenix.view.widgets.Module',

    xtype: 'membersummarychart',

    layout: 'fit',
    margin: '20 0 0 0',

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
            shadow: 'true',
            insetPadding: '10 20 10 0',
            store: {
                type: 'membersummarychart'
            },
            axes: [{
                type: 'numeric',
                position: 'left',
                fields: ['total'],
                title: {
                    text: 'Total Amount (x1000)',
                    fontSize: 15
                },
                grid: true,
                minimum: 0
            }, {
                type: 'category',
                position: 'bottom',
                fields: ['year'],
                title: {
                    text: 'Year',
                    fontSize: 15
                }
            }],
            series: [{
                type: 'line',
                // fill: true,
                // style: {
                //     fill: '#96D4C6',
                //     fillOpacity: .6,
                //     stroke: '#0A3F50',
                //     strokeOpacity: .6,
                // },
                marker: {
                    type: 'circle',
                    radius: 4,
                    lineWidth: 2,
                    fill: 'white'
                },
                smooth: true,
                highlight: true,
                xField: 'year',
                yField: 'total',
            }]
        }]
    }]
});