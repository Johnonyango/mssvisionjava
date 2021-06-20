Ext.define('MssPhoenix.view.tablet.crm.sponsor.CrmSponsor', {
    extend: 'MssPhoenix.view.widgets.Module',
    xtype: 'crmsponsor',
    controller: 'crmsponsorsgridcontroller',
    height: 456,
    layout: {
        type: 'vbox'
    },
    viewModel: {
        type: 'crmsponsorvmodel'
    },
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

                    html: '<h3>Sponsors</h3>'
                },
                '->',
                {
                    iconCls: 'fa fa-redo',
                    handler: 'reloadSponsorGrid',
                    ui: 'action'
                },
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
                    xtype: 'crmsponsorgrid',
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