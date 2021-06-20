Ext.define('MssPhoenix.view.tablet.sponsor.members.BeneficiaryChartController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.sponsormemberbeneficiarychartcontroller',
    /**
     * Called when the view is created
     */
    init: function () {},

    onDataRender: function(value) {
        return value + '%';
    },

    onSeriesTooltipRender: function(tooltip, record, item) {
        tooltip.setHtml(record.get('name') + ': ' + record.get('data1') + '%');
    },

    onResize: function(view, width, height) {
        var chart = this.lookup('chart'),
            legend = chart.getLegend();

        if (width > height) {
            legend.setDocked('right');
        }
        else {
            legend.setDocked('top');
        }
    }
});