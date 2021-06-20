Ext.define('MssPhoenix.view.tablet.member.personalinfo.BeneficiaryContoller', {
    extend: 'MssPhoenix.view.tablet.member.base.BaseMemberController',
    alias: 'controller.memberbeneficiarycontoller',
    /**
     * Called when the view is created
     */
    isPhone: false,
    init: function () {
        let me = this;
        me.isPhone = MssPhoenix.profile.Phone.isPhone();
        let viewModel = me.getViewModel();
        viewModel.set('beneficiaryFormConfig', beneficiaryFormConfig)
    },

    onCancelBtnClick: function () {
        let me = this;
        me.getView().destroy();
    },

    reloadBeneficiaryGrid: function () {
        let me = this;
        me.reloadGrid(me.isPhone ? 'memberphone-beneficiarygrid' : 'memberbeneficiarygrid');
        let st = Ext.getStore('memberbeneficiarychart');
        if (st)
            st.reload()
    },

    showBeneficiaryAddForm: function (entitlement) {
        let me = this,
            view = me.isPhone ? Ext.widget('memberphone-beneficiaryform')
                : Ext.widget('memberbeneficiaryform');

        view.show();
        let vm = view.getViewModel(),
            form = view.lookupReference('memberbeneficiaryform');
        if (vm) {
            vm.set('entitlement', entitlement)
            vm.set('benMemberId', MssPhoenix.model.Session.getMemberId())
            vm.set('memberEmail', MssPhoenix.model.Session.getUserEmail())
            form.setValues({
                'benLumpsumEntitlement': entitlement
            })
            if (me.getItem('memberNo')) {
                //Bind Member Number
                vm.set('memberNo', me.getItem('memberNo'))
            } else {
                me.loadMemberInformation(function (dt) {
                    vm.set('memberNo', dt.memberNo)
                }, function (err) {
                    me.showToast("Failed to load data", 3000)
                    view.destroy();
                })
            }
        }
    },

    onGridSelection: function () {
        //bind idFieldName to beneficiaryId,
        // Bind Member Number
        //bind entitlement to getrecord entitlement
        let me = this,
            win = me.getView();
        me.maskView(win, "wait...")
        let data = me.getGridSelectedRecord(me.isPhone ? 'memberphone-beneficiarygrid' : 'memberbeneficiarygrid');
        if (data) {
            // console.log(data)
            let params = {
                "beneficiaryId": data.id,
                "benMemberId": data.memberId,
                "benRelationshipType": data.relationship,
                "memberNo": data.memberNo,
                "benRelationShipCategory": data.category,
                "benSurname": data.surname,
                "benFirstname": data.firstname,
                "benOthernames": data.othernames,
                "benDob": data.dobFormatted,
                "age": data.age,
                "benGender": data.gender,
                "benMonthlyEntitlement": data.monthlyEntitlement,
                "benLumpsumEntitlement": data.lumpsumEntitlement,
                "benAddressPostalAddress": data.address,
                "benMaritalStatus": data.mstatus,
                "legibilityStatus": data.status,
                "benMaidenName": data.maidenName,
                "benIdNo": data.idNo,
                "benNationality": data.nationality,
                "benCellPhone": data.cellPhone,
                "benDateOfAppointment": data.dateOfAppointmentFormatted,
                "placeOfBirthDistrictId": data.placeOfBirth,
                "placeOfBirthTAId": data.placeOfBirthTraditionalAuthority,
                "placeOfBirthVillageId": data.placeOfBirthVillage,
                "permanentDistrictId": data.permanentPlaceOfBirth,
                "permanentTAId": data.permanentTraditionalAuthority,
                "permanentVillageId": data.permanentVillage,
                "bankName": data.bankName,
                "benBankBranchId": data.bankBranch,
                "benAccountName": data.accName,
                "benAccountNo": data.accnumber,
            };
            let view = me.isPhone ? Ext.widget('memberphone-beneficiaryform')
                : Ext.widget('memberbeneficiaryform');
            view.show();
            let form = view.lookupReference('memberbeneficiaryform');
            me.maskView(view, "please wait...")
            me.memberCheckIfCanAddBeneficiaries(function (obj) {
                me.unMaskView(view)
                if (obj != null) {
                    let sumEntitlement = parseInt(params.benLumpsumEntitlement);
                    if (obj.canAdd) {
                        sumEntitlement += parseInt(obj.entitlement);
                    }
                    console.log(sumEntitlement)
                    if (form) {
                        let vm = view.getViewModel();
                        if (vm) {
                            vm.set('idFieldName', 'beneficiaryId');
                            vm.set('entitlement', sumEntitlement);
                            vm.set('idFieldNameVal', data.id);
                            form.setValues(params)
                        }
                    }
                } else {
                    me.showAlert('Sorry', "Please try again");
                }
            })
        }
        me.unMaskView(win)
    },

    saveBeneficiary: function () {
        let me = this,
            view = me.getView(),
            form = view.lookupReference('memberbeneficiaryform');
        let fields = form.getFields();

        let formData = form.getValues();

        formData.benDob = (fields.benDob).getInputValue();
        formData.benDateOfAppointment = (fields.benDob).getInputValue();
        if (form && form.validate()) {
            me.maskView(view, "Please wait...")
            me.urlPost(
                `${MssPhoenix.model.Session.baseUrl}/api/addBeneficiary/${MssPhoenix.model.Session.getUserId()}`,
                formData,
                function (obj) {
                    let recordId = obj.data;
                    if (recordId === -1) {
                        me.unMaskView(view)
                        form.reset();
                        view.destroy();
                        me.showAlert("Response", obj.msg)
                        return;
                    }

                    form.submit({
                        url: `${MssPhoenix.model.Session.baseUrl}/api/uploadBeneficiaryDocuments/${recordId}`,
                        method: 'POST',
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                        success: function (form, action) {
                            me.unMaskView(view)
                            form.reset();
                            view.destroy();
                            me.showAlert("Response", obj.msg)
                        },
                        failure: function (form, action) {
                            me.unMaskView(view)
                            form.reset();
                            view.destroy();
                            me.showAlert("Response", obj.msg)
                        }
                    });
                },
                function (err) {
                    me.unMaskView(view);
                    me.showAlert('Sorry', "Failed, please try again");
                }
            )
            return;
        }
        me.showToast("Provide all fields")
    },

    checkIfCanAddBeneficiaries: function () {
        let me = this;
        let view = me.getView();
        me.maskView(view, "please wait...")
        me.memberCheckIfCanAddBeneficiaries(function (obj) {
            me.unMaskView(view)
            if (obj != null) {
                if (obj.canAdd) {
                    me.showBeneficiaryAddForm(obj.entitlement);
                } else {
                    me.showAlert('Hello', 'Total lumpsum of 100% has been reached, please review and try again');
                }
            } else {
                me.showAlert('Sorry', "Please try again");
            }
        })
    },

    getBankBranches: function (view, newValue, eOpts) {
        if (newValue) {
            let me = this,
                data = newValue.data,
                url = `${MssPhoenix.model.Session.baseUrl}/api/schemes/getBankBranches/${data.id}`,
                benBankBranchId = me.getComponentById('benBankBranchId'),
                bankBranchesStore = me.createBankBranchStore(url);
            if (bankBranchesStore) {
                benBankBranchId.setStore(bankBranchesStore);
            }
        }
    },

    pobDtrSelect: function (combo, newValue, eOpts) {
        if (newValue) {
            let me = this,
                data = newValue.data,
                url = `${MssPhoenix.model.Session.baseUrl}/api/traditionalAuthority/${data.id}`,
                placeOfBirthTAId = me.getComponentById('placeOfBirthTAId'),
                store = me.createTRStore(url)
            if (store) {
                placeOfBirthTAId.setStore(store)
            }
        }
    },

    pobTrSelect: function (combo, newValue, eOpts) {
        if (newValue) {
            let me = this,
                data = newValue.data,
                url = `${MssPhoenix.model.Session.baseUrl}/api/village/${data.id}`,
                placeOfBirthVillageId = me.getComponentById('placeOfBirthVillageId'),
                store = me.createVillageStore(url)

            if (store) {
                placeOfBirthVillageId.setStore(store)
            }
        }
    },

    pmDtrSelect: function (combo, newValue, eOpts) {
        if (newValue) {
            let me = this,
                data = newValue.data,
                url = `${MssPhoenix.model.Session.baseUrl}/api/traditionalAuthority/${data.id}`,
                permanentTAId = me.getComponentById('permanentTAId'),
                store = me.createTRStore(url);
            if (store) {
                permanentTAId.setStore(store)
            }
        }
    },

    pmTrSelect: function (combo, newValue, eOpts) {
        if (newValue) {
            let me = this,
                data = newValue.data,
                url = `${MssPhoenix.model.Session.baseUrl}/api/village/${data.id}`,
                permanentVillageId = me.getComponentById('permanentVillageId'),
                store = me.createVillageStore(url);
            if (store) {
                permanentVillageId.setStore(store)
            }
        }
    },

});