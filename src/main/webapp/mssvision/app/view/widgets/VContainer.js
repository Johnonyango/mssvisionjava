Ext.define('MssPhoenix.view.widgets.VContainer', {
    extend: 'Ext.Container',

    xtype : 'vcontainer',

    layout: {
        type: 'vbox',
        align: 'stretch',
    },
    defaults: {
        width: '100%',
        xtype: 'container',
        layout: {
            type: 'vbox',
            align: 'stretch',
        },
        margin: '0 0',
    },
});