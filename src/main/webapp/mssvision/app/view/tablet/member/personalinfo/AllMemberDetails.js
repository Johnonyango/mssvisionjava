Ext.define('MssPhoenix.view.tablet.member.personalinfo.AllMemberDetails', {
    extend: 'Ext.Container',

    // xtype: 'allmemberdetails',

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
                                    xtype: 'component',
                                    width: '50'
                                },
                                {
                                    xtype: 'component',
                                    html: `<h3>Member Details</h3>`
                                },
                            ]
                        },
                        // {
                        //     xtype: "memberformetl",
                        //     bind: {
                        //         style: {
                        //             'display': '{etlView}'
                        //         }
                        //     }
                        // },
                        {
                            xtype: "memberform",
                            // bind: {
                            //     style: {
                            //         'display': '{otherView}'
                            //     }
                            // } 
                        }
                        
                    ]
                }
            ]
        }]
});