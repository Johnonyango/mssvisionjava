Ext.define('MssPhoenix.view.tablet.admin.LandingPageContent.edits.WhySave.WhySave', {
   
    extend: 'MssPhoenix.view.widgets.Window',
    // viewModel: {
    //     data: {
    //         userId: null
    //     }
    // },
    xtype:'edits-whysave',
    width: 900,
    height: 656,
    controller: 'whysavecontroller',
    padding: 15,
    
        items: [
           
          
        {
            height:600,
            margin:'0 0 0 20',
            flex:1,
            xtype: 'module',
            items: [{
                xtype: 'formpanel',
                jsonSubmit:true,
                reference: 'edits-whysaveform',
                itemId: 'edits-whysaveform',
                items: [{
                        cls: 'module-head',
                        xtype: 'component',
                        html: `<h3>Change your Why Save For Pension</h3>`,
                        
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
                                
                                width: 700,
                                height: 200,
                                bind: {
                                    // src:
                                    //     'resources/images/bg23.jpg '
                                    // //#21
                                    
                                    html:'<h2>Dont become a burden to your young ones. Save Now, Live Free after retirement.</h2>'
                                }
                            },
                            {
                                xtype: 'textareafield',
                                labelAlign: 'Top',
                                msgTarget: 'side',
                                labelTextAlign: 'Top',
                                name: 'whySaveMessage',
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
                        minWidth:200,
                        iconCls:'fa fa-save',
                        text: 'Save Changes',
                        ui: 'action',
                        handler: 'onSaveBtnClick' 
                        
                    },{
                        minWidth:200,
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
