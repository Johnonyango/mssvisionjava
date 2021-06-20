Ext.define('MssPhoenix.view.tablet.admin.Settings.FormsConfigurations.FormsConfig', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',
    controller: 'formsconfigcontroller',
    xtype: 'formsconfig',
    items: [{
        xtype: 'module',
        scrollable: true,
        padding: 15,
        items: [
            {
                xtype: 'tabpanel',
                minHeight: 500,
                items: [
                    {
                        title: 'Member Form',
                        items: [{
                            xtype: 'memberformconfig',
                        }]
                    },
                    {
                        title: "Beneficiary Form",
                        items: [{
                            xtype: 'beneficiaryformconfig',
                        }]
                    },
                ]
            }
        ]
    }]
});