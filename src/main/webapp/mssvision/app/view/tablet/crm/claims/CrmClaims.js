Ext.define('MssPhoenix.view.tablet.crm.claims.CrmClaims', {
    extend: 'MssPhoenix.view.widgets.Module',

    // xtype:'crmclaims',
    controller: 'crmclaimsgridcontroller',
    layout: 'vbox',
    defaults: {
        width: '100%'
    },
    viewModel: {
        type: 'crmclaimsvmodel'
    },
    padding: '15px',
    height: 456,
    items: [
        {
            xtype: 'toolbar',
            cls: 'module-head',
            items: [
                {
                    xtype: 'component',
                    bind:{
                        html: '<h3> Claims ({currency})</h3>'
                    }
                },
                '->',
                {
                    iconCls: 'fa fa-redo',
                    handler: 'reloadClaimsGrid',
                    name:'reloadClaimsGrid',
                    ui: 'action'
                },
                // {
                //     text: '',
                //     ui: 'action',
                //     iconCls: 'x-fa fa-print',
                //     scale: 'small'
                // },

            ]
        },
        {
            xtype: 'container',
            cls: 'module-body',
            // scrollable:true,
            items: [
                {
                    xtype: 'crmclaimsgrid',
                    margin: '0 0 0 0',
                    // listeners: {
                    //     click: {
                    //         element: 'element',
                    //         fn: 'onViewClaimsClick'
                    //     }
                    // }
                }
            ]
        }
    ],

});