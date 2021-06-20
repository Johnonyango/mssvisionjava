Ext.define('MssPhoenix.view.tablet.sponsor.claims.ViewClaimsController', {
    extend: 'MssPhoenix.view.tablet.shared.BaseController',
    alias: 'controller.sponsorviewclaimscontroller',
    /**
     * Called when the view is created
     */
    init: function () { },

    onCancelBtnClick: function () {
        var me = this;
        me.getView().destroy();
    },

    onApproveBtnClick: function () {
        var me = this;
        let view = me.getView();
        Ext.Msg.confirm('Confirmation', 'Are you sure you want to approve this claim?',
            function (answer) {
                if (answer == "yes") {

                    //set up json
                    //get claim id from claims
                    let sponsorClaims = me.getItem("sponsorClaims");
                    let claimsData = null
                    if (sponsorClaims) {
                        claimsData = me.decodeJson(sponsorClaims);

                        if (claimsData) {
                            //get claim id from claims
                            let claimId = claimsData.id;
                            let data1 = localStorage.getItem("app-state-session");
                            let jsonObject = JSON.parse(data1);
                            if (jsonObject == null) {
                                return -1;
                            }
                            let currentUserId = jsonObject.user.more.id;
                            //build json object
                            var params = {
                                "id": claimId,
                                "userId": currentUserId
                            }
                            //ajax request

                            me.maskView(view, "Please wait...");
                            Ext.Ajax.request({
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                url: `${MssPhoenix.model.Session.baseUrl}/api/benefitRequest/approveBenefits`,
                                method: 'POST',
                                params: Ext.util.JSON.encode(params),
                                success: function (response, opts) {
                                    me.unMaskView(view);
                                    me.getView().close();
                                    let obj = Ext.util.JSON.decode(response.responseText);
                                    Ext.Msg.alert('Success', obj.msg);
                                    me.redirectTo("sponsorclaims");
                                    var store = Ext.getStore('sponsorclaim');
                                    store.reload()
                                },
                                failure: function (response, opts) {
                                    me.unMaskView(view);
                                    let obj = Ext.util.JSON.decode(response.responseText);
                                    Ext.Msg.alert('Failure', obj.msg);
                                }
                            });
                        }

                    }
                }

            });
    },

    onCertifyBtnClick: function () {
        var me = this;
        let view = me.getView();
        Ext.Msg.confirm('Confirmation', 'Are you sure you want to certify this claim?',
            function (answer) {
                if (answer == "yes") {

                    //set up json
                    //get claim id from claims
                    let sponsorClaims = me.getItem("sponsorClaims");
                    let claimsData = null
                    if (sponsorClaims) {
                        claimsData = me.decodeJson(sponsorClaims);

                        if (claimsData) {
                            //get claim id from claims
                            let claimId = claimsData.id;
                            let data1 = localStorage.getItem("app-state-session");
                            let jsonObject = JSON.parse(data1);
                            if (jsonObject == null) {
                                return -1;
                            }
                            let currentUserId = jsonObject.user.more.id;
                            //build json object
                            var params = {
                                "id": claimId,
                                "userId": currentUserId
                            }
                            //ajax request

                            me.maskView(view, "Please wait...");
                            Ext.Ajax.request({
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                url :`${MssPhoenix.model.Session.baseUrl}/api/benefitRequest/certifyBenefits`,
                                method: 'POST',
                                params: Ext.util.JSON.encode(params),
                                success: function (response, opts) {
                                    me.unMaskView(view);
                                    me.getView().close();
                                    let obj = Ext.util.JSON.decode(response.responseText);
                                    Ext.Msg.alert('Success', obj.msg);
                                    me.redirectTo("sponsorclaims");
                                    var store = Ext.getStore('sponsorclaim');
                                    store.reload()
                                },
                                failure: function (response, opts) {
                                    me.unMaskView(view);
                                    let obj = Ext.util.JSON.decode(response.responseText);
                                    Ext.Msg.alert('Failure', obj.msg);
                                }
                            });
                        }

                    }
                }

            });
    },

    onDeclineBtnClick: function () {
        var me = this;
        let view = me.getView();
        Ext.Msg.confirm('Confirmation', 'Are you sure you want to decline this claim?',
            function (answer) {
                if (answer == "yes") {

                    //set up json
                    //get claim id from claims
                    let sponsorClaims = me.getItem("sponsorClaims");
                    let claimsData = null
                    if (sponsorClaims) {
                        claimsData = me.decodeJson(sponsorClaims);

                        if (claimsData) {
                            //get claim id from claims
                            let claimId = claimsData.id;
                            let data1 = localStorage.getItem("app-state-session");
                            let jsonObject = JSON.parse(data1);
                            if (jsonObject == null) {
                                return -1;
                            }
                            let currentUserId = jsonObject.user.more.id;
                            //build json object

                            Ext.create(
                                {
                                    xtype: 'sponsorclaimsdecline',
                                    viewModel: {
                                        data: {
                                            sponsorClaimsId: claimId,
                                            sponsorClaimsUserId: currentUserId
                                        }
                                    }
                                }
                            ).show();
                         

                         
                        }

                    }
                }

            });
    },
    viewDocuments: function () {
        let me = this,
            view = me.getView(),
            winContainer = Ext.widget(me.isPhone ? 'crmphonesubmitteddocuments' : 'crmsubmitteddocuments');
        winContainer.show();
        let crmClaims = me.getItem("sponsorClaims");
        let claimsData = null
        if (crmClaims) {
            claimsData = me.decodeJson(crmClaims);

            if (claimsData) {
                //get claim id from claims
                let memberMssId = claimsData.mssUserId;
                let claimId = claimsData.id;
                let grid = Ext.ComponentQuery.query('useruploadeddocsgrid')[0];
                if (grid) {
                    let store = grid.getStore();
                    if (store) {
                        let proxy = store.getProxy();
                        if (proxy) {
                            proxy.setUrl(`${MssPhoenix.model.Session.baseUrl}/api/documents/getClaimUploadedDocs/${memberMssId}/${claimId}`);
                            store.setProxy(proxy)
                            store.reload();
                        }
                    }
                }
            }

        }
    }
});
