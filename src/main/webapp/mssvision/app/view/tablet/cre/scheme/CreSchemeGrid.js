Ext.define('MssPhoenix.view.tablet.cre.scheme.CreSchemeGrid', {
    extend: 'MssPhoenix.view.widgets.Table',
    xtype: 'creschemegrid',
    minHeight: 200,
    layout: 'fit',
    plugins: {
        gridpagingtoolbar: true
    },
    store: {
        type: 'scheme'
    },
    scrollable: true,
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
            fn: 'onViewSponsorsButtonClick'
        },
    }
});