Ext.define('MssPhoenix.view.header.PensionerHeader', {
    extend: 'Ext.Toolbar',

    xtype: 'pensionerheader',

    cls: 'navbar-inner',
    items: [{
        xtype: 'headerlogo',
    },
        '->',
        //scheme name and sponsor
        {
            text: '',
            itemId: 'pensionerheaderSchemeBox',
            handler: 'pensionerSwitchScheme',
            iconCls: 'fa fa-chevron-down',
            iconAlign: 'right',
        },

        // {
        //     text: '',
        //     itemId: 'pensionerheaderNameBox',
        //     handler: 'sponsorNameHandler'
        // },
        
        {
            xtype: 'image',
            userCls: 'main-user-image small-image circular',
            alt: 'Current user image',
            src: 'resources/images/avatar.jpg',
            width: 45,
            height: 45,
        },

        {
            xtype: 'headerprofilemenu'
        },
    ]
});