Ext.define('MssPhoenix.view.tablet.sponsor.home.Home', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',
    xtype: 'sponsorhome',
    reference: 'sponsorhome',
    controller: 'sponsorhomecontroller',
    viewModel: 'sponsorhomevmodel',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    margin: '0 10 0 0',
    defaults: {
        border: false
    },
    cls: 'mainpanel',
    scrollable: 'y',
    items: [

        {
            xtype: 'sponsorstatustiles'
        },
        {
            xtype: 'sponsorcontributionschart'
        },

        {
            xtype: 'sponsorbills',
            bind: {
                style: {
                    'display': '{otherClients}'

                }
            }
        },
        {
            xtype: 'sponsorbillsetlview',
            bind: {
                style: {
                    'display': '{etlClient}'
                }
            }
        },
    ]
});