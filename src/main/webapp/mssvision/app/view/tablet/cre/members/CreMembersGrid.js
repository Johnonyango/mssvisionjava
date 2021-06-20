Ext.define('MssPhoenix.view.tablet.cre.member.CrmMembersGrid', {
    extend: 'MssPhoenix.view.widgets.Table',
    xtype: 'cremembersgrid',
    minHeight: 456,
    layout: 'fit',
    plugins: {
        gridpagingtoolbar: true
    },
    store: {
        type: 'crmmember'
    },
    scrollable: true,
    columns: [
        {
            text: 'MEMBER NUMBER',
            dataIndex: 'memberNo',
            flex: 1
        },
        {
            text: 'MEMBER NAME',
            dataIndex: 'name',
            flex: 1
        },
        {
            text: 'ID NUMBER',
            dataIndex: 'idNo',
            flex: 1
        },
        {
            text: 'DATE OF BIRTH',
            dataIndex: 'dob',
            flex: 1
        },
        {
            text: 'DATE OF JOINING',
            dataIndex: 'dateJoinedScheme',
            flex: 1
        },
        {
            text: 'STATUS',
            dataIndex: 'mbshipStatus',
            flex: 1
        }
    ],
    listeners: {
        click: {
            element: 'element',
            fn: 'onCreViewMemberDetailsButtonClick'
        }
    }
});