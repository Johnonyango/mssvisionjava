Ext.define('MssPhoenix.view.tablet.admin.User.AllUsersOfProfile', {
    extend: 'MssPhoenix.view.widgets.Window',

    xtype: 'allusersofprofile',
    width: 400,
    closable: true,
    controller: 'userscontroller',
    title: 'View Report',

    items: [
        {
            xtype: 'container',
            cls: 'module-body',
            items: [{
                xtype: 'formpanel',
                itemId: 'form',
                reference: 'form',
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                },
                defaults: {
                    border: false,
                    xtype: 'midatefield',
                },
                items: [
                    {
                        xtype: 'selectbox',
                        store: {
                            type: 'permissions'
                        },
                        label: 'Choose A Profile',
                        displayField: 'name',
                        name: 'profileName',
                        margin: '0 6 0 6',
                        valueField: 'name',
                        flex: 1,
                        minWidth: 200,
                        required: true,
                    },
                ],

            }]
        }
    ],
    bbar: [
        {
            xtype: 'button',
            text: 'Close',
            ui: 'action',
            handler: 'onCancelBtnClick',
            hidden: true
        },
        '->',
        {
            xtype: 'button',
            id: 'btnFirstRequeststatement',
            text: 'Request Statement',
            ui: 'action',
            handler: 'viewreportofallusersinProfile',
            validators: 'date'
        }
    ],
})