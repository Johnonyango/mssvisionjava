Ext.define('MssPhoenix.view.phone.member.home.HomeMobile', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',

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
                    xtype: 'membersummary'
                },

                //button
                {
                    margin: '10 0 0 0',
                    // id: 'btnRequestStatement',
                    xtype: 'toolbar',
                    cls: 'module-head',
                    style: {
                        'background-color': 'transparent'
                    },
                    items: [
                        '->',
                        {
                            text: 'Request Statement',
                            ui: 'action'
                        },
                        // ''
                    ]
                },

                //bar chart
                {
                    xtype: 'membersummarychart'
                },

                //
                {
                    margin: '10 0 0 0',
                    xtype: 'module',
                    items: [{
                        xtype: 'component',
                        html: '<h3>Recent Contributions</h3>',
                        cls: 'module-head'
                    },
                    {
                        cls: 'module-body',
                        xtype: 'container',
                        items: [{
                            xtype: 'membercontributionsgrid'
                        }]
                    }
                    ]
                },

                //
                {
                    margin: '20 0 0 0',
                    xtype: 'module',
                    scrollable: 'y',
                    maxHeight: 350,
                    items: [{
                        xtype: 'component',
                        html: '<h3>Last 5 Years Closing Balances</h3>',
                        cls: 'module-head',
                    },
                    {
                        cls: 'module-body',
                        xtype: 'container',
                        items: [{
                            xtype: 'memberclosingbalancesgrid'
                        }]
                    }
                    ]
                }

            ]

        }]
});