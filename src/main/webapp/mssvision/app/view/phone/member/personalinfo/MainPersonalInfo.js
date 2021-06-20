Ext.define('MssPhoenix.view.phone.member.personalinfo.MainPersonalInfo', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',
    controller: 'memberpersonalinfocontroller',
    items: [{
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
                xtype: 'memberphone-personalinfo'
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
                        xtype: 'memberphone-beneficiarychart',
                        flex: 1,
                        margin:'0 0 0 0',
                    },
                    //beneficiary grid
                    {
                        margin:'30 0 0 0',
                        xtype: 'memberphone-beneficiary',
                        flex: 2
                    },
                ]
            },

        ]
    }]

});