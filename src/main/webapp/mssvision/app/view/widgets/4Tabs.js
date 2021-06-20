Ext.define('MssPhoenix.view.widgets.4Tabs', {
    extend: 'Ext.panel.Panel',
    xtype: 'widget-4tabs',

    cls: 'admin-widget-small sale-panel info-card-item shadow',

    containerColor: 'transparent',

    height: 170,

    data: {
        icon: '',
        amount: 0,
        type: ''
    },

    tpl: '<div><span class="x-fa fa-{icon}"></span></div><div><h2>{amount}</h2></div><div><strong>{type}</strong></div>',

    initComponent: function() {
        let me = this;
        Ext.apply(me, {
            cls: me.config.containerColor
        });
      //  me.callParent(arguments);
    }
});