Ext.define('MssPhoenix.view.phone.member.documents.MemberDocuments', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',

    controller: 'memberdocumentscontroller',
    viewModel: {
        data: {
            userId: null
        }
    },
    items: [{
        xtype: 'module',
        padding: '15px',
        items: [
            {
                xtype: 'list',
                fullscreen: true,
                grouped: false,
                itemTpl: '{title}',
                store: {
                    field: ['title', 'id'],
                    data: [
                        {title: 'Submitted Documents', id: 'membersubmitteddocs'},
                        {title: 'Unsubmitted Documents', id: 'membermissingdocuments'},
                        {title: 'Received Documents', id: 'memberreceiveddocs'},
                        {title: 'Uploaded Documents', id: 'memberuploadeddocs'}
                    ],
                },
                listeners: {
                    select: 'documentListSelected'
                }
            }
        ]
    }]
});