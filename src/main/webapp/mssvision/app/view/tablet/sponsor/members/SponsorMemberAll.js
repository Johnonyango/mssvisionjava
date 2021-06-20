Ext.define('MssPhoenix.view.tablet.sponsor.members.SponsorMemberAll', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',

    xtype: 'sponsormemberall',
    controller:'membersponsorgridcontroller',
    items: [
        {
            xtype: 'container',
            padding: '15px',
            items: [
                {
                    xtype: 'tabpanel',
                    minHeight:400,
                    items: [
                        {
                            title: 'Members List',
                            items: [
                                {
                                    xtype: 'container',
                                    items: [
                                        {
                                            xtype: 'sponsormembers',
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Potential Members',
                            items: [
                                {
                                    xtype: 'container',
                                    items: [
                                        {
                                            xtype: 'sponsorpotentialmembersgrid',
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
});