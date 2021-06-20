Ext.define('MssPhoenix.view.tablet.admin.User.ViewUser', {
    extend: 'MssPhoenix.view.widgets.Window',

    xtype: 'viewuser',
    controller: 'userscontroller',
    width: 600,
    title: 'User Details',
    autoShow: true,
    modal: true,
    shadow: true,

    padding: 15,
    readOnly: true,
//    
    items: [

        {
            xtype: 'formpanel',
            layout: 'form',
            reference: 'form',
            jsonSubmit: true,
            defaults: {
                xtype: 'textfield',
                allowBlank: false
            },

            items:
                [{
                    xtype: 'numberfield',
                    name: 'id',
                    //hidden: true,
                    allowBlank: true,
                    label: 'Staff Number',
                    readOnly: true,

                },
                    {
                        name: 'email',
                        label: 'Email',
                        readOnly: true,
                    },
                    {
                        name: 'firstName',
                        label: 'First Name',
                        readOnly: true,
                    },
                    {
                        name: 'lastName',
                        label: 'Last Name',
                        readOnly: true,
                    },
                    {
                        name: 'profileName',
                        label: 'Role',
                        readOnly: true,
                    },
                    // {
                    //     xtype: 'selectbox',
                    //     store: {
                    //         type: 'permissions'
                    //     },
                    //     label:'Choose Role',
                    //     displayField: 'name',
                    //     name:'profileId',
                    //     valueField: 'id',
                    //     flex: 1,
                    //     minWidth: 200,
                    // },


                ],
            buttons: [
                //     {
                //     text: 'Save',
                //     formBind: true,
                //     ui: 'action',
                //     handler: 'onEditUserBtnClick'
                // },
                {
                    text: 'Close',
                    ui: 'action',
                    id: 'closeViewAdminUsersBtn',
                    handler: 'onCancelViewBtnClick'

                }
            ]
        }]
});