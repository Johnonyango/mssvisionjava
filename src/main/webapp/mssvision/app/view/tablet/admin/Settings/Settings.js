Ext.define('MssPhoenix.view.tablet.admin.Settings.Settings', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',
    xtype: 'adminsettings',
    items: [{
        xtype: 'module',
        scrollable: true,
        padding: 15,
        items: [
            {
                xtype: 'tabpanel',
                minHeight: 650,
                items: [
                    {
                        title:'Permissions',
                        items: [{
                            xtype: 'modulepermissions',
                        }]
                    },
                    {
                        title:'Profiles',
                        items: [{
                            xtype: 'adminprofiles',
                        }]
                    },
                    {
                        title:'Email Templates',
                        items: [{
                            xtype: 'emailtemplates',
                        }]
                    },
                    {
                        title:'Forms Configuration',
                        items: [{
                            xtype: 'formsconfig',
                        }]
                    },
                    
                ]
            }
        ]
    }],
});