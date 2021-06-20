Ext.define('MssPhoenix.view.tablet.sponsor.members.MembersGrid', {
    extend: 'MssPhoenix.view.widgets.Table',

    xtype: 'sponsormembersgrid',
    height:500,
    layout:'fit',

    controller:'membersponsorgridcontroller',


    requires: [
        'Ext.grid.plugin.PagingToolbar'
    ],
    plugins: {
        gridpagingtoolbar: true
    },
    store: {
        type: 'sponsormember'
    },

    columns: [
        { text: 'MEMBER NUMBER',  dataIndex: 'memberNo', flex:1},
        { text: 'MEMBER NAME',  dataIndex: 'name', flex:1},
        { text: 'ID NUMBER',  dataIndex: 'idNo', flex:1},
        { text: 'DATE OF BIRTH',  dataIndex: 'dob', flex:1},
        { text: 'DATE OF JOINING', dataIndex: 'dateJoinedScheme', flex:1},
        { text: 'STATUS', dataIndex: 'mbshipStatus', flex:1}
    ],
    listeners: {
        click: {
            element: 'element',
            fn: 'onSponsorViewMemberDetailsButtonClick'
        }
    },
});
