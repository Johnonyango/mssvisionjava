let memberFormConfig = {},
    beneficiaryFormConfig = {};
//get form configs
(function () {
    let me = this;
    //member form configs
    Ext.Ajax.request({
        // url: `http://localhost:8080/mss/resources/api/config/MEMBER`, //uncomment for local
        url: `../resources/api/config/MEMBER`,   // Uncomment for live
        success: function (response, opts) {
            let data = Ext.decode(response.responseText);
            memberFormConfig = data.data;
        },
        failure: function (response, opts) {
        }
    })
    //beneficiary form configs
    Ext.Ajax.request({
        // url: `http://localhost:8080/mss/resources/api/config/BENEFICIARY`,  //uncomment for local
        url: `../resources/api/config/BENEFICIARY`,    // Uncomment for live
        success: function (response, opts) {
            let data = Ext.decode(response.responseText);
            beneficiaryFormConfig = data.data;
        },
        failure: function (response, opts) {
        }
    })

})();


Ext.define('MssPhoenix.model.Session', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'token',
            type: 'string'
        },
        {
            name: 'expires',
            type: 'date'
        },
        {
            name: 'user',
            reference: 'Person'
        }
    ],

    statics: {

        // uncomment for local 8080
        // fileUploadPath: 'http://localhost:8080/mss', //used for servlets
        // baseUrl: 'http://localhost:8080/mss/resources',

        // Uncomment for live
        fileUploadPath: '..',
        baseUrl: '../resources',

        login: function (form) {
            return new Ext.Promise(function (resolve, reject) {
                form.submit({
                    clientValidation: true,
                    withCredentials: false,
                    // headers: {
                    //     'Content-Type': 'application/json',
                    //     'Access-Control-Allow-Origin': '*'
                    // },
                    // method:'GET',
                    url: `${MssPhoenix.model.Session.baseUrl}/api/authenticate`,
                    cors: true,
                    useDefaultXhrHeader: false,
                    success: function (form, action) {
                        if (!action.success) {
                            return reject(action.message);
                        }
                        var expireDate = new Date();
                        expireDate.setDate(expireDate.getDate() + 1);
                        var session = MssPhoenix.model.Session.loadData({
                            user: {
                                // username: form.getValues().username,
                                username: action.data.user.login,
                                more: action.data.user
                            },

                            token: action.token,
                            expires: expireDate,
                        });

                        let role = action.data.profileName;
                        let userId = action.data.user.id;
                        let schemeId = action.data.user.userDetails.schemeId;
                        let name = action.data.user.userDetails.name;
                        let nationalPenNo = action.data.user.userDetails.nationalPenNo;
                        let pensionerId = action.data.user.userDetails.pensionerId;
                        let memberId = action.data.user.userDetails.memberId;
                        let cellPhone = action.data.user.userDetails.cellPhone;
                        let sessionId = action.data.sessionId;
                        MssPhoenix.model.Session.setItemToStorage('role', role);
                        MssPhoenix.model.Session.setItemToStorage('sessionId', sessionId);
                        MssPhoenix.model.Session.setItemToStorage('userId', userId);
                        MssPhoenix.model.Session.setItemToStorage('schemeId', schemeId);
                        MssPhoenix.model.Session.setItemToStorage('name', name);
                        MssPhoenix.model.Session.setItemToStorage('nationalPenNo', nationalPenNo);
                        MssPhoenix.model.Session.setItemToStorage('pensionerId', pensionerId);
                        MssPhoenix.model.Session.setItemToStorage('memberId', memberId);
                        MssPhoenix.model.Session.setItemToStorage('cellPhone', cellPhone);

                        resolve(session);
                        window.location.reload();

                    },
                    failure: function (form, action) {
                        try {
                            let me = this,
                                obj = action.responseText;
                            obj = Ext.util.JSON.decode(obj);
                            Ext.Msg.alert('Sorry', obj.msg, Ext.emptyFn);
                        } catch (e) {
                            Ext.Msg.alert('Sorry', 'Incorrect credentials', Ext.emptyFn);
                        }
                        return reject({
                            errors: {
                                username: "Login failed: invalid session",
                            },
                        });
                    },
                });
            });
        },

        decodeAppStateSession: function () {
            try {
                let data1 = MssPhoenix.model.Session.getItemFromStorage("app-state-session");
                return Ext.util.JSON.decode(data1);
            } catch (e) {
                return null;
            }
        },

        getUserLogin: function () {
            let jsonObject = MssPhoenix.model.Session.decodeAppStateSession();
            if (jsonObject == null) {
                return -1;
            }
            return jsonObject.user.username;
        },

        getUserEmail: function () {
            let jsonObject = MssPhoenix.model.Session.decodeAppStateSession();
            if (jsonObject == null) {
                // console.log(jsonObject)
                return -1;
            }
            return jsonObject.user.more.email;
        },

        checkDataRoute: function (dataRoute) {
            if (dataRoute)
                switch (dataRoute) {
                    case "pomembersdetails":
                        return MssPhoenix.model.Session.getItemFromStorage("memberId");
                    case "allmemberdetails":
                        return MssPhoenix.model.Session.getItemFromStorage("memberId");
                    default:
                }
            return null;
        },

        getMemberId: function () {
            let activeMemberId = MssPhoenix.model.Session.getItemFromStorage("activeMemberId"),
                role = MssPhoenix.model.Session.getUserRole(),
                dataRoute = MssPhoenix.model.Session.getItemFromStorage("dataRoute");

            //used by member switch scheme
            if (activeMemberId)
                return activeMemberId;
            // console.log(dataRoute)

            switch (role) {
                case 'CRE':
                    return MssPhoenix.model.Session.getItemFromStorage("memberId");
                case 'PRINCIPAL OFFICER':
                    let memId = MssPhoenix.model.Session.checkDataRoute(dataRoute);
                    if (memId != null)
                        return memId
                    break
                default:
            }

            let jsonObject = MssPhoenix.model.Session.decodeAppStateSession();
            if (jsonObject == null) {
                return -1;
            }
            return jsonObject.user.more.userDetails.memberId;
        },

        getLogoUrl: function () {
            let logo = MssPhoenix.model.Session.getItemFromStorage("logo");
            if (typeof logo === 'undefined' || logo === null) {
                return;// `resources/images/systech-logo.png`;
            }
            return `${MssPhoenix.model.Session.fileUploadPath}/FileHandler?file=${logo}`;
        },

        getPensionerNo: function () {
            let jsonObject = MssPhoenix.model.Session.decodeAppStateSession();
            if (jsonObject == null) {
                return -1;
            }
            return jsonObject.user.more.userDetails.nationalPenNo;
        },

        getCellPhone: function () {
            let jsonObject = MssPhoenix.model.Session.decodeAppStateSession();
            if (jsonObject == null) {
                return -1;
            }
            return jsonObject.user.more.userDetails.cellPhone;
        },

        getPensionerId: function () {
            let jsonObject = MssPhoenix.model.Session.decodeAppStateSession();
            if (jsonObject == null) {
                return -1;
            }
            return jsonObject.user.more.userDetails.pensionerId;
        },

        getMemberNo: function () {
            return MssPhoenix.model.Session.getItemFromStorage('memberNo')
        },

        getReportServerUrl: function () {
            return MssPhoenix.model.Session.getItemFromStorage('reportServerUrl')
        },

        getDateOfPayment: function () {
            return MssPhoenix.model.Session.getItemFromStorage('dateOfPayValue')
        },

        getId: function () {
            return MssPhoenix.model.Session.getItemFromStorage('Id')
        },

        getFmUserId: function () {
            let jsonObject = MssPhoenix.model.Session.decodeAppStateSession();
            if (jsonObject == null) {
                return -1;
            }
            return jsonObject.user.more.userDetails.userId;
        },

        getSponsorIdField: function () {
            try {
                let activeSponsorId = MssPhoenix.model.Session.getItemFromStorage("activeSponsorId");

                //USED BY SPONSOR IN SWITCH SCHEME
                if (activeSponsorId)
                    return activeSponsorId;

                let jsonObject = MssPhoenix.model.Session.decodeAppStateSession();
                if (jsonObject == null) {
                    return -1;
                }
                return jsonObject.user.more.userDetails.sponsorId;
            } catch (e) {
                return -1;
            }
        },

        getSponsorId: function () {
            //USED BY SPONSOR IN SWITCH SCHEME
            let activeSponsorRefNo = MssPhoenix.model.Session.getItemFromStorage("activeSponsorRefNo");
            if (activeSponsorRefNo)
                return activeSponsorRefNo;

            let activeSponsorId = MssPhoenix.model.Session.getItemFromStorage("activeSponsorId");
            //used by member switch scheme
            if (activeSponsorId)
                return activeSponsorId;

            let jsonObject = MssPhoenix.model.Session.decodeAppStateSession();
            if (jsonObject == null) {
                return -1;
            }
            return jsonObject.user.more.userDetails.sponsorRefNo;
        },

        getSponsorName: function () {
            let jsonObject = MssPhoenix.model.Session.decodeAppStateSession();
            if (jsonObject == null) {
                return -1;
            }
            return jsonObject.user.more.userDetails.name;
        },

        getSponsorSchemeId: function () {
            return MssPhoenix.model.Session.getItemFromStorage('schemeId');
        },

        getSponsorEmail: function () {
            let jsonObject = MssPhoenix.model.Session.decodeAppStateSession();
            if (jsonObject == null) {
                return -1;
            }
            return jsonObject.user.more.email;
        },

        getSchemeId: function () {
            let activeSchemeId = MssPhoenix.model.Session.getItemFromStorage("activeSchemeId"),
                role = MssPhoenix.model.Session.getUserRole();

            //used by member switch scheme
            if (activeSchemeId)
                return activeSchemeId;
            switch (role) {
                case 'CRE':
                    return MssPhoenix.model.Session.getItemFromStorage("creSchemeId");
                // case 'PRINCIPAL OFFICER':
                //     return MssPhoenix.model.Session.getItemFromStorage("creSchemeId");
                default:
            }
            return MssPhoenix.model.Session.getItemFromStorage('schemeId');
        },

        getUserId: function () {
            return MssPhoenix.model.Session.getItemFromStorage("userId");
        },

        getUserRole: function () {
            return MssPhoenix.model.Session.getItemFromStorage("role");
        },

        getUserNames: function () {
            return MssPhoenix.model.Session.getItemFromStorage("name");
        },

        getHeaderXtype: function () {
            let role = MssPhoenix.model.Session.getUserRole();
            switch (role) {
                case 'MEMBER':
                    return 'memberheader';
                case 'SPONSOR':
                    return 'sponsorheader';
                case 'BILLING OFFICER':
                    return 'sponsorheader';
                case 'PRINCIPAL OFFICER':
                    return 'poheader';
                case 'PENSIONER':
                    return 'pensionerheader';
                case 'CRM':
                    return 'crmheader';
                case 'CRE':
                    return 'creheader';
                case 'ADMIN':
                    return 'adminheader';
                default:
            }
        },

        getTicketId: function () {
            return MssPhoenix.model.Session.getItemFromStorage("crmTicketId");
        },

        moneyFormat: function (amount) {
            // return numeral(amount).format('0,0.00');
            return Ext.util.Format.number(amount, '0,0.00');
        },

        // getDateNowAsUrl: function () {
        //     let date = new Date();
        //     let dt = (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
        //     return dt.replaceAll("/", "%2F")
        // },

        getBankBranch: function () {
            return MssPhoenix.model.Session.getItemFromStorage('bankBranch')
        },

        getItemFromStorage: function (key) {
            return localStorage.getItem(key)
        },

        setItemToStorage: function (key, val) {
            localStorage.setItem(key, val)
        },

        removeItemFromStrorage: function (key) {
            localStorage.removeItem(key)
        },

        getDistrictId: function () {
            // console.log(dId)
            return MssPhoenix.model.Session.getItemFromStorage('districtId');
        },

        getTraditionalAuthorityId: function () {
            // console.log(trId)
            return MssPhoenix.model.Session.getItemFromStorage('traditionalAuthorityId');
        },

        checkIsFirstTime: function () {
            let jsonObject = MssPhoenix.model.Session.decodeAppStateSession();
            if (jsonObject == null)
                return false;
            return (jsonObject.user.more.flg_firstTime === "true");
        },

        getMssClient: function () {
            return MssPhoenix.model.Session.getItemFromStorage('client');  //ETL, NICO, OTHERS
        },

    },

    isValid: function () {
        return !Ext.isEmpty(this.get('token')) &&
            this.get('expires') > new Date() &&
            this.getUser() !== null;
    },

    logout: function () {
        return new Ext.Promise(function (resolve, reject) {
            Server.auth.logout({}, resolve);
            // window.location.replace('../')
        });
    }

});
