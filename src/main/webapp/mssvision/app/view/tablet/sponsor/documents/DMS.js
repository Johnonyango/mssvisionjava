Ext.define('MssPhoenix.view.tablet.sponsor.documents.DMS', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',
    viewModel:{
        type:'sponsordocumentsviewmodel'
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
                    title: 'Received Documents For Approval',
                    items: [
                        {
                            xtype: 'container',
                            cls: 'module-body',
                            items: [
                                {
                                  xtype: 'component',
                                  html:'<h5>Easily view and Approve Documents</h5>'
                                },
                                {
                                    xtype: 'sponsorschemedocumentsapprovalgrid',
                                }
                            ]
                        },]
                }
            ]
        }]
    }]
});