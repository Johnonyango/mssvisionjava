Ext.define('MssPhoenix.view.tablet.cre.scheme.CreScheme', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',

    controller:'creschemecontroller',
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
                            xtype: 'component',

                            html: '<h3>Schemes</h3>'
                        },
                        '->',
                        {
                            iconCls: 'fa fa-redo',
                            handler: 'reloadSchemeGridCRE',
                            ui: 'action'
                        },
                    ]
                },

                {
                    xtype: 'container',
                    cls: 'module-body',
                    items: [
                        {
                            xtype: 'creschemegrid',
                        }
                    ]
                },
            ]
        }
    ]
});