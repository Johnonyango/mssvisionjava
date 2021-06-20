Ext.define('MssPhoenix.view.phone.pensioner.personalinfo.MainPersonalInfo', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',

    // xtype: 'pensionermainpersonalinfo',
    controller: 'pensionerdetailscontroller',
    scrollable: true,
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
                    xtype: 'phonepensionerpersonalinfo',
                    margin:'20 0 0 0',

                },

                //beneficiary chart
                {
                    xtype: 'pensionerbeneficiarychart',
                    margin:'20 0 0 20',
                },
                //beneficiary grid
                {
                    margin:'20 0 0 0',
                    xtype: 'phonepensionerbeneficiary',
                }
            ]
        }
    ]

});