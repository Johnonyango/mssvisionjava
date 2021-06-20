Ext.define('MssPhoenix.view.tablet.member.documents.MemberDocuments', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',

    controller: 'memberdocumentscontroller',
    viewModel:{
        data:{
            userId:null
        }
    },
    items: [{
        xtype: 'module',
        padding: '15px',
        // scrollable: true,
        items: [{
            xtype: 'tabpanel',
            minHeight: 500,
            style: {
                'margin-top': '10px'
            },
            items: [
                
                {
                    title: 'Unsubmitted Documents',
                    items: [{
                        xtype: 'container',
                        cls: 'module-body',
                        items: [{
                            xtype: 'membermissingdocuments'
                        }]
                    }]
                },
                {
                    title: 'Submitted Documents',
                    items: [{
                        xtype: 'container',
                        cls: 'module-body',
                        height: 300,
                        scrollable: true,
                        items: [{
                                xtype: 'toolbar',
                                items: [
                                    '->',
                                    {
                                        iconCls: 'fa fa-redo',
                                        handler: 'reloadSubmittedDocs',
                                        ui: 'action'
                                    },
                                ]
                            },
                            {
                                xtype: 'memberdocumentsgrid'
                            }
                        ]
                    }]
                },

                {
                    title: 'D.M.S',
                    items: [
                        {
                            xtype: 'container',
                            cls: 'module-body',
                            items: [
                                {
                                  xtype: 'component',
                                  html:'<h5>Easily manage and share documents</h5>'
                                },
                                {
                                    xtype: 'memberdms',
                                }
                            ]
                        },]
                }
            ]
        }]
    }]
});