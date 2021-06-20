Ext.define('MssPhoenix.view.tablet.principalofficer.home.Home', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',

    controller: 'pohomecontroller',
    items: [
        {
            xtype: 'container',
            padding: '15px',
            scrollable: true,
            defaults: {
                width: '100%'
            },
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [
                //Schemes
                {
                    margin: '0 0 0 0',
                    xtype: 'module',
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
                                    xtype: 'table',
                                    itemId:'mitablepo',
                                    minHeight: 200,
                                    layout: 'fit',
                                    plugins: {
                                        gridpagingtoolbar: true
                                    },
                                    store: {
                                        type: 'poscheme'
                                    },
                                    columns: [
                                        {
                                            text: 'SHEME ID',
                                            dataIndex: 'id',
                                            flex: 1
                                        },
                                        {
                                            text: 'SCHEME NAME',
                                            dataIndex: 'schemeName',
                                            flex: 2
                                        },
                                        {
                                            text: 'SCHEME TYPE',
                                            dataIndex: 'schemType',
                                            flex: 1
                                        },
                                        {
                                            text: 'SCHEME MODE',
                                            dataIndex: 'schemeMode',
                                            flex: 1
                                        },
                                        {
                                            text: 'CONTRIBUTION MODE',
                                            dataIndex: 'contribMode',
                                            flex: 1
                                        },
                                        {
                                            text: 'PRODUCT TYPE',
                                            dataIndex: 'productType',
                                            flex: 1,
                                            hidden: true
                                        },
                                        {
                                            text: 'DORMANCY COUNTER',
                                            dataIndex: 'dormancyCounter',
                                            flex: 1
                                        }
                                    ],

                                    listeners: {
                                        click: {
                                            element: 'element',
                                            fn: 'poViewSponsorsHome'
                                        },
                                    }
                                }
                            ]
                        }
                    ]
                },

                //recent ticktets
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
                                    html: '<h3>Recent Support Tickets</h3>',
                                    cls: 'module-head',
                                },
                            ]
                        },
                        {
                            cls: 'module-body',
                            xtype: 'container',
                            items: [{
                                xtype: 'crmrecentsupportticketsgrid'
                            }]
                        }
                    ]
                }
            ]
        }
    ]
});