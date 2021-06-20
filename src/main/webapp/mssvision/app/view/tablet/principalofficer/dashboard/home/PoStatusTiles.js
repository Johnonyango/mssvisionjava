Ext.define('MssPhoenix.view.tablet.principalofficer.dashboard.home.PoStatusTiles', {
    extend: 'Ext.Container',

    xtype: 'postatustiles',
    cls: 'row',
    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    width: '100%',
    defaults: {
        flex: 1,
    },
    items: [

        {
            columnWidth: 0.25,
            cls: 'btn-box',
            margin: '0 0 0 20',
            xtype: 'widget-4tabs',
            containerColor: 'magenta',
            bind: {
                data: {
                    icon: 'users',
                    amount: '{sponsorMemberandPensionerCounts.memberCount}',
                    type: 'Members'
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
                data: {
                    icon: 'user',
                    amount: '{sponsorMemberandPensionerCounts.newMembers}',
                    type: 'New Members {currentYear}'
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
                data: {
                    icon: 'user',
                    amount: '{sponsorMemberandPensionerCounts.dueForRetirement}',
                    type: 'Members to retire {currentYear}'
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
                data: {
                    icon: 'user',
                    amount: '{sponsorMemberandPensionerCounts.leavers}', //DO UPDATE HERE
                    type: 'Leavers'
                }
            }
        }
    ]
});