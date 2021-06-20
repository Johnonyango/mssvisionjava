Ext.define('MssPhoenix.view.tablet.principalofficer.registeredmembers.RegisteredMembersGrid', {
    extend: 'MssPhoenix.view.widgets.Table',

    xtype: 'registeredmembersgrid',

    store: {
        type: 'registeredmembers'
    },

    minHeight: 200,
    layout: 'fit',
    plugins: {
        gridpagingtoolbar: true
    },
    scrollable: true,

    selectable: {
        columns: true,
        checkbox: true,
        extensible: 'y',
        mode: 'single'
    },

    columns: [
        {
            text: 'FIRST NAME',
            dataIndex: 'firstname',
            flex: 1
        },
        {
            text: 'LAST NAME',
            dataIndex: 'lastname',
            flex: 1
        },
        {
            text: 'GENDER',
            dataIndex: 'gender',
            flex: 1
        },
        {
            text: 'PHONE NUMBER',
            dataIndex: 'phoneNumber',
            flex: 1
        },
        {
            text: 'POSTAL ADDRESS',
            dataIndex: 'postalAddress',
            flex: 1
        },
        {
            text: 'SCHEME NAME',
            dataIndex: 'schemeName',
            flex: 1
        },
        {
            text: 'SPONSOR NAME',
            dataIndex: 'sponsorName',
            flex: 1,
        },
        {
            text: 'DATE REGISTERED',
            dataIndex: 'shortDate',
            flex: 1,
        },
    ],

    listeners: {
        click: {
            element: 'element',
            fn: 'viewMemberDetails'
        },
    }
});