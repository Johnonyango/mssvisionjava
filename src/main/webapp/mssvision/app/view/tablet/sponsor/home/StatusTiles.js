Ext.define('MssPhoenix.view.tablet.sponsor.home.StatusTiles', {
    extend: 'Ext.container.Container',

    xtype: 'sponsorstatustiles',
    cls: 'row',
    //bodyStyle: { "background-color": "transparent" },
    layout: {
        type: 'vbox',
        align: 'stretch'
    },


    width: '100%',


    defaults: {
        flex: 1,
        width: '100%',
    },

    items: [
        {

            xtype: 'container',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            defaults: {
                flex: 1,
                width: '100%',
            },
            items: [
                {
                    columnWidth: 0.20,
                    cls: 'btn-box',
                    margin: '0 0 0 20',
                    xtype: 'widget-4tabs',
                    containerColor: 'magenta',
                    bind: {
                        style: {
                            'display': '{etlClient}'

                        },
                        data: {
                            icon: 'user',
                            amount: '{sponsorDashboard.active}',
                            type: 'Active Members'
                        }
                    }
                },
                {
                    columnWidth: 0.20,
                    cls: 'btn-box',
                    margin: '0 0 0 20',
                    xtype: 'widget-4tabs',
                    containerColor: 'magenta',
                    bind: {
                        style: {
                            'display': '{etlClient}'

                        },
                        data: {
                            icon: 'user',
                            amount: '{sponsorDashboard.inactive}',
                            type: 'Inactive Members'
                        }
                    }
                },

                {
                    columnWidth: 0.20,
                    cls: 'btn-box ',
                    margin: '0 0 0 20',
                    xtype: 'widget-4tabs',
                    containerColor: 'magenta',

                    bind: {
                        style: {
                            'display': '{etlClient}'

                        },
                        data: {
                            icon: 'user',
                            amount: '{sponsorDashboard.notified}',
                            type: 'Notified'
                        }
                    }

                },

                {
                    columnWidth: 0.20,
                    cls: 'btn-box',
                    margin: '0 0 0 20',
                    xtype: 'widget-4tabs',
                    containerColor: 'magenta',
                    bind: {
                        style: {
                            'display': '{etlClient}'

                        },
                        data: {
                            icon: 'user',
                            amount: '{sponsorDashboard.exited}',
                            type: 'Exited'
                        }
                    }


                },
                {
                    columnWidth: 0.20,
                    cls: 'btn-box',
                    margin: '0 20 0 20',
                    xtype: 'widget-4tabs',
                    containerColor: 'magenta',
                    bind: {
                        style: {
                            'display': '{etlClient}'

                        },
                        data: {
                            icon: 'user',
                            amount: '{sponsorDashboard.dueforRetirement}',
                            type: 'Due For Retirement'
                        }
                    }

                },
            ]

        },

        {
            xtype: 'container',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            defaults: {
                flex: 1,
                width: '100%',
            },
            items: [

                {
                    columnWidth: 0.25,
                    cls: 'btn-box',
                    margin: '0 20 0 20',
                    xtype: 'widget-4tabs',
                    containerColor: 'magenta',
                    bind: {
                        style: {
                            'display': '{etlClient}'

                        },
                        data: {
                            icon: 'user',
                            amount: '{sponsorDashboard.tpfaReceived}',
                            type: 'TPFA Received'
                        }
                    }

                },
                {
                    columnWidth: 0.25,
                    cls: 'btn-box',
                    margin: '0 20 0 20',
                    xtype: 'widget-4tabs',
                    containerColor: 'magenta',
                    bind: {
                        style: {
                            'display': '{etlClient}'

                        },
                        data: {
                            icon: 'user',
                            amount: '{sponsorDashboard.tpfaRequested}',
                            type: 'TPFA Requested'
                        }
                    }

                },

                {
                    columnWidth: 0.25,
                    cls: 'btn-box',
                    margin: '0 20 0 20',
                    xtype: 'widget-4tabs',
                    containerColor: 'magenta',
                    bind: {
                        style: {
                            'display': '{etlClient}'

                        },
                        data: {
                            icon: 'user',
                            amount: '{sponsorDashboard.tpfaNotQualified}',
                            type: 'TPFA Not Qualified'
                        }
                    }

                },
                {
                    columnWidth: 0.25,
                    cls: 'btn-box',
                    margin: '0 20 0 20',
                    xtype: 'widget-4tabs',
                    containerColor: 'magenta',
                    bind: {
                        style: {
                            'display': '{etlClient}'

                        },
                        data: {
                            icon: 'user',
                            amount: '{sponsorDashboard.newMembersInCurrYear}',
                            type: 'New Members for the Year {currentYear}'
                        }
                    }

                }
            ]
        },

        {
            xtype: 'container',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            defaults: {
                flex: 1,
                width: '100%',
            },
            items: [

                {
                    columnWidth: 0.25,
                    cls: 'btn-box',
                    margin: '0 0 0 20',
                    xtype: 'widget-4tabs',
                    containerColor: 'magenta',
                    bind: {
                        style: {
                            'display': '{otherClients}'

                        },
                        data: {

                            icon: 'user',
                            amount: '{sponsorMemberandPensionerCounts.memberCount}',
                            type: 'Active Members'
                        }
                    }
                },
                {
                    columnWidth: 0.25,
                    cls: 'btn-box ',
                    margin: '0 0 0 20',
                    xtype: 'widget-4tabs',
                    containerColor: 'magenta',
                    bind: {
                        style: {
                            'display': '{otherClients}'

                        },
                        data: {
                            icon: 'user',
                            amount: '{sponsorMemberandPensionerCounts.newMembers}',
                            type: 'New Members For the Year {currentYear}'
                        }
                    }

                },

                {
                    columnWidth: 0.25,
                    cls: 'btn-box',
                    margin: '0 0 0 20',
                    xtype: 'widget-4tabs',
                    containerColor: 'magenta',
                    bind: {
                        style: {
                            'display': '{otherClients}'

                        },
                        data: {
                            icon: 'user',
                            amount: '{sponsorMemberandPensionerCounts.dueForRetirement}',
                            type: 'Members due to Retire for the Year {currentYear}'
                        }
                    }


                },
            ]
        }

        //OThers


    ]
});