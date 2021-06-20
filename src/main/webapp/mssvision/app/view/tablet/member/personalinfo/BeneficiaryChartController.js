Ext.define('MssPhoenix.view.tablet.member.personalinfo.BeneficiaryChartController', {
    extend: 'MssPhoenix.view.tablet.member.base.BaseMemberController',
    alias: 'controller.memberbeneficiarychartcontroller',
    /**
     * Called when the view is created
     */
    init: function () {},

    onDataRender: function(value) {
        return value + '%';
    },

    onSeriesTooltipRender: function(tooltip, record, item) {
        tooltip.setHtml(record.get('name') + ': ' + record.get('lumpsumEntitlement') + '%');
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