Ext.define('MssPhoenix.view.header.CRMHeader', {
    extend: 'Ext.Toolbar',

    xtype: 'crmheader',

    cls: 'navbar-inner',

    items: [{
            xtype: 'headerlogo',
        },
        '->',
        {
            xtype: 'label',
            margin: '10 0 0 10',
            alignSelf: 'center',
            bind:{
                html: '<h2 style="font-family:Courier New, monospace; color: #4a6b93;" > You are logged in as :<strong style="text-transform: capitalize;"> {user.more.userDetails.name}</strong></h2>'
            }
        },

        '->',
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