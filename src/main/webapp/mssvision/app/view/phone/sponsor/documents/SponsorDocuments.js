Ext.define('MssPhoenix.view.tablet.sponsor.documents.SponsorDocuments', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',
    
    xtype:'sponsordocuments',

    controller: 'sponsordocumentscontroller',

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
                    title: 'Received Documents',
                    items: [
                        {
                            xtype: 'container',
                            cls: 'module-body',
                            items: [
                                {
                                  xtype: 'component',
                                  html:'<h5>Easily manage received documents</h5>'
                                },
                                {
                                    xtype: 'sponsordms',
                                }
                            ]
                        },]
                }
            ]
        }]
    }]
});