Ext.define('MssPhoenix.view.tablet.crm.scheme.CrmScheme', {
    extend: 'MssPhoenix.view.widgets.Module',
    controller:'crmschemecontroller',
    // xtype : 'crmscheme', 
    
    layout: {
        type: 'vbox'
    },
    
    
    viewModel:{
        type:'crmschemevmodel'
    },

    defaults:{
        width:'100%'
    },
  
    items: [
        {
            xtype: 'toolbar',
            cls:'module-head',
            items: [
                {
                    xtype: 'component',
                    
                    html:'<h3>Schemes</h3>'
                },
                '->',
                {
                    text: 'back',
                    ui: 'action',
                    cls: 'icon-print',
                    iconCls: 'x-fa fa-reply',
                    scale: 'small',
                    handler:'goBackToSponsor'
                },
                '->',
                {
                    iconCls:'fa fa-redo',
                    handler: 'reloadSchemeGrid',
                    ui: 'action'
                },
                // {
                //     text: '',
                //     ui: 'action',
                //     cls: 'icon-print',
                //     iconCls: 'x-fa fa-print',
                //     scale: 'small'
                // }
            ]
        },    
        
        {
            xtype: 'container',
            cls: 'module-body   ',
            items: [
                {
                    xtype:'crmschemegrid',
                    margin:'10 0 0 0'
                }
            ]
        },
    ]
});