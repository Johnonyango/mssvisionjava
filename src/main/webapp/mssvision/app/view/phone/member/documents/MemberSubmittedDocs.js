Ext.define('MssPhoenix.view.phone.member.documents.MemberSubmittedDocs', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',
    controller: 'memberdocumentscontroller',
    items: [
        {
            xtype:'module',
            padding: '15px',
            items: [
                {
                    xtype: 'container',
                    minHeight: 300,
                    scrollable: true,
                    items: [{
                        xtype: 'toolbar',
                        items: [
                            '->',
                            {
                                iconCls: 'fa fa-redo',
                                handler: 'reloadSubmittedDocs',
                                ui: 'action'
                            },
                        ]
                    },
                        {
                            xtype: 'memberphone-documentsgrid'
                        }
                    ]
                }
            ]
        }
    ]
});