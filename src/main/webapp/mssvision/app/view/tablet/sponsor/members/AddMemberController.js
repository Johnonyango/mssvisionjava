Ext.define('MssPhoenix.view.tablet.sponsor.members.AddMemberController', {
    extend: 'MssPhoenix.view.tablet.shared.BaseController',
    alias: 'controller.sponsoraddmemberformcontroller',
    /**
     * Called when the view is created
     */
    init: function () {
    },

    onCancelBtnClick: function () {
        let me = this;
        me.getView().destroy();
    },

    submitMemberForm: function () {
        let me = this,
            view = me.getView(),
            form = view.lookupReference('memberaddform');
        if (form && form.validate()) {
            let fields = form.getFields();

            let formData = form.getValues(),
           
            url = `${MssPhoenix.model.Session.baseUrl}/api/savePotentialMember`;
            formData.dateOfBirth = (fields.dateOfBirth).getInputValue();
            // console.log(formData)

            me.maskView(view, 'Saving...')

            me.urlPost(url, formData, function (obj) {
                me.unMaskView(view)
                form.reset()
                me.showAlert("Response", obj.msg)
            }, function (err) {
                me.unMaskView(view)
                me.showAlert("Sorry", err.msg)
            })

        }
    },

    pobDtrSelect: function (combo, newValue, eOpts) {
        if (newValue) {
            let me = this,
                data=newValue.data,
                url = `${MssPhoenix.model.Session.baseUrl}/api/traditionalAuthority/${data.id}`,
                placeOfBirthTAName= me.getComponentById('placeOfBirthTAName'),
                store = me.createTRStore(url);
            if (store) {
                placeOfBirthTAName.setStore(store)
            }
        }
    },

    pobTrSelect: function (combo, newValue, eOpts) {
        if (newValue) {
            let me = this,
                data=newValue.data,
                url = `${MssPhoenix.model.Session.baseUrl}/api/village/${data.id}`,
                villageName= me.getComponentById('villageName'),
                store = me.createVillageStore(url);
            if (store) {
                villageName.setStore(store)
            }
        }
    },

    pmDtrSelect: function (combo, newValue, eOpts) {
        if (newValue) {
            let me = this,
                data=newValue.data,
                url = `${MssPhoenix.model.Session.baseUrl}/api/traditionalAuthority/${data.id}`,
                permanentTAName= me.getComponentById('permanentTAName'),
                store = me.createTRStore(url);
            if (store) {
                permanentTAName.setStore(store)
            }
        }
    },

    pmTrSelect: function (combo, newValue, eOpts) {
        if (newValue) {
            let me = this,
                data=newValue.data,
                url = `${MssPhoenix.model.Session.baseUrl}/api/village/${data.id}`,
                permanentVillageName= me.getComponentById('permanentVillageName'),
                store = me.createVillageStore(url);
            if (store) {
                permanentVillageName.setStore(store)
            }
        }
    },

});