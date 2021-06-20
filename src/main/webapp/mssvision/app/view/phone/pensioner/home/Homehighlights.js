Ext.define('MssPhoenix.view.phone.pensioner.home.Homehighlights', {
    extend: 'Ext.carousel.Carousel',

    xtype: 'phonePensionerhomehighlights',
    bodyStyle: { "background-color": "grey" },
    shadow: true,
    shadowColor: '#025b80',

    width: '100%',

    height: 200,

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
            bind: {
                data: {
                    icon: 'inbox',
                    amount: '{totalPayrolls}',
                    type: 'Payrolls'
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
            bind: {
                data: {
                    icon: 'inbox',
                    amount: '{totalPay}',
                    type: 'Total Pay'
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
            bind: {
                data: {
                    icon: 'money-bill',
                    amount: '{openTickets}',
                    type: 'Open Tickets'
                }
            }
        },
        // {
        //     // columnWidth: 0.33,
        //     cls: 'btn-box',
        //     margin: '0 0 0 20',
        //     xtype: 'widget-4tabs',
        //     containerColor: 'magenta',
        //     userCls: 'big-33 small-50',
        //     bind:{
        //         data: {
        //             icon: 'money-bill',
        //             amount: '{pendingCOE}',
        //             type: 'Pending C.O.E'
        //         }
        //     }
        // },

    ]
});