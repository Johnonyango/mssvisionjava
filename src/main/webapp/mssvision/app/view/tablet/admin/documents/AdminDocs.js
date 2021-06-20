Ext.define('MssPhoenix.view.tablet.admin.documents.AdminDocs', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',

    // Uncomment to give this component an xtype 
    xtype: 'admindocs',

    items: [
        {
            xtype: 'container',
            padding: 15,
            scrollable: true,
            items: [
                {
                    title: 'Uploaded Files',
                    xtype: 'adminuploadeddocuments',
                },
            ]
        }
    ]
});