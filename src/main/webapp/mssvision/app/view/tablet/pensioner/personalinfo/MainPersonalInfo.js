Ext.define('MssPhoenix.view.tablet.pensioner.personalinfo.MainPersonalInfo', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',

    // xtype: 'pensionermainpersonalinfo',
    controller: 'pensionerdetailscontroller',
    items: [
        {
            xtype: 'container',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },

            scrollable: true,
            padding: '15px',
            width: '100%',
            defaults: {
                width: '100%'
            },

            items: [
                //details
                {
                    xtype: 'pensionerpersonalinfo'
                },

                //beneficiary chart
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
        }
    ]

});