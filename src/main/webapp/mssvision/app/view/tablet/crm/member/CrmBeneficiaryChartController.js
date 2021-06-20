Ext.define('MssPhoenix.view.tablet.crm.member.CrmBeneficiaryChartController', {
    extend: 'MssPhoenix.view.tablet.shared.BaseController',
    alias: 'controller.crmmemberbeneficiarychartcontroller',
    /**
     * Called when the view is created
     */
    init: function () {
        var me = this;
        let id;
        id=localStorage.getItem("memberId");
        var messageStore = Ext.getStore('memberbeneficiarychart');
        messageStore.getProxy().url = `${MssPhoenix.model.Session.baseUrl}/api/getBeneficiariesChart/${MssPhoenix.model.Session.getUserId()}/${id}`;
        messageStore.reload();
    },

    onDataRender: function (value) {
        return value + '%';
    },

    onSeriesTooltipRender: function (tooltip, record, item) {
        tooltip.setHtml(record.get('name') + ': ' + record.get('lumpsumEntitlement') + '%');
    },

    onResize: function (view, width, height) {
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