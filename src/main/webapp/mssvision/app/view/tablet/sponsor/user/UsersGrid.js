Ext.define('MssPhoenix.view.tablet.sponsor.user.UsersGrid', {
    extend: 'MssPhoenix.view.widgets.Table',
    xtype: 'sponsorusersgrid',
    height:500,
    layout:'fit',
    
    controller:'usergridcontroller',
  
    selectable: {
        columns: true,
        cells: true,
        checkbox: true,
        drag: true,
        extensible: 'y',
        mode:'single'
    },
    requires: [
        'Ext.grid.plugin.PagingToolbar'
    ],
    plugins: {
        gridpagingtoolbar: true
    },



    store: {
        type: 'sponsoruser'
    },

    items:[  {
        xtype: 'toolbar',
        docked:'top',
        items: [{
            text: 'Actions',
            ui: 'action',
            menu: {
                defaults: {
                   
                },
                items: [{
                    text: 'Drop User',
                    ui: 'action',
                    handler: 'DropUserActionBtnClick'
                },
                {
                    text: 'Edit User',
                    ui: 'action',
                    handler: 'EditUserActionBtnClick'
                },
                {
                    text: 'Reset Password',
                    ui: 'action',
                    handler: 'ResetPasswordActionBtnClick'
                }],
           
                

            }
        },{
   
            text: 'Add A User',
            handler: 'onAddAUserButtonClick',
            ui:'action',
            iconCls: 'x-fa fa-plus',
        },
        {
            iconCls:'fa fa-redo',
            handler: 'reloadUsersGrid',
            ui: 'action'
        }, 
        '->',
        // {
        //     xtype: 'formpanel',
        //     fieldDefaults: {
        //         labelWidth: 30
        //     },
        //     layout: {
        //         type: 'hbox'
        //     },
        //     items: [     {
        //         xtype: 'searchfield',
        //         reference: 'searchId',
        //         tooltip: 'Search For User',
        //         width: 200,
        //         listeners: {
        //             specialkey: 'onIdSearchEnterKey'
        //         }
        //     },  
        //     ]
        // },
        {
            text: '',
            iconCls: 'x-fa fa-print',
            scale: 'small',
            ui:'action'
        },

        ]
    }],
    columns: [
        { text: 'User Name',  dataIndex: 'firstName' ,flex:1 },
        { text: 'Email',  dataIndex: 'email',flex:1},
        { text: 'Parent Sponsor Name',  dataIndex:'sponsorName',flex:1},
        { text: 'Profile',  dataIndex: 'fmIdentifier',flex:1},
        
    
        
        

    ],
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        displayMsg: 'Display records {0} - {1} of {2}',
        emptyMsg: 'No Record to display'
    },

});



