Ext.define('MssPhoenix.view.tablet.crm.home.CrmSponsorMembersChartController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.crm-sponsormemberschartcontroller',

    onAxisLabelRender: function(axis, label, layoutContext) {
        return Ext.util.Format.number(layoutContext.renderer(label) / 1, '0');
    },

    onSeriesLabelRender: function(v) {
        return Ext.util.Format.number(v / 1, '0');
    },

    onSeriesTooltipRender: function(tooltip, record, item) {
        var formatString = ' Members';

        tooltip.setHtml(record.get('sponsor') + ': ' +
            Ext.util.Format.number(record.get('memberCount'), formatString));
    }
});