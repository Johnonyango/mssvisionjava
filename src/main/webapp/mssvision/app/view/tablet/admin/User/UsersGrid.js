Ext.define('MssPhoenix.view.tablet.admin.User.UsersGrid', {
    extend: 'MssPhoenix.view.widgets.Table',
    xtype: 'usersgrid',
    controller: 'userscontroller',
    height: 450,
    store: {
        type: 'userstore'
    },
    layout: 'fit',

    selectable: {
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
                    text: 'Reset User',
                    scale: 'small',
                    handler: 'ResetPasswordActionBtnClick',
                    ui: 'action'
                },
                {
                    text: 'View User',
                    scale: 'small',
                    handler: 'viewUserBtnClick',
                    ui: 'action'
                },
                {
                    text: 'Lock User',
                    scale: 'small',
                    handler: 'LockUserBtnClick',
                    ui: 'action'
                },
                {
                    text: 'Add User',
                    scale: 'small',
                    handler: 'AddUserBtnClick',
                    ui: 'action'
                },
                {
                    text: 'Register Members In Batch To Mss',
                    scale: 'small',
                    handler: 'registerMembersInBatch',
                    ui: 'action'
                },
                '->',
                {
                    xtype: 'micombobox',
                    queryMode: 'local',
                    id: 'reports',
                    displayField: 'name',
                    name: 'reports',
                    placeholder: 'select a report',
                    valueField: 'id',
                    margin: '0 0 0 5',
                    listeners: {
                        // specialkey: 'generateReports',
                        select: 'onReportsSelected'
                    },
                    store: {
                        fields: ['name', 'id'],
                        data: [
                            {name: 'View new users in a certain day per Profile', id: 1},
                            {name: 'View new users in a certain day across profiles', id: 2},
                            {name: 'View  users in a profile', id: 3},
                            {name: 'View all users', id: 4},
                        ]
                    },
                },
            ]
        },
    ],

    columns: [
        {text: 'Staff Number', dataIndex: 'id', flex: 1},
        {text: 'First Name', dataIndex: 'firstName', flex: 2},
        {text: 'Last Name', dataIndex: 'lastName', flex: 2},
        {text: 'Email', dataIndex: 'email', flex: 2},
        {text: 'Role', dataIndex: 'profileName', flex: 1},
    ],
});