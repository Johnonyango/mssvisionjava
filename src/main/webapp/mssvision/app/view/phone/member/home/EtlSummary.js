Ext.define('MssPhoenix.view.phone.member.home.EtlSummary', {
    extend: 'Ext.carousel.Carousel',

    xtype: 'etlmembersummaryphone',
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
                    amount:'{totalContributions}',
                    type: 'Contributions'
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
                    amount: '{totalReturns}',
                    type: 'Returns'
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
                    amount: '{totalWithdrawals}',
                    type: 'Withdrawals'
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
                    amount: '{totalBalances}',
                    type: 'Balances'
                }
            }
        },
    ]
});