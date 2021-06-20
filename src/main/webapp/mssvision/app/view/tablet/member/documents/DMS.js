Ext.define('MssPhoenix.view.tablet.member.documents.DMS', {
    extend: 'Ext.TabPanel',
    xtype: 'memberdms',
    height: 456,
    scrollable: true,
    items: [
        {
            title: 'Received Documents',
            items: [
                {
                    xtype: 'memberschemedocuments'
                }
            ]
        },
        {
            title: 'Uploaded Documents',
            items: [
                {
                    xtype: 'useruploadeddocuments',
                }
            ]
        }
    ]
});