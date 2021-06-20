Ext.define('MssPhoenix.view.tablet.member.claims.ClaimsController', {
    extend: 'MssPhoenix.view.tablet.member.base.BaseMemberController',
    alias: 'controller.memberclaimscontroller',

    claimType: '',

    isPhone: false,
    init: function () {
        let me = this,
            role = MssPhoenix.model.Session.getUserRole(),
            view = me.getView(),
            vm = view.getViewModel(),
            perms=me.decodePermissions();

        me.isPhone = MssPhoenix.profile.Phone.isPhone();

        switch (role) {
            case 'CRE':
                vm.set("isInitiateClaim", me.permSetDisplayBlockOrNone(me.getItem("allowInitiateClaims")))
                break
            case 'PRINCIPAL OFFICER':
                vm.set("isInitiateClaim", me.permSetDisplayBlockOrNone(perms.allowInitiateClaims));
                let id = localStorage.getItem("memberId");
                let messageStore = Ext.getStore('memberclaims');
                messageStore.getProxy().url = `${MssPhoenix.model.Session.baseUrl}/api/benefitRequest/getMemberBenefitRequests/${MssPhoenix.model.Session.getUserId()}/${id}`;
                messageStore.reload();
                break;
            default:
                vm.set("isInitiateClaim", me.canInitiateExitWithdrawal() === "true" ? 'block' : 'none')
        }
    },

    initiatePreExtBtnClick: function () {
        let me = this;
        me.claimType = 'pre-exit';
        Ext.widget('initiatepreexitwithdraw').show();
    },

    initiateClaimBtnClick: function () {
        let me = this;
        me.claimType = 'claim';
        if (me.isPhone) {
            Ext.widget('memberphone-initiateclaim').show();
            return;
        }
        Ext.widget('memberinitiateclaim').show();
    },

    reloadClaimsGrid: function () {
        let me = this;
        me.reloadGrid(me.isPhone ? 'memberphone-claimsgrid' : 'memberclaimsgrid')
    },

    formatMemberClaimStatus: function (text, metaData) {
        switch (text) {
            case 'PENDING':
                return `<span style="color:#f27f00">Pending Approval</span>`;
            case 'APPROVED':
                return `<span style="color:green">Approved pending authorization</span>`;
            case 'DECLINED':
                return `<span style="color:right: red;">Declined</span>`;
            case 'AUTHORIZED':
                return `<span style="color:#f27f00">Authorized pending processing</span>`;
            case 'UPLOADED':
                return `<span style="color:#f27f00">Documents uploaded pending approval</span>`;
            case 'NOT_UPLOADED':
                return `<span style="color:red">Documents not uploaded</span>`;
            case 'DECLINED_BY_CRM':
                return `<span style="color:red">Declined by client relation manager</span>`;
            case 'DECLINED_BY_SPONSOR':
                return `<span style="color:red">Declined By Sponsor</span>`;
            case 'PUSHED_TO_FUNDMASTER':
                return `<span style="color:darkblue">Awaiting administrator action</span>`;
            case 'CERTIFIED':
                return `<span style="color:#f27f00">Certified awaiting approval</span>`;
            default:
                return text;
        }
    },

});