Ext.define('MssPhoenix.view.header.AdminHeader', {
    extend: 'Ext.Toolbar',

    xtype: 'adminheader',

    cls: 'navbar-inner',
    items: [{
            xtype: 'headerlogo',
        },
        '->',
        //scheme name and sponsor
        // {
        //     xtype: 'selectbox',
        //     store: {
        //         type: 'schemes'
        //     },
        //     displayField: 'name',
        //     valueField: 'id',
        //     flex: 1
        // },
        // {
        //     xtype: 'selectbox',
        //     store: {
        //         type: 'sponsors'
        //     },
        //     value: 'SYSTECH PENSION SCHEME SPONSOR',
        //     displayField: 'name',
        //     valueField: 'value',
        //     flex: 1,
        // },
        // {
        //     xtype: 'component',
        //     html: '<b>TONITO SPONSOR<b>',
        //     //width: 250,
        //     indent: true,
        //     hidden: true,
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