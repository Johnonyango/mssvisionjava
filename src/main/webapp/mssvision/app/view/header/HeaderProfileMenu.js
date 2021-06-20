Ext.define('MssPhoenix.view.header.HeaderProfileMenu', {
    extend: 'Ext.Button',

    xtype: 'headerprofilemenu',
    bind: {
        html: '<strong>{user.more.firstName}</strong>',
    },
    menu: {
        anchor: true,
        hidden: true,
        items: [
            {
                iconCls: 'fa fa-bell',
                text: 'Notifications',
                handler: 'onNotificationsMenuTap'
            },
            {
                iconCls: 'fa fa-user',
                text: 'My profile',
                handler: 'onMyProfileMenuTap'
            },
            {
                text: 'logout',
                iconCls: 'fa fa-power-off',
                handler: 'onLogoutTap'
            }
        ]
    },
    ui: 'round'
});