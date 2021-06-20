Ext.define('MssPhoenix.view.tablet.crm.claims.CrmClaimsGridController', {
    extend: 'MssPhoenix.view.tablet.crm.baseController.CrmBaseController',
    alias: 'controller.crmclaimsgridcontroller',

    mixins: [
        'MssPhoenix.view.tablet.crm.mixins.GridMixin'
    ],

    isPhone: false,
    init: function () {
        let me = this,
            view = me.getView();
        let viewModel = view.getViewModel();
        if (viewModel) {
            viewModel.set('currency', me.getCurrencyShortName());
        }
        me.isPhone = MssPhoenix.profile.Phone.isPhone();
    },
    onPhoneViewClaimButtonClick: function (view, selected, eOpts) {
        let me = this;
        let data = selected.getData();
        if (data) {
            var id = data.id;
            let winContainer = Ext.widget('crmphoneviewclaims');
            winContainer.show();
            // let view=me.getView();
            me.loadClaimDetails(id, winContainer, function (dt) {
                me.bindDataToForm(winContainer, dt);

            }, function (err) {

            });
        }
    },

    onViewClaimButtonClick: function () {
        let me = this;
        let record = me.getSelectedRecord();
        if (record) {
            let id = record.get('id');
            let winContainer = Ext.widget('crmviewclaims');
            winContainer.show();
            // let view=me.getView();
            me.loadClaimDetails(id, winContainer, function (dt) {
                me.bindDataToForm(winContainer, dt);

            }, function (err) {

            });

        }

    },
    onViewClaimsClick: function () {

        let me = this;
        let record = me.getGridSelectedRecord("crmclaimsgrid")
        if (record) {
            let id = record.id;
            let winContainer = Ext.widget('crmviewclaims');
            winContainer.show();
            // let view=me.getView();
            me.loadClaimDetails(id, winContainer, function (dt) {
                me.bindDataToForm(winContainer, dt);

            }, function (err) {

            });
        }
    },

    bindDataToForm: function (winContainer, data) {
        let me = this;
        let view = me.getView();
        let form = winContainer.lookupReference('form');
        if (form)
            form.setValues(data);
        let main = Ext.ComponentQuery.query('main')[0];
        if (main) {
            let mainViewModel = main.getViewModel();
            if (mainViewModel) {
                mainViewModel.set('crmClaims', data)
            }
        }
        me.saveItem('crmClaims',me.encodeJson(data));


    },

    reloadClaimsGrid: function () {
        if (MssPhoenix.profile.Phone.isPhone()) {
            this.reloadGrid("phonecrmclaimsgrid");
        }
        this.reloadGrid("crmclaimsgrid");
    },

    onIdSearchEnterKey: function () {
        let me = this;
        let searchId = me.getView().lookupReference('searchClaimId').getValue();
        let grid = Ext.ComponentQuery.query(me.isPhone ? 'phonecrmclaimsgrid' : 'crmclaimsgrid')[0];
        if (grid) {
            let store = grid.getStore();
            if (store) {
                let proxy = store.getProxy();
                if (proxy) {
                    proxy.setUrl(`${MssPhoenix.model.Session.baseUrl}/api/benefitRequest/${searchId}`);
                    store.setProxy(proxy)
                    store.reload();
                    me.getView().lookupReference('searchClaimId').setInputValue("");
                }
            }
        }
    },

    onMemberNoSearchEnterKey: function () {
        let me = this;
        let searchId = me.getView().lookupReference('searchMemberNo').getValue();
        let grid = Ext.ComponentQuery.query(me.isPhone ? 'phonecrmclaimsgrid' : 'crmclaimsgrid')[0];
        if (grid) {
            let store = grid.getStore();
            if (store) {
                let proxy = store.getProxy();
                if (proxy) {
                    proxy.setUrl(`${MssPhoenix.model.Session.baseUrl}/api/benefitRequest/getBenefitByMemberNo/${searchId}`);
                    store.setProxy(proxy)
                    store.reload();
                    me.getView().lookupReference('searchMemberNo').setInputValue("");
                }
            }
        }
    },

    resetSearch: function () {
        let grid = Ext.ComponentQuery.query(me.isPhone ? 'phonecrmclaimsgrid' : 'crmclaimsgrid')[0];
        if (grid) {
            let store = grid.getStore();
            if (store) {
                let proxy = store.getProxy();
                if (proxy) {
                    proxy.setUrl(`${MssPhoenix.model.Session.baseUrl}/api/benefitRequest/getAllBenefits/${MssPhoenix.model.Session.getUserId()}`);
                    store.setProxy(proxy)
                    store.reload();
                    form.reset();
                }
            }
        }

    }

});