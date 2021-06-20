Ext.define('MssPhoenix.view.tablet.admin.LandingPageContent.edits.PensionerTab.PensionerTab', {   
    extend: 'MssPhoenix.view.widgets.Window',
    // viewModel: {
    //     data: {
    //         userId: null
    //     }
    // },    
    xtype:'edits-pensionertab',
    width: 500,
    height: 656,
    controller: 'pensionertabcontroller',
    padding: 15,
    
        items: [
           
          
        {
            height:600,
            margin:'0 0 0 50',
            flex:1,
            scrollable:true,
            xtype: 'module',
            items: [{
                xtype: 'formpanel',
                jsonSubmit:true,
                reference: 'edits-pensionertabform',
                itemId: 'edits-pensionertabform',
                items: [{
                        cls: 'module-head',
                        xtype: 'component',
                        html: `<h3>Change your Pensioner Tab Statement</h3>`,
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
                            xtype: 'container',
                            layout: {
                                type: 'hbox',
                                align: 'stretch',
                            },
                        },
                        items: [
                            
                            {
                                xtype: 'image',
                                userCls: 'main-user-image small-image circular',
                                alt: 'Current user image', 
                                
                                width: 200,
                                height: 200,
                                bind: {
                                    // src:
                                    //     'resources/images/bg23.jpg '
                                    // //#21
                                    html:'<h2>As a pensioner, you can manage your scheme account details</h2>'
                                }
                            },
                            {
                                xtype: 'textareafield',
                                labelAlign: 'Top',
                                msgTarget: 'side',
                                labelTextAlign: 'Top',
                                name: 'pensionerMessage',
                                label: 'Enter Details Here',
                                // maxRows: 10,
                                inputType: 'text'
                            
                            },
    
                            {
                                margin:'10 0 0 0',
                                xtype: 'container',
                                layout: {
                                    type: 'hbox',
                                    align: 'stretch'
                                },
                                
                            }
                        ],
                    }
                ],
                bbar: [
                    '->',
                    {
                        minWidth:180,
                        iconCls:'fa fa-save',
                        text: 'Save Changes',
                        ui: 'action',
                        handler: 'onSaveBtnClick' 
                        
                    },{
                        minWidth:180,
                        iconCls:'fa fa-ban',
                        text: 'Exit',
                        ui: 'action',
                        handler: 'onCancelBtnClick' 
                    }
                ]
            }],
    
        }
    
        ]
});
