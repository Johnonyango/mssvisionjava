Ext.define('MssPhoenix.view.tablet.principalofficer.registeredmembers.RegisteredMemberDetails', {
    extend: 'Ext.Container',

    xtype: 'registeredmemberdetails',
    controller: 'registeredmemberscontroller',

    viewModel: {
        data: {
            numAttachedDocs: ''
        }
    },

    items: [
        {
            xtype: 'container',
            padding: '15px',
            items: [
                {
                    xtype: 'toolbar',
                    items: [
                        {
                            iconCls: 'fa fa-arrow-left',
                            text: 'Back',
                            handler: function () {
                                Ext.util.History.back()
                            },
                        },
                        {
                            xtype: 'component',
                            maxWidth: "35%",
                            margin: '0 0 0 20',
                            bind: {
                                html: '{iconInfo} <span style="color: #002c65; font-weight: 700">Selected member details</span>'
                            }
                        },
                    ]
                },
                {
                    xtype: 'container',
                    scrollable: true,
                    maxHeight: 450,
                    items: [
                        {
                            xtype: 'registeredmemberdetailsform'
                        }
                    ]
                }
            ]
        }
    ]
});