Ext.define('MssPhoenix.view.tablet.principalofficer.sponsors.PoSponsors', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',

    controller: 'posponsorscontroller',
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
                        handler: 'reloadPoSponsorGrid',
                        ui: 'action'
                    },
                ]
            },
            {
                xtype: 'posponsorsgrid',
            }
        ]
    }]
});