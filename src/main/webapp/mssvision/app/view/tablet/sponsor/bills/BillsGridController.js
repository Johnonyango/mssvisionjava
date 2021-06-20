Ext.define('MssPhoenix.view.tablet.sponsor.bills.BillsGridController', {
    extend: 'MssPhoenix.view.tablet.shared.BaseController',
    alias: 'controller.bookbillsgridcontroller',
    isPhone: false,
    client:null,
    init: function () {
        let me = this,
            view = me.getView(),
            role = MssPhoenix.model.Session.getUserRole(),
            vm = view.getViewModel(),
            perms = me.decodePermissions();
        me.isPhone = MssPhoenix.profile.Phone.isPhone();


        me.client = MssPhoenix.model.Session.getMssClient();


        switch (role) {
            case 'PRINCIPAL OFFICER':
                vm.set("isBookBill", me.permSetDisplayBlockOrNone(perms.allowBookBill))
                break;
            default:
                vm.set("isBookBill", me.canBookBill() === "true" ? 'block' : 'none')

        }
        
        vm.set("etlClient",  me.client === "ETL" ? "sponsorbillsgridetl" : "sponsorbillsgrid")
        


    },

    mixins: [
        'MssPhoenix.view.tablet.sponsor.mixins.GridMixin'
    ],

    onBookContributionBillClick: function () {
        if (MssPhoenix.profile.Phone.isPhone()) {
            Ext.widget('bookcontributionbillphoneform').show();
        } else {
            var me = this;
            var role = `${MssPhoenix.model.Session.getUserRole()}`;
            var schemeId=0,
            sponsorId=0;
            if (role == "PRINCIPAL OFFICER") {
                schemeId=me.getItem('schemeId');
                sponsorId=me.getItem('sponsorId');
            } else {
                schemeId=MssPhoenix.model.Session.getSchemeId();
                sponsorId=MssPhoenix.model.Session.getSponsorIdField()
            }

            Ext.create(
                {
                    xtype: 'bookcontributionbillform',
                    viewModel: {
                        data: {
                            schemeId: schemeId,
                            sponsorId: sponsorId
                        }
                    }
                }
            ).show();
        }

    },

    ProcessBillActionBtnClick: function () {
        var me = this;
        var record = me.getSelectedRecord();
        if (record) {
            var id = record.get('id');
            // var savedBatch = me
            me.saveItem("batch", id);
            Ext.widget('billbatchupload').show();
        }

    },

    CancelBillActionBtnClick: function () {
        var me = this;
        var record = me.getSelectedRecord();
        if (record) {
            var id = record.get('id');
            var method = 'DELETE';
            var url = `${MssPhoenix.model.Session.baseUrl}/api/cancelBill/` + id;
            //ajax request
            Ext.Ajax.request({
                url: url,
                method: method,

                success: function (response, opts) {
                    let obj = me.decodeJson(response.responseText)
                    me.showAlert('Success', obj.msg)
                    var store = Ext.getStore('sponsorbillsid');
                    store.reload()
                },
                failure: function (response, opts) {
                    let obj = me.decodeJson(response.responseText)
                    me.showAlert('Failure', obj.msg)

                }
            });
        }
    },

    filterBills: function () {
        var me = this;
        let win = Ext.ComponentQuery.query(me.isPhone ? 'sponsorbillsphone' : 'sponsorbillsgrid')[0];

        if (win) {
            let form = win.lookupReference('filterbills');
            if (form) {
                let fields = form.getFields();
                let fromDate = fields.dateFrom.getInputValue();
                let toDate = fields.dateTo.getInputValue();
                let fDate = (fromDate.replaceAll("/", "%2F"));
                let tDate = (toDate.replaceAll("/", "%2F"));
                let grid = Ext.ComponentQuery.query(me.isPhone ? 'sponsorbillsphonegrid' : 'sponsorbillsgrid')[0];
                if (grid) {
                    let store = grid.getStore();
                    if (store) {
                        let proxy = store.getProxy();
                        if (proxy) {
                            var role = `${MssPhoenix.model.Session.getUserRole()}`
                            if (role == "PRINCIPAL OFFICER") {
                                var sponsorId = MssPhoenix.model.Session.getItemFromStorage('sponsorId');
                                var schemeId = MssPhoenix.model.Session.getItemFromStorage('schemeId');
                                proxy.setUrl(`${MssPhoenix.model.Session.baseUrl}/api/filter-contribution-bills-per-sponsor/${MssPhoenix.model.Session.getUserId()}/${schemeId}/${sponsorId}/${fDate}/${tDate}`);
                            } else {
                                proxy.setUrl(`${MssPhoenix.model.Session.baseUrl}/api/filter-contribution-bills-per-sponsor/${MssPhoenix.model.Session.getUserId()}/${MssPhoenix.model.Session.getSchemeId()}/${MssPhoenix.model.Session.getSponsorIdField()}/${fDate}/${tDate}`);
                            }
                            store.setProxy(proxy)
                            store.reload();
                        }
                    }
                }
            }
        }
    },
    searchBills: function () {
        var me = this;
        let win = Ext.ComponentQuery.query(me.isPhone ? 'sponsorbillsphone' : 'sponsorbillsgrid')[0];

        if (win) {
            let form = win.lookupReference('searchbills');
            if (form) {
                let fields = form.getFields();
                let searchKey = fields.searchValue.getInputValue();
                let grid = Ext.ComponentQuery.query(me.isPhone ? 'sponsorbillsphonegrid' : 'sponsorbillsgrid')[0];
                if (grid) {
                    let store = grid.getStore();
                    if (store) {
                        let proxy = store.getProxy();
                        if (proxy) {
                            var role = `${MssPhoenix.model.Session.getUserRole()}`
                            if (role == "PRINCIPAL OFFICER") {
                                var sponsorId = MssPhoenix.model.Session.getItemFromStorage('sponsorId');
                                var schemeId = MssPhoenix.model.Session.getItemFromStorage('schemeId');
                                proxy.setUrl(`${MssPhoenix.model.Session.baseUrl}/api/search-contribution-bills-per-sponsor/${MssPhoenix.model.Session.getUserId()}/${schemeId}/${sponsorId}/${searchKey}`);
                            } else {
                                proxy.setUrl(`${MssPhoenix.model.Session.baseUrl}/api/search-contribution-bills-per-sponsor/${MssPhoenix.model.Session.getUserId()}/${MssPhoenix.model.Session.getSchemeId()}/${MssPhoenix.model.Session.getSponsorIdField()}/${searchKey}`);
                            }
                            store.setProxy(proxy)
                            store.reload();
                        }
                    }
                }
            }
        }
    },
    reloadBillsGrid: function () {
        var me = this;
        var role = `${MssPhoenix.model.Session.getUserRole()}`
        if (role == "PRINCIPAL OFFICER") {
            var sponsorId = MssPhoenix.model.Session.getItemFromStorage('sponsorId');
            var schemeId = MssPhoenix.model.Session.getItemFromStorage('schemeId');
        }
        else {
            let url = `${MssPhoenix.model.Session.baseUrl}/api/get-contribution-bills-per-sponsor/${MssPhoenix.model.Session.getUserId()}/${MssPhoenix.model.Session.getSchemeId()}/${MssPhoenix.model.Session.getSponsorIdField()}`;
        }
        let grid = Ext.ComponentQuery.query(me.isPhone ? 'sponsorbillsphonegrid' : 'sponsorbillsgrid')[0];
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
            proxy.setUrl(`${MssPhoenix.model.Session.baseUrl}/api/get-contribution-bills-per-sponsor/${MssPhoenix.model.Session.getUserId()}/${schemeId}/${sponsorId}/`);
         
        }
    },
});