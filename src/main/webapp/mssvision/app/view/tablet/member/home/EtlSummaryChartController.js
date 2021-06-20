Ext.define('MssPhoenix.view.tablet.member.home.EtlSummaryChartController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.etlmembersummarychartcontroller',

    init: function() {},

    onAxisLabelRender: function(axis, label, layoutContext) {
        return Ext.util.Format.number(layoutContext.renderer(label), '');
        // return Ext.util.Format.number(layoutContext.renderer(label) / 1000, '0,000');
    },

    onSeriesLabelRender: function(v) {
        // return Ext.util.Format.number(v, '0,000');
        // return Ext.util.Format.number(v / 1000, '0,000');
        return '';
    },

    onItemEditTooltipRender: function(tooltip, item, target, e) {
        var formatString = '0,000 ',
            record = item.record;
        tooltip.setHtml(record.get('month') + ': ' +
            Ext.util.Format.number(target.yValue, formatString));
            // Ext.util.Format.number(target.yValue / 1000, formatString));
    },

    onSeriesTooltipRender: function(tooltip, record, item) {
        var formatString = '';

        tooltip.setHtml('Month '+(record.get('month')) + ': ' +
            Ext.util.Format.number(record.get('total'), formatString));
        // tooltip.setHtml(Ext.util.Format.number(record.get('total')*1000, formatString));
    },

    onColumnRender: function(v) {
        return Ext.util.Format.usMoney(v);
    },

    onPreview: function() {
        var chart;
        if (Ext.isIE8) {
            Ext.Msg.alert('Unsupported Operation', 'This operation requires a newer version of Internet Explorer.');
            return;
        }
        chart = this.lookup('chart');
        chart.preview();
    }
});