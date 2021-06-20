Ext.define('MssPhoenix.view.tablet.principalofficer.schemes.PoSchemes', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',

    controller:'poschemescontroller',
    layout: {
        type: 'vbox'
    },
    defaults: {
        width: '100%'
    },
    items: [
        {
            xtype: 'container',
            padding: '15px',
            items: [
                {
                    xtype: 'toolbar',
                    cls: 'module-subhead',
                    items: [
                        {
                            text:'View Sponsors',
                            handler: 'poViewSponsors'
                        },
                        '->',
                        {
                            iconCls: 'fa fa-redo',
                            handler: 'reloadPoSchemeGrid',
                            ui: 'action'
                        },
                    ]
                },
                {
                    xtype: 'poschemesgrid',
                }
            ]
        }
    ]
});