Ext.define('MssPhoenix.view.tablet.member.documents.DocumentsGrid', {
    extend: 'MssPhoenix.view.widgets.Table',
    
    xtype : 'memberdocumentsgrid', 
    
    store: {
        type: 'membersubmitteddocuments'
    },

    minHeight: 200,
    
    columns: [
        { text: 'Document Name', dataIndex: 'name' , flex:3},
        { text: 'Owner', dataIndex: 'checkListOwner', flex:1 },
        { text: 'Checklist Type', dataIndex: 'checklistType', flex:1 },
        { text: 'Beneficiary Name', dataIndex: 'beneficiary', flex:1},
        { text: 'Relationship', dataIndex: 'relationshipType',flex:1 },
        { text: 'Mandatory', dataIndex: 'mandatory', flex:1 },
        { text: 'Comments', dataIndex: 'comments',flex:1 ,hidden:true},
    ],

    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        displayMsg: 'Display records {0} - {1} of {2}',
        emptyMsg: 'No Record to display'
    },
});