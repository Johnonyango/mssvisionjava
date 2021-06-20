Ext.define('MssPhoenix.view.tablet.member.base.BaseMemberController', {
    extend: 'MssPhoenix.view.tablet.shared.BaseController',
    alias: 'controller.mssphoenix-basemembercontroller',

    /**
     * Check if CRE accessing
     */
    isCRE: false,
    init: function () {
        let me = this;
    },

    bindMemberInfo: function (data) {
        let me = this;
        let main = Ext.ComponentQuery.query('main')[0];
        if (main) {
            let mainViewModel = main.getViewModel();
            if (mainViewModel) {
                me.saveItem('memberNo', data.memberNo);
                mainViewModel.set('memberInfo', data);
            }
        }
    },

    loadMemberInformation: function (successCallBack, errorCallBack) {
        let me = this;
        let memberId = MssPhoenix.model.Session.getMemberId()
        Ext.Ajax.request({
            url: `${MssPhoenix.model.Session.baseUrl}/api/getMemberDetailsSingle/${MssPhoenix.model.Session.getUserId()}/${memberId}`,
            success: function (response, opts) {
                let obj = Ext.decode(response.responseText);
                successCallBack(obj.data)
            },
            failure: function (response, opts) {
                // console.log('server-side failure with status code ' + response.status);
                errorCallBack(response.responseText)
            }
        });
    },

    loadSummary: function (view, successCallBack, errorCallBack) {
        let me = this;
        view.mask('Please wait...');
        Ext.Ajax.request({
            url: `${MssPhoenix.model.Session.baseUrl}/api/getBalancesAsAtToday/${MssPhoenix.model.Session.getUserId()}/${MssPhoenix.model.Session.getMemberId()}/${MssPhoenix.model.Session.getSchemeId()}`,
            // url: `${MssPhoenix.model.Session.baseUrl}/api/getSummary/${MssPhoenix.model.Session.getUserId()}/${MssPhoenix.model.Session.getMemberId()}`,
            success: function (response, opts) {
                view.unmask();
                let obj = Ext.decode(response.responseText);
                successCallBack(obj.data);
            },
            failure: function (response, opts) {
                view.unmask();
                errorCallBack(response.responseText)
            }
        });
    },

    loadSummaryETL: function (view, successCallBack, errorCallBack) {
        let me = this;
        view.mask('Please wait...');
        me.urlGet(
            `${MssPhoenix.model.Session.baseUrl}/api/getMemberAccountDetails/${MssPhoenix.model.Session.getMemberId()}/${MssPhoenix.model.Session.getSchemeId()}`,
            function (obj) {
                view.unmask();
                successCallBack(obj.data);
            },
            function (err) {
                view.unmask();
                errorCallBack(err)
            }
        );
    },

    memberCheckIfCanAddBeneficiaries: function (callBack) {
        let me = this,
            url = `${MssPhoenix.model.Session.baseUrl}/api/checkIfCanAddBeneficiaries/${MssPhoenix.model.Session.getUserId()}/${MssPhoenix.model.Session.getMemberId()}`;
        me.urlGet(url, function (obj) {
            callBack(obj.data)
        }, function (err) {
            callBack(null)
        })
    },

    // memberCheckIfDobGeneric: function (callBack) {
    //     let me = this,
    //         url = `${MssPhoenix.model.Session.baseUrl}/api/checkIfMemberHasGenericDoB/${MssPhoenix.model.Session.getUserId()}/${MssPhoenix.model.Session.getMemberId()}`;
    //     me.urlGet(url, function (obj) {
    //         callBack(obj.data)
    //     }, function (err) {
    //         callBack(null)
    //     })
    // },

    memberCheckIfMissingDocs: function (callBack) {
        let me = this,
            url = `${MssPhoenix.model.Session.baseUrl}/api/getmissingdocuments/${MssPhoenix.model.Session.getUserId()}/${MssPhoenix.model.Session.getMemberId()}`;
        me.urlGet(url, function (obj) {
            callBack(obj.data)
        }, function (err) {
            callBack(null)
        })
    },
});