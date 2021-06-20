Ext.define('MssPhoenix.view.tablet.shared.BaseController', {
    extend: 'Ext.app.ViewController',
    id: 'baseController',
    country_list: ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"],

    init: function () {
    },

    alias: 'controller.basecontroller',

    goBack: function () {
        let me = this;
        me.getView().destroy()
        window.history.back();
    },

    /**
     * Can be used across all modules for mobile layout
     */
    showChangePwdWin: function () {
        let me = this,
            view = Ext.widget("changepwdwin");
        view.show()
        let vm = view.getViewModel();
        if (vm) {
            vm.set("userId", MssPhoenix.model.Session.getUserId());
        }
    },

    moneyFormatFunc: function (value) {
        let me = this,
            num = 0;
        try {
            num = parseFloat(value);
        } catch (e) {
            return '-';
        }
        // return me.getCurrencyShortName() + ' ' + MssPhoenix.model.Session.moneyFormat(num);
        return MssPhoenix.model.Session.moneyFormat(num);
    },

    maskView: function (view, msg) {
        view.mask(msg);
    },

    unMaskView: function (view) {
        view.unmask();
    },

    notEmpty: function (str) {
        return /\S+/.test(str);
    },

    showAlert: function (title, msg) {
        Ext.Msg.alert(title, msg, Ext.emptyFn);
    },

    showToast: function (msg, duration = 3000) {
        Ext.toast(msg, duration);
    },

    decodeJson: function (json) {
        try {
            return Ext.util.JSON.decode(json)
        } catch (e) {
            return null;
        }
    },

    getTargetView: function (xtype) {
        let me = this;
        let view = Ext.ComponentQuery.query(xtype)[0];
        if (view)
            return view;
        return me.getView();
    },

    encodeJson: function (obj) {
        return Ext.util.JSON.encode(obj);
    },

    reloadGrid: function (xtype) {
        let grid = Ext.ComponentQuery.query(xtype)[0];
        if (grid) {
            let store = grid.getStore();
            if (store) {
                // console.log(store)
                // console.log(store.getData().items);
                store.reload();

            }

        }
    },

    reloadList: function (xtype) {
        list = Ext.ComponentQuery.query('list')[0];
        if (list) {
            let store = list.getStore();
            if (store) {
                // console.log(store)
                // console.log(store.getData().items);
                store.reload();

            }

        }
    },

    reloadStore: function (name) {
        let store = Ext.getStore(name)
        if (store) {
            store.reload()
        } else {
            console.log("store not found")
        }
    },

    getGridSelectedRecord: function (xtype) {
        let grid = Ext.ComponentQuery.query(xtype)[0];
        let record = null;
        if (grid) {
            record = grid.getSelection();
            // console.log(record)
            if (record) {
                return record.data;
            }
        }
        return record;
    },

    saveItem: function (key, val) {
        localStorage.setItem(key, val)
    },

    getItem: function (key) {
        return localStorage.getItem(key);
    },

    removeItem: function (key) {
        localStorage.removeItem(key);
    },

    isBlank: function (str) {
        return (!str || /^\s*$/.test(str));
    },

    renderMoneyColumnBold: function (value) {
        let me = this;
        let money = me.moneyFormatFunc(value);
        return `<b>${money}</b>`;
    },

    loadBankBranches: function (bankId, successCallBack, errorCallBack) {
        let me = this;
        Ext.Ajax.request({
            url: `${MssPhoenix.model.Session.baseUrl}/api/schemes/getBankBranches/${bankId}`,
            success: function (response, opts) {
                let obj = me.decodeJson(response.responseText);
                successCallBack(obj.data)
            },
            failure: function (response, opts) {
                let obj = me.decodeJson(response.responseText);
                errorCallBack(obj)
            }
        })
    },

    urlGet: function (url, successCallBack, errorCallBack) {
        let me = this;
        Ext.Ajax.request({
            url: `${url}`,
            method: 'GET',
            success: function (response, opts) {
                let obj = me.decodeJson(response.responseText);
                successCallBack(obj)
            },
            failure: function (response, opts) {
                try {
                    let obj = me.decodeJson(response.responseText);
                    errorCallBack(obj != null ? obj : {
                        msg: 'Please try again'
                    })
                } catch (e) {
                    errorCallBack({
                        msg: 'Error encountered'
                    });
                }
            }
        })
    },

    urlPost: function (url, params, successCallBack, errorCallBack, contentTpe = 'application/json') {
        let me = this;
        Ext.Ajax.request({
            headers: {
                'Content-Type': contentTpe
            },
            url: `${url}`,
            method: 'POST',
            params: me.encodeJson(params),
            success: function (response, opts) {
                let obj = me.decodeJson(response.responseText);
                successCallBack(obj)
            },
            failure: function (response, opts) {
                try {
                    let obj = me.decodeJson(response.responseText);
                    errorCallBack(obj != null ? obj : {
                        msg: 'Please try again'
                    })
                } catch (e) {
                    errorCallBack({
                        msg: 'Error encountered'
                    });
                }
            }
        })
    },

    getActiveConfig: function () {
        let me = this;
        Ext.Ajax.request({
            url: `${MssPhoenix.model.Session.baseUrl}/api/getSpecificFieldsOfActiveConfigs`,
            success: function (response, opts) {
                let data = Ext.decode(response.responseText);
                if (data.success) {
                    let obj = data.data;
                    me.saveItem('businessName', obj.businessName);
                    me.saveItem('businessImage', obj.businessImage);
                    me.saveItem('currencyName', obj.currencyName);
                    me.saveItem('currencyShortName', obj.currencyShortName);
                    me.saveItem('client', obj.client);

                    me.saveItem('reportServerUrl', obj.reportServerUrl);

                    me.setPage()
                }
            },
            failure: function (response, opts) {
            }
        })
    },

    setPage: function () {
        let me = this,
            title = me.getItem('businessName'),
            logo = me.getItem('logo'),
            logoUrl = null;
        if (title)
            document.title = `${title}`;
        if (logo) {
            logoUrl = `${MssPhoenix.model.Session.fileUploadPath}/FileHandler?file=${logo}`;
            me.changeFavicon(logoUrl)
        }
    },

    changeFavicon: function (link) {
        let $favicon = document.querySelector('link[rel="icon"]')
        // If a <link rel="icon"> element already exists,
        // change its href to the given link.
        if ($favicon !== null) {
            $favicon.href = link
            // Otherwise, create a new element and append it to <head>.
        } else {
            $favicon = document.createElement("link")
            $favicon.rel = "icon"
            $favicon.href = link
            document.head.appendChild($favicon)
        }
    },

    isStkPush: function () {
        let me = this
            , c_c = me.getItem("isStkPush");
        if (typeof c_c === 'undefined' || c_c === null) {
            return false;
        }
        return c_c;
    },

    getCurrencyName: function () {
        let me = this
            , c_c = me.getItem("currencyName");
        if (c_c) {
            return c_c;
        }
        return "Kenya Shilling";
    },

    getDateOfPayment: function () {
        let me = this
            , dateOfPay = me.getItem("dateOfPayValue");
        if (dateOfPay) {
            return dateOfPay;
        }
        return 14;
    },

    getCurrencyShortName: function () {
        let me = this
            , c_c = me.getItem("currencyShortName");
        if (c_c) {
            return c_c;
        }
        return "Ksh";
    },

    canMakeContributions: function () {
        let me = this
            , c_c = me.getItem("isContributions");
        if (c_c) {
            return c_c;
        }
        return false;
    },

    canInitiateExitWithdrawal: function () {
        let me = this
            , c_c = me.getItem("isInitiateClaim");
        if (c_c) {
            return c_c;
        }
        return false;
    },

    canBookBill: function () {
        let me = this,
            bookBill = me.getItem("isBookBill");
        if (bookBill) {
            return bookBill;
        }
        return false;
    },

    canStageContributions: function () {
        let me = this,
            stageContrib = me.getItem("isSendToFm");
        if (stageContrib) {
            return stageContrib;
        }
        return false;
    },

    canAddSingleMember: function () {
        let me = this,
            singleMember = me.getItem("isAddSingleMember");
        if (singleMember) {
            return singleMember;
        }
        return false;
    },

    canAddMemberInBatch: function () {
        let me = this,
            batchMember = me.getItem("isAddBatchMember");
        if (batchMember) {
            return batchMember;
        }
        return false;
    },

    canSponsorApproveDocuments: function () {
        let me = this,
            approveDoc = me.getItem("isApproveDocument");
        if (approveDoc) {
            return approveDoc;
        }
        return false;
    },

    decodeFormSubmitError: function (action) {
        let me = this,
            obj = action.responseText;
        try {
            obj = me.decodeJson(obj);
            return obj.msg;
        } catch (e) {
            return 'Error encountered';
        }
    },

    decodePermissions: function () {
        let me = this,
            perms = me.getItem('perms');
        if (perms)
            return me.decodeJson(perms)
        return null;
    },

    permSetDisplayBlockOrNone: function (permission) {
        return permission === true ? 'block' : 'none'
    },

    //change status color by content color
    formatTicketStatus: function (text, metaData) {
        var newText = text;
        if (text == 'CLOSED') {
            newText = '<span style="color:red">' + text + '</span>';
        }
        if (text == 'OPEN') {
            newText = '<span style="color:green">' + text + '</span>';
        }
        return newText;
    },

    //change status priority by content color
    formatTicketPriority: function (text, metaData) {
        var newText = text;
        if (text == 'HIGH') {
            newText = '<span style="color:red">' + text + '</span>';
        }
        if (text == 'MEDIUM') {
            newText = '<span style="color:blue">' + text + '</span>';
        }
        if (text == 'LOW') {
            newText = '<span style="color:green">' + text + '</span>';
        }
        return newText;
    },

    //change YES or NO by content color
    formatYesOrNoDisplay: function (text, metaData) {
        var newText = text;
        if (text == 'NO' || text == 'No') {
            newText = '<span style="color:red">' + text + '</span>';
        }
        if (text == 'YES' || text == 'Yes') {
            newText = '<span style="color:green">' + text + '</span>';
        }
        return newText;
    },

    formatTrueOrFalseDisplay: function (text, metaData) {
        var newText = text;
        if (text == false) {
            newText = '<span style="color:red">' + "No" + '</span>';
        }
        if (text == true) {
            newText = '<span style="color:green">' + "Yes" + '</span>';
        }
        return newText;
    },

    //add extra info to ticket replies
    formatTicketReplies: function (text, metaData) {
        let styleCss = '<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">';
        return styleCss + '<span class="w3-badge w3-green">' + text + '</span>' + ' New replies';
    },

    //change pensioner ceo status by content color
    formatCertificateStatus: function (text, metaData) {
        var newText = text;
        if (text == 'PENDING OVERDUE') {
            newText = '<span style="color:red"><b>' + newText + '</b></span>';
        }
        if (text == 'PENDING') {
            newText = '<span style="color:green"><b>' + newText + '</b></span>';
        }
        return newText;
    },

    //change deductions content color
    formatDeductions: function (text, metaData) {
        let me = this;
        var newText = me.moneyFormatFunc(text);
        newText = '<span style="color:red"><b> (' + newText + ') </b></span>';
        return newText;
    },

    //change deductions content color
    formatMoneyBlue: function (text, metaData) {
        let me = this;
        var newText = me.moneyFormatFunc(text);
        newText = '<span style="color:blue"><b>' + newText + '</b></span>';
        return newText;
    },

    //change deductions content color
    formatMoneyGreen: function (text, metaData) {
        let me = this;
        var newText = me.moneyFormatFunc(text);
        newText = '<span style="color:green"><b>' + newText + '</b></span>';
        return newText;
    },

    //change deductions content color
    formatMoneyRed: function (text, metaData) {
        let me = this;
        var newText = me.moneyFormatFunc(text);
        newText = '<span style="color:red"><b>' + newText + '</b></span>';
        return newText;
    },

    //change deductions content color
    formatPensionerCoeStatus: function (text, metaData) {
        var me = this;
        var newtext = text.substring(0, 1);
        if (parseInt(newtext) <= 10) {
            newtext = '<span style="color:red"><b>' + text + '</b></span>';
        } else {
            newtext = '<span style="color:red"><b>' + text + '</b></span>';
        }
        return newtext;
    },

    //change pensioner deduction end date content
    formatPensionerDeductionEndDate: function (text, metaData) {
        var me = this;
        var newtext = text;
        if (text == "") {
            newtext = "<b> - </b>";
        }
        return newtext;
    },

    //format textfield input data to money formant
    textFieldTextChanged: function (v, newValue, oldValue, eOpts) {
        let me = this;
        if (newValue == me.moneyFormatFunc(oldValue)) {
            return;
        }
        // console.log(newValue +' '+oldValue);
        v.setValue(
            me.moneyFormatFunc(newValue)
        )
    },

    removeCommas: function (num) {
        num += ''; //set it to string
        return num.replaceAll(",", '');
    },

    formatBeneficiaryGrid: function (text, metaData) {
        var me = this;
        var newtext = text;
        if (text === 'NOT YET APPROVED') {
            newtext = '<span style="color:red"><b>' + text + '</b></span>';
        }
        return newtext;
    },

    truncateDecimals: function (value) {
        return Math.trunc(value);
    },

    format_no: function (yourNumber) {
        if (typeof yourNumber != 'undefined') {
            //Seperates the components of the number
            let n = yourNumber.toString().split(".");
            //Comma-fies the first part
            n[0] = n[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            //Combines the two sections
            return n.join(".");
        }
        return yourNumber;
    },

    precisionRoundToDP: function (number, precision) {
        return parseFloat(number).toFixed(precision);
    },

    firstTimeChangePwd: function (callBack = null) {
        let me = this,
            isChanged = me.getItem('flg_firstTime');
        if (isChanged && (isChanged === true)) {
            if (callBack != null)
                callBack()
            return;
        }
        if (MssPhoenix.model.Session.checkIsFirstTime()) {
            let me = this,
                isPhone = MssPhoenix.profile.Phone.isPhone();
            let view = Ext.widget(
                isPhone ? 'changepwddialogmobile' : 'changepwddialog'
            );
            let vm = view.getViewModel();
            if (vm) {
                vm.set('userId', MssPhoenix.model.Session.getUserId());
                view.show();
            }
        }
        if (callBack != null)
            callBack()
    },

    displayReport: function (reportUrl, title) {
        let me = this;
        window.open(reportUrl, me.isPhone ? "_blank" : "", "width=1200,height=800,toolbar=no,menubar=no,resizable=yes");
        return;
    },
    
    // displayReport: function (reportUrl, title) {
    //     let win = new MssPhoenix.view.widgets.Window({
    //         extend: 'MssPhoenix.view.widgets.Window',
    //         width: '90%',
    //         height: '90%',
    //         title: title,
    //         layout: "fit",
    //         closable: true,
    //         // loadMask: true,
    //         items: [
    //             {
    //                 height: '100%',
    //                 width: '100%',
    //                 xtype: 'container',
    //                 items: [
    //                     {
    //                         xtype: 'component',
    //                         height: "100%",
    //                         width: '100%',
    //                         html: `<html lang="en"><head><style>body, html :{width: 100%; height: 100%; margin: 0; padding: 0}</style><title></title></head>
    //                                     <body>
    //                                     <iframe src="${reportUrl}" style="width: 100%!important; height: 500px !important;"></iframe>
    //                                     </html>`,
    //                     }

    //                 ]
    //             }
    //         ],

    //     });
    //     win.show();
    // },

    // displayReport: function (reportUrl, title) {
    //     let me=this;
    //     me.saveItem('reportUrl',reportUrl);
    //     console.log(reportUrl);
    //     let win = new MssPhoenix.view.widgets.Window({
    //         extend: 'MssPhoenix.view.widgets.Window',
    //         width: '90%',
    //         height: '90%',
    //         title: title,
    //         layout: "fit",
    //         closable: true,
    //         // loadMask: true,
    //         items: [
    //             {
    //                 height: '100%',
    //                 width: '100%',
    //                 xtype: 'container',
    //                 items: [
    //                     {
    //                         xtype: 'component',
    //                         height: "100%",
    //                         width: '100%',
    //                         html: `<html lang="en"><head><style>body, html :{width: 100%; height: 100%; margin: 0; padding: 0}</style><title></title></head>
    //                                     <body>
    //                                     <iframe src="../report.html" style="width: 100%!important; height: 856px !important;"></iframe>
    //                                     </html>`,
    //                     }
    //                 ]
    //             }
    //         ],

    //     });
    //     win.show();
    // },

    // displayReport: function (reportUrl, title) {
    //     let win = new Ext.onReady(function () {
    //         Ext.widget('panel', {
    //             title: title,
    //             width: 700,
    //             height: 700,
    //             items: {
    //                 xtype: 'component',
    //                 autoEl: {
    //                     tag: 'iframe',
    //                     style: 'height: 100%; width: 100%; border: none;',
    //                     src: `${reportUrl}`
    //                 },
    //                 listeners: {
    //                     load: {
    //                         element: 'el',
    //                         fn: function () {
    //                             this.parent().unmask();
    //                             console.log('done');
    //                         }
    //                     },
    //                     render: function () {
    //                         this.up('panel').body.mask('Loading...');
    //                     }
    //                 }
    //             },
    //             renderTo: Ext.getBody()
    //         });
    //     });
    //     win.show();
    // },

    adminReports: function (reportUrl, title) {
        let win = new MssPhoenix.view.widgets.Window({
            extend: 'MssPhoenix.view.widgets.Window',
            width: '90%',
            height: '90%',
            title: title,
            layout: "fit",
            closable: true,
            items: [
                {
                    height: '100%',
                    width: '100%',
                    xtype: 'container',
                    items: [
                        {
                            xtype: 'component',
                            height: "100%",
                            width: '100%',
                            html: `<html lang="en"><head><style>body, html :{width: 100%; height: 100%; margin: 0; padding: 0}</style><title></title></head>
                                        <body>
                                        <iframe src="${reportUrl}" style="width: 100%!important; height: 500px !important;"></iframe>
                                        </body>
                                        </html>`,
                        }

                    ]
                }
            ],
        });
        win.show();
    },

    getComponentById: function (id) {
        return Ext.ComponentQuery.query(`#${id}`)[0];
    },

    checkNewMessages: function () {
        let me = this;
        // console.log("Called...")
        me.urlGet(`${MssPhoenix.model.Session.baseUrl}/api/getUnreadMessage/${MssPhoenix.model.Session.getUserId()}`,
            function (obj) {
                let data = obj.data;
                if (data) {
                    if (data.length > 0) {
                        me.showToast(`You have <a href="#maininbox" style="color: yellow">${data.length} new messages</a> `, 10000);
                    }
                }
            }, function (err) {

            })
    },

    createTRStore: function (url) {
        return new Ext.data.Store({
            fields: [
                {name: 'id', type: 'int'},
                {name: 'name'},
                {name: 'code'},
                {name: 'description'}
            ],
            proxy: {
                type: 'ajax',
                url: `${url}`,
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                }
            }
        });
    },

    createVillageStore: function (url) {
        return new Ext.data.Store({
            fields: [
                {name: 'id', type: 'int'},
                {name: 'name'},
                {name: 'code'},
                {name: 'description'},
                {name: 'authority'}

            ],
            proxy: {
                type: 'ajax',
                url: `${url}`,
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                }
            }
        });
    },

    createBankBranchStore: function (url) {
        return new Ext.data.Store({
            fields: [
                {name: 'id'},
                {name: 'name'},
                {name: 'code'},
            ],

            proxy: {
                type: 'ajax',
                url: `${url}`,
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                }
            },

            autoLoad: true,
            pageSize: 100,
        });
    }
})
