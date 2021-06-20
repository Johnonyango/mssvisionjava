Ext.define('MssPhoenix.view.tablet.principalofficer.costcenters.CostCenters', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',

    controller: 'costcentersorscontroller',
    viewModel: {
        data: {
            schemeName: null
        }
    },
    items: [{
        xtype: 'container',
        padding: '15px',
        scrollable: true,
        defaults: {
            width: '100%'
        },
        items: [
            {
                xtype: 'toolbar',
                cls: 'module-subhead',
                items: [{
                    iconCls: 'fa fa-arrow-left',
                    text: 'Back',
                    handler: 'goBack',
                    ui: 'action'
                },
                    '->',
                    {
                        xtype: 'component',
                        bind: {
                            html: '<h3>{schemeName}</h3>'
                        }
                    },
                    '->',
                    {
                        iconCls: 'fa fa-redo',
                        handler: 'reloadCostCentersGrid',
                        ui: 'action'
                    },
                ]
            },
            {
                xtype: 'costcentersgrid',
            }
        ]
    }]
});