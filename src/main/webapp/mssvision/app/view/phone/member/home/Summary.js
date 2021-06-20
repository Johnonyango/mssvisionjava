Ext.define('MssPhoenix.view.phone.member.home.Summary', {
    extend: 'Ext.carousel.Carousel',

    xtype: 'memberphone-summary',

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
            cls: 'btn-box',
            margin: '0 0 0 20',
            xtype: 'widget-4tabs',
            containerColor: 'magenta',
            userCls: 'big-33 small-50',
            bind:{
                data: {
                    icon: 'chart-bar',
                    amount:'{totalEe}',
                    type: 'Employee Account'
                }
            }
        },
        {
            cls: 'btn-box',
            margin: '0 0 0 20',
            xtype: 'widget-4tabs',
            containerColor: 'magenta',
            userCls: 'big-33 small-50',
            bind:{
                data: {
                    icon: 'chart-bar',
                    amount: '{totalEr}',
                    type: 'Employer Account'
                }
            }
        },
        {
            cls: 'btn-box',
            margin: '0 0 0 20',
            xtype: 'widget-4tabs',
            containerColor: 'magenta',
            userCls: 'big-33 small-50',
            bind:{
                data: {
                    icon: 'money-bill',
                    amount: '{totalOfTotals}',
                    type: 'Total Balances'
                }
            }
        },
    ]
});