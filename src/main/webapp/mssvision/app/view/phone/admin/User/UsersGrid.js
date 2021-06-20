Ext.define('MssPhoenix.view.phone.admin.User.UsersGrid', {
    extend: 'MssPhoenix.view.widgets.Table',
    xtype: 'phoneusersgrid',
    controller:'userscontroller',
   // title: 'Users',
    height:450,
    store: {
        type: 'userstore'
    },
    layout: 'fit',
    // selModel: {
    //     injectCheckbox: 'first',
    //     checkOnly: false,
    //     model: 'MULTI',
    //     type: 'checkboxmodel',
    // },
    selectable: {
        // Disables sorting by header click, though it will be still available via menu
        columns: true,
        cells: true,
        checkbox: true,
        drag: true,
        mode: 'single',
        extensible: 'y'
    },



    items: [
        {
            xtype: 'toolbar',
            cls: 'module-head',
            docked: 'top',
            items: [

                // {
                //     text: 'Reset User',
                //     scale: 'small',
                //     handler: 'resetUserBtnClick',
                //     ui: 'action'
                // }, {
                //     text: 'Block User',
                //     scale: 'small',
                //     handler: 'blockUserBtnClick',
                //     ui: 'action'
                // },
                //  {
                //     text: 'Drop User',
                //     scale: 'small',
                //     handler: 'dropUserBtnClick',
                //     ui: 'action'
                // },
                {
                    text: 'View User',
                    scale: 'small',
                    handler: 'viewPhoneUserBtnClick',
                    ui: 'action'
                },
                // {
                //     xtype: 'textfield',
                //     reference: 'searchId',
                //     emptyText: 'Search By Name',
                //     width: 500,
                //     listeners: {
                //         specialkey: 'onIdSearchEnterKey'
                //     }
                // }, {
                //     xtype: 'button',
                //     text: 'Search ',
                //     handler: 'onSearchButtonClick',
                //     ui: 'action'
                // },
            ]
        },
    ],

    columns: [
        { text: 'Staff Number', dataIndex: 'id' ,flex:1, hidden:true },
        { text: 'First Name', dataIndex: 'firstName',flex:2 },
        { text: 'Last Name', dataIndex: 'lastName',flex:2, hidden:true },
        { text: 'Email', dataIndex: 'email',flex:2, hidden:true },
       { text: 'Role', dataIndex: 'profileName',flex:1 },
        // { text: 'Status', dataIndex: 'Status',flex:2 },
        
        //{ text: 'Email', dataIndex: 'Email', flex:1},
        // { text: 'Action', dataIndex: 'Action',flex:1 },
        
    ],
});