Ext.define('MssPhoenix.view.tablet.principalofficer.registeredmembers.RegisteredMembers', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',

    xtype: 'registeredmembers',
    controller: 'registeredmemberscontroller',
    items: [
        {
            xtype: 'container',
            padding: '15px',
            items: [
                {
                    xtype: 'tabpanel',
                    minHeight: 400,
                    items: [
                        {
                            title: 'New Registered Members',
                            items: [
                                {
                                    xtype: 'container',
                                    items: [
                                        {
                                            xtype: 'toolbar',
                                            cls: 'module-subhead',
                                            items: [
                                                {
                                                    xtype: 'component',
                                                    maxWidth: "35%",
                                                    margin: '0 0 0 20',
                                                    bind: {
                                                        html: '{iconInfo} <span style="color: #002c65; font-weight: 700">A list of members  registered through MSS awaiting approval</span>'
                                                    }
                                                },
                                                '->',
                                                {
                                                    iconCls: 'fa fa-redo',
                                                    handler: 'reloadMembersGrid',
                                                    ui: 'action'
                                                },
                                            ]
                                        },
                                        {
                                            xtype: 'registeredmembersgrid',
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Unapproved Member Details',
                            items: [
                                {
                                    xtype: 'container',
                                    items: [
                                        {
                                            xtype: 'toolbar',
                                            cls: 'module-subhead',
                                            items: [
                                                {
                                                    xtype: 'component',
                                                    maxWidth: "35%",
                                                    margin: '0 0 0 20',
                                                    bind: {
                                                        html: '{iconInfo} <span style="color: #002c65; font-weight: 700">A list of members  who have changed their details through portal</span>'
                                                    }
                                                },
                                                '->',
                                                {
                                                    iconCls: 'fa fa-redo',
                                                    handler: 'reloadStagedMembersGrid',
                                                    ui: 'action'
                                                },
                                            ]
                                        },
                                        {
                                            xtype: 'stagemembersgrid',
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Unapproved Beneficiary Details',
                            items: [
                                {
                                    xtype: 'stagedbeneficiaries',
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
});