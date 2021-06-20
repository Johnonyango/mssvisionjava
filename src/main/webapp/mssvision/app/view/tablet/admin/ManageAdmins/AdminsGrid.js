Ext.define('MssPhoenix.view.tablet.admin.ManageAdmin.AdminsGrid', {
    extend: 'MssPhoenix.view.widgets.Table',
    xtype: 'adminsgrid',
    // title: 'Admins',
    controller: 'adminscontroller',
    height: 600,

    store: {
        type: 'adminstore'
    },
    defaults: {

        scrollable: true
    },

    layout: 'fit',

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
            docked: 'top',
            items: [

                {
                    text: 'Create An Admin',
                    scale: 'small',
                    handler: 'createAdminBtnClick',
                    ui: 'action'
                }, {
                    text: 'View Admin',
                    scale: 'small',
                    handler: 'viewAdminBtnClick',
                    ui: 'action'
                }, {
                    text: 'Lock Admin',
                    scale: 'small',
                    handler: 'removeAdminBtnClick',
                    ui: 'action'
                },
                '->',
                {
                    xtype: 'button',
                    iconCls: 'fa fa-redo',
                    margin: '0 6 0 6',
                    handler: 'reloadAdmins',
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
                // },
                // {
                //     xtype: 'button',
                //     text: 'Search ',
                //     handler: 'onSearchButtonClick',
                //     ui: 'action',
                // },

            ]
        },
    ],

    columns: [
        { text: 'UserId', dataIndex: 'id', flex: 1, hidden: true },
        { text: 'FirstName', dataIndex: 'firstName', flex: 2 },
        { text: 'LastName', dataIndex: 'lastName', flex: 2 },
        {
            text: 'Locked',
            dataIndex: 'deactivatedByAdmin',
            renderer: 'formatTrueOrFalseDisplay',
            cell: {
                encodeHtml: false
            },
            flex: 1
        },
        // { text: 'Role', dataIndex: 'profileName', flex: 1 },
        { text: 'Email', dataIndex: 'email', flex: 2 },
    ]
});