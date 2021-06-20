Ext.define('MssPhoenix.view.tablet.pensioner.personalinfo.BeneficiaryContoller', {
    extend: 'MssPhoenix.view.tablet.member.base.BaseMemberController',

    alias: 'controller.pensionerbeneficiarycontoller',
    /**
     * Called when the view is created
     */
    init: function () {
    },

    onCancelBtnClick: function () {
        let me = this;
        me.getView().destroy();
    },

    reloadBeneficiaryGrid: function () {
        let me = this;
        me.reloadGrid('pensionerbeneficiarygrid');
    },

    showBeneficiaryAddForm: function (entitlement) {
        let me = this;
        let view = Ext.widget('pensionerbeneficiaryform');
        view.show();
        let vm = view.getViewModel();
        if (vm) {
            vm.set('entitlement', entitlement)
            if (me.getItem('pensionerId')) {
                //Bind Member Number
                vm.set('memberNo', me.getItem('pensionerId'))
            } else {
                // me.loadMemberInformation(function (dt) {
                vm.set('memberNo', `${MssPhoenix.model.Session.getPensionerId()}`);
                // }, function (err) {
                //     me.showToast("Failed to load data", 3000)
                //     view.destroy();
                // })
            }
        }
    },

    onGridSelection: function () {
        //bind idFieldName to beneficiaryId,
        // Bind Member Number
        //bind entitlement to getrecord entitlement
        let me = this,
            data = me.getGridSelectedRecord('pensionerbeneficiarygrid');
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
            let view = Ext.widget('pensionerbeneficiaryform');
            view.show();
            let form = view.lookupReference('pensionerbeneficiaryform');

            me.maskView(view, "please wait...")
            me.urlGet(
                `${MssPhoenix.model.Session.baseUrl}/api/checkIfCanAddBeneficiaries/${MssPhoenix.model.Session.getUserId()}/${MssPhoenix.model.Session.getPensionerId()}`,
                function (obj) {
                    me.unMaskView(view)
                    let sumEntitlement = parseInt(params.benLumpsumEntitlement);
                    if (obj.canAdd) {
                        sumEntitlement += parseInt(obj.entitlement);
                    }
                    if (form) {
                        let vm = view.getViewModel();
                        if (vm) {
                            vm.set('idFieldName', 'beneficiaryId');
                            vm.set('entitlement', sumEntitlement);
                            vm.set('idFieldNameVal', data.id);
                            form.setValues(params)
                        }
                    }
                }, function (err) {
                    me.unMaskView(view)
                    me.showAlert('Sorry', "Please try again");
                }
            )
        }
    },

    saveBeneficiary: function () {
        let me = this,
            view = me.getView(),
            form = view.lookupReference('pensionerbeneficiaryform');
        let fields = form.getFields();

        let formData = form.getValues();

        formData.benDob = (fields.benDob).getInputValue();
        formData.benDateOfAppointment = (fields.benDateOfAppointment).getInputValue();

        if (form && form.validate()) {
            // console.log(form.getSubmitValues())
            me.maskView(view, "Please wait...")
            Ext.Ajax.request({
                headers: {
                    'Content-Type': 'application/json'
                },
                url: `${MssPhoenix.model.Session.baseUrl}/api/addBeneficiary/${MssPhoenix.model.Session.getUserId()}`,
                method: 'POST',
                params: Ext.util.JSON.encode(formData),
                success: function (response, opts) {
                    me.unMaskView(view)
                    form.reset();
                    view.destroy();
                    let obj = Ext.util.JSON.decode(response.responseText);
                    me.showAlert("Response", obj.msg)
                },
                failure: function (response, opts) {
                    me.unMaskView(view)
                    me.showToast("Failed, please try again", 3000)
                }
            })
            return;
        }
        me.showToast("Provide all fields")
    },

    checkAddBeneficiaryEligibility: function () {
        let me = this;
        let view = me.getView();
        me.maskView(view, "please wait...")
        Ext.Ajax.request({
            url: `${MssPhoenix.model.Session.baseUrl}/api/checkIfCanAddBeneficiaries/${MssPhoenix.model.Session.getUserId()}/${MssPhoenix.model.Session.getPensionerId()}`,
            success: function (response, opts) {
                let obj = Ext.util.JSON.decode(response.responseText);
                me.unMaskView(view)
                if (obj.data.canAdd) {
                    me.showBeneficiaryAddForm(obj.data.entitlement);
                } else {
                    me.showAlert('Hello', 'Total lumpsum of 100% has been reached, please review and try again');
                }
            },
            error: function (response, opts) {
                me.unMaskView(view)
                me.showToast("Please try again", 3000);
            }
        })
    },

    getBankBranches: function (view, newValue, oldValue, eOpts) {
        let me = this;
        me.saveItem('bankBranch', newValue);
        let bankBranchesStore = Ext.getStore('bankbranches');
        if (bankBranchesStore) {
            bankBranchesStore.getProxy().url = `${MssPhoenix.model.Session.baseUrl}/api/schemes/getBankBranches/${newValue}`;
        }
    },

});