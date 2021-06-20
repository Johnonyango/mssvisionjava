Ext.define('MssPhoenix.view.tablet.crm.claims.CrmViewClaimsController', {
    extend: 'MssPhoenix.view.tablet.crm.baseController.CrmBaseController',
    alias: 'controller.crmviewclaimscontroller',
    /**
     * Called when the view is created
     */
    isPhone: false,
    init: function () {
        let me = this;
        me.isPhone = MssPhoenix.profile.Phone.isPhone();

    },

    onCancelBtnClick: function () {
        var me = this;
        me.getView().destroy();

        var store = Ext.getStore('crmclaims');
        store.reload();
    }
    ,

    onAuthorizeBtnClick: function () {
        var me = this;
        let view = me.getView();
        Ext.Msg.confirm('Confirmation', 'Are you sure you want to authorize and forward claim to fundmaster?',
            function (answer) {
                if (answer == "yes") {

                    //set up json
                    //get claim id from claims
                    let crmClaims = me.getItem("crmClaims");
                    let claimsData = null
                    if (crmClaims) {
                        claimsData = me.decodeJson(crmClaims);

                        if (claimsData) {
                            //get claim id from claims
                            let claimId = claimsData.id;
                            console.log("id id:" + claimId)
                            //get user id
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
                            me.maskView(view, "Saving...");
                            var url=null;
                            if(MssPhoenix.model.Session.getUserRole() == "PRINCIPAL OFFICER"){
                                url=`${MssPhoenix.model.Session.baseUrl}/api/benefitRequest/authorizeAndPushBenefitsToFMPO`
                            }
                            else{
                                url=`${MssPhoenix.model.Session.baseUrl}/api/benefitRequest/authorizeAndPushBenefitsToFM`
                            }
                            Ext.Ajax.request({
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                url: url,
                                method: 'POST',
                                params: Ext.util.JSON.encode(params),
                                success: function (response, opts) {
                                    me.unMaskView(view);
                                    me.getView().close();
                                    let obj = Ext.util.JSON.decode(response.responseText);
                                    Ext.Msg.alert('Success', obj.msg);
                                    me.redirectTo("crmclaims");
                                    var store = Ext.getStore('crmclaims');
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
    }
    ,

    onDeclineBtnClick: function () {
        let me = this;
        let crmClaims = me.getItem("crmClaims");
        let claimsData = null
        if (crmClaims) {
            claimsData = me.decodeJson(crmClaims);

            if (claimsData) {
                //get claim id from claims
                let claimId = claimsData.id;
                //get user id
                let data1 = localStorage.getItem("app-state-session");
                let jsonObject = JSON.parse(data1);
                if (jsonObject == null) {
                    return -1;
                }
                let currentUserId = jsonObject.user.more.id;

                //store id to view model

                Ext.create(
                    {
                        xtype: 'crmclaimsdecline',
                        viewModel: {
                            data: {
                                crmClaimsId: claimId,
                                crmClaimsUserId: currentUserId
                            }
                        }
                    }
                ).show();
            }
        }
    },

    viewDocuments: function () {
        let me = this,
            view = me.getView(),
            winContainer = Ext.widget(me.isPhone ? 'crmphonesubmitteddocuments' : 'crmsubmitteddocuments');
        winContainer.show();
        let crmClaims = me.getItem("crmClaims");
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
