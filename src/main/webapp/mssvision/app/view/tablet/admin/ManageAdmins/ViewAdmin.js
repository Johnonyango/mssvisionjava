Ext.define('MssPhoenix.view.tablet.admin.ManageAdmin.ViewAdmin', {
    extend: 'MssPhoenix.view.widgets.Window',

    xtype: 'viewform',
    controller: 'createadmincontroller',
    title: 'Admin Details',
    autoShow: true,
    width: 600,
    padding: 15,
    items: [

        {
            xtype: 'formpanel',
            layout: 'form',
            reference: 'form',
            jsonSubmit: true,
            defaults: {
                xtype: 'mitextfield',
                allowBlank: false
            },

            items:
                [
                    {
                        xtype: 'minumberfield',
                        name: 'id',
                        hidden: true,
                        allowBlank: true,
                        label: 'UserId',
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
                    // {
                    //     name: 'profileName',
                    //     label: 'Role',
                    //     readOnly:true,
                    // },
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
                //     handler: 'onSaveBtnClick'
                // },
                {
                    text: 'Close',
                    ui: 'action',
                    id: 'closeViewAdminBtn',
                    handler: 'onCancelViewBtnClick'

                }
            ]
        }]
});