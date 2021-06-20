Ext.define('MssPhoenix.view.phone.sponsor.user.UsersGrid', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',
    xtype: 'sponsorusersgridphone',
    layout:'fit',
    
    controller:'usergridcontroller',

    items:[  {
        xtype: 'toolbar',
        docked:'top',
        items: [{
            text: 'Actions',
            ui: 'action',
            menu: {
                defaults: {
                   
                },
                items: [{
                    text: 'Drop User',
                    ui: 'action',
                    handler: 'DropUserActionBtnPhoneClick'
                },
                {
                    text: 'Reset Password',
                    ui: 'action',
                    handler: 'ResetPasswordActionBtnClick'
                }],
           
                

            }
        },{
   
            text: 'Add A User',
            handler: 'onAddAUserButtonClick',
            ui:'action',
            iconCls: 'x-fa fa-plus',
        },
        {
            iconCls:'fa fa-redo',
            handler: 'reloadUsersGrid',
            ui: 'action'
        }, 
        // {
        //     text: '',
        //     iconCls: 'x-fa fa-print',
        //     scale: 'small',
        //     ui:'action'
        // },

        ]
    }],

});



