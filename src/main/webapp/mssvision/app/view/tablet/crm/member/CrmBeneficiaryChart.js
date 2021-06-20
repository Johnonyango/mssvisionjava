Ext.define('MssPhoenix.view.tablet.crm.member.CrmBeneficiaryChart', {
    extend: 'MssPhoenix.view.widgets.Module',

    xtype: 'crmmemberbeneficiarychart',

    controller: 'crmmemberbeneficiarychartcontroller',

    layout: 'vbox',
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
            xtype: 'polar',
            // style: {
            //     'margin-left': '25%'
            // },
            // width: '100%',
            height: 300,

            legend: {
                docked: 'right'
            },

            shadow: 'true',
            reference: 'chart',
            // theme: 'charttheme',
            interactions: 'rotate',

            store: {
                type: 'memberbeneficiarychart'
            },

            emptyText: true,
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
                    field: 'firstname',
                    display: 'none'
                },
                xField: 'lumpsumEntitlement',
                donut: 30,
                highlight: true,
                tooltip: {
                    trackMouse: true,
                    renderer: 'onSeriesTooltipRender'
                }
            }
        }
    ]
});