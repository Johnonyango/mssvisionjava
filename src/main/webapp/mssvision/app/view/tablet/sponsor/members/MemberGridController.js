Ext.define('MssPhoenix.view.tablet.sponsor.members.MemberGridController', {
    extend: 'MssPhoenix.view.tablet.shared.BaseController',
    alias: 'controller.membersponsorgridcontroller',

    mixins: [
        'MssPhoenix.view.tablet.crm.mixins.GridMixin'
    ],

    isPhone: false,
    init: function () {
        let me = this,
            view = me.getView(),
            role = MssPhoenix.model.Session.getUserRole(),
            vm = view.getViewModel(),
            perms = me.decodePermissions();
        me.isPhone = MssPhoenix.profile.Phone.isPhone();
        if (vm) {
            vm.set("schemeName", me.getItem("creSchemeName"));
            vm.set("sponsorName", me.getItem("sponsorName"));

            switch (role) {
                case 'PRINCIPAL OFFICER':
                    vm.set("isAddSingleMember", me.permSetDisplayBlockOrNone(perms.allowAddSingleUser))
                    vm.set("isAddBatchMember", me.permSetDisplayBlockOrNone(perms.allowAddBatchUser))
                    break;
                default:
                    vm.set("isAddSingleMember", me.canAddSingleMember() === "true" ? 'block' : 'none')
                    vm.set("isAddBatchMember", me.canAddMemberInBatch() === "true" ? 'block' : 'none')
            }
        }
    },
    onSponsorViewMemberDetailsButtonClick: function () {
        let me = this;
        let record = me.getGridSelectedRecord("sponsormembersgrid");
        if (record) {
            let memberID = record.id;
            let schemeId = record.schemeId;
            let sponsorName = record.sponsorName;
            me.saveItem("memberId", memberID);
            me.saveItem("memberIdForReport", memberID);
            me.saveItem("schemeIdForReport", schemeId);
            // me.saveItem("sponsorName",sponsorName);

            var role = MssPhoenix.model.Session.getUserRole();
            var xType;
            if (role === "PRINCIPAL OFFICER") {
                xType = 'pomembersdetails';
            } else {
                xType = 'crmmainmemberdetails';
            }
            let id = memberID + "/" + schemeId;
            me.redirectTo(xType + "/" + id);
        }
    },

    onAddMembersInBatchButtonClick: function () {
        Ext.widget('memberbatchupload').show();
    },

    onAddSingleUserButtonClick: function () {


        let me = this,
            role = `${MssPhoenix.model.Session.getUserRole()}`,
            schemeId,
            sponsorId;
        if (role === "PRINCIPAL OFFICER") {
            schemeId = me.getItem('schemeId');
            sponsorId = me.getItem('sponsorId');
        } else {
            schemeId = MssPhoenix.model.Session.getSchemeId();
            sponsorId = MssPhoenix.model.Session.getSponsorIdField();
        }

        Ext.create(
            {
                xtype: MssPhoenix.profile.Phone.isPhone() ? 'sponsoraddmemberformphone' : 'sponsoraddmembersform',
                viewModel: {
                    data: {
                        schemeId: schemeId,
                        sponsorId: sponsorId
                    }
                }
            }
        ).show();


    },

    onUpdateMembersInBatchButtonClick: function () {
        Ext.widget('sponsormemberupdatebatchfinish').show();

    },

    searchSponsorMember: function () {
        let me = this, grid;
        let win = Ext.ComponentQuery.query(me.isPhone ? 'sponsormembersphone' : 'sponsormembers')[0];
        if (win) {
            let form = win.lookupReference('searchMember');
            if (form) {
                let fields = form.getFields();
                let searchValue = ((fields.searchValue).getInputValue());
                let searchIndentifier = ((fields.searchIndentifier).getValue());
                var role = `${MssPhoenix.model.Session.getUserRole()}`
                var sponsorId, schemeId;
                if (role == "PRINCIPAL OFFICER") {
                    sponsorId = MssPhoenix.model.Session.getItemFromStorage('sponsorId');
                    schemeId = MssPhoenix.model.Session.getItemFromStorage('schemeId');
                } else {
                    sponsorId = MssPhoenix.model.Session.getSponsorIdField();
                    schemeId = MssPhoenix.model.Session.getSchemeId();
                }
                if (MssPhoenix.profile.Phone.isPhone()) {
                    list = Ext.ComponentQuery.query('list')[0];
                } else {
                    list = Ext.ComponentQuery.query('sponsormembersgrid')[0];
                }
                if (list) {
                    let store = list.getStore();
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
        let me = this, grid;
        let win = Ext.ComponentQuery.query(me.isPhone ? 'sponsormembersphone' : 'sponsormembers')[0];
        if (win) {

            let form = win.lookupReference('searchMember');
            if (form) {
                var role = `${MssPhoenix.model.Session.getUserRole()}`
                var sponsorId, schemeId;
                if (role == "PRINCIPAL OFFICER") {
                    sponsorId = MssPhoenix.model.Session.getItemFromStorage('sponsorId');
                    schemeId = MssPhoenix.model.Session.getItemFromStorage('schemeId');
                } else {
                    sponsorId = MssPhoenix.model.Session.getSponsorIdField();
                    schemeId = MssPhoenix.model.Session.getSchemeId();
                }
                if (MssPhoenix.profile.Phone.isPhone()) {
                    list = Ext.ComponentQuery.query('list')[0];
                } else {
                    list = Ext.ComponentQuery.query('sponsormembersgrid')[0];
                }
                if (list) {
                    let store = list.getStore();
                    if (store) {
                        let proxy = store.getProxy();
                        if (proxy) {
                            proxy.setUrl(`${MssPhoenix.model.Session.baseUrl}/api/get-sponsor-member-listing/${MssPhoenix.model.Session.getUserId()}/${sponsorId}/SPONSOR/${schemeId}`);
                            store.setProxy(proxy)
                            store.reload();
                            form.reset();
                        }
                    }
                }
            }
        }
    },

    onviewMemberdetailsButtonClick: function (cmp, record, item, index, e, eOpts) {
        var me = this;
        var record = me.getSelectedRecord();
        var memberID;
        var schemeId;
        if (record) {
            let viewModel = me.getViewModel();
            if (viewModel) {
                memberID = record.get("id");
                schemeId = record.get("schemeId");
                viewModel.set('memberId', memberID);

            }
            var xType = 'crmphonemainmemberdetails';
            let id = memberID + "/" + schemeId;
            me.redirectTo(xType + "/" + id);
        }
    },

    reloadMemberGrid: function () {
        var me = this;
        if (MssPhoenix.profile.Phone.isPhone()) {
            me.reloadList("list");
        } else {
            me.reloadGrid("sponsormembersgrid");
        }

    },

    reloadpotentialmembersGrid: function () {
        var me = this;
        if (MssPhoenix.profile.Phone.isPhone()) {
            me.reloadList("list");
        } else {
            me.reloadGrid("sponsorpotentialmembersgrid");
        }

    },

    onViewButtonClick: function () {
        var me = this;
        var record = me.getSelectedRecord();
        if (record) {
            var id = record.get('id');
            var sponsorId = record.get('sponsorId');
            let winContainer = Ext.widget('sponsorviewmemberdetails');
            console.log("MEMBERID " + id);
            console.log("SPONSORID " + sponsorId);

            me.saveItem('memberId', id);
            me.saveItem('sponsorId', sponsorId);
            me.saveItem('sponsorId', sponsorId);
            me.saveItem('activeMemberId', id);

            winContainer.show();

            me.bindPotentialMemberDataToForm(winContainer, me.loadPotentialMemberInformation
                //     {
                //     'memberNo':record.get('memberNo'),
                //     'name':record.get('name'),
                //     'cellPhone':record.get('cellPhone'),
                //     'idNo':record.get('idNo')

                // }
            );


            // let view=me.getView();
            // me.loadPotentialMemberDetails(id, winContainer, function (dt) {
            //     me.bindPotentialMemberDataToForm(winContainer,dt);
            // }, function (err) {
            // });
        }
    },


    loadPotentialMemberInformation: function (successCallBack, errorCallBack) {
        let me = this;
        var record = me.getSelectedRecord();
        if (record) {
            var id = record.get('id');
            Ext.Ajax.request({
                url: `${MssPhoenix.model.Session.baseUrl}/api/getpotentialmemberdetails/` + id,
                success: function (response, opts) {
                    let obj = Ext.decode(response.responseText);
                    successCallBack(obj.data)
                },
                failure: function (response, opts) {
                    // console.log('server-side failure with status code ' + response.status);
                    errorCallBack(response.responseText)
                }
            });
        }
    },
    bindPotentialMemberDataToForm: function (winContainer, data) {
        let me = this;
        let form = winContainer.lookupReference('potentialmemberform');
        me.loadPotentialMemberInformation(function (callBackData) {
            if (form)
                form.setValues(callBackData);
            let main = Ext.ComponentQuery.query('main')[0];
            if (main) {
                let mainViewModel = main.getViewModel();
                if (mainViewModel) {
                    mainViewModel.set('potentialMemberInfo', callBackData)
                }
            }
            me.saveItem('potentialMemberInfo', me.encodeJson(callBackData));
        });

    },
    loadPotentialMemberDetails: function (id, view, successCallBack, errorCallBack) {
        let me = this;
        var url = `${MssPhoenix.model.Session.baseUrl}/api/getSponsorPotentialMembers/${MssPhoenix.model.Session.getSchemeId()}/${MssPhoenix.model.Session.getSponsorIdField()}`;
        view.mask('Please wait...');
        Ext.Ajax.request({
            url: url,
            success: function (response, opts) {
                view.unmask();
                let obj = Ext.decode(response.responseText);
                successCallBack(obj.data);
            },
            failure: function (response, opts) {
                view.unmask();
                let obj = Ext.decode(response.responseText);
                errorCallBack(obj)
            }
        });
    },

});