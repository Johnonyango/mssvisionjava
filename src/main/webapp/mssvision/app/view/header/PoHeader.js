Ext.define('MssPhoenix.view.header.PoHeader', {
    extend: 'Ext.Toolbar',
    
    xtype : 'poheader',
    
    cls: 'navbar-inner',
    items: [{
            xtype: 'headerlogo',
        },
        '->',
        {
            text: 'Schemes',
            handler:'poGoToSchemes'
        },
        {
            text: 'Tickets',
            handler: 'poGoToTickets'
        },
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
