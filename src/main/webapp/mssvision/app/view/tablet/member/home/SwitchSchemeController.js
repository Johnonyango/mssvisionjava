Ext.define('MssPhoenix.view.tablet.member.home.SwitchSchemeController', {
    extend: 'MssPhoenix.view.tablet.member.base.BaseMemberController',
    alias: 'controller.memberswitchschemecontroller',


    init: function () {
    },

    closeWin: function () {
        let me = this;
        me.getView().destroy()
    },

    onSwitchScheme: function (v, newValue, oldValue, eOpts) {
        let me = this,
            view = me.getView(),
            memberId = MssPhoenix.model.Session.getMemberId(),
            phone = MssPhoenix.model.Session.getCellPhone(),
            schemeId = v.getValue();
        if (schemeId) {
            me.saveItem('activeSchemeId', schemeId);
            //load member products/sponsors
            console.log(newValue + ":" + me.getItem("schemeId"));
            let login = MssPhoenix.model.Session.getUserLogin(),
                prodUrl = `${MssPhoenix.model.Session.baseUrl}/api/getMemberProducts/${login}/${schemeId}`;

            me.maskView(view, "loading...");

            setTimeout(function () {
                me.urlGet(prodUrl, function (obj) {
                    let data = (obj.data)[0];
                    // console.log(data);
                    if (data) {
                        let sponsorId = data.id,
                            sponsorName = data.name,
                            employerRefNo = data.employerRefNo,
                            params = {
                                "sponsorRefNo": employerRefNo,
                                "sponsorId": sponsorId,
                                "schemeId": schemeId,
                                "login": login,
                                "memberId": memberId,
                                "phone": phone
                            };
                        // console.log(params)
                        me.saveItem('activeSponsorId', sponsorId);
                        me.searchMemberDetails(view, params);
                    }
                }, function (err) {
                    // console.log(err)
                    me.unMaskView(view)
                    me.showAlert("Sorry", "Unable to find member products");
                })
            }, 500)
        }
    },

    onSchemeSelected: function () {
        let me = this,
            view = me.getView(),
            data = me.getGridSelectedRecord('memberswitchschemewin #memberswitchschemewinTB');
        if (data) {
            view.destroy()
            me.saveItem('schemeId', data.id);
            me.redirectTo('home');
            window.location.reload();
        }
    },

    onSwitchProduct: function (v, newValue, oldValue, eOpts) {
        let me = this,
            view = me.getView(),
            memberId = MssPhoenix.model.Session.getMemberId(),
            phone = MssPhoenix.model.Session.getCellPhone(),
            schemeId = MssPhoenix.model.Session.getSchemeId(),
            sponsorId = v.getValue();
        if (sponsorId) {
            let login = MssPhoenix.model.Session.getUserLogin(),
                prodUrl = `${MssPhoenix.model.Session.baseUrl}/api/getMemberProducts/${login}/${schemeId}`;

            me.maskView(view, "loading...");

            setTimeout(function () {
                me.urlGet(prodUrl, function (obj) {
                    let data,
                        arrayData = (obj.data);
                    for (let i = 0; i < arrayData.length; i++) {
                        data = arrayData[i];
                        if (data.sponsorId === sponsorId) {
                            break;
                        }
                    }
                    // console.log(data);
                    if (data) {
                        let sponsorId = data.id,
                            sponsorName = data.name,
                            employerRefNo = data.employerRefNo,
                            params = {
                                "sponsorRefNo": employerRefNo,
                                "sponsorId": sponsorId,
                                "schemeId": schemeId,
                                "login": login,
                                "memberId": memberId,
                                "phone": phone
                            };
                        // console.log(params)
                        me.saveItem('activeSponsorId', sponsorId);
                        me.searchMemberDetails(view, params);
                    }
                }, function (err) {
                    // console.log(err)
                    me.unMaskView(view)
                    me.showAlert("Sorry", "Unable to find member products");
                })
            }, 500);
        }
    },

    searchMemberDetails: function (view, params) {
        let me = this;
        let memberDetailsUrl = `${MssPhoenix.model.Session.baseUrl}/api/searchMemberDetails`;
        me.urlPost(memberDetailsUrl, params, function (obj) {
            // console.log(obj)
            me.unMaskView(view)
            let data = obj.data;
            me.saveItem('activeMemberId', data.id);
            window.location.reload();
        }, function (err) {
            // console.log(err)
            me.unMaskView(view)
            me.showAlert("Sorry", "Unable to find member details");
        })
    },
});