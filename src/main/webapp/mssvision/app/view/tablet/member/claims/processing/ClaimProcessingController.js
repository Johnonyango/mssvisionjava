Ext.define('MssPhoenix.view.tablet.member.claims.processing.ClaimProcessingController', {
    extend: 'MssPhoenix.view.tablet.member.claims.InitaitePreExitWithdrawalController',
    alias: 'controller.memberclaimprocessingcontroller',

    /**
     * Called when the view is created
     * 0.    Check if documents missing
     * 1.    Personal Details
     * 2.    Ground Of benefits
     * 3.    Documents
     * 4.    Payment Options
     * 5.    Vesting and Liabilities
     * 6.    Bank Details
     */

    isPhone: false,
    client: null,
    isETL: false,
    init: function () {
        let me = this;
        me.isPhone = MssPhoenix.profile.Phone.isPhone();
        me.client = MssPhoenix.model.Session.getMssClient();
        me.isETL = me.client === "ETL";
    },

    showStepOneForm: function () {
        let me = this;
        me.removeItem('reqId');
        me.removeItem('DOCS_UPLOADED');

        let view = me.getView();

        me.showStep_One_Form();

        /**
         * Check documents
         */
        // me.checkDocuments(view, function (dt) {
        //     if (dt.upload) {  //Fix remove !
        //         me.showStepThreeForm();
        //     } else {
        //         me.showStep_One_Form();
        //     }
        // }, function (err) {
        //     me.showToast("Please try again");
        // })
    },

    showMissingDocs: function () {
        let me = this;
        me.getView().destroy();
        me.redirectTo('memberdocuments');
    },

    setWidthHeightPhone: function (vm) {
        if (vm) {
            vm.set('width', '90%');
            vm.set('height', '90%');
        }
    },

    //Personal Details
    showStep_One_Form: function () {
        let me = this;
        me.getView().destroy();
        let winContainer = Ext.widget('memberclaimpersonaldetails'),
            vm = winContainer.getViewModel();
        if (me.isPhone) {
            me.setWidthHeightPhone(vm)
        }
        winContainer.show();
        me.maskView(winContainer, 'Please wait...');
        me.loadMemberInformation(function (data) {
            me.saveItem('mbshipStatus', data.mbshipStatus);
            if (vm) {
                vm.set('memberName', `${data.firstname} ${data.surname}`);
                vm.set('memberNo', data.memberNo);
                vm.set('dob', data.dob);
                vm.set('memberEmail', data.email);
                vm.set('schemeId', data.schemeId);
                vm.set('sponsorId', data.costCenterId);
            }
            me.unMaskView(winContainer)
        }, function (res) {
            me.showToast("Please try again")
            me.unMaskView(winContainer)
        });
    },

    validateStepOne: function () {
        let me = this;
        let view = me.getView();
        let form = view.lookupReference('memberclaimpersonaldetailsForm');
        if (form && form.validate()) {
            let reqId = me.getItem("reqId")
            // if (typeof reqId === 'undefined' || reqId === null) {
            // console.log(reqId)
            if (reqId) {
                me.showStepTwoForm()
                return;
            }
            me.saveStepOne(view, form);
            return;
        }
        me.showToast('Fix form errors and try again');
    },

    saveStepOne: function (view, form) {
        let me = this,
            mbshipStatus = me.getItem('mbshipStatus');
        if (mbshipStatus && mbshipStatus === 'ACTIVE') {
            form.mask('please wait...');
            form.submit({
                clientValidation: true,
                withCredentials: false,
                url: `${MssPhoenix.model.Session.baseUrl}/api/benefitRequest/savePersonalDetails/${MssPhoenix.model.Session.getUserId()}/${MssPhoenix.model.Session.getMemberId()}`,
                success: function (form, action) {
                    form.unmask()
                    if (action.success) {
                        me.saveItem('reqId', action.data)
                        me.showStepTwoForm()
                    } else {
                        me.showToast("Failed, please try again", 3000)
                    }
                },
                failure: function (form, action) {
                    form.unmask()
                    me.showAlert('Sorry', me.decodeFormSubmitError(action))
                },
            });
        } else {
            me.showAlert('Sorry', 'Your are not an ACTIVE member')
        }
    },

    //Ground Of benefits
    showStepTwoForm: function () {
        let me = this;
        me.getView().destroy();
        let winContainer = Ext.widget('membergroundofbenefits'),
            vm = winContainer.getViewModel();
        if (me.isPhone) {
            me.setWidthHeightPhone(vm)
        }
        winContainer.show();
    },

    validateStepTwo: function () {
        let me = this;
        let view = me.getView();
        let form = view.lookupReference('membergroundofbenefitsForm');
        if (form && form.validate()) {
            me.saveStepTwo(form)
            return;
        }
        me.showToast('Fix form errors and try again');
    },

    saveStepTwo: function (form) {
        let me = this;
        let fields = form.getFields();
        let value = (fields.benefitReason).getValue();
        let inputValue = (fields.benefitReason).getInputValue();
        if (me.isBlank(inputValue)) {
            return;
        }
        let params = {
            'id': me.getItem("reqId"),
            'reasonId': value,
            'reason': inputValue
        }
        // console.log(params)
        let memberId = MssPhoenix.model.Session.getMemberId(),
            userId = MssPhoenix.model.Session.getUserId(),
            endPoint = `${MssPhoenix.model.Session.baseUrl}/api/benefitRequest/saveGroundOfBenefits/${userId}/${memberId}`;
        form.mask("please wait")
        Ext.Ajax.request({
                headers: {
                    'Content-Type': 'application/json'
                },
                url: endPoint,
                method: 'POST',
                params: Ext.util.JSON.encode(params),
                success: function (response, opts) {
                    form.unmask()

                    let obj = me.decodeJson(response.responseText),
                        responseData = obj.data;
                    me.performReasonOfExitSurgery(responseData);
                    // if (obj.isMedical){
                    //     me.showMedicalAndIllHealthWin();
                    //     return;
                    // }
                    // me.showStepFourForm();
                    // me.checkDocuments(form,function (dt) {
                    //     if(dt.upload){
                    //         me.showStepThreeForm();
                    //     }else {
                    //         me.showStepFourForm();
                    //     }
                    // },function (err) {
                    //     me.showToast("Failed, please try again", 3000)
                    // });
                },
                failure: function (response, opts) {
                    form.unmask()
                    let obj = me.decodeJson(response.responseText);
                    me.showAlert('Hello', obj.msg);
                }
            }
        );
    },

    performReasonOfExitSurgery: function (responseData) {
        let me = this,
            reason = responseData.reason;

        // console.log(responseData)

        if (me.isETL) {
            me.saveItem('nextFunction', 'showStepFourForm')
            if (!responseData.uploadFiles) {
                me.showStepFourForm();
                return;
            }
            let content = responseData.docs;
            me.showDocumentsWin(content)
            return;
        }

        if (responseData.isMedical) {
            me.saveItem('nextFunction', 'showMedicalAndIllHealthWin')
            if (!responseData.uploadFiles) {
                me.showMedicalAndIllHealthWin();
                return;
            }
            let content = responseData.docs;
            me.showDocumentsWin(content)
            return;
        }


        // if (reason === "Pre-Exit") {
        //     me.showStepFourForm();
        //     return;
        // }

        me.saveItem('nextFunction', 'finishSavingBenefitRequest')
        if (!responseData.uploadFiles) {
            me.finishSavingBenefitRequest();
            return;
        }
        let content = responseData.docs;
        me.showDocumentsWin(content);

        // switch (reason) {
        //     case 'medical': {
        //
        //         break;
        //     }
        //     // case 'Normal Retirement': {
        //     //     //retirement age already checked
        //     //     // me.showStepFourForm();
        //     //     me.finishSavingBenefitRequest();
        //     //     break;
        //     // }
        //     // case 'Early Retirement': {
        //     //     // me.saveItem('nextFunction', 'showStepFourForm')
        //     //     me.saveItem('nextFunction', 'finishSavingBenefitRequest')
        //     //     if (!responseData.uploadFiles) {
        //     //         // me.showStepFourForm();
        //     //         me.finishSavingBenefitRequest();
        //     //         return;
        //     //     }
        //     //     let content = responseData.docs;
        //     //     me.showDocumentsWin(content)
        //     //     break;
        //     // }
        //     // case 'Withdraw': {
        //     //     // me.saveItem('nextFunction', 'showStepFourForm')
        //     //     me.saveItem('nextFunction', 'finishSavingBenefitRequest')
        //     //     if (!responseData.uploadFiles) {
        //     //         // me.showStepFourForm();
        //     //         me.finishSavingBenefitRequest();
        //     //         return;
        //     //     }
        //     //     let content = responseData.docs;
        //     //     me.showDocumentsWin(content)
        //     //     break;
        //     // }
        //     // case 'Transfer': {
        //     //     me.saveItem('nextFunction', 'finishSavingBenefitRequest')
        //     //     if (!responseData.uploadFiles) {
        //     //         me.finishSavingBenefitRequest();
        //     //         return;
        //     //     }
        //     //     let content = responseData.docs;
        //     //     me.showDocumentsWin(content);
        //     //     break;
        //     // }
        //     case 'Pre-Exit': {
        //         break;
        //     }
        //     default:
        //
        //         break;
        // }
    },

    saveMedicalAndIllReasons: function () {
        let me = this,
            view = me.getView(),
            form = view.lookupReference('medicalandillhealthform');
        // console.log(params)
        if (form && form.validate()) {
            form.mask("please wait")
            let fields = form.getFields();
            let medicalIssue = (fields.medicalIssue).getValue();
            let medicalExplanation = (fields.medicalExplanation).getInputValue();
            let params = {
                'id': me.getItem("reqId"),
                'medicalIssue': medicalIssue,
                'medicalExplanation': medicalExplanation
            }
            me.urlPost(
                `${MssPhoenix.model.Session.baseUrl}/api/benefitRequest/saveMedicalReasons/${MssPhoenix.model.Session.getUserId()}`,
                params,
                function (obj) {
                    form.unmask()
                    // me.showStepFourForm();
                    me.finishSavingBenefitRequest();
                },
                function (err) {
                    form.unmask()
                    me.showAlert('Hello', err.msg);
                }
            );
        }
    },

    finishSavingBenefitRequest: function () {
        let me = this,
            view = me.getView(),
            reqId = me.getItem("reqId");
        me.maskView(view, "please wait")
        let url;
        if (MssPhoenix.model.Session.getUserRole() === "PRINCIPAL OFFICER") {
            url = `${MssPhoenix.model.Session.baseUrl}/api/benefitRequest/finishSavingBenefitRequestPo/${MssPhoenix.model.Session.getUserId()}/${reqId}`
        } else {
            url = `${MssPhoenix.model.Session.baseUrl}/api/benefitRequest/finishSavingBenefitRequest/${MssPhoenix.model.Session.getUserId()}/${reqId}`
        }
        me.urlGet(url, function (obj) {
            me.unMaskView(view)
            me.removeItem('reqId');
            let msg;
            if (MssPhoenix.model.Session.getUserRole() === "MEMBER") {
                msg = 'Claim has been initiated. Once is approved by the employer you will get a notification'
            } else {
                msg = 'Claim initiated successfully'
            }
            view.destroy();
            me.showAlert('Response', msg);
            let store = Ext.getStore('memberclaims');
            if (store) {
                store.reload();
            }
        }, function (err) {
            me.unMaskView(view)
            me.showToast("Failed, please try again", 3000)
        })
    },

    documentsBtnClick: function () {
        let me = this,
            DOCS_UPLOADED = me.getItem("DOCS_UPLOADED");
        if (DOCS_UPLOADED === "true" && me.afterDocsCallback != null) {
            me.afterDocsCallback();
            return;
        }
        me.showAlert("Sorry", "Kindly upload documents");
    },

    afterDocsCallback: function () {
        let me = this,
            nextFunction = me.getItem('nextFunction');

        switch (nextFunction) {
            case 'showMedicalAndIllHealthWin':
                me.showMedicalAndIllHealthWin()
                break;
            case 'showStepFourForm':
                me.showStepFourForm();
                break;
            case 'finishSavingBenefitRequest':
                me.finishSavingBenefitRequest();
                break
            default:
        }
    },

    //Documents
    showDocumentsWin: function (content) {
        let me = this;
        me.getView().destroy();
        // let view = Ext.widget(me.isPhone ? 'memberphone-claimdocuments' : 'memberclaimdocuments');
        let view = Ext.widget('memberclaimdocuments'),
            vm = view.getViewModel();
        if (me.isPhone) {
            me.setWidthHeightPhone(vm)
        }
        if (vm) {
            vm.set('userId', MssPhoenix.model.Session.getUserId())
            vm.set('reqId', me.getItem('reqId'))
            vm.set('content', content)
        }
        view.show();
    },

    checkDocuments: function (view, successCallBack, errorCallBack) {
        let me = this;
        view.mask('Checking documents...');
        Ext.Ajax.request({
                headers: {
                    'Content-Type': 'application/json'
                },
                url: `${MssPhoenix.model.Session.baseUrl}/api/checkSubmittedDocuments/${MssPhoenix.model.Session.getUserId()}/${MssPhoenix.model.Session.getMemberId()}`,
                success: function (response, opts) {
                    view.unmask()
                    let obj = Ext.decode(response.responseText);
                    // console.log(obj)
                    successCallBack(obj.data)
                },
                failure: function (response, opts) {
                    view.unmask()
                    let obj = Ext.decode(response.responseText);
                    errorCallBack(obj.data)
                }
            }
        );
    },

    documentsWindowUploadDocs: function () {
        let me = this,
            view = me.getView(),
            form = Ext.ComponentQuery.query('#memberclaimdocumentsform')[0];

        // let endpoint=`${MssPhoenix.model.Session.fileUploadPath}/FileHandler`;
        let endpoint = `${MssPhoenix.model.Session.baseUrl}/api/benefitRequest/uploadClaimDocuments/${MssPhoenix.model.Session.getUserId()}`;
        if (form && form.validate()) {
            me.maskView(view, "Submitting...")
            form.submit({
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Access-Control-Allow-Origin': '*'
                },
                url: endpoint,
                method: 'POST',
                cors: true,
                useDefaultXhrHeader: false,
                success: function (form, action) {
                    me.unMaskView(view);
                    me.saveItem("DOCS_UPLOADED", "true");
                    me.showAlert('Success', 'File(s) uploaded successfully');
                    form.reset();
                    // me.updateSetDocumentsUploaded(function () {
                    //     me.unMaskView(view);
                    //     me.showAlert('Success', 'File(s) uploaded successfully');
                    //     form.reset();
                    // })
                },
                failure: function (form, action) {
                    me.unMaskView(view);
                    me.showAlert('Sorry', me.decodeFormSubmitError(action));
                    // me.updateSetDocumentsUploaded(function () {
                    //     me.unMaskView(view);
                    //     //File was uploaded but error due to CORS
                    //     me.showAlert('Success', 'File(s) uploaded successfully');
                    //     form.reset();
                    // })
                }
            })
            return;
        }
        me.showToast('Select file to upload');
    },

    updateSetDocumentsUploaded: function (callBack) {
        let me = this,
            reqId = me.getItem("reqId"),
            mssUserId = MssPhoenix.model.Session.getUserId();

        Ext.Ajax.request({
            url: `${MssPhoenix.model.Session.baseUrl}/api/benefitRequest/updateSetDocumentsUploaded/${mssUserId}/${reqId}`,
            success: function (response, opts) {
                me.saveItem("DOCS_UPLOADED", "true");
                callBack()
            },
            failure: function (response, opts) {
                me.showToast("Please try again");
            }
        })
    },

    showMedicalAndIllHealthWin: function () {
        let me = this;
        me.getView().destroy();
        // Ext.widget(me.isPhone ? 'memberphone-medicalandillhealth' : 'medicalandillhealth').show();
        let view = Ext.widget('medicalandillhealth'),
            vm = view.getViewModel();
        if (me.isPhone) {
            me.setWidthHeightPhone(vm)
        }
        view.show();
    },

    showStepThreeForm: function () {
        let me = this;
        me.getView().destroy();
        // Ext.widget(me.isPhone ? 'memberphone-claimdocuments' : 'memberclaimdocuments').show();
        let view = Ext.widget('memberclaimdocuments'),
            vm = view.getViewModel();
        if (me.isPhone) {
            me.setWidthHeightPhone(vm)
        }
        view.show();
    },

    //Payment Options
    showStepFourForm: function () {
        let me = this;
        me.getView().destroy();
        let view = Ext.widget('memberclaimpayments'),
            vm = view.getViewModel();
        if (me.isPhone) {
            me.setWidthHeightPhone(vm)
        }
        view.show();
        me.loadSummary(view, function (dt) {
            // let vm = view.getViewModel();
            if (vm) {
                vm.set('currentCreditFund', dt.totalBenefits);
            }
        }, function (err) {
            me.showToast("Failed to load balances", 3000);
        })
    },

    validateStepFour: function () {
        let me = this;
        let view = me.getView();
        let form = view.lookupReference('memberclaimpaymentsform');
        if (form && form.validate()) {
            let fields = form.getFields();
            let paymentOption = (fields.paymentOption).getValue();
            let currentCreditFund = (fields.currentCreditFund).getInputValue();
            currentCreditFund = me.removeCommas(currentCreditFund);
            // console.log(currentCreditFund)
            let amountRequested = (fields.amountRequested).getInputValue();
            if (paymentOption === "amountPercentage") {
                if (parseFloat(amountRequested) > 100) {
                    me.showToast("Requested percentage is invalid");
                    return;
                }
            } else if (parseFloat(amountRequested) > parseFloat(currentCreditFund)) {
                me.showToast('Enter correct amount');
                return;
            }
            let params = {
                "id": me.getItem("reqId"),
                "paymentOption": paymentOption,
                "currentCreditFund": (parseFloat(currentCreditFund)),
                "amountRequested": parseFloat(amountRequested),
            };
            me.maskView(view, 'Please wait...');
            Ext.Ajax.request({
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    url: `${MssPhoenix.model.Session.baseUrl}/api/benefitRequest/savePaymentOptions/${MssPhoenix.model.Session.getUserId()}`,
                    method: 'POST',
                    params: Ext.util.JSON.encode(params),
                    success: function (response, opts) {
                        me.unMaskView(view)
                        // if (me.isETL)
                        //     me.showStepFiveForm();
                        // else
                        me.showStepSixForm();
                    },
                    failure: function (response, opts) {
                        me.unMaskView(view)
                        me.showToast("Failed, please try again", 3000)
                    }
                }
            );
            return;
        }
        me.showToast('Fix form errors and try again');
    },

    //Vesting and Liabilities
    showStepFiveForm: function () {
        let me = this;
        me.getView().destroy();
        let view = Ext.widget('memberclaimvestingandliabilities'),
            vm = view.getViewModel();
        if (me.isPhone) {
            me.setWidthHeightPhone(vm)
        }
        view.show();
        me.maskView(view, "Please wait...");

        let reqId = me.getItem("reqId");
        Ext.Ajax.request({
            url: `${MssPhoenix.model.Session.baseUrl}/api/benefitRequest/checkVestingLiabilities/${MssPhoenix.model.Session.getUserId()}/${reqId}`,
            success: function (response, opts) {
                me.unMaskView(view);
                // let vm = view.getViewModel();
                let obj = me.decodeJson(response.responseText);
                if (obj && obj.success) {
                    let data = me.decodeJson(obj.data);
                    if (data && data.success) {
                        let row = data.rows[0];
                        if (vm) {
                            let erPercent = row.erPercent;
                            let loanBalance = me.moneyFormatFunc(row.loanBalance);
                            vm.set('nxtBtnDisplay', 'block')
                            vm.set('htmlText', `<h4>Employer Percent    :   <span style="color:#f27f00"><b>${erPercent}</b></span></h4>
                <h4>Loan Balance    :   <span style="color:#f27f00"><b>${loanBalance}</b></span></h4>`);
                            return;
                        }
                    }
                    me.showAlert('Response', 'Unable to check vesting and liabilities');
                } else {
                    vm.set('htmlText', `<h4>Please try again</h4>`);
                }
            },
            failure: function (response, opts) {
                me.unMaskView(view);
                me.showToast("Please try again");
            },
        });
    },

    //Bank Details
    showStepSixForm: function () {
        let me = this;
        me.getView().destroy();
        let view = Ext.widget('memberclaimbankdetails'),
            vm = view.getViewModel();
        if (me.isPhone) {
            me.setWidthHeightPhone(vm)
        }
        view.show();

        me.maskView(view, "loading...");
        Ext.Ajax.request({
            url: `${MssPhoenix.model.Session.baseUrl}/api/getMemberBankDetails/${MssPhoenix.model.Session.getUserId()}/${MssPhoenix.model.Session.getMemberId()}`,
            success: function (response, opts) {
                me.unMaskView(view);
                let obj = me.decodeJson(response.responseText);
                if (obj && obj.success) {
                    // let vm = view.getViewModel();
                    if (vm) {
                        vm.set('bankName', obj.data.bankName)
                        vm.set('bankBranch', obj.data.bankBranch)
                        vm.set('accountName', obj.data.accountName)
                        vm.set('accountNumber', obj.data.accountNumber)
                    }
                }
            },
            failure: function (response, opts) {
                me.unMaskView(view)
                me.showToast("Failed to load bank details", 3000)
            }
        })
    },

    //DONE
    finish: function () {
        let me = this;
        let view = me.getView();
        let form = view.lookupReference('memberclaimbankdetailsform');
        if (form && form.validate()) {
            let fields = form.getFields();
            let params = {
                "id": me.getItem("reqId"),
                "bankName": (fields.bankName).getInputValue(),
                "bankBranch": (fields.bankBranch).getInputValue(),
                "accountName": (fields.accountName).getInputValue(),
                "accountNumber": (fields.accountNumber).getInputValue(),
            };
            me.maskView(view, "Please wait...");
            me.urlPost(
                `${MssPhoenix.model.Session.baseUrl}/api/benefitRequest/saveBankDetails/${MssPhoenix.model.Session.getUserId()}`,
                params,
                function (obj) {
                    me.unMaskView(view)
                    me.removeItem('reqId');
                    let msg;
                    if (MssPhoenix.model.Session.getUserRole() === "MEMBER") {
                        msg = 'Claim has been initiated. Once is approved by the employer you will get a notification'
                    } else {
                        msg = 'Claim initiated successfully'
                    }
                    view.destroy();
                    me.showAlert('Response', msg);
                    //reload store
                    let store = Ext.getStore('memberclaims');
                    if (store) {
                        store.reload();
                    }
                },
                function (err) {
                    me.unMaskView(view)
                    me.showToast(err.msg)
                }
            )
            return;
        }
        me.showToast('Fix form errors and try again');
    },

    getBankBranches: function (view, newValue, eOpts) {
        if (newValue) {
            let me = this,
                data = newValue.data,
                url = `${MssPhoenix.model.Session.baseUrl}/api/schemes/getBankBranches/${data.id}`,
                bankBranch = me.getComponentById('bankBranch'),
                bankBranchesStore = me.createBankBranchStore(url);
            if (bankBranchesStore) {
                bankBranch.setStore(bankBranchesStore);
            }
        }
    },

});