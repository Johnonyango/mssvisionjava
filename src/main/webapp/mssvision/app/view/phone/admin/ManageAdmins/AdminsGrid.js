Ext.define('MssPhoenix.view.phone.admin.ManageAdmin.AdminsGrid', {
    extend: 'MssPhoenix.view.widgets.Table',
    xtype: 'phoneadminsgrid',
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
            cls: 'module-head',
            docked: 'top',
            items: [

                {
                    text: 'Create',
                    scale: 'small',
                    handler: 'createPhoneAdminBtnClick',
                    ui: 'action'
                }, {
                    text: 'View',
                    scale: 'small',
                    handler: 'viewPhoneAdminBtnClick',
                    ui: 'action'
                }, {
                    text: 'Remove',
                    scale: 'small',
                    handler: 'removeAdminBtnClick',
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
        { text: 'Staff Number', dataIndex: 'staffNo', flex: 1, hidden:true },
        { text: 'FirstName', dataIndex: 'firstName', flex: 2 },
        { text: 'LastName', dataIndex: 'lastName', flex: 2, hidden:true },
        { text: 'Role', dataIndex: 'profileName', flex: 1 },
        { text: 'Locked', dataIndex: 'deactivatedByAdmin',renderer:'formatTrueOrFalseDisplay', flex: 1 },
        { text: 'Email', dataIndex: 'email', flex: 2, hidden:true },
    ]
});