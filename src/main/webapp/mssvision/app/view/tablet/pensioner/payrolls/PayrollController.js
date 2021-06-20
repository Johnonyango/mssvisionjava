Ext.define('MssPhoenix.view.tablet.pensioner.payrolls.PayrollController', {
    extend: 'MssPhoenix.view.tablet.shared.BaseController',
    alias: 'controller.pensionerPayrollscontroller',

    isPhone: false,
    init: function () {
        var me = this;
        me.isPhone = MssPhoenix.profile.Phone.isPhone();
        let viewModel = me.getViewModel();
        if (viewModel) {
            viewModel.set('currency', me.getCurrencyShortName());
        }
    },

    filterPayrolls: function () {
        var me = this;
        let win = Ext.ComponentQuery.query('pensionerpayrolls')[0];
        if (win) {
            let form = win.lookupReference('filterPayrolls');
            if (form) {
                let fields = form.getFields();
                let month = ((fields.month).getInputValue());
                let year = ((fields.year).getValue());
                let grid = Ext.ComponentQuery.query(me.isPhone ? 'phonepensionerpayrollgrid' : 'pensionerpayrollgrid')[0];
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
        var me = this;
        let grid = Ext.ComponentQuery.query(me.isPhone ? 'phonepensionerpayrollgrid' : 'pensionerpayrollgrid')[0];
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
