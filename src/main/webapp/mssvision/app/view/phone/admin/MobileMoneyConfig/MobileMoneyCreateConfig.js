Ext.define('MssPhoenix.view.phone.admin.MobileMoneyConfig.MobileMoneyCreateConfig', {
    extend: 'MssPhoenix.view.widgets.Window',
    
    xtype: 'phonemobilemoneycreateconfig',
    controller: 'mobilemoneycreateconfigcontroller',
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
                                    label: 'Minimum Amount',
                                    labelTextAlign:'left',
                                    name: 'minAmount',
                                    
                                },
                                {
                                    flex: 1,
                                    xtype: 'mitextfield',
                                    label: 'Mpesa Paybill',
                                    labelTextAlign:'left',
                                    name: 'mpesaPaybill',
                                    margin:'0 0 0 5',
                                   
                                }, 
                                {
                                    flex: 1,
                                    xtype: 'mitextfield',
                                    label: 'MpesaAppKey',
                                    labelTextAlign:'left',
                                    name: 'mpesaAppKey',
                                    margin:'0 0 0 5',
                                   
                                }, 
                                {
                                    flex: 1,
                                    xtype: 'mitextfield',
                                    label: 'MpesaAppSecret',
                                    labelTextAlign:'left',
                                    name: 'mpesaAppSecret',
                                    margin:'0 0 0 5',
                                   
                                }, 
                                {
                                    flex: 1,
                                    xtype: 'mitextfield',
                                    label: 'MpesaPassKey',
                                    labelTextAlign:'left',
                                    name: 'mpesaPassKey',
                                    margin:'0 0 0 5',
                                   
                                },
                                {
                                    flex: 1,
                                    xtype: 'mitextfield',
                                    label: 'CallbackUrl',
                                    labelTextAlign:'left',
                                    name: 'callbackUrl',
                                    margin:'0 0 0 5',
                                   
                                },
                                {
                                    flex: 1,
                                    xtype: 'mitextfield',
                                    label: 'TimeoutUrl',
                                    labelTextAlign:'left',
                                    name: 'timeoutUrl',
                                    margin:'0 0 0 5',
                                   
                                },
                                {
                                    flex: 1,
                                    xtype: 'mitextfield',
                                    label: 'AccountReference',
                                    labelTextAlign:'left',
                                    name: 'accountReference',
                                    margin:'0 0 0 5',
                                   
                                }, 
                                {
                                    flex: 1,
                                    xtype: 'mitextfield',
                                    label: 'MobileMoneyProcedure',
                                    labelTextAlign:'left',
                                    name: 'mobileMoneyProcedure',
                                    margin:'0 0 0 5',
                                   
                                },                                                              
                                {
                                    xtype: 'selectbox',
                                    label: 'StatusConfig',
                                    margin: '0 0 0 6',
                                    name: 'status',
                                    store: {
                                        fields: ['value', 'name'],
                                        data: [
                                            { "value": "ACTIVE", "name": "ACTIVE" },
                                            { "value": "INACTIVE", "name": "INACTIVE" },
                                            
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