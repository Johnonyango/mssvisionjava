Ext.define('MssPhoenix.view.tablet.principalofficer.dashboard.memberdetails.MemberDetails', {
    extend: 'Ext.Container',

    layout: {
        type: 'vbox'
    },
    defaults: {
        width: '100%',
        height: '100%',
    },

    controller: 'pomemberdetailscontroller',

    items: [
        {
            xtype: 'container',
            padding: '15px',
            items: [
                {
                    xtype: 'toolbar',
                    cls: 'module-subhead',
                    items: [
                        {
                            iconCls: 'fa fa-arrow-left',
                            text: 'Back',
                            handler: 'goBack',
                            ui: 'action'
                        },
                        {
                            xtype: 'component',
                            margin: '0 0 0 10',
                            html: '<h3>Member Details</h3>'
                        },
                    ]
                },
                {
                    xtype: 'tabpanel',
                    margin: '20 0 0 0',
                    minHeight: 500,
                    items: [
                        {
                            title: 'Member Details',
                            items: [
                                {
                                    xtype: 'container',
                                    cls: 'module-body',
                                    scrollable: true,
                                    height: '100%',
                                    items: [
                                        {
                                            xtype: 'membermainpersonalinfo'
                                        }
                                    ]
                                },
                            ]
                        },
                        // {
                        //     title: 'Contributions',
                        //     items: [
                        //         {
                        //             xtype: 'container',
                        //             cls:'module-body',
                        //             height:'100%',
                        //             items:[
                        //                 {
                        //                     xtype: 'membercontributionsgrid'
                        //                 }
                        //             ]
                        //         },
                        //     ]
                        // },
                        {
                            title: 'Balances',
                            items: [
                                {
                                    xtype: 'container',
                                    cls: 'module-body',
                                    height: '100%',
                                    items: [
                                        {
                                            xtype: 'memberbalances'
                                        }
                                    ]
                                },
                            ]
                        },
                        {
                            title: 'Claims',
                            items: [
                                {
                                    xtype: 'container',
                                    cls: 'module-body',
                                    height: '100%',
                                    items: [
                                        {
                                            xtype: 'memberclaims'
                                        }
                                    ]
                                },
                            ]
                        },
                        {
                            title: 'Benefits Projection',
                            items: [
                                {
                                    xtype: 'container',
                                    cls: 'module-body',
                                    scrollable: true,
                                    items: [
                                        {
                                            controller: 'memberprojectionscontroller',
                                            viewModel: 'memberprojectionsviewmodel',
                                            xtype: 'benefitsprojection'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Reports',
                            items: [
                                {
                                    xtype: 'container',
                                    cls: 'module-body',
                                    scrollable: true,
                                    layout: {
                                        type: 'hbox',
                                        align: 'stretch'
                                    },
                                    defaults: {
                                        xtype: 'container',
                                        flex: 1,
                                        layout: 'fit'
                                    },
                                    items: [
                                        {
                                            items:[]
                                        },
                                        {
                                            layout:{
                                                type:'vbox'
                                            },
                                            items:[
                                                {
                                                    xtype:'button',
                                                    text: 'Member Statement',
                                                    handler: 'showRequestStatementWin'
                                                },
                                                {
                                                    margin:'20 0 0 0',
                                                    xtype:'button',
                                                    text: 'Balances History',
                                                    handler: 'showMemberBalancesReport'
                                                },
                                                {
                                                    margin:'20 0 0 0',
                                                    xtype:'button',
                                                    text: 'Contributions History',
                                                    handler: 'showMemberContributionReport'
                                                },
                                            ]
                                        },
                                        {
                                            items:[]
                                        },
                                    ]
                                }
                            ]
                        },
                    ]
                }
            ]
        }
    ]
});