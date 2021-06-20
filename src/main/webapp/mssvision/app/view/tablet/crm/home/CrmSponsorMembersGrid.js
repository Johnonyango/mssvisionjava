Ext.define('MssPhoenix.view.tablet.crm.home.CrmSponsorMembersGrid', {
    extend: 'MssPhoenix.view.widgets.Table',
    xtype:'crmsponsormembersgrid',
    
    store: {
        type: 'crmsponsormember'
    },
    
    height:300,

    columns: [
        { text: 'Sponsor Name', dataIndex: 'name', flex: 2 },
        { text: 'Members Count', dataIndex: 'count', flex: 1 },
    ]
});