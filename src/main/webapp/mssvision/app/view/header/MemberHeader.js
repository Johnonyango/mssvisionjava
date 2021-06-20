Ext.define('MssPhoenix.view.header.MemberHeader', {
    extend: 'Ext.Toolbar',

    xtype: 'memberheader',

    cls: 'navbar-inner',
    items: [
        {
            xtype: 'headerlogo',
        },
        '->',
        {
            xtype: 'combobox',
            itemId: 'memberHeaderSchemeBox',
            // label: 'Scheme',
            store: {
                type: 'memberschemes'
            },
            displayField: 'schemeName',
            valueField: 'id',
            flex: 1,
            listeners: {
                change: 'memberSwitchScheme'
                // select: 'memberSwitchScheme'
                // click: 'memberSwitchScheme'
            },
            editable: false
        },
        {
            xtype: 'combobox',
            itemId: 'memberHeaderSponsorsBox',
            // label: 'Employer',
            store: {
                type: 'memberproducts'
            },
            displayField: 'name',
            valueField: 'id',
            flex: 1,
            listeners: {
                change: 'memberSwitchProduct'
                // select: 'memberSwitchProduct'
            },
            editable: false
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