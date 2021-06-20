Ext.define('MssPhoenix.view.tablet.principalofficer.costcenters.CostCentersGrid', {
    extend: 'MssPhoenix.view.widgets.Table',

    xtype: 'costcentersgrid',
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
            text: 'SPONSOR ID',
            dataIndex: 'id',
            flex: 1
        },
        {
            text: 'SPONSOR REF',
            dataIndex: 'refNo',
            flex: 1
        },
        {
            text: 'SCHEME ID',
            dataIndex: 'schemeId',
            flex: 1,
            // hidden: true
        },
        {
            text: 'SPONSOR NO',
            dataIndex: 'sponsorNo',
            flex: 1,
            hidden: true
        },
        {
            text: 'SPONSOR NAME',
            dataIndex: 'name',
            flex: 3
        },
        {
            text: 'Application Date',
            dataIndex: 'applicationDate',
            flex: 1
        },
        {
            text: 'Application Date',
            dataIndex: 'applicationDate',
            flex: 1
        },
    ],
    listeners: {
        click: {
            element: 'element',
            fn: 'poShowDashboard'
        }
    }
});