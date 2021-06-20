Ext.define('MssPhoenix.view.tablet.pensioner.personalinfo.BeneficiaryChartController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.pensionerbeneficiarychartcontroller',
    /**
     * Called when the view is created
     */
    init: function () {
        var chartStore = Ext.getStore('memberbeneficiarychart');
        chartStore.getProxy().url = `${MssPhoenix.model.Session.baseUrl}/api/getBeneficiariesChart/${MssPhoenix.model.Session.getUserId()}/${MssPhoenix.model.Session.getPensionerId()}`;
        chartStore.reload();
    },

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