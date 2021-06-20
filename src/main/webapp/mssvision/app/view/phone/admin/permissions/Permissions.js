Ext.define('MssPhoenix.view.phone.admin.permissions.Permissions', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',
    controller: 'permissionscontroller',
    items: [{
        xtype: 'module',
        scrollable: true,
        padding:15,
        items: [
            {
                xtype: 'tabpanel',
                minHeight: 500,
                items: [
                    {
                        title:'Mbr',
                        items: [{
                            xtype: 'phonememberpermissions',
                        }]
                    },
                    {
                        title: "Spr",
                        items: [{
                            xtype: 'phonesponsorpermissions',
                        }]
                    },
                    {
                        title: "Pnr",
                        items: [{
                            xtype: 'phonepensionerpermissions',
                        }]
                    },
                    {
                        title: "CRM",
                        items: [{
                            xtype: 'phonecrmpermissions',
                        }]
                    },
                    {
                        title: "CRE",
                        items: [{
                            xtype: 'phonecrepermissions',
                        }]
                    },

                ]
            }
        ]
    }]
});