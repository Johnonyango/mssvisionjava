Ext.define('MssPhoenix.view.tablet.principalofficer.personalinfo.claims.claimsController', {
    extend: 'MssPhoenix.view.tablet.shared.BaseController',
    alias: 'controller.poclaimscontroller',
    /**
     * Called when the view is created
     */
    init: function () { }
    ,
    reloadPaidClaimsGrid() {
        let win = Ext.ComponentQuery.query('paidclaimsgrid')[0];
        if (win) {
            let form = win.lookupReference('filterpaidclaims');
            if (form) {
                let grid = Ext.ComponentQuery.query('paidclaimsgrid')[0];
                if (grid) {
                    let store = grid.getStore();
                    if (store) {
                        let proxy = store.getProxy();
                        if (proxy) {
                            var sponsorId = MssPhoenix.model.Session.getItemFromStorage('sponsorId');
                            var schemeId = MssPhoenix.model.Session.getItemFromStorage('schemeId');
                            proxy.setUrl(`${MssPhoenix.model.Session.baseUrl}/api/getPaidClaims/${MssPhoenix.model.Session.getUserId()}/${schemeId}/${sponsorId}/01-01-2000/31-12-2021?start=0&size=100000`);
                            store.setProxy(proxy)
                            store.reload();
                            form.reset();
                        }
                    }
                }
            }
        }
    },
    reloadAllClaimsGrid() {
        let win = Ext.ComponentQuery.query('allclaimsgrid')[0];
        if (win) {
            let form = win.lookupReference('filterallclaims');
            if (form) {
                let grid = Ext.ComponentQuery.query('allclaimsgrid')[0];
                if (grid) {
                    let store = grid.getStore();
                    if (store) {
                        let proxy = store.getProxy();
                        if (proxy) {
                            var sponsorId = MssPhoenix.model.Session.getItemFromStorage('sponsorId');
                            var schemeId = MssPhoenix.model.Session.getItemFromStorage('schemeId');
                            proxy.setUrl(`${MssPhoenix.model.Session.baseUrl}/api/getPaidClaims/${MssPhoenix.model.Session.getUserId()}/${schemeId}/${sponsorId}/01-01-2000/31-12-2021?start=0&size=100000`);
                            store.setProxy(proxy)
                            store.reload();
                            form.reset();
                        }
                    }
                }
            }
        }
    },
    filterPaidClaims() {
        var me = this;

        let win = Ext.ComponentQuery.query(me.isPhone ? 'sponsorbillsphone' : 'paidclaimsgrid')[0];

        if (win) {
            let form = win.lookupReference('filterpaidclaims');
            if (form) {
                let fields = form.getFields();
                let fromDate = fields.dateFrom.getInputValue();
                let toDate = fields.dateTo.getInputValue();
                let grid = Ext.ComponentQuery.query(me.isPhone ? 'sponsorbillsphonegrid' : 'paidclaimsgrid')[0];
                if (grid) {
                    let store = grid.getStore();
                    if (store) {
                        let proxy = store.getProxy();
                        if (proxy) {
                            var sponsorId = MssPhoenix.model.Session.getItemFromStorage('sponsorId');
                            var schemeId = MssPhoenix.model.Session.getItemFromStorage('schemeId');
                            proxy.setUrl(`${MssPhoenix.model.Session.baseUrl}/api/getPaidClaims/${MssPhoenix.model.Session.getUserId()}/${schemeId}/${sponsorId}/${fromDate}/${toDate}?start=0&size=100000`);
                            store.setProxy(proxy)
                            store.reload();
                        }
                    }
                }
            }
        }

    },
    filterAllClaims() {
        var me = this;
        let win = Ext.ComponentQuery.query(me.isPhone ? 'sponsorbillsphone' : 'allclaimsgrid')[0];

        if (win) {
            let form = win.lookupReference('filterallclaims');
            if (form) {
                let fields = form.getFields();
                let fromDate = fields.dateFrom.getInputValue();
                let toDate = fields.dateTo.getInputValue();
                let grid = Ext.ComponentQuery.query(me.isPhone ? 'sponsorbillsphonegrid' : 'allclaimsgrid')[0];
                if (grid) {
                    let store = grid.getStore();
                    if (store) {
                        let proxy = store.getProxy();
                        if (proxy) {
                            var sponsorId = MssPhoenix.model.Session.getItemFromStorage('sponsorId');
                            var schemeId = MssPhoenix.model.Session.getItemFromStorage('schemeId');
                            proxy.setUrl(`${MssPhoenix.model.Session.baseUrl}/api/getAllClaims/${MssPhoenix.model.Session.getUserId()}/${schemeId}/${sponsorId}/${fromDate}/${toDate}?start=0&size=100000`);
                            store.setProxy(proxy)
                            store.reload();
                        }
                    }
                }
            }
        }

    },
    goBackToPoDashboard(){
        var me = this;
        var xType = 'podashboard';
        me.redirectTo(xType);
    }
});