Ext.define('MssPhoenix.view.phone.admin.MailConfigs.MailCreateConfig', {
    extend: 'MssPhoenix.view.widgets.Window',
    
    xtype: 'phonemailcreateconfig',
    controller: 'mailcreateconfigcontroller',
    width: 600,
    height: 600,   
    padding: 75,
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
                    html: `<h3>Create Config</h3>`,
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
                                    flex: 1,
                                    xtype: 'mitextfield',
                                    label: 'Host',
                                    labelTextAlign:'left',
                                    name: 'host',
                                    
                                },
                                {
                                    flex: 1,
                                    xtype: 'mitextfield',
                                    label: 'Port',
                                    labelTextAlign:'left',
                                    name: 'port',
                                    margin:'0 0 0 5',
                                   
                                }, 
                                {
                                    flex: 1,
                                    xtype: 'mitextfield',
                                    label: 'Username',
                                    labelTextAlign:'left',
                                    name: 'username',
                                    margin:'0 0 0 5',
                                   
                                }, 
                                {
                                    flex: 1,
                                    xtype: 'mitextfield',
                                    label: 'Password',
                                    labelTextAlign:'left',
                                    name: 'password',
                                    margin:'0 0 0 5',
                                   
                                }, 
                                {
                                    flex: 1,
                                    xtype: 'mitextfield',
                                    label: 'EmailFrom',
                                    labelTextAlign:'left',
                                    name: 'from',
                                    margin:'0 0 0 5',
                                    validators: 'email',
                                   
                                },
                                {
                                    flex: 1,
                                    xtype: 'mitextfield',
                                    label: 'BaseUrl',
                                    labelTextAlign:'left',
                                    name: 'baseUrl',
                                    margin:'0 0 0 5',
                                   
                                },
                                {
                                    flex: 1,
                                    xtype: 'mitextfield',
                                    label: 'SupportEmail',
                                    labelTextAlign:'left',
                                    name: 'supportEmail',
                                    margin:'0 0 0 5',
                                    validators: 'email',
                                   
                                },
                                                                                             
                                {
                                    xtype: 'selectbox',
                                    label: 'Enabled',
                                    margin: '0 0 0 6',
                                    name: 'enabled',
                                    store: {
                                        fields: ['value', 'name'],
                                        data: [
                                            { "value": "true", "name": "true" },
                                            { "value": "false", "name": "false" },
                                            
                                        ]
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                },
                                   
                              ],
                }
            ],
            bbar: [
                '->',
                {
                    minWidth:200,
                    iconCls:'fa fa-save',
                    text: 'Save',
                    ui: 'action',
                    id: 'saveCreateConfig',
                    handler: 'onSaveConfigBtnClick' 
                    
                    
                },{
                    minWidth:200,
                    iconCls:'fa fa-ban',
                    text: 'close',
                    ui: 'action',
                    id: 'closeCreateConfig',
                    handler: 'onCancelBtnClick' 
                }
            ]
        }],

    }

    ]

});