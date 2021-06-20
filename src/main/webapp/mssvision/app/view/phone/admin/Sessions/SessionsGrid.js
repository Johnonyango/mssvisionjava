Ext.define('MssPhoenix.view.phone.admin.Session.SessionsGrid', {
    extend: 'MssPhoenix.view.widgets.Table',
    xtype: 'phonesessionsgrid',
    
    height: 400,
    controller: 'sessionsController',

    store: {
        type: 'sessionstore'
    },
    layout: 'fit',

    selectable: {
        // Disables sorting by header click, though it will be still available via menu
        columns: true,
        cells: true,
        checkbox: true,
        drag: true,
        extensible: 'y'

    },

    items: [
        {
            xtype: 'toolbar',
            cls: 'module-head',
            docked: 'top',
            items: [

                // {
                //     text: 'Reset Filter',
                //     scale: 'small',
                //     handler: 'resetFilterBtnClick',
                //     ui: 'action'
                // },
                {
                    text: 'View Details',
                    scale: 'small',
                    handler: 'viewPhoneSessionBtnClick',
                    ui: 'action'
                },
                // {
                //     //  labelAlign: 'top',
                //       msgTarget: 'side',
                //       width: 100,
                //       xtype: 'datefield',
                //       fieldLabel: 'Filter From',
                //       name: 'from',
                //       flex:1,
                //       ui: 'action'
                //   },{
                //      // labelAlign: 'top',
                //       msgTarget: 'side',
                //       width: 100,
                //       xtype: 'datefield',
                //       fieldLabel: 'Filter To',
                //       name: 'to',
                //       flex:1,
                //       ui: 'action'
                //   },
                //  {
                //     xtype: 'button',
                //     text: 'Search ',
                //     handler: 'onSearchButtonClick',
                //     ui: 'action'
                // },
               
            ]
        },
    ],
    columns: [
        
        { text: 'Name', dataIndex: 'userName' ,flex:1, hidden: true},
        { text: 'Role', dataIndex: 'profileName' ,flex:1  },
        { text: 'UserId', dataIndex: 'userId' ,flex:1,hidden: true },
        { text: 'Session Id', dataIndex: 'id', flex: 1, hidden: true },
        { text: 'Started At', dataIndex: 'shortDateTime', flex: 1 },
        { text: 'StoppedAt', dataIndex: 'stoppedAt' ,flex:1, hidden: true },
        { text: 'IpAddress', dataIndex: 'ipAddress', flex: 1,hidden: true},
        {
            text: 'Status', dataIndex: 'active', flex: 1, cell: {
                encodeHtml: false
            }, renderer: function (value) {
                var newText;
                if (value) {
                    // return 'ACTIVE'
                    newText = '<span style="color:green">' + 'ACTIVE' + '</span>';
                    return newText;
                }
                // return 'INACTIVE'
                newText = '<span style="color:red">' + 'INACTIVE' + '</span>';
                return newText;
            }
        },
        
        
       

    ],

   

});