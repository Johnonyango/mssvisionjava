Ext.define('MssPhoenix.view.tablet.admin.home.HomeGraph', {
    extend: 'Ext.Panel',
    xtype: 'bar-basic',
    controller: 'bar-basic',

    width: 850,

    items: [{
        xtype: 'cartesian',
        reference: 'chart',
        width: '100%',
        height: 450,
        insetPadding: '10 30 10 0',
        flipXY: true,
        captions: {
            title: 'Number of Sessions this week',
        },
        interactions: {
            type: 'itemedit',
            style: {
                lineWidth: 2
            },
            tooltip: {
                renderer: 'onItemEditTooltipRender'
            }
        },
        colors:[
            '#002c65',
            '#f27f00'
        ],
        animation: {
            easing: 'easeOut',
            duration: 500
        },
        store: {
            type: 'economy-sectors'
        },
        axes: [{
            type: 'numeric',
            position: 'bottom',
            fields: 'count',
            grid: true,
           
            majorTickSteps: 10,
            title: 'Number of Sessions ',
        }, {
            type: 'category',
            position: 'left',
            fields: 'days',
            grid: true
        }],
        series: [{
            type: 'bar',
            xField: 'days',
            yField: 'count',
            style: {
                opacity: 0.80,
                minGapWidth: 10
            },
            highlightCfg: {
                strokeStyle: 'black',
                radius: 10,
                fillStyle: 'blue',
            },
            label: {
                field: 'ind',
                display: 'insideEnd',
                renderer: 'onSeriesLabelRender'
            },
            tooltip: {
                trackMouse: true,
                renderer: 'onSeriesTooltipRender'
            }
        }],
        
    }],

    tbar: [
        '->',
        {
            text: 'Preview',
            handler: 'onPreview'
        }
    ]
});