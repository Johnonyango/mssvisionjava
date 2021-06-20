Ext.define('MssPhoenix.view.tablet.sponsor.members.UpdateMembersBatch', {
    extend: 'MssPhoenix.view.widgets.Window',
    xtype: 'sponsormemberupdatebatch',
    width: 500,

    controller: 'updatemembersbatchcontroller',
    padding: 15,

    items: [
        {
            xtype: 'module',
            items: [
                {
                    xtype: 'container',
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
                        }
                    },
                    items: [
                        {
                            xtype: 'toolbar',
                            cls:'module-head',
                            items: [
                             
                                {
                                    xtype: 'component',
                                    
                                    html:'<h3>Update Members</h3>'
                                },
                            ]
                        },    
                        
                        {
                            items: [
                            {
                                xtype: 'filefield',
                                width: '100%',
                                labelWidth:'100%',
                                msgTarget: 'side',
                                allowBlank: false,
                                anchor: '100%', 
                                
                            },  
                         ],
                        },
                       
                    ],
                }
            ]
        }
    ],

    buttons: [
        {
            text: 'Update',
            formBind: true,
        },
        {
            text: 'Cancel',
            handler: 'onCancelBtnClick'
        }
    ]

});