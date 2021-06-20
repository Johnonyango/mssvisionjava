Ext.define('MssPhoenix.view.phone.member.documents.UploadedDocuments', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',

    controller: 'memberdocumentscontroller',
    
    items: [
        {
            xtype: 'module',
            padding: '15px',
            items: [
                {
                    xtype: 'useruploadeddocsgrid',
                }
            ]
        }
    ]
});