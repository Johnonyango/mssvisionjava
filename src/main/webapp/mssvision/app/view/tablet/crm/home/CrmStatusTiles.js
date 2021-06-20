Ext.define('MssPhoenix.view.tablet.crm.home.CrmStatusTiles', {
    extend: 'Ext.container.Container',

    xtype: 'crm-statustiles',


    bodyStyle: { "background-color": "transparent" },
    layout: {
        type: 'hbox',
        align: 'stretch'
    },

    width: '100%',
    defaults: {
        flex: 1,
    },

    // controller: 'memberpersonalinfocontroller',



    items: [

        {
            // columnWidth: 0.25,
            cls: 'btn-box col-12 col-sm-6 col-md-4',
            margin: '0 0 0 20',
            xtype: 'widget-4tabs',
            containerColor: 'magenta',
            userCls: 'big-33 small-50',
            bind:{  
                data: {
                    icon: 'suitcase',
                    amount: '{sponsorMemberSummary.sponsorsCount}',
                    type: 'Sponsor'
                }
            }
        },
        {
            // columnWidth: 0.25,
            cls: 'btn-box col-12 col-sm-6 col-md-4',
            margin: '0 0 0 20',
            xtype: 'widget-4tabs',
            containerColor: 'magenta',
            userCls: 'big-33 small-50',
            bind:{  
                data: {
                    icon: 'user',
                    amount: '{sponsorMemberSummary.membersCount}',
                    type: 'Members'
                },
                hidden:'{otherClients}'
            }
        },
        {
            // columnWidth: 0.25,
            cls: 'btn-box col-12 col-sm-6 col-md-4',
            margin: '0 0 0 20',
            xtype: 'widget-4tabs',
            containerColor: 'magenta',
            userCls: 'big-33 small-50',
            bind:{                
                data: {
                    icon: 'list',
                    amount: '{openTickets}',
                    type: 'Open tickets'
                }
            }
        },
        {
            // columnWidth: 0.25,
            cls: 'btn-box col-12 col-sm-6 col-md-4',
            margin: '0 20 0 20',
            xtype: 'widget-4tabs',
            containerColor: 'magenta',
            userCls: 'big-33 small-50',
            bind:{
                data: {
                    icon: 'money-bill',
                    amount: '{pendingClaims}',
                    type: 'Pending Benefits'
                }
            }
        }
    ]
});