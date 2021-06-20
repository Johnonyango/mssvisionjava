Ext.define('MssPhoenix.view.tablet.sponsor.members.BeneficiaryChart', {
    extend: 'MssPhoenix.view.widgets.Module',

    xtype: 'sponsormemberbeneficiarychart',

    controller: 'sponsormemberbeneficiarychartcontroller',

    layout: 'fit',
    margin: '20 0 0 0',

    requires: [
        'Ext.chart.PolarChart',
    ],

    listeners: {
        resize: 'onResize'
    },

    items: [
        {
            xtype: 'component',
            cls: 'module-head',
            html: '<h3>Beneficiary Entitlement</h3>'
        },

        {
            xtype: 'container',
            cls: 'module-body',
            style: {
                'text-align': 'center'
            },
            items: [
                {
                    xtype: 'polar',
                    style: {
                        'margin-left': '25%'
                    },
                    width: 600,
                    height: 400,

                    legend: {
                        docked: 'right'
                    },

                    shadow: 'true',
                    reference: 'chart',
                    intertablet: 'rotate',

                    store: {
                        type: 'sponsormemberbeneficiarychart'
                    },
                    legend: {
                        type: 'sprite',
                        marker: {
                            size: 16
                        }
                    },

                    series: {
                        showInLegend: true,
                        type: 'pie',
                        label: {
                            field: 'name',
                            display: 'rotate'
                        },
                        xField: 'data1',
                        donut: 30,
                        highlight:true,
                        tooltip: {
                            trackMouse: true,
                            renderer: 'onSeriesTooltipRender'
                        }
                    }
                },
            ]
        }
    ]
});