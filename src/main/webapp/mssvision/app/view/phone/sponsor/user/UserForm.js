Ext.define('MssPhoenix.view.phone.sponsor.user.UserForm', {
    extend: 'MssPhoenix.view.widgets.Window',

    xtype: 'sponsoruserformphone',
    width:'100%',
    scrollable:true,
    height:500,

    controller:'userformcontroller',
    closable:true,
    viewModel:'sponsor-userviewmodel',

    padding: 15,
    
    items: [{
        xtype: 'panel',
        items: [{
            xtype: 'module',
            items: [
                {
                    xtype: 'component',
                    cls: 'module-head',
                    html: `<h3>Add Member</h3>`
                },
                {
                    xtype: 'formpanel',
                    cls: 'module-body',
                    reference:'form',
                    jsonSubmit:true,
                    layout: {
                        type: 'vbox',
                        align: 'stretch',
                    },
                    defaults: {
                        width: '100%',
                        xtype: 'container',
                        layout: {
                            type: 'vbox',
                            align: 'stretch',
                        },
                        margin: '5 0',
                    },
                    items: [
                        
                        {
                            items: [ 
                                {
                                    xtype: 'minumberfield',
                                    label: 'id',
                                    bind:{
                                        value: '{id}',
                
                                    },
                                    name: 'id',
                                    hidden:true,
                                },
                            ]
                        },
                        {
                            items: [  
                                {
                                    xtype: 'minumberfield',
                                    label: 'Sponsor No',
                                    bind:{
                                        value: `${MssPhoenix.model.Session.getSponsorId()}`,
                
                                    },
                                    name: 'parentSponsorId',
                                    hidden:true,
                                },
                            ]
                        },
                        {
                            items: [  
                                {
                                    xtype: 'minumberfield',
                                    label: 'Scheme Id',
                                    bind:{
                                        value: `${MssPhoenix.model.Session.getSchemeId()}`,
                
                                    },
                                    name: 'schemeId',
                                    hidden:true,
                                },
                            ]
                        },
                        {
                            items: [  
                                {
                                    xtype: 'minumberfield',
                                    label: 'Sponsor id',
                                    bind:{
                                        value: `${MssPhoenix.model.Session.getSponsorIdField()}`,
                                    },
                                    name: 'sponsorId',
                                    hidden:true,
                                },
                            ]
                        },
                        {
                            items: [  
                                {
                                    xtype: 'mitextfield',
                                    label: 'Email',
                                    name: 'email',
                                    validators:'email',
                                    bind:{
                                        value: '{email}',
                
                                    },
                                    inputType:'email',
                                    required:true,
                              
                                },
                            ]
                        },
                        {
                            items: [  
                                {
                                    xtype: 'mitextfield',
                                    label: 'User Name',
                                    name: 'firstName',
                                    bind:{
                                        value: '{firstName}',
                
                                    },
                                    margin:'0 0 0 5',
                                    required:true,
                                },
                            ]
                        },
                        {
                            items: [  
                                {
                                    xtype: 'mitextfield',
                                    label: 'Password',
                                    name: 'password',
                                    bind:{
                                        value: '{password}',
                
                                    },
                                    inputType:'password',
                                    required:true,
                                },
                                   
                            ]
                        },
                        {
                            items: [  
                                {
                                    xtype: 'selectbox',
                                    store: {
                                        type: 'permissions'
                                    },
                                    label:'Choose A Role',
                                    displayField: 'name',
                                    name:'profileId',
                                    valueField: 'id',
                                    bind:{
                                        value: '{valueField}',
                
                                    },
                                    flex: 1,
                                    minWidth: 200,
                                    required:true,
                                },
                            ]
                        },
                    ],
                 
                    bbar: [
                        '->',
                        {
                            minWidth: 200,
                            iconCls: 'fa fa-save',
                            text: 'Save',
                            formBind: true,
                            ui: 'action',
                            handler: 'onSaveBtnClick'
    
                        }, {
                            minWidth: 200,
                            iconCls: 'fa fa-ban',
                            text: 'close',
                            ui: 'action',
                            handler: 'onCancelBtnClick'
                        }
                    ]
}
            ]
        }],

    }],
});











 