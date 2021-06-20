Ext.define('MssPhoenix.view.tablet.admin.permissions.Permissions', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',
    controller: 'permissionscontroller',
    xtype: 'modulepermissions',
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
                        title: 'Member',
                        items: [{
                            xtype: 'memberpermissions',
                        }]
                    },
                    {
                        title: "Principal Officer",
                        items: [{
                            xtype: 'popermissions',
                        }]
                    },
                    {
                        title: "Sponsor",
                        items: [{
                            xtype: 'sponsorpermissions',
                        }]
                    },
                    {
                        title: "Billing Officer",
                        items: [{
                            xtype: 'billingofficerpermissions',
                        }]
                    },
                    {
                        title: "Claims Officer",
                        items: [{
                            xtype: 'claimsofficerpermissions',
                        }]
                    },
                    {
                        title: "Claims Reviewer",
                        items: [{
                            xtype: 'claimsreviewerpermissions',
                        }]
                    },
                    {
                        title: "Pensioner",
                        items: [{
                            xtype: 'pensionerpermissions',
                        }]
                    },
                    {
                        title: "CRM",
                        items: [{
                            xtype: 'crmpermissions',
                        }]
                    },
                    {
                        title: "CRE",
                        items: [{
                            xtype: 'crepermissions',
                        }]
                    },
                ]
            }
        ]
    }]
});