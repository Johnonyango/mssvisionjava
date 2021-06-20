Ext.define('MssPhoenix.view.tablet.shared.activitylog.ActivityLogsGridController', {
    extend: 'MssPhoenix.view.tablet.sponsor.baseController.SponsorBaseController',
    alias: 'controller.activitylogsgridcontroller',
    /**
     * Called when the view is created
     */
    init: function () {},

    reloadActivitiesGrid: function () {
        var me = this;
        let url = `${MssPhoenix.model.Session.baseUrl}/api/activityTrail/${MssPhoenix.model.Session.getUserId()}`;
        let grid = Ext.ComponentQuery.query(me.isPhone ? 'list' : 'singleuseractivitylogsgrid')[0];
        if (grid) {
            let store = grid.getStore();
            if (store) {
                let proxy = store.getProxy();
                if (proxy) {
                    proxy.setUrl(url);
                    store.setProxy(proxy)
                    store.reload();
                }
            }
        }
    },

    multiReloadActivitiesGrid: function () {
        var me = this;
        let url = `${MssPhoenix.model.Session.baseUrl}/api/activityTrail`;
        let grid = Ext.ComponentQuery.query(me.isPhone ? 'list' : 'multiuseractivitylogsgrid')[0];
        if (grid) {
            let store = grid.getStore();
            if (store) {
                let proxy = store.getProxy();
                if (proxy) {
                    proxy.setUrl(url);
                    store.setProxy(proxy)
                    store.reload();
                }
            }
        }
    },
    
    filterLogs: function () {
        var me = this;
        let  win = Ext.ComponentQuery.query(me.isPhone ? 'sponsorbillsphone':'singleuseractivitylogsgrid' )[0];
        if (win) {
            let form = win.lookupReference('filterlogs');
            if (form) {
                let fields = form.getFields();
                let fromDate = fields.dateFrom.getInputValue();
                let toDate = fields.dateTo.getInputValue();
                let grid = Ext.ComponentQuery.query(me.isPhone ? 'list' : 'singleuseractivitylogsgrid')[0];
                if (grid) {
                    let store = grid.getStore();
                    if (store) {
                        let proxy = store.getProxy();
                        if (proxy) {
                            proxy.setUrl(`${MssPhoenix.model.Session.baseUrl}/api/activityTrail/filter/${MssPhoenix.model.Session.getUserId()}/${fromDate}/${toDate}`);
                            store.setProxy(proxy)
                            store.reload();
                        }
                    }
                }
            }
        }
    },
    
    multiFilterLogs: function () {
        var me = this;
        let  win = Ext.ComponentQuery.query(me.isPhone ? 'sponsorbillsphone':'multiuseractivitylogsgrid' )[0];
        if (win) {
            let form = win.lookupReference('filterlogs');
            if (form) {
                let fields = form.getFields();
                let fromDate = fields.dateFrom.getInputValue();
                let toDate = fields.dateTo.getInputValue();
                let grid = Ext.ComponentQuery.query(me.isPhone ? 'list' : 'multiuseractivitylogsgrid')[0];
                if (grid) {
                    let store = grid.getStore();
                    if (store) {
                        let proxy = store.getProxy();
                        if (proxy) {
                            proxy.setUrl(`${MssPhoenix.model.Session.baseUrl}/api/activityTrailMultiUser/filter/${MssPhoenix.model.Session.getUserId()}/${fromDate}/${toDate}`);
                            store.setProxy(proxy)
                            store.reload();
                        }
                    }
                }
            }
        }
    },

    searchLogs: function () {
        var me = this;
        let  win = Ext.ComponentQuery.query(me.isPhone ? 'sponsorbillsphone':'singleuseractivitylogsgrid' )[0];
       
        if (win) {
            let form = win.lookupReference('searchlogs');
            if (form) {
                let fields = form.getFields();
                let searchKey = fields.searchValue.getInputValue();
                let grid = Ext.ComponentQuery.query(me.isPhone ? 'list' : 'singleuseractivitylogsgrid')[0];
                if (grid) {
                    let store = grid.getStore();
                    if (store) {
                        let proxy = store.getProxy();
                        if (proxy) {
                            proxy.setUrl(`${MssPhoenix.model.Session.baseUrl}/api/activityTrail/search/${MssPhoenix.model.Session.getUserId()}/${searchKey}`);
                            store.setProxy(proxy)
                            store.reload();
                        }
                    }
                }
            }
        }
    },

    multiSearchLogs: function () {
        var me = this;
        let  win = Ext.ComponentQuery.query(me.isPhone ? 'sponsorbillsphone':'multiuseractivitylogsgrid' )[0];
       
        if (win) {
            let form = win.lookupReference('searchlogs');
            if (form) {
                let fields = form.getFields();
                let searchKey = fields.searchValue.getInputValue();
                let grid = Ext.ComponentQuery.query(me.isPhone ? 'list' : 'multiuseractivitylogsgrid')[0];
                if (grid) {
                    let store = grid.getStore();
                    if (store) {
                        let proxy = store.getProxy();
                        if (proxy) {
                            proxy.setUrl(`${MssPhoenix.model.Session.baseUrl}/api/activityTrailMultiUser/search/${MssPhoenix.model.Session.getUserId()}/${searchKey}`);
                            store.setProxy(proxy)
                            store.reload();
                        }
                    }
                }
            }
        }
    },
});