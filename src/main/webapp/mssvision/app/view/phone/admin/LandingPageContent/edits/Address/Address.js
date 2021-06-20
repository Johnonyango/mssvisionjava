Ext.define('MssPhoenix.view.phone.admin.LandingPageContent.edits.Address.Address', {   
    extend: 'MssPhoenix.view.widgets.Window',
    // viewModel: {
    //     data: {
    //         userId: null
    //     }
    // },
    xtype:'phoneedits-address',
    width: 500,
    height: 656,
    controller: 'addresscontroller',
    padding: 45,
    
        items: [
           
          
        {
            height:600,
            margin:'0 0 0 20',
            flex:1,
            xtype: 'module',
            scrollable:true,
            items: [{
                xtype: 'formpanel',
                jsonSubmit:true,
                reference: 'edits-addressform',
                itemId: 'edits-addressform',
                items: [{
                        cls: 'module-head',
                        xtype: 'component',
                        html: `<h3>Change your Address</h3>`,
                        
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
                                defaults: {
                                    width: '100%',
                                    xtype: 'container',
                                    layout: {
                                        type: 'hbox',
                                        align: 'stretch',
                                    },
                                },
                            },

                            {
                                xtype: 'mitextfield',
                                label: 'Postal Address:',
                                maxRows: 1,
                                name: 'postalAddress',
                                placeholder: 'Enter your postal address',
                                inputType: 'text',
                                flex: 1,
                            },
                            { width: 5 },
                            {
                                xtype: 'mitextfield',
                                label: 'Email',
                                maxRows: 1,
                                name: 'email',
                                placeholder: 'Enter your email',
                                inputType: 'text',
                                flex: 1,
                            },




                        ],
                    },
                    {
                        items: [
                            {
                                defaults: {
                                    width: '100%',
                                    xtype: 'container',
                                    layout: {
                                        type: 'hbox',
                                        align: 'stretch',
                                    },
                                },
                            },

                            {
                                xtype: 'mitextfield',
                                label: 'Primary Phone number:',
                                maxRows: 1,
                                name: 'fixedPhone',
                                placeholder: 'Enter your phone number',
                                inputType: 'text',
                                flex: 1,
                            },
                            { width: 5 },
                            {
                                xtype: 'mitextfield',
                                label: 'Secondary Phone number',
                                maxRows: 1,
                                name: 'secondaryPhone',
                                placeholder: 'Enter your secondary phone number',
                                inputType: 'text',
                                flex: 1,
                            },

                        ],
                    },
                    {
                        items: [
                            {
                                defaults: {
                                    width: '100%',
                                    xtype: 'container',
                                    layout: {
                                        type: 'hbox',
                                        align: 'stretch',
                                    },
                                },
                            },

                            {
                                xtype: 'mitextfield',
                                label: 'Building:',
                                maxRows: 1,
                                name: 'building',
                                placeholder: 'Enter your building address',
                                inputType: 'text',
                                flex: 1,
                            },
                            { width: 5 },
                            {
                                xtype: 'mitextfield',
                                label: 'Road:',
                                maxRows: 1,
                                name: 'road',
                                placeholder: 'Enter the road next to your workplace',
                                inputType: 'text',
                                flex: 1,
                            },




                        ],
                    },
                    {
                        items: [
                            {
                                defaults: {
                                    width: '100%',
                                    xtype: 'container',
                                    layout: {
                                        type: 'hbox',
                                        align: 'stretch',
                                    },
                                },
                            },

                            {
                                xtype: 'mitextfield',
                                label: 'Town:',
                                maxRows: 1,
                                name: 'town',
                                placeholder: 'Enter your town',
                                inputType: 'text',
                                flex: 1,
                            },
                            { width: 5 },
                            {
                                xtype: 'mitextfield',
                                label: 'Country:',
                                maxRows: 1,
                                name: 'country',
                                placeholder: 'Enter your country',
                                inputType: 'text',
                                flex: 1,
                            },

                        ],
                    },
                    {
                        items: [
                            {
                                defaults: {
                                    width: '100%',
                                    xtype: 'container',
                                    layout: {
                                        type: 'hbox',
                                        align: 'stretch',
                                    },
                                },
                            },

                            {
                                xtype: 'mitextfield',
                                label: 'Geo Latitude:',
                                maxRows: 1,
                                name: 'lat',
                                placeholder: 'Enter your latitude location',
                                inputType: 'text',
                                flex: 1,
                            },
                            { width: 5 },
                            {
                                xtype: 'mitextfield',
                                label: 'Geo Longitude:',
                                maxRows: 1,
                                name: 'lng',
                                placeholder: 'Enter your geo longitude',
                                inputType: 'text',
                                flex: 1,
                            },
                            {
                                minWidth:200,
                                xtype: 'button',
                                iconCls:'fa fa-save',
                                text: 'Save Changes',
                                ui: 'action',
                                handler: 'onSaveBtnClick' 
                                
                            },
                           {height: 5},
                            {
                                minWidth:200,
                                xtype: 'button',
                                iconCls:'fa fa-ban',
                                text: 'Exit',
                                ui: 'action',
                                handler: 'onCancelBtnClick' 
                            }
                        ],
                    },
                ],
          
                // bbar: [
                //     '->',
                //     // {
                //     //     minWidth:200,
                //     //     iconCls:'fa fa-save',
                //     //     text: 'Save Changes',
                //     //     ui: 'action',
                //     //     handler: 'onSaveBtnClick' 
                        
                //     // },
                   
                //     // {
                //     //     minWidth:200,
                //     //     iconCls:'fa fa-ban',
                //     //     text: 'Exit',
                //     //     ui: 'action',
                //     //     handler: 'onCancelBtnClick' 
                //     // }
                // ]
            }],
    
        }
    
        ]
});
