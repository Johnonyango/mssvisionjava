Ext.define('MssPhoenix.view.tablet.admin.home.Cards', {
    extend: 'Ext.Container',
    
    
    xtype: 'admin-cards',
    controller: 'adminhomecontroller',
    padding: '15px',
    scrollable: true,
    width: '100%',

    bodyStyle: { "background-color": "transparent" },
    defaults: {
        width: '30%'
    },
    layout: {
        type: 'hbox',
        align: 'stretch',
        width: '100%',
    },

    items: [

        {
            columnWidth: 0.50,
            cls: 'btn-box',
            margin: '0 0 0 20',

            xtype: 'widget-tabs',
            containerColor: 'magenta',
            userCls: 'big-33 small-50',
            
            bind:{  
                data: {
                    icon: 'hourglass',
                    amount: '{sessionCount.activeSessions}',
                    type: 'Total  Sessions'
                }
            }
        },
        {
            columnWidth: 0.50,
            cls: 'btn-box',
            margin: '0 0 0 10',
            xtype: 'widget-tabs',

            containerColor: 'magenta',
            userCls: 'big-33 small-50',
            // data: {
            //     icon: 'users',
            //     amount: 31,
            //     type: 'Total MSS Users'
            // },
            bind:{  
                data: {
                    icon: 'users',
                    amount: '{usersCount.usersCount}',
                    type: 'Total MSS Users'
                }
            }
        },

        {
            columnWidth: 0.50,
            cls: 'btn-box',
            xtype: 'widget-tabs',
            margin: '0 0 0 10',
            containerColor: 'magenta',
            userCls: 'big-33 small-50',
            
            bind:{  
                data: {
                    icon: 'sitemap',
                    amount: '{sessionCount.allSessions}',
                    type: 'Total Sessions of the day'
                }
            }
        },


    ],

});