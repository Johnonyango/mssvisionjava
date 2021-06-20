Ext.define('MssPhoenix.view.tablet.sponsor.home.ContributionBillingChartController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.sponsorcontributionschartcontroller',

   
    onAxisLabelRender: function(axis, label, layoutContext) {
        return Ext.util.Format.number(layoutContext.renderer(label), '0,000');
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
        tooltip.setHtml(record.get('amount') + ': ' +
            Ext.util.Format.number(target.yValue, formatString));
            // Ext.util.Format.number(target.yValue / 1000, formatString));
    },

    onSeriesTooltipRender: function(tooltip, record, item) {
        var formatString = '0,000';

        tooltip.setHtml('Period '+(record.get('contributionMonthYear')) + ': ' +
            Ext.util.Format.number(record.get('amount')*1000000, formatString));
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