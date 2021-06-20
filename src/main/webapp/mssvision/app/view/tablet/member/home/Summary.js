Ext.define('MssPhoenix.view.tablet.member.home.Summary', {
    extend: 'Ext.Container',
    xtype: 'membersummary',
    bodyStyle: { "background-color": "transparent" },
    layout: {
        type: 'hbox',
        align: 'stretch'
    },

    width: '100%',
    defaults: {
        flex: 1,
    },

    items: [

        {
            // columnWidth: 0.33,
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
            // columnWidth: 0.33,
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
            // columnWidth: 0.33,
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