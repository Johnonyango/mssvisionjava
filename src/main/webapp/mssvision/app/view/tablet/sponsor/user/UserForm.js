Ext.define('MssPhoenix.view.tablet.sponsor.user.UserForm', {
    extend: 'MssPhoenix.view.widgets.Window',

    xtype: 'sponsoruserform',
    width: 600,
    scrollable:true,
    closable:true,
    controller:'userformcontroller',
    
    viewModel:'sponsor-userviewmodel',

    padding: 15,
    items: [

        {
            maxHeight: 600,
            margin: '0 0 0 0',
            flex: 1,
            xtype: 'module',
            items: [{
                xtype: 'formpanel',
                reference: 'form',
                jsonSubmit: true,
                items: [{
                    cls: 'module-head',
                    xtype: 'component',
                    html: `<h3>Add A User</h3>`,
                },
                {
                    cls: 'module-body',
                   
                    
                    layout: {
                        type: 'vbox',
                        align: 'stretch',
                    },
                    defaults: {
                        width: '100%',
                        xtype: 'container',
                        layout: {
                            type: 'hbox',
                            align: 'stretch',
                        },
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
                                {
                                    xtype: 'minumberfield',
                                    label: 'Sponsor No',
                                    bind:{
                                        value: `${MssPhoenix.model.Session.getSponsorId()}`,

                                    },
                                    name: 'parentSponsorId',
                                    hidden:true,
                                },
                                {
                                    xtype: 'minumberfield',
                                    label: 'Scheme Id',
                                    bind:{
                                        value: `${MssPhoenix.model.Session.getSchemeId()}`,

                                    },
                                    name: 'schemeId',
                                    hidden:true,
                                },
                                {
                                    xtype: 'minumberfield',
                                    label: 'Sponsor id',
                                    bind:{
                                        value: `${MssPhoenix.model.Session.getSponsorIdField()}`,
                                    },
                                    name: 'sponsorId',
                                    hidden:true,
                                },
                                {
                                    xtype: 'mitextfield',
                                    label: 'Email',
                                    name: 'email',
                                    validators:'email',
                                    // bind:{
                                    //     value: '{email}',

                                    // },
                                    inputType:'email',
                                    required:true,
                              
                                },
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
                            xtype: 'selectbox',
                            store: {
                                type: 'sponsorusers'
                            },
                            queryMode: 'local',
                            label:'Choose A Role',
                            displayField: 'name',
                            name:'profileName',
                            valueField: 'name',
                            bind:{
                                value: '{valueField}',

                            },
                            flex: 1,
                            minWidth: 200,
                            required:true,
                        },
        
                   
                    ],
                }
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
            }],

        }

    ]
});