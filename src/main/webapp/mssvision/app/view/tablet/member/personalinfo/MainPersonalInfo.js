Ext.define('MssPhoenix.view.tablet.member.personalinfo.MainPersonalInfo', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',

    xtype: 'membermainpersonalinfo',
    controller: 'memberpersonalinfocontroller',
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
                    xtype: 'memberpersonalinfo'
                },

                {
                    margin: '50 0 0 0',
                    xtype: 'container',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        //beneficiary grid
                        {
                            margin: '0 0 0 0',
                            xtype: 'memberbeneficiary',
                            flex: 2
                        },
                        //beneficiary chart
                        {
                            xtype: 'memberbeneficiarychart',
                            flex: 1,
                            margin: '0 0 0 20',
                        },
                    ]
                },

            ]
        }]

});