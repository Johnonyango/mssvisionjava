Ext.define('MssPhoenix.view.phone.sponsor.members.MembersGrid', {
    extend: 'MssPhoenix.view.widgets.Table',

    xtype: 'sponsormembersgridphone',
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
        { text: 'Member Number',  dataIndex: 'memberNo', flex:1,hidden:true},
        { text: 'Member Name',  dataIndex: 'name', flex:1},
        { text: 'Id Number',  dataIndex: 'idNo', flex:1,hidden:true},
        { text: 'Date Of Birth',  dataIndex: 'dob', flex:1,hidden:true},
        { text: 'Date Of Joining', dataIndex: 'dateJoinedScheme', flex:1,hidden:true},
        { text: 'Status', dataIndex: 'mbshipStatus', flex:1}
    ],
});
