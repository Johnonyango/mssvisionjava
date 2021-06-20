Ext.define('MssPhoenix.view.phone.member.documents.ReceivedDocuments', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',

    controller: 'memberdocumentscontroller',
    items: [
        {
            xtype: 'module',
            items: [
                {
                    xtype: 'memberphone-schemedocuments'
                }
            ]
        }
    ]
});