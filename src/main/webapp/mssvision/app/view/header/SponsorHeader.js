Ext.define('MssPhoenix.view.header.SponsorHeader', {
    extend: 'Ext.Toolbar',

    xtype: 'sponsorheader',

    cls: 'navbar-inner',
    items: [
        {
            xtype: 'headerlogo',
        },
        '->',
        {
            xtype: 'combobox',
            itemId: 'sponsorHeaderSchemeBox',
            store: {
                type: 'sponsorschemesetl'
            },
            displayField: 'schemeName',
            valueField: 'id',
            flex: 1,
            listeners: {
                change: 'sponsorSwitchScheme'
            },
            editable: false
        },

        {
            text: '',
            itemId: 'sponsorHeaderNameBox',
            handler: 'sponsorNameHandler'
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
