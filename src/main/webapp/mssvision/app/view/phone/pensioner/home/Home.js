Ext.define('MssPhoenix.view.phone.pensioner.home.Home', {
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
                    xtype: 'phonePensionerhomehighlights'
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
                    cls: 'module-body',
                    xtype: 'container',
                    items: [{
                        xtype: 'phonerecentpayrollsgrid'
                    }]
                },
                {
                    margin:'50 0 0 0',
                    xtype: 'container',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    items: [
                        //beneficiary chart
                        {
                            xtype: 'pensionerbeneficiarychart',
                            flex: 1,
                            margin:'0 0 0 20',
                        },
                        //beneficiary grid
                        {
                            margin:'0 0 0 0',
                            xtype: 'phonepensionerbeneficiary',
                            flex: 1
                        }
                    ]
                }
               

            ]

        }]
});