Ext.define('MssPhoenix.view.tablet.sponsor.members.SponsorPotentialMembersGrid', {
    extend: 'MssPhoenix.view.widgets.Table',

    xtype: 'sponsorpotentialmembersgrid',
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
        type: 'sponsorpotentialmember'
    },
    selectable: {
        columns: true,
        cells: true,
        checkbox: true,
        drag: true,
        mode: 'single',
        extensible: 'y'
    },
    items: [
        {
            xtype: 'toolbar',
            docked: 'top',
            default: {
                ui: 'action'
            },

            items: [{
                xtype: 'button',
                text: 'View Details',
                ui: 'action',
                handler: 'onViewButtonClick',
            }
            ],
        }
    ],
    columns: [
        { text: 'SPONSOR ID',  dataIndex: 'sponsorId', flex:1, hidden:true},
        { text: 'SPONSOR PROD NO',  dataIndex: 'sponsorProdNo', flex:1, hidden:true},
        { text: 'SPONSOR NAME',  dataIndex: 'sponsorName', flex:1, hidden:true},
        { text: 'MEMBER ID',  dataIndex: 'id', flex:1, hidden:true},
        { text: 'ID/PPT NUMBER',  dataIndex: 'idNo', flex:1, hidden:true},
        { text: 'MEMBER NO',  dataIndex: 'memberNo', flex:1,hidden:true},
        { text: 'MEMBER NAME',  dataIndex: 'name', flex:1},
        { text: 'DATE OF BIRTH', dataIndex: 'dob', flex:1},
        { text: 'AGE', dataIndex: 'age', flex:1},
        { text: 'SSNIT NO',  dataIndex: 'ssnit', flex:1,hidden:true},
        { text: 'CELL PHONE', dataIndex: 'cellPhone', flex:1},
        { text: 'EMAIL', dataIndex: 'email', flex:1,hidden:true},
        { text: 'DATE APPROVED', dataIndex: 'dateApproved', flex:1,hidden:true},
        { text: 'DATE DECLINED', dataIndex: 'dateDeclined', flex:1,hidden:true},
        { text: 'APPROVED', dataIndex: 'approved', flex:1,hidden:true},
        { text: 'REASON', dataIndex: 'declineReason', flex:1,hidden:true},
    ],
});
