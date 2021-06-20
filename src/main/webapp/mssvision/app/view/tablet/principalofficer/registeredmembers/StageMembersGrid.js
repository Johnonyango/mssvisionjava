Ext.define('MssPhoenix.view.tablet.principalofficer.registeredmembers.StageMembersGrid', {
    extend: 'MssPhoenix.view.widgets.Table',

    xtype : 'stagemembersgrid',

    store: {
        type: 'stagedmembers'
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
            text: 'MEMBER ID',
            dataIndex: 'memberId',
            flex: 1
        },
        {
            text: 'FIRST NAME',
            dataIndex: 'fname',
            flex: 1
        },
        {
            text: 'LAST NAME',
            dataIndex: 'lastName',
            flex: 1
        },
        {
            text: 'DATE SUBMITTED',
            dataIndex: 'shortCreatedAt',
            flex: 1,
        },
    ],

    listeners: {
        click: {
            element: 'element',
            fn: 'viewStagedMemberDetails'
        },
    }
});