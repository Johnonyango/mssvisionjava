Ext.define('MssPhoenix.view.tablet.principalofficer.personalinfo.MainPersonalInfo', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',

    controller: 'podetailscontroller',

    xtype : 'podetails', 

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
                    xtype: 'popersonalinfo'
                }
            ]
        }
    ]

});