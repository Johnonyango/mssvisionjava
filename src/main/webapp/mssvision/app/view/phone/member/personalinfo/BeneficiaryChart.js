Ext.define('MssPhoenix.view.phone.member.personalinfo.BeneficiaryChart', {
    extend: 'MssPhoenix.view.widgets.Module',

    xtype: 'memberphone-beneficiarychart',

    controller: 'memberbeneficiarychartcontroller',

    // layout: 'fit',
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
                    minHeight: 300,

                    legend: {
                        docked: 'right'
                    },

                    shadow: 'true',
                    reference: 'chart',
                    // theme: 'charttheme',
                    interactions: 'rotate',

                    store: {
                        type: 'memberbeneficiary'
                    },
                    legend: {
                        type: 'sprite',
                        marker: {
                            size: 8
                        }
                    },

                    series: {
                        showInLegend: true,
                        type: 'pie',
                        label: {
                            field: 'firstname',
                            display: 'rotate'
                        },
                        xField: 'lumpsumEntitlement',
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