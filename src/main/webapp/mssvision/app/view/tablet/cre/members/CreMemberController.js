Ext.define('MssPhoenix.view.tablet.cre.members.CreMemberController', {
    extend: 'MssPhoenix.view.tablet.shared.BaseController',
    alias: 'controller.cremembercontroller',

    init: function () {
        let me = this,
            view = me.getView(),
            vm = view.getViewModel();

        if (vm) {
            vm.set("schemeName", me.getItem("creSchemeName"));
            vm.set("sponsorName", me.getItem("sponsorName"));
        }
        let userId = MssPhoenix.model.Session.getUserId();
        let schemeId = me.getItem('creSchemeId');
        let sponsorId = me.getItem('sponsorId');
    },

    reloadMembersGridCRE: function () {
        this.reloadGrid("cremembersgrid");
    },

    onCreViewMemberDetailsButtonClick: function () {
        let me = this,
            role=MssPhoenix.model.Session.getUserRole();
        let record = me.getGridSelectedRecord("cremembersgrid");
        if (record) {
            let memberID = record.id;
            let schemeId = record.schemeId;
            me.saveItem("memberId",memberID);

            let xType,
                role = MssPhoenix.model.Session.getUserRole();
            switch (role) {
                case 'PRINCIPAL OFFICER':
                    xType = 'pomembersdetails';
                    break
                case 'CRE':
                    xType = 'cremembersdetails';
                    break
                default:
            }
            let id = memberID + "/" + schemeId;
            me.redirectTo(xType + "/" + id);
            window.location.reload()
        }
    },

    creSearchMember: function () {
        let me = this,
            win = me.getView();
        if (win) {
            let form = win.lookupReference('searchMember');
            if (form) {
                let fields = form.getFields();
                let searchValue = ((fields.searchValue).getInputValue());
                let searchIndentifier = ((fields.searchIndentifier).getValue());
                let sponsorId = me.getItem('sponsorId');
                let schemeId = me.getItem('creSchemeId');
                let grid = Ext.ComponentQuery.query('cremembersgrid')[0];
                if (grid) {
                    let messageStore = Ext.getStore('crmmember');
                    let endPoint = `search-for-sponsor-member-details/${searchIndentifier}/${searchValue}/MEMBER/${sponsorId}/${schemeId}`;
                    messageStore.getProxy().url = `${MssPhoenix.model.Session.baseUrl}/api/${endPoint}`;
                    messageStore.reload();
                    form.reset();
                }
            }
        }
    },

    creResetSearch: function () {
        let me = this,
            win = me.getView();
        if (win) {
            let form = win.lookupReference('searchMember');
            if (form) {
                let sponsorId =me.getItem('sponsorId');
                let schemeId = me.getItem('creSchemeId');
                let grid = Ext.ComponentQuery.query('cremembersgrid')[0];
                if (grid) {
                    let store = grid.getStore();
                    if (store) {
                        let proxy = store.getProxy();
                        if (proxy) {
                            proxy.setUrl(`${MssPhoenix.model.Session.baseUrl}/api/sponsor/getMemberListing/${sponsorId}/SPONSOR/${schemeId}`);
                            store.setProxy(proxy)
                            store.reload();
                            form.reset();
                        }
                    }
                }
            }
        }
    },

});