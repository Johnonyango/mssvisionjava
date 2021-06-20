Ext.define('MssPhoenix.view.tablet.admin.home.Tabs', {
    extend: 'Ext.panel.Panel',
    xtype: 'widget-tabs',

    cls: 'admin-widget-small sale-panel info-card-item shadow',

    containerColor: 'transparent',

    height: 210,

    data: {
        icon: '',
        amount: 0,
        type: ''
    },

    tpl: '<div><span class="x-fa fa-{icon}"></span></div><div><h2>{amount}</h2></div><div>{type}</div>',

    initComponent: function(){
        var me = this;

        // Ext.apply(me, {
        //     cls: me.config.containerColor
        // });

        me.callParent(arguments);
    }
});
