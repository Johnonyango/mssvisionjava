Ext.define('MssPhoenix.view.phone.admin.ManageAdmin.CreateAdmin', {
    extend: 'MssPhoenix.view.widgets.Window',
    
    xtype: 'phonecreateadmin',
    width: 60,
    height: 600,
   // title: 'Create An Admin',

    controller: 'createadmincontroller',
    padding: 15,
    defaults: {
        
        scrollable: true
    },
    items: [
        // {
        //     xtype: 'formpanel',
        //     scrollable: true,
        //     defaults: {
        //         xtype: 'mitextfield',
        //         readOnly: false,
        //         width: '100%',
        //     }
       // },
      
    {
        height:550,
        margin:'0 0 0 20',
        flex:1,
        xtype: 'module',
        
        items: [{
            xtype: 'formpanel',
            reference:'form',
            jsonSubmit:true,
            items: [{
                    cls: 'module-head',
                    xtype: 'component',
                    html: `<h3>Create Admin</h3>`,
                },
                {
                    cls: 'module-body',
                    xtype: 'container',
                    layout: {
                        type: 'vbox',
                        align: 'stretch',
                    },
                    defaults: {
                        width: '100%',
                        height:90,
                        xtype: 'container',
                        scrollable:true,
                        layout: {
                            type: 'hbox',
                            align: 'stretch',
                        },
                    },
                    items: [
                        {
                            xtype: 'mitextfield',
                            label: 'Staff Number',
                            labelTextAlign:'left',
                            name: 'staffNo',
                            placeholder:'Enter staff number'
                        },
                        {
                            xtype: 'mitextfield',
                            label: 'Email',
                            labelTextAlign:'left',
                            name: 'email',
                            placeholder:'Enter your email',
                            validators: 'email',
                        },
                                                
                        {
                            xtype: 'selectbox',
                            store: {
                                type: 'permissions'
                            },
                            label:'Choose Role',
                            displayField: 'name',
                            name:'profileId',
                            valueField: 'id',
                            flex: 1,
                            minWidth: 200,
                        },
                        {
                            flex: 1,
                            xtype: 'mitextfield',
                            label: 'First Name',
                            labelTextAlign:'left',
                            name: 'firstName',
                            placeholder:'Enter your first name'
                        },
                        {
                            flex: 1,
                            xtype: 'mitextfield',
                            label: 'Last Name',
                            labelTextAlign:'left',
                            name: 'lastName',
                            margin:'0 0 0 5',
                            placeholder:'Enter your Last name'
                        },
                       
                        {
                            xtype: 'button',
                            minWidth:20,
                            height: 50,
                            iconCls:'fa fa-save',
                            text: 'Save',
                            ui: 'action',
                            handler: 'onSaveBtnClick' 
                            
                        },
                        {height:10},
                        {
                            xtype: 'button',
                            minWidth:20,
                            height: 50,
                            iconCls:'fa fa-ban',
                            text: 'close',
                            ui: 'action',
                            handler: 'onCancelBtnClick' 
                        },
                        

                        
                    ],
                }
            ],
           
        }],

    }

    ]

});