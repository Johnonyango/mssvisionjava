Ext.define('MssPhoenix.view.tablet.principalofficer.sponsors.PoSponsorsGrid', {
    extend: 'MssPhoenix.view.widgets.Table',

    xtype: 'posponsorsgrid',
    plugins: {
        gridpagingtoolbar: true
    },
    store: {
        type: 'crmsponsor'
    },
    scrollable: true,
    minHeight: 256,
    columns: [
        {
            text: 'Employer ID',
            dataIndex: 'id',
            flex: 1
        },
        {
            text: 'Employer REF',
            dataIndex: 'employerRefNo',
            flex: 1
        },
        {
            text: 'SCHEME ID',
            dataIndex: 'schemeId',
            flex: 1,
            // hidden: true
        },
        {
            text: 'Employer Number',
            dataIndex: 'sponsorNo',
            flex: 1,
            hidden: true
        },
        {
            text: 'Employer Name',
            dataIndex: 'name',
            flex: 3
        }
    ],
    listeners: {
        click: {
            element: 'element',
            fn: 'poShowDashboard'
        }
    }
});