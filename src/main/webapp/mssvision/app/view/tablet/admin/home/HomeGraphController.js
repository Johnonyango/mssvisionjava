Ext.define('MssPhoenix.view.tablet.admin.home.HomeGraphController', {
    extend: 'Ext.Container',
    
    extend: 'Ext.app.ViewController',
    alias: 'controller.bar-basic',

    onAxisLabelRender: function (axis, label, layoutContext) {
        return Ext.util.Format.number(layoutContext.renderer(label) / 1, '0,000');
    },

    onSeriesLabelRender: function (v) {
        return Ext.util.Format.number(v / 1, '0,000');
    },

    onItemEditTooltipRender: function (tooltip, item, target, e) {
        var formatString = '0,000 ',
            record = item.record;

        tooltip.setHtml(record.get('days') + ': ' +
            Ext.util.Format.number(target.yValue / 1, formatString));
    },

    onSeriesTooltipRender: function(tooltip, record, item) {
        var formatString = '0,000 ';

        tooltip.setHtml(record.get('days') + ': ' +
            Ext.util.Format.number(record.get('count'), formatString));
    },

    onColumnRender: function (v) {
        return Ext.util.Format.usMoney(v * 1);
    },

    onPreview: function () {
        if (Ext.isIE8) {
            Ext.Msg.alert('Unsupported Operation', 'This operation requires a newer version of Internet Explorer.');
            return;
        }
        var chart = this.lookupReference('chart');
        chart.preview();
    }
});