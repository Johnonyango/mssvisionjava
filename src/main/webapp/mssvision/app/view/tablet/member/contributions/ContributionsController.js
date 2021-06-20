Ext.define('MssPhoenix.view.tablet.member.contributions.ContributionsController', {
    extend: 'MssPhoenix.view.tablet.member.base.BaseMemberController',
    alias: 'controller.membercontributionscontroller',

    // requires: [
    //     'Ext.exporter.text.CSV',
    //     'Ext.exporter.text.TSV',
    //     'Ext.exporter.text.Html',
    //     'Ext.exporter.excel.Xml',
    //     'Ext.exporter.excel.Xlsx'
    // ],
    /**
     * Called when the view is created
     */

    controller: 'membercontributionscontroller',

    isPhone: false,
    init: function () {
        let me = this,
            view = me.getView(),
            vm = me.getViewModel();
        me.isPhone = MssPhoenix.profile.Phone.isPhone();
        if (vm) {
            let canMakeContributions_ = me.canMakeContributions() === "true" ? 'block' : 'none';
            vm.set('allowMakeContribution', canMakeContributions_)
        }
        let role = MssPhoenix.model.Session.getUserRole();
        if (role === "PRINCIPAL OFFICER") {
            let id = localStorage.getItem("memberId");
            let messageStore = Ext.getStore('membercontributions');
            messageStore.getProxy().url = `${MssPhoenix.model.Session.baseUrl}/api/filterContributions/${MssPhoenix.model.Session.getUserId()}/${id}/01%2F01%2F2010/today`;
            messageStore.reload();
        }
    },

    //
    getPayBill: function (vm) {
        let me = this,
            view = me.getView();
        me.maskView(view, "please wait...");
        Ext.Ajax.request({
            url: `${MssPhoenix.model.Session.baseUrl}/api/getPayBill/${MssPhoenix.model.Session.getUserId()}`,
            success: function (response, opts) {
                me.unMaskView(view)
                let obj = Ext.util.JSON.decode(response.responseText);
                if (vm) {
                    vm.set('businessNo', obj.data.mpesaPaybill);
                    vm.set('mobileMoneyProcedure', obj.data.mobileMoneyProcedure);
                    vm.set('memberId', MssPhoenix.model.Session.getMemberId());
                    vm.set('schemeId', MssPhoenix.model.Session.getSchemeId());
                }
            },
            failure: function (response, opts) {
                me.unMaskView(view);
                me.showToast("Please try again");
            }
        })
    },

    makeContributionBtnClick: function (btn) {
        let me = this;
        let view = Ext.widget(me.isPhone ? 'memberphone-makecontributionwin' : 'membermakecontributionwin');
        view.show();
        let vm = view.getViewModel();
        me.getPayBill(vm);
    },

    testWin: function () {
        let view = Ext.widget('memberphone-makecontributionwin');
        view.show();
    },

    reloadContributionsGrid: function () {
        let me = this;
        // let url=`${MssPhoenix.model.Session.baseUrl}/api/getContributions/${MssPhoenix.model.Session.getUserId()}/${MssPhoenix.model.Session.getMemberId()}/${MssPhoenix.model.Session.getSchemeId()}`;
        let url = `${MssPhoenix.model.Session.baseUrl}/api/filterContributions/${MssPhoenix.model.Session.getUserId()}/${MssPhoenix.model.Session.getMemberId()}/01%2F01%2F2010/today`;
        let grid = Ext.ComponentQuery.query(me.isPhone ? 'memberphone-contributionsgrid' : 'membercontributionsgrid')[0];
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
        // me.reloadGrid('membercontributionsgrid')
    },

    filterContributions: function () {
        let me = this;
        let win = Ext.ComponentQuery.query('membercontributions')[0];
        if (win) {
            let form = win.lookupReference('filtercontributions');
            if (form && form.validate()) {
                let fields = form.getFields();
                let fromDate = ((fields.fromDate).getInputValue());
                let toDate = ((fields.toDate).getInputValue());
                if (!fromDate || !toDate) {
                    return;
                }
                fromDate = fromDate.replaceAll("/", "%2F");

                toDate = toDate.replaceAll("/", "%2F");
                let grid = Ext.ComponentQuery.query(me.isPhone ? 'memberphone-contributionsgrid' : 'membercontributionsgrid')[0];
                if (grid) {
                    let store = grid.getStore();
                    if (store) {
                        let proxy = store.getProxy();
                        if (proxy) {
                            proxy.setUrl(`${MssPhoenix.model.Session.baseUrl}/api/filterContributions/${MssPhoenix.model.Session.getUserId()}/${MssPhoenix.model.Session.getMemberId()}/${fromDate}/${toDate}`);
                            store.setProxy(proxy)
                            store.reload();
                        }
                    }
                }
            }
        }
    },

    onBeforeDocumentSave: function (view) {
        view.mask({
            xtype: 'loadmask',
            message: 'Document is prepared for export. Please wait ...'
        });
    },

    onDocumentSave: function (view) {
        view.unmask();
    },

    exportDocument: function (btn) {
        var cfg = Ext.merge({
            title: 'Member Contributions',
            fileName: 'contributions' + '.xlsx'
        }, {
            type: 'excel07',
            ext: 'xlsx',
            includeGroups: true,
            includeSummary: true
        });

        this.getView().saveDocumentAs(cfg);
    },

});