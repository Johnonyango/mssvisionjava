Ext.define('MssPhoenix.view.tablet.principalofficer.personalinfo.claims.Allclaims', {
    extend: 'MssPhoenix.view.widgets.Module',
    xtype : 'allclaims', 
    controller: 'poclaimscontroller',
    height: 456,
    layout: {
        type: 'vbox'
    },
    // viewModel: {
    //     type: 'crmsponsorvmodel'
    // },
    defaults: {
        width: '100%'
    },
    items: [
        {
            xtype: 'toolbar',
            cls: 'module-head',
            items: [
                {
                    xtype: 'component',

                    html: '<h3>All Claims</h3>'
                },
                '->',
                {
                    text: 'back',
                    ui: 'action',
                    cls: 'icon-print',
                    iconCls: 'x-fa fa-reply',
                    scale: 'small',
                    handler:'goBackToPoDashboard'
                }
                ,'->',
                // {
                //     text: '',
                //     ui: 'action',
                //     cls: 'icon-print',
                //     iconCls: 'x-fa fa-print',
                //     scale: 'small',
                //     handler: function () {
                //         let grid = Ext.ComponentQuery.query('crmsponsorgrid')[0];
                //         Ext.ux.grid.Printer.printAutomatically = false;
                //         Ext.ux.grid.Printer.closeAutomaticallyAfterPrint = false;
                //         Ext.ux.grid.Printer.print(grid);
                //     }
                // },
            ]
        },

        {
            xtype: 'container',
            cls: 'module-body   ',
            items: [
                {
                    xtype: 'allclaimsgrid',
                    margin: '10 0 0 0',
                    // listeners: {
                    //     click: {
                    //         element: 'element',
                    //         fn: 'onViewMembersClick'
                    //     },
                    // }
                }
            ]
        },
    ]
});