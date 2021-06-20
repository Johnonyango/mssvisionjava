Ext.define('MssPhoenix.view.tablet.cre.memberdetails.MemberDetails', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',

    layout: {
        type: 'vbox'
    },
    defaults: {
        width: '100%',
        height: '100%',
    },

    controller: 'memberdetailscontroller',

    items: [
        {
            xtype: 'container',
            padding: '15px',
            items: [
                {
                    xtype: 'toolbar',
                    cls: 'module-subhead',
                    items: [
                        {
                            iconCls: 'fa fa-arrow-left',
                            text: 'Back',
                            handler: 'goBack',
                            ui: 'action'
                        },
                        {
                            xtype: 'component',
                            margin: '0 0 0 10',
                            html: '<h3>Member Details</h3>'
                        },
                    ]
                },
                {
                    xtype: 'tabpanel',
                    margin: '20 0 0 0',
                    minHeight: 500,
                    items: [
                        {
                            title: 'Member Details',
                            items: [
                                {
                                    xtype: 'container',
                                    cls:'module-body',
                                    scrollable:true,
                                    height:'100%',
                                    items:[
                                        {
                                            xtype: 'membermainpersonalinfo'
                                        }
                                    ]
                                },
                            ]
                        },
                        {
                            title: 'Contributions',
                            items: [
                                {
                                    xtype: 'container',
                                    cls:'module-body',
                                    height:'100%',
                                    items:[
                                        {
                                            xtype: 'membercontributionsgrid'
                                        }
                                    ]
                                },
                            ]
                        },
                        {
                            title: 'Claims',
                            items: [
                                {
                                    xtype: 'container',
                                    cls:'module-body',
                                    height:'100%',
                                    items:[
                                        {
                                            xtype: 'memberclaims'
                                        }
                                    ]
                                },
                            ]
                        },
                        {
                            title: 'Documents',
                            items: [
                                {
                                    xtype: 'container',
                                    cls:'module-body',
                                    scrollable:true,
                                    height:'100%',
                                    items:[
                                        {
                                            controller: 'memberdocumentscontroller',
                                            xtype: 'membermissingdocuments'
                                        }
                                    ]
                                },
                            ]
                        }
                    ]
                }
            ]
        }
    ]
});