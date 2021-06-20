Ext.define('MssPhoenix.view.tablet.admin.EmailTemplates.EmailTemplates', {
    extend: 'Ext.Container',

    xtype: 'emailtemplates',
    controller: 'emailtemplatescontroller',

    items: [
        {
            xtype: 'toolbar',
            items: [
                {
                    text: 'Add/Edit',
                    handler: 'openTemplates',
                    ui: 'action'
                }
            ]
        },
        {
            xtype: 'emailtemplatesgrid'
        }
    ]
});