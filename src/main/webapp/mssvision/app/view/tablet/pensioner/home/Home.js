Ext.define('MssPhoenix.view.tablet.pensioner.home.Home', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',

    xtype: 'pensionerhome',

    controller: "homehighlightscontroller",
    viewModel: 'pensionerhomevewmodel',

    items: [
        {
            xtype: 'container',
            padding: '15px',
            scrollable: true,
            width: '100%',

            defaults: {
                width: '100%'
            },
            layout: {
                type: 'vbox',
                align: 'stretch'
            },

            items: [

                //widgets here
                

                {
                    xtype: 'pensionerhomehighlights'
                },

                //button
                {
                    margin: '10 0 0 0',
                    xtype: 'toolbar',
                    cls: 'module-head',
                    style: {
                        'background-color': 'transparent'
                    },
                    // items: [
                    //     '->',
                    //     {
                    //         text: 'View Details'
                    //     },
                    //     // ''
                    // ]
                },

                //bar chart
                {
                    xtype: 'recentpayrolls'
                },
                {
                    margin:'50 0 0 0',
                    xtype: 'container',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        //beneficiary grid
                        {
                            margin:'0 0 0 0',
                            xtype: 'pensionerbeneficiary',
                            flex: 2
                        },
                        //beneficiary chart
                        {
                            xtype: 'pensionerbeneficiarychart',
                            flex: 1,
                            margin:'0 0 0 20',
                        },
                    ]
                }
               

            ]

        }]
});