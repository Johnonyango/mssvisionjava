Ext.define('MssPhoenix.view.tablet.pensioner.home.RecentPayrollsController', {
    extend: 'MssPhoenix.view.tablet.shared.BaseController',
    alias: 'controller.recentpayrollscontroller',
    
    init: function () {
        var me = this;
        let viewModel = me.getViewModel();
        if (viewModel) {
            viewModel.set('currency', me.getCurrencyShortName());
        }
    },

    filterPayrolls: function () {
        let win = Ext.ComponentQuery.query('recentpayrolls')[0];
        if (win) {
            let form = win.lookupReference('filterPayrolls');
            if (form) {
                let fields = form.getFields();
                let month = ((fields.monthId).getInputValue());
                let year = ((fields.yearId).getValue());
                let grid = Ext.ComponentQuery.query('recentpayrollsgrid')[0];
                if (grid) {
                    let store = grid.getStore();
                    if (store) {
                        let proxy = store.getProxy();

                        if (proxy) {
                            if (month != null && year != null && month != "" && year != "") {
                                proxy.setUrl(`${MssPhoenix.model.Session.baseUrl}/api/filterPayrolls/${MssPhoenix.model.Session.getPensionerNo()}/${MssPhoenix.model.Session.getSchemeId()}?month=${month}&year=${year}`);
                            }
                            else if (month != null && month != "") {
                                proxy.setUrl(`${MssPhoenix.model.Session.baseUrl}/api/filterPayrolls/${MssPhoenix.model.Session.getPensionerNo()}/${MssPhoenix.model.Session.getSchemeId()}?month=${month}`);
                            }
                            else {
                                proxy.setUrl(`${MssPhoenix.model.Session.baseUrl}/api/filterPayrolls/${MssPhoenix.model.Session.getPensionerNo()}/${MssPhoenix.model.Session.getSchemeId()}?year=${year}`);
                            }
                            store.setProxy(proxy)
                            store.reload();
                            form.reset();
                        }
                    }
                }
            }
        }
    },
    reloadPayrollsGrid:function(){
        let grid = Ext.ComponentQuery.query('recentpayrollsgrid')[0];
        if (grid) {
            let store = grid.getStore();
            if (store) {
                let proxy = store.getProxy();
                if (proxy) {
                    proxy.setUrl(`${MssPhoenix.model.Session.baseUrl}/api/getLastPayrollByPensioner/${MssPhoenix.model.Session.getPensionerNo()}/${MssPhoenix.model.Session.getSchemeId()}`);
                    store.setProxy(proxy)
                    store.reload();
                    form.reset();
                }
            }
        }
    }
});