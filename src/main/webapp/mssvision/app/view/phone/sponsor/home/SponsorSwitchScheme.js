Ext.define('MssPhoenix.view.phone.sponsor.home.SponsorSwitchScheme', {
    extend: 'MssPhoenix.view.widgets.Window',
    xtype: 'sponsorswitchschemewin',
    controller: 'sponsorswitchschemecontroller',

    width: 320,
    minHeight: 200,
    closable: false,

    width: 320,
    closable: true,
    title:'Switch Scheme',
    items: [{
        xtype: 'module',
        items: [
            {
                xtype: 'container',
                cls: 'module-body',
                items: [
                    {
                        xtype: 'selectbox',
                        label: 'Select Scheme',
                        name: 'sponsorschemesbox',
                        store: {
                            type: 'sponsorschemes'
                        },
                        displayField: 'schemeName',
                        valueField: 'id',
                        value:'Select scheme',
                        listeners: {
                            change: 'onSwitchScheme'
                        }
                    },
                ]
            }
     
        ]
    }],

});