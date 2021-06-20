Ext.define('MssPhoenix.view.tablet.sponsor.claims.ClaimsGridController', {
    extend: 'MssPhoenix.view.tablet.sponsor.baseController.SponsorBaseController',
    alias: 'controller.sponsorclaimsgridcontroller',
    mixins: [
        'MssPhoenix.view.tablet.sponsor.mixins.GridMixin'
    ],
    isPhone: false,

    init: function () {
        let me = this;
        me.isPhone = MssPhoenix.profile.Phone.isPhone();
     },

    onViewClaimButtonClick: function () {
        var me = this;
        var record = me.getSelectedRecord();
        if (record) {
            // console.log(record);
            var id = record.get('id');
            let winContainer = Ext.widget(me.isPhone ? 'sponsorphoneviewclaims' : 'sponsorviewclaims');            
            winContainer.show();
            // let view=me.getView();
            me.loadClaimDetails(id, winContainer, function (dt) {
                me.bindDataToForm(winContainer,dt);
            }, function (err) {
            });
        }
    },
    onPhoneViewClaimBtnClick: function (view, selected, eOpts) {
        let me = this;
        let data = selected.getData();
        if (data) {
            var id = data.id;
            let winContainer = Ext.widget('sponsorphoneviewclaims');
            winContainer.show();
            // let view=me.getView();
            me.loadClaimDetails(id, winContainer, function (dt) {
                me.bindDataToForm(winContainer, dt);

            }, function (err) {

            });
        }
    },
    bindDataToForm: function (winContainer,data) {
        let me = this;
        let form = winContainer.lookupReference('form');
        if (form)
            form.setValues(data);
        let main = Ext.ComponentQuery.query('main')[0];
        if (main) {
            let mainViewModel = main.getViewModel();
            if (mainViewModel) {
                mainViewModel.set('sponsorClaims', data)
            }
        }
        me.saveItem('sponsorClaims',me.encodeJson(data));
    },
    reloadClaimsGrid: function () {
        var me = this;
        if (MssPhoenix.profile.Phone.isPhone()) {
            me.reloadGrid("sponsorclaimsgridphone");
        } else {
            me.reloadGrid("sponsorclaimsgrid");
        }
    },
    searchClaims: function () {
        var me = this;
        let  win = Ext.ComponentQuery.query(me.isPhone ? 'sponsorclaimsgridphone':'sponsorclaimsgrid' )[0];
       
        if (win) {
            let form = win.lookupReference('searchclaims');
            if (form) {
                let fields = form.getFields();
                let searchKey = fields.searchValue.getInputValue();
                let grid = Ext.ComponentQuery.query(me.isPhone ? 'list' : 'sponsorclaimsgrid')[0];
                if (grid) {
                    let store = grid.getStore();
                    if (store) {
                        let proxy = store.getProxy();
                        if (proxy) {
                            proxy.setUrl(`${MssPhoenix.model.Session.baseUrl}/api/benefitRequest/search/${searchKey}`);
                            store.setProxy(proxy)
                            store.reload();
                        }
                    }
                }
            }
        }
    },


});