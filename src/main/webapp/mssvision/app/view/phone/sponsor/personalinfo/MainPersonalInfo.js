Ext.define('MssPhoenix.view.phone.sponsor.personalinfo.MainPersonalInfo', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',

    controller: 'sponsordetailscontroller',

    xtype : 'sponsordetails', 

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
                {
                    xtype: 'sponsorpersonalinfophone'
                }
            ]
        }
    ]

});