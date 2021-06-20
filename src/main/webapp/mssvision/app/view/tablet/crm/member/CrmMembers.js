Ext.define('MssPhoenix.view.tablet.crm.member.CrmMembers', {
    extend: 'MssPhoenix.view.widgets.Module',
    controller:'crmmembercontroller',
    xtype : 'crmmembers',     
    // viewModel:'crmmembervmodel',
    height: 456,
    
    layout: {
        type: 'vbox'
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
                    
                    html:'<h3>Members</h3>'
                },
                '->',
                {
                    text: 'back',
                    ui: 'action',
                    cls: 'icon-print',
                    iconCls: 'x-fa fa-reply',
                    scale: 'small',
                    handler:'goBackToScheme'
                }
                ,'->',
                {
                    iconCls:'fa fa-redo',
                    handler: 'reloadMembersGrid',
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
                    xtype:'crmmembersgrid',
                    margin:'10 0 0 0',
                    // listeners: {
                    //     click: {
                    //         element: 'element',
                    //         fn: 'onViewMembersDetailsClick'
                    //     },
                    // }
                }
            ]
        },
    ]
});