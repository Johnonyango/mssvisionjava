Ext.define('MssPhoenix.view.phone.admin.LandingPageContent.LandingPageForm', {
    extend: 'Ext.Container',
    xtype: 'phonelandingpage',
    controller: 'landingpageformcontroller',

    width: 900,
    // height: 1500,
    // maxHeight:2800,
    // controller: 'landingpageformcontroller',
    padding: 15,
    items: [

        {
            height: 1900,
            margin: '0 0 0 20',
            scrollable: true,
            flex: 1,
            xtype: 'module',
            items: [{
                xtype: 'formpanel',
                items: [{
                    cls: 'module-head',
                    xtype: 'component',
                    html: `<h3>Landing Page Content</h3>`,
                }, {
                    items: [{
                        layout: {
                            type: 'vbox',
                            align: 'stretch',
                        },
                            items: [{
                                html: '<h2>Logo</h2>',
                                flex: 2,
                        },
                        
                                 ],
                                 
                    }],
                },
                {
                    cls: 'module-body',
                    // xtype: 'container',
                    xtype: 'formpanel',
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
                    //start of form

                    reference: 'form',
                    // jsonSubmit: true,

                    items: [
                        {
                            layout: {
                                type: 'hbox',
                                align: 'stretch',

                            },

                            defaults: {
                                anchor: '100%',
                                allowBlank: false,
                                msgTarget: 'side',
                                labelWidth: 60
                            },



                            items: [
                                { width: 50 },

                                {
                                    xtype: 'image',
                                    userCls: 'main-user-image small-image circular',
                                    alt: 'Current user image',
                                    label: 'Logo',
                                    labelTextAlign: 'Top',
                                    bind: {
                                        src: 'resources/images/SystechLogo.PNG'
                                    },

                                    width: 50,
                                    height: 50,
                                    flex: 2,
                                },
                                {width: 20},
                                {
                                    xtype: 'button',
                                    text: 'Edit',
                                    iconCls: 'fa fa-edit',
                                    ui: 'action',
                                   // id: 'editLogo',
                                    handler: 'EditLogoButtonClick',
                                    
                                },
                             

                            ],
                            items: [
                                { width: 50 },

                                {
                                    xtype: 'image',
                                    userCls: 'main-user-image small-image circular',
                                    alt: 'Current user image',
                                    label: 'Logo',
                                    labelTextAlign: 'Top',
                                    bind: {
                                        src: 'resources/images/SystechLogo.PNG'
                                    },

                                    width: 50,
                                    height: 50,
                                    flex: 2,
                                },
                                {width: 20},
                                {
                                    xtype: 'button',
                                    text: 'Edit',
                                    iconCls: 'fa fa-edit',
                                    ui: 'action',
                                   // id: 'editLogo',
                                    handler: 'EditLogoButtonClick',
                                    
                                },
                                
                              

                            ],
                        },
                        {
                            height: 50
                        },
                        {
                                html: '<h2>Pensioner Image </h2>',
                               
                            },

                        {
                            items: [
                                {
                                    layout: {
                                        type: 'hbox',
                                        // align: 'stretch',

                                    },

                                    items: [
                                       
                                     {
                                    xtype: 'image',
                                    userCls: 'main-user-image small-image circular',
                                    alt: 'Current user image',
                                    src: 'resources/images/OldCouple.jpg',
                                    width: 150,
                                    height: 150,
                                    flex: 2,
                                }, 
                                        
                                        { width: 20 },
                                        {
                                            xtype: 'button',
                                            text: 'Edit ',
                                            height: 50,
                                            iconCls: 'fa fa-edit',
                                            ui: 'action',
                                            id: 'editPenImg',
                                            handler: 'EditPensionerImageButtonClick',
                                           
                                            

                                        },
                                    //     // { width: 220 },
                                    //     // {
                                    //     //     xtype: 'button',
                                    //     //     text: 'Edit ',
                                    //     //     iconCls: 'fa fa-edit',
                                    //     //     ui: 'action',
                                    //     //     id: 'editLoginImg',
                                    //     //     handler: 'EditLoginButtonClick',
                                    //     //     flex: 2,

                                    //     // }
                                    ]

                                }]
                        },
                        {
                            height: 50
                        },
                      {
                            html: '<h2> Login Image</h2>',
                            flex: 2,
                        },

                        {
                            items: [
                                {
                                    layout: {
                                        type: 'hbox',
                                        // align: 'stretch',

                                    },

                                    items: [
                                       
                                      
                                         {
                                    xtype: 'image',
                                    userCls: 'main-user-image small-image circular',
                                    alt: 'Current user image',
                                    src: 'resources/images/bg23.jpg',
                                    width: 150,
                                    height: 150,
                                    flex: 2,
                                } ,
                                        
                                        { width: 20 },
                                        {
                                            xtype: 'button',
                                            text: 'Edit ',
                                            height: 50,
                                            iconCls: 'fa fa-edit',
                                            ui: 'action',
                                            id: 'editLoginImg',
                                            handler: 'EditLoginButtonClick',
                                           

                                        },
                                    
                                    ]

                                }]
                        },
                        {
                            height: 50
                        },
                        {
                            html: '<h2> Welcome Statement</h2>',
                            flex: 2
                        },

                        {
                            items: [
                                {
                                    layout: {
                                        type: 'hbox',
                                        // align: 'stretch',

                                    },

                                    items: [
                                       
                                      
                                        {
                                            xtype: 'image',
                                            userCls: 'main-user-image small-image circular',
                                            alt: 'Current user image',
                                            src: 'resources/images/WelcomeStatement.PNG',
                                            width: 150,
                                            height: 150,
                                            flex: 1,
                                        },
                                        
                                        { width: 20 },
                                        {
                                            xtype: 'button',
                                            text: 'Edit  ',
                                            height: 50,
                                            iconCls: 'fa fa-edit',
                                            ui: 'action',
                                            id: 'editWelcomeMsg',
                                            handler: 'EditWelcomeButtonClick',
                                            // flex:1,

                                        },
                                    
                                    ]

                                }]
                        },
                        {
                            height: 50
                        },
                        {
                                    html: '<h2>Member Tab</h2>',
                                    flex: 2
                                },

                        {
                            items: [
                                {
                                    layout: {
                                        type: 'hbox',
                                        // align: 'stretch',

                                    },

                                    items: [
                                       
                                      
                                        {
                                            xtype: 'image',
                                            userCls: 'main-user-image small-image circular',
                                            alt: 'Current user image',
                                            src: 'resources/images/MemberTab.PNG',
                                            width: 200,
                                            height: 200,
                                            flex: 1,
                                        },
                                        
                                        { width: 20 },
                                        {
                                            xtype: 'button',
                                            text: 'Edit  ',
                                            height: 50,
                                            iconCls: 'fa fa-edit',
                                            ui: 'action',
                                            id: 'editMbrTb',
                                            handler: 'EditMbrTabButtonClick',
                                            

                                        },
                                    
                                    ]

                                }]
                        },
                        {
                            height: 50
                        },
                        {
                                    html: '<h2>Why Save </h2>',
                                    flex: 2
                                },

                        {
                            items: [
                                {
                                    layout: {
                                        type: 'hbox',
                                        // align: 'stretch',

                                    },

                                    items: [
                                       
                                      
                                        {
                                            xtype: 'image',
                                            userCls: 'main-user-image small-image circular',
                                            alt: 'Current user image',
                                            src: 'resources/images/WhySaveForPension.PNG',
                                            width: 150,
                                            height: 150,
                                            flex: 1,
                                        },
                                        
                                        { width: 20 },
                                        {
                                            xtype: 'button',
                                            text: 'Edit  ',
                                            height: 50,
                                            iconCls: 'fa fa-edit',
                                            ui: 'action',
                                            id: 'editPenMsg',
                                            handler: 'EditPenMsgButtonClick',
                                            //    flex:1,

                                        },
                                    
                                    ]

                                }]
                        },
                        {
                            height: 50
                        },
                        {
                                    html: '<h2>Pensioner</h2>',
                                    flex: 2
                                },

                        {
                            items: [
                                {
                                    layout: {
                                        type: 'hbox',
                                        // align: 'stretch',

                                    },

                                    items: [
                                       
                                      
                                        {
                                            xtype: 'image',
                                            userCls: 'main-user-image small-image circular',
                                            alt: 'Current user image',
                                            src: 'resources/images/PensionerTab.PNG',
                                            width: 200,
                                            height: 200,
                                            flex: 1,
                                        },
                                        
                                        { width: 20 },
                                        {
                                            xtype: 'button',
                                            text: 'Edit',
                                            height: 50,
                                            iconCls: 'fa fa-edit',
                                            ui: 'action',
                                            id: 'editPenTab',
                                            handler: 'EditPensionerButtonClick',
                                            //   flex:1,

                                        },
                                    
                                    ]

                                }]
                        },



                     
                        //ADDRESS
                        {
                            html: '<h2> Address</h2>',

                        },
                        {
                            xtype: 'button',
                            text: 'Edit Address ',
                            iconCls: 'fa fa-edit',
                            ui: 'action',
                            id: 'editLPAddress',
                            handler: 'EditAddressButtonClick',
                            width: 200,
                            flex: 2,

                        },

                     ],
                }],
               
            }],
        }]
});