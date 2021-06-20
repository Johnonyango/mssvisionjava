Ext.define('MssPhoenix.view.phone.sponsor.home.StatusTiles', {
    extend: 'Ext.carousel.Carousel',

    xtype: 'sponsorstatustilesphone',
    bodyStyle: { "background-color": "grey" },
    shadow:true,
    shadowColor:'#025b80',

    width: '100%',

    height:200,

    defaults: {
        flex: 1
    },
    items: [

        {
            //columnWidth: 0.25,
            cls: 'btn-box col-12 col-sm-6 col-md-4',
            margin: '0 0 0 20',
            xtype: 'widget-4tabs',
            containerColor: 'magenta',
            bind:{  
            data: {
                icon: 'user',
                amount: '{sponsorMemberCount}',
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
            bind:{
                data: {
                    icon: 'user',
                    amount: '{sponsorMemberandPensionerCounts.newMembers}',
                    type: 'New Members For the Year {currentYear}'
                }
            }
            
        },
        
        {
            //columnWidth: 0.25,
            cls: 'btn-box col-12 col-sm-6 col-md-4',
            margin: '0 0 0 20',
            xtype: 'widget-4tabs',
            containerColor: 'magenta',
            bind:{
                data: {
                    icon: 'user',
                    amount: '{sponsorMemberandPensionerCounts.dueForRetirement}',
                    type: 'Members due to Retire for the Year {currentYear}'
                }
            }
          
            
        },
        {
            //columnWidth: 0.25,
            cls: 'btn-box col-12 col-sm-6 col-md-4',
            margin: '0 0 0 20',
            xtype: 'widget-4tabs',
            containerColor: 'magenta',
            bind:{
                data: {
                    icon: 'user',
                    amount: '{sponsorMemberandPensionerCounts.pensioners}',
                    type: 'Pensioners'
                }
           }
            
        }
    ]
});


