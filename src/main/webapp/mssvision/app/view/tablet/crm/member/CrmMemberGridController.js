Ext.define('MssPhoenix.view.tablet.crm.member.CrmMemberGridController', {
    extend: 'MssPhoenix.view.tablet.shared.BaseController',
    alias: 'controller.crmmembergridcontroller',
    mixins: [
        'MssPhoenix.view.tablet.crm.mixins.GridMixin'
    ],
    onviewMemberdetailsButtonClick: function (cmp, record, item, index, e, eOpts) {
        var me = this;
        var record = me.getSelectedRecord();
        var memberID;
        var schemeId;
        me.saveItem("memberIdForReport", memberID);
        me.saveItem("schemeIdForReport", schemeId);
        if (record) {
            let viewModel = me.getViewModel();
            if (viewModel) {
                memberID = record.get("id");
                schemeId = record.get("schemeId");
                viewModel.set('memberId', memberID);

            }

            var xType = 'crmmainmemberdetails';
            let id = memberID + "/" + schemeId;
            me.redirectTo(xType + "/" + id);
        }
    },
    searchMember: function () {
        let win = Ext.ComponentQuery.query('crmmembersgrid')[0];
        if (win) {
            let form = win.lookupReference('searchMember');
            if (form) {
                let fields = form.getFields();
                let searchValue = ((fields.searchValue).getInputValue());
                let searchIndentifier = ((fields.searchIndentifier).getValue());
                let sponsorId = MssPhoenix.model.Session.getItemFromStorage('memberSponsorId');
                let schemeId = MssPhoenix.model.Session.getItemFromStorage('memberSchemeId');
                let grid = Ext.ComponentQuery.query('crmmembersgrid')[0];
                if (grid) {
                    let store = grid.getStore();
                    if (store) {
                        let proxy = store.getProxy();
                        if (proxy) {
                            proxy.setUrl(`${MssPhoenix.model.Session.baseUrl}/api/search-for-sponsor-member-details/${searchIndentifier}/${searchValue}/MEMBER/${sponsorId}/${schemeId}`);
                            store.setProxy(proxy)
                            store.reload();
                            form.reset();
                        }
                    }
                }
            }
        }
    },
    resetSearch: function () {
        let win = Ext.ComponentQuery.query('crmmembersgrid')[0];
        if (win) {
            let form = win.lookupReference('searchMember');
            if (form) {
                let sponsorId = MssPhoenix.model.Session.getItemFromStorage('memberSponsorId');
                let schemeId = MssPhoenix.model.Session.getItemFromStorage('memberSchemeId');
                let grid = Ext.ComponentQuery.query('crmmembersgrid')[0];
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
    init: function () { }
});