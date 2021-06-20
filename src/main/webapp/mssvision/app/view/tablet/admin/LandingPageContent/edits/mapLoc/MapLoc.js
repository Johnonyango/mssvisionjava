Ext.define('MssPhoenix.view.tablet.admin.LandingPageContent.edits.mapLoc.MapLoc', {
   
    extend: 'MssPhoenix.view.widgets.Window',

    // viewModel: {
    //     data: {
    //         userId: null
    //     }
    // },
    
    xtype:'edits-maploc',
    width: 900,
    height: 656,
    controller: 'maploccontroller',
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
                reference: 'edits-maplocform',
                itemId: 'edits-maplocform',
                items: [{
                        cls: 'module-head',
                        xtype: 'component',
                        html: `<h3>Change your Map Location</h3>`,
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
                                    html:'<h1>Please update your map here</h1>' 
                                    + '<h3>Procedure:</h3>'
                                    + '<h3>1: On your PC, Search for your map location on google maps</h3>'
                                    + '<h3>2: Navigate to the share link</h3>'
                                    + '<h3>3: Choose Embed a map</h3>'
                                    + '<h3>4: Copy the iframe link provided and paste it here.</h3>'
                                    
                                }
                            },
                            {height: 80},
                            {
                                xtype: 'textareafield',
                                labelAlign: 'Top',
                                msgTarget: 'side',
                                labelTextAlign: 'Top',
                                name: 'mapLoc',
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
