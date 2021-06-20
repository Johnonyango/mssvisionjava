Ext.define('MssPhoenix.view.widgets.HContainer', {
    extend: 'Ext.Container',

    xtype : 'hcontainer',

    layout: {
        type: 'vbox',
        align: 'stretch',
    },
    defaults: {
        width: '100%',
        xtype: 'container',
        layout: {
            type: 'hbox',
            align: 'stretch',
        },
        margin: '5 0',
    },
});