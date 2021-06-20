Ext.define('MssPhoenix.view.widgets.Module', {
    extend: 'Ext.Container',

    xtype: 'module',

    cls: 'module btn',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    scrollable: "x",

    defaults: {
        width: '100%',
        ui: 'action'
    },
    /**
     * classes
     *  .module-head
     *  .module-option
     *  .module-body
     *  .module-foot
     */
});