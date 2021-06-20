Ext.define('MssPhoenix.view.phone.sponsor.user.Users', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',
    xtype : 'sponsorusersphone', 
    
    layout: {
        type: 'fit'
    },
    viewModel:'sponsor-userviewmodel',
    controller:'usergridcontroller',
      
    selectable: {
        columns: true,
        cells: true,
        checkbox: true,
        drag: true,
        extensible: 'y',
        mode:'single'
    },

    defaults:{
        width:'100%'
    },
  
    items: [{
        xtype: 'container',
        scrollable: true,
        scrollable: 'y',
        items: [{
                xtype: 'module',
                margin: '10 10 10 10',
                items: [{
                        xtype: 'component',
                        cls: 'module-head',
                        html: '<h3>Users</h3>'
                    },
                    {
                        xtype: 'container',
                        cls: 'module-body',
                        scrollable: false,
                        height: "95%",
                        items: [
                            {
                                xtype: 'sponsorusersgridphone',
        
                            },
                            {
                                xtype: 'label',
                                margin: '0 0 0 0',
                                html: '<span style="color: #002c65; font-weight: 700">A record of active users created under sponsor.</span>'
                            },
                            {
                                xtype: 'list',
                                grouped: false,
                                emptyText: 'loading...',
                                height: "95%",
                                scrollable: true,
                                store: {
                                    type: 'sponsoruser'
                                },
                                itemTpl: [
                                    '<div><b>First Name: </b><span>{firstName}</span></div>',
                                    '<div><b>Last Name : </b><span>{lastName}</span></div>',
                                    '<div><b>Email : </b><span>{email}</span></div>',
                                    '<div><b>Sponsor Name : </b><span>{sponsorName}</span></div>',
                                    '<div><b>Role : </b><span>{profileName}</span></div>',
                                ],
            
                                listeners: {
                                    select: 'onPhoneViewClaimBtnClick',
                                    //select: 'DropUserActionBtnPhoneClick'
                                }
                            }
                        ]
                    }

                ]
            }, 
        ]

    }]
});