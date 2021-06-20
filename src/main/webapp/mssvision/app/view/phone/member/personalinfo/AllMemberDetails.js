Ext.define('MssPhoenix.view.phone.member.personalinfo.AllMemberDetails', {
    extend: 'Ext.Container',

    title: 'Member Details',
    controller: 'allmemberdetailscontroller',
    viewModel:{
        type: 'formsviewmodel'
    },
    layout: 'fit',
    items: [
        {
            xtype: 'container',
            padding: '15px',
            scrollable: true,
            items: [
                {
                    xtype: 'module',
                    items: [
                        {
                            xtype: 'toolbar',
                            cls: 'module-subhead',
                            items: [
                                {
                                    iconCls: 'fa fa-arrow-left',
                                    text: 'Back',
                                    handler: 'goBack',
                                },
                                {
                                    xtype: 'label',
                                    width: '50'
                                },
                                {
                                    xtype: 'label',
                                    html: `<h3>Member Details</h3>`
                                },
                            ]
                        },
                        {
                            xtype: "memberformphone",
                        }
                    ]
                }
            ]
        }]
});