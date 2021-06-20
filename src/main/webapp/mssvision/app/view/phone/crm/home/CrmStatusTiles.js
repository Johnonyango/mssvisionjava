Ext.define('MssPhoenix.view.phone.crm.home.CrmStatusTiles', {
    extend: 'Ext.carousel.Carousel',

    xtype: 'crmphonestatustiles',
    bodyStyle: { "background-color": "grey" },
    shadow:true,
    shadowColor:'#025b80',

    width: '100%',

    height:200,

    defaults: {
        flex: 1,
    },
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
                    type: 'Pending Claims'
                }
            }
        }
    ]
});