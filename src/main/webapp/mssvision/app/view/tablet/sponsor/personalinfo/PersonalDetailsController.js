Ext.define('MssPhoenix.view.tablet.sponsor.personalinfo.PersonalDetailsController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.sponsordetailscontroller',

    
    init: function () {
        let me = this;
        me.loadPersonalInfo()
    },


    loadDataToForm: function (data) {
        let me = this, form;
        if (MssPhoenix.profile.Phone.isPhone()) {
            form = Ext.ComponentQuery.query('sponsorpersonalinfophone')[0];
        } else {
            form = Ext.ComponentQuery.query('sponsorpersonalinfo')[0];
        }
        if (form) {
            form.setValues(data)
        }
        let main = Ext.ComponentQuery.query('main')[0];
        if (main){
            let mainViewModel=main.getViewModel();
            if (mainViewModel){
                mainViewModel.set('sponsorInfo',data)
            }
        }
    },

    loadPersonalInfo: function () {
        let me = this;
        me.getView().mask('Please wait...');
        Ext.Ajax.request({
            url:`${MssPhoenix.model.Session.baseUrl}/api/get-sponsor-details/${MssPhoenix.model.Session.getUserId()}/${MssPhoenix.model.Session.getSponsorId()}`,

            success: function (response, opts) {
                me.getView().unmask();
                let obj = Ext.decode(response.responseText);
                // console.dir(obj.data);
                me.loadDataToForm(obj.data)
            },
            failure: function (response, opts) {
                me.getView().unmask();
                console.log('server-side failure with status code ' + response.status);
            }
        });
    }
});