Ext.define('MssPhoenix.view.tablet.member.personalinfo.AllMemberDetailsController', {
    extend: 'MssPhoenix.view.tablet.member.base.BaseMemberController',
    alias: 'controller.allmemberdetailscontroller',

    isPhone: false,

    init: function () {
        let me = this;
        let view = me.getView();
        view.mask("loading...")
        me.loadMemberInformation(function (callBackData) {
            view.unmask()
            let form = view.lookupReference('memberform');
            if (form) {
                form.setValues(callBackData)
            }
        }, function (res) {
            Ext.toast("Please try again")
            view.unmask()
        });
        me.client = MssPhoenix.model.Session.getMssClient();

        let etlClient = me.client === "ETL" ? "block" : "none"
        let otherClients = me.client !== "ETL" ? "block" : "none"


        let viewModel = me.getViewModel();

        viewModel.set('memberFormConfig', memberFormConfig)
        viewModel.set("etlView", etlClient)
        viewModel.set("otherView", otherClients)

        me.isPhone = MssPhoenix.profile.Phone.isPhone();
    },

    submitForm: function () {
        let me = this,
            view = me.getView(),
            form = view.lookupReference('memberform');
        if (form && form.validate()) {
            let fields = form.getFields();
            let formData = form.getValues();
            // formData.dob= (fields.dob).getInputValue();
            formData.placeOfBirthDistrictName = (fields.placeOfBirthDistrictName).getInputValue();
            formData.placeOfBirthTAName = (fields.placeOfBirthTAName).getInputValue();
            formData.villageName = (fields.villageName).getInputValue();
            formData.permanentDistrictName = (fields.permanentDistrictName).getInputValue();
            formData.permanentTAName = (fields.permanentTAName).getInputValue();
            formData.permanentVillageName = (fields.permanentVillageName).getInputValue();
            formData.dateOfAppointment = (fields.dateOfAppointment).getInputValue();
            // formData.dateJoinedScheme= (fields.dateJoinedScheme).getInputValue();

            // console.log(formData)
            me.maskView(view, 'Submitting...')
            let
                memberId = MssPhoenix.model.Session.getMemberId(),
                endpoint = `${MssPhoenix.model.Session.baseUrl}/api/editMemberDetails/${memberId}`;

            me.urlPost(endpoint, formData, function (obj) {
                me.unMaskView(view);
                me.showAlert('Success', 'Sent, awaiting approval by employer');
            }, function (err) {
                me.unMaskView(view);
                me.showAlert('Sorry', err.msg);
            })
            return;
        }
        me.showToast("Provide all required fields")
    },

    pobDtrSelect: function (combo, newValue, eOpts) {
        if (newValue) {
            let me = this,
                data=newValue.data,
                url = `${MssPhoenix.model.Session.baseUrl}/api/traditionalAuthority/${data.id}`,
                placeOfBirthTAName= me.getComponentById('placeOfBirthTAName'),
                traditionalauthoritystore = me.createTRStore(url);
            if (traditionalauthoritystore) {
                placeOfBirthTAName.setStore(traditionalauthoritystore)
            }
        }
    },

    pobTrSelect: function (combo, newValue, eOpts) {
        if (newValue) {
            let me = this,
                data=newValue.data,
                url = `${MssPhoenix.model.Session.baseUrl}/api/village/${data.id}`,
                villageName= me.getComponentById('villageName'),
                villagestore =me.createVillageStore(url);

            if (villagestore) {
                villageName.setStore(villagestore)
            }
        }
    },

    pmDtrSelect: function (combo, newValue, eOpts) {
        if (newValue) {
            let me = this,
                data=newValue.data,
                url = `${MssPhoenix.model.Session.baseUrl}/api/traditionalAuthority/${data.id}`,
                permanentTAName= me.getComponentById('permanentTAName'),
                traditionalauthoritystore = me.createTRStore(url)
            if (traditionalauthoritystore) {
                permanentTAName.setStore(traditionalauthoritystore)
            }
        }
    },

    pmTrSelect: function (combo, newValue, eOpts) {
        if (newValue) {
            let me = this,
                data=newValue.data,
                url = `${MssPhoenix.model.Session.baseUrl}/api/village/${data.id}`,
                permanentVillageName= me.getComponentById('permanentVillageName'),
                villagestore = me.createVillageStore(url);

            if (villagestore) {
                permanentVillageName.setStore(villagestore)
            }
        }
    },

});