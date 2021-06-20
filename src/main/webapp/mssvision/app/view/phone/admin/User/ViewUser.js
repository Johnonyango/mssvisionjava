Ext.define('MssPhoenix.view.phone.admin.User.ViewUser', {
    extend: 'MssPhoenix.view.widgets.Window',
    
    xtype: 'phoneviewuser',
    controller: 'userscontroller',
    width: 150,
    height: 556,
    title: 'Users',
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
            allowBlank: false,
            scrollable: 'x'

        },
        
        items: 
        [{
            xtype: 'numberfield',
            name: 'id',
            //hidden: true,
            allowBlank: true,
            label: 'Staff Number',
            readOnly:true,

        },
        {    
            name: 'email',
            label: 'Email',            
            readOnly:true,
        },
        {
            name: 'firstName',
            label: 'First Name',
            readOnly:true,
        },
        {
            name: 'lastName',
            label: 'Last Name',
            readOnly:true,
        },
        {
            name: 'profileName',
            label: 'Role',
            readOnly:true,
        },
        


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
            handler: 'onCancelViewBtnClick'

        }
        ]
    }]
});