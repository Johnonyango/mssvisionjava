Ext.define('MssPhoenix.view.tablet.cre.home.CreHome', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',

    controller:'crehomecontroller',
    items: [
        {
            xtype: 'container',
            padding: '15px',
            scrollable: true,
            items: [
                {
                    xtype: 'container',
                    width: '100%',

                    defaults: {
                        width: '100%'
                    },
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    items: [
                        //status tiles
                        // {
                        //     margin: '20 0 0 0',
                        //     xtype: 'cre-statustiles'
                        // },

                        //Schemes
                        {
                            margin: '0 0 0 0',
                            xtype: 'module',
                            // scrollable: 'y',
                            maxHeight: 450,
                            items: [
                                {
                                    xtype: 'toolbar',
                                    items: [
                                        {
                                            xtype: 'component',
                                            html: '<h3>Schemes</h3>',
                                            cls: 'module-head',
                                        },
                                    ]
                                },
                                {
                                    cls: 'module-body',
                                    xtype: 'container',
                                    items: [
                                        {
                                            xtype: 'creschemegrid',
                                        }
                                    ]
                                }
                            ]
                        },

                        //claims
                        {
                            margin: '20 0 0 0',
                            xtype: 'module',
                            scrollable: 'y',
                            maxHeight: 350,
                            items: [
                                {
                                    xtype: 'toolbar',
                                    items: [
                                        {
                                            xtype: 'component',
                                            html: '<h3>Recent Claims</h3>',
                                            cls: 'module-head',
                                        },
                                    ]
                                },
                                {
                                    cls: 'module-body',
                                    xtype: 'container',
                                    items: [{
                                        xtype: 'crmrecentclaimssgrid'
                                    }]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
});