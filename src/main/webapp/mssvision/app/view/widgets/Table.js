Ext.define('MssPhoenix.view.widgets.Table', {
    extend: 'Ext.grid.Grid',

    xtype: 'table',

    requires: [
        // 'Ext.data.summary.Average',

        // 'Ext.grid.filters.Plugin',

        // 'Ext.grid.plugin.Editable',
        // 'Ext.grid.plugin.ViewOptions',
        // 'Ext.grid.plugin.PagingToolbar',
        // 'Ext.grid.plugin.SummaryRow',
        // 'Ext.grid.plugin.ColumnResizing',
        // 'Ext.grid.plugin.MultiSelection',
        // 'Ext.grid.plugin.RowExpander',
        // 'Ext.grid.plugin.Exporter',

        // 'Ext.sparkline.Line',
        // 'Ext.ux.rating.Picker'
    ],

    // plugins: {

    //     grideditable: true,
    //     gridviewoptions: true,
    //     summaryrow: true,
    //     rowexpander: true,
    //     // gridexporter: true,
    //     rowoperations: true,
    //     gridfilters: {
    //         //
    //     }
    // },
    plugins: {
        gridpagingtoolbar: true,
    },

    stateful: true,
    multiSelect: false,
    headerBorders: true,

    viewConfig: {
        enableTextSelection: true,
        stripeRows: true
    },

    defaults: {
        ui: 'action'
    },

    scrollable: true,
    layout: {
        type: 'fit'
    },
    forceFit: true,
    border: false,
    maxHeight: 500,
    emptyText: true,
    striped: true,
});