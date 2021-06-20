Ext.define('MssPhoenix.view.tablet.principalofficer.dashboard.home.PoMenus', {
    extend: 'Ext.Container',

    xtype: 'pomenus',

    defaults: {
        xtype: 'button',
        width: '100%',
        margin: '5px'
    },

    items: [
        {
            bind: {
                style: {
                    'display': '{billsMenuActivated}'
                }
            },
            text: 'Billing',
            handler: 'poViewBilling'
        },
        {
            bind: {
                style: {
                    'display': '{membersMenuActivated}'
                }
            },
            text: 'Members',
            handler: 'poViewMembers'
        },
        {
            bind: {
                style: {
                    'display': '{receiptsMenuActivated}'
                }
            },
            text: 'Receipts',
            handler: 'poViewReceipts'
        },
        {
            bind: {
                style: {
                    'display': '{claimsMenuActivated}'
                }
            },
            text: 'Paid Claims',
            handler: 'poViewPaidClaims'
        },
        {
            bind: {
                style: {
                    'display': '{claimsMenuActivated}'
                }
            },
            text: 'All Claims',
            handler: 'poViewAllClaims'
        },
        {
            xtype: 'micombobox',
            queryMode: 'local',
            id: 'reports',
            displayField: 'name',
            name: 'reports',
            placeholder: 'select a report',
            valueField: 'id',
            margin: '0 0 0 5',
            listeners: {
                // specialkey: 'generateReports',
                select: 'onReportsSelected'
            },
            store: {
                fields: ['name', 'id'],
                data: [
                    {name: 'Claims Paid', id: 1},
                    {name: 'Contributions Paid', id: 2},
                    {name: 'Members Due To Retire', id: 3},
                    {name: 'Members above retirement age', id: 4},
                    {name: 'Members List', id: 5},
                ]
            }
        },
    ]
});